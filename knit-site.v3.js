/* Knit Health: site-wide behaviour (all pages)
   - Page transitions (paper veil out, content rises in)
   - External post links (a[data-external])
   - Inner pages only: Lenis smooth scrolling, Home-style navbar (hide on scroll down,
     bar when scrolled, fade at the footer), mobile menu, footer mark + underline reveal.
   Home keeps its own scroll, navbar, menu and footer logic in knit.js. */
(() => {
  const d = document;
  const root = d.documentElement;
  const isHome = !!d.getElementById('hero');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const log = (...a) => console.log('[knit-site]', ...a);

  /* ---------- Focus rings: keyboard only ---------- */
  addEventListener('keydown', (e) => { if (e.key === 'Tab') root.classList.add('is-keyboard'); }, true);
  addEventListener('pointerdown', () => root.classList.remove('is-keyboard'), true);

  /* ---------- External post links ---------- */
  for (const a of d.querySelectorAll('a[data-external]')) {
    const url = a.dataset.external;
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
  }

  /* ---------- Page transitions ---------- */
  const veil = d.createElement('div');
  veil.className = 'page-veil';
  veil.setAttribute('aria-hidden', 'true');
  d.body.append(veil);

  let leaving = false;
  const leave = (href) => {
    if (leaving) return;
    if (reduce.matches) { location.href = href; return; }
    leaving = true;
    root.classList.add('is-leaving');
    setTimeout(() => { location.href = href; }, 350);
  };

  d.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest?.('a[href]');
    if (!a || a.hasAttribute('download')) return;
    if (a.target && a.target !== '_self') return;
    const raw = a.getAttribute('href');
    if (!isHome && raw === '#start') { e.preventDefault(); leave('/'); return; }
    if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.search === location.search) return;
    e.preventDefault();
    leave(url.href);
  });

  addEventListener('pageshow', (e) => {
    if (e.persisted) { leaving = false; root.classList.remove('is-leaving'); }
  });

  if (isHome) return;

  /* ---------- Inner pages ---------- */
  root.classList.add('is-page', 'lines-multi');

  const masthead = d.querySelector('.masthead');
  const footer = d.querySelector('.world__footer');
  const toggle = d.getElementById('menu-toggle');
  const menu = d.getElementById('menu');
  let lenis = null;

  // Navbar scale: same defaults as Home (logo 230, nav 170, CTA 140)
  const sizeNav = () => {
    if (!masthead) return;
    const s = Math.min(1, Math.max(0.72, innerWidth / 2560));
    const small = innerWidth <= 700;
    masthead.style.setProperty('--logo-scale', ((small ? 155 : 230) / 100) * s);
    masthead.style.setProperty('--nav-scale', (170 / 100) * s);
    masthead.style.setProperty('--cta-scale', ((small ? 110 : 140) / 100) * Math.max(0.82, s));
  };

  // Footer layout + underline under the footer line
  const marks = footer ? [...footer.querySelectorAll('.fm')] : [];
  const line = footer?.querySelector('.footer-line');
  let underline = null;
  if (footer && line) {
    underline = d.createElement('div');
    underline.className = 'footer-underline';
    underline.setAttribute('aria-hidden', 'true');
    footer.append(underline);
  }
  const layoutFooter = () => {
    if (!footer) return;
    footer.style.setProperty('--nav', `${masthead?.offsetHeight || 80}px`);
    if (underline && line) {
      const f = footer.getBoundingClientRect();
      const r = d.createRange();
      r.selectNodeContents(line);
      const b = r.getBoundingClientRect();
      underline.style.top = `${(b.bottom - f.top + Math.max(10, (18 * innerWidth) / 1920)).toFixed(1)}px`;
      underline.style.width = `${(b.right - f.left).toFixed(1)}px`;
    }
  };

  // Scroll-linked: navbar state + footer reveal (mirrors Home timings)
  let anchor = 0;
  let away = false;
  const frame = () => {
    const y = lenis ? lenis.scroll : scrollY;
    const vh = innerHeight;

    if (y < vh * 0.15) { away = false; anchor = y; }
    else if (away) { if (y > anchor) anchor = y; else if (y < anchor - 6) { away = false; anchor = y; } }
    else { if (y < anchor) anchor = y; else if (y > anchor + 6) { away = true; anchor = y; } }

    const top = footer ? footer.getBoundingClientRect().top : Infinity;
    const p = clamp((vh - top) / vh); // 0 = footer below the fold, 1 = footer fills the screen
    const fade = clamp((p - 0.4) / 0.35);
    root.classList.toggle('is-end', p > 0.5);

    if (masthead) {
      const menuOpen = root.classList.contains('menu-open');
      masthead.classList.toggle('is-away', away && !menuOpen);
      masthead.classList.toggle('is-gone', fade >= 1 && !menuOpen);
      masthead.classList.toggle('has-bar', y > 8 && fade < 1);
      masthead.style.setProperty('--bar', 'var(--paper)');
      masthead.style.setProperty('--nav-fade', (1 - fade).toFixed(3));
    }

    if (underline) {
      const u = reduce.matches ? 1 : clamp((p - 0.35) / 0.65);
      underline.style.clipPath = `inset(0 ${((1 - u) * 100).toFixed(2)}% 0 0)`;
    }
    const n = marks.length;
    marks.forEach((g, i) => {
      const start = 1 - 0.32 - (n - 1 - i) * 0.04;
      const e = reduce.matches ? 1 : 1 - Math.pow(1 - clamp((p - start) / 0.32), 3);
      g.style.transform = `translateY(${((1 - e) * 245 * 1.25).toFixed(2)}px)`;
    });
  };

  let queued = false;
  const request = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; frame(); });
  };

  const relayout = () => { sizeNav(); layoutFooter(); request(); };
  sizeNav();
  layoutFooter();
  frame();
  addEventListener('resize', relayout, { passive: true });
  addEventListener('scroll', request, { passive: true });
  d.fonts?.ready.then(relayout);
  if (footer && 'ResizeObserver' in window) new ResizeObserver(relayout).observe(footer);

  // Mobile menu
  if (toggle && menu) {
    let open = false;
    const setMenu = (o, focus = true) => {
      if (o === open) return;
      open = o;
      toggle.setAttribute('aria-expanded', String(o));
      toggle.setAttribute('aria-label', o ? 'Close the menu' : 'Open the menu');
      root.classList.toggle('menu-open', o);
      if (o) { lenis?.stop(); if (focus && root.classList.contains('is-keyboard')) menu.querySelector('a')?.focus({ preventScroll: true }); }
      else { lenis?.start(); if (focus && root.classList.contains('is-keyboard')) toggle.focus({ preventScroll: true }); }
      request();
    };
    toggle.addEventListener('click', () => setMenu(!open));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false, false); });
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) { e.preventDefault(); setMenu(false); } });
    matchMedia('(min-width: 1041px)').addEventListener('change', (e) => { if (e.matches) setMenu(false, false); });
  }

  // Smooth scrolling (same Lenis version and feel as Home)
  if (!reduce.matches) {
    const s = d.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/lenis@1.3.27/dist/lenis.min.js';
    s.onload = () => {
      if (!window.Lenis) return;
      lenis = new window.Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
      lenis.on('scroll', request);
      if (root.classList.contains('menu-open')) lenis.stop();
    };
    s.onerror = () => log('Lenis failed to load, using native scroll');
    d.head.append(s);
  }
})();
