// From the Knit Med-BEAM Patient Journey package (his Nov 5 handoff). What still holds from the earlier rounds:
// it measures offsetWidth and offsetHeight, so world.js can scale the chart up on screens wider than 1920;
// element.bleed runs the drawing that many px past the left edge (his 12:39 PM clip: "bleed all the way over here");
// the curves open up with the box (his 12:40 PM clip: "grow vertically taller"); element.palette is the Lines option
// (PALETTES in weave.js) and element.fill the Fill colour; and nothing pops or wipes (Alex, Nov 5: "no fades, no hard
// cuts, just draw in like the hero"): each ribbon grows along its own path with a soft round head.
//
// Nov 6 round (call with Julie + Anshul, doc "Website edits for LP on 11/6"): the old picture, many paths meeting at
// Now, was "the opposite of what BeamBoard does". The strands "are always visions of the future, so they continue
// onwards to the right", and "the important thing is to just have one path leading up to now. Not multiple lines."
// So the chart is flipped, as he sketched it on the call:
//   1. ONE known path comes in from the left edge to the Now node, with a few recorded events on it;
//   2. the possible futures fan out of Now to the right, the same yarn as before, and run off the right edge
//      (element.bleedRight).
// His 1:19 PM clip, on the first build, which went on to a dotted decision that greyed out four of the futures and calmed the
// other three: "this looks good except I'd hide this part and this whole thing, I think we're going to leave that out", "I do
// think the dots though... maybe sprinkle them across some... across the places", "after it does this and the dots are there
// just go ahead and let it scroll". So it ends on the fan, in full colour, with dots along it. The decision is in
// _ref/fb79-nov6-round if it is ever wanted back.
// No words in the chart at all (Julie: "I don't think we should be labeling this ... more conceptual"): the labels, the
// Now pill, the legend and the recommendation card are gone; small dots mark events (Anshul: "little dots that are not
// labeled but still indicate some kind of events"). Not BeamBoard's look: no axes, no numbers. It is our yarn.
//
// Flow round (Emmett, design lead, video review): "These dots, I think they either should be colored or larger or more
// interactive... They look like something's wrong... these look like squids... Not black. They shouldn't look like squid
// eyes." So there is no black in the chart now. A dot on a future takes its ribbon's colour where it sits, deepened so it
// reads on the ribbon; a dot on the known path takes the path's colour; Now is a ring and a centre in the page's accent.
// Each keeps a ring of the page's ground, is a third bigger than before, and grows with a soft halo under the pointer.
// A page that wants one accent sets --journey-dot on the element and every dot takes it. And "this also shouldn't be stub
// showing, right? That should be hidden": at 0 nothing shows, the line's events and Now come up only as the line gets to
// them, and when the page hides the element nothing inside it stays on screen (the stub was the line drawn so far, left
// showing after the page had hidden the chart).
// Knit Med-BEAM patient journey. Load as a classic script or a side-effect import.
// The host owns scroll/time: set element.progress to a number from 0 to 1.
(() => {
  'use strict';
  const tag = 'knit-patient-journey';
  if (customElements.get(tag)) return;

  const NS = 'http://www.w3.org/2000/svg';
  const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
  const ease = t => t * t * (3 - 2 * t);
  const phase = (p, lo, hi) => ease(clamp((p - lo) / (hi - lo), 0, 1));
  const svg = (parent, tag, attrs = {}, value) => {
    const el = document.createElementNS(NS, tag);
    for (const [k,v] of Object.entries(attrs)) el.setAttribute(k, v);
    if (value !== undefined) el.textContent = value;
    parent.append(el);
    return el;
  };
  const p2 = n => +n.toFixed(2);
  // Hidden, or as visible as the element (no attribute): an explicit "visible" would show through the page hiding it.
  const visible = (el, on) => on ? el.removeAttribute('visibility') : el.setAttribute('visibility', 'hidden');
  const rgbOf = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  // A ribbon's colour x of the way from Now to the right edge: its gradient, hue to hue between the stops.
  const colourAt = (hues, stops, x) => {
    let i = 0; while (i < stops.length - 2 && x > stops[i + 1]) i++;
    const q = clamp((x - stops[i]) / (stops[i + 1] - stops[i]), 0, 1);
    return hues[i].map((v, k) => Math.round(v + (hues[i + 1][k] - v) * q));
  };
  // The dots' shades are worked out in OKLab, where a darker shade keeps its hue and the same step looks the same on a
  // pale ribbon as on a dark one.
  const linear = v => { const c = v / 255; return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4; };
  const gamma = c => Math.round(255 * (c <= .0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - .055));
  const toLab = rgb => {
    const [r, g, b] = rgb.map(linear);
    const l = Math.cbrt(.4122214708 * r + .5363325363 * g + .0514459929 * b);
    const m = Math.cbrt(.2119034982 * r + .6806995451 * g + .1073969566 * b);
    const s = Math.cbrt(.0883024619 * r + .2817188376 * g + .6299787005 * b);
    return [.2104542553 * l + .7936177850 * m - .0040720468 * s, 1.9779984951 * l - 2.4285922050 * m + .4505937099 * s,
      .0259040371 * l + .7827717662 * m - .8086757660 * s];
  };
  const fromLab = ([L, a, b]) => {
    const l = (L + .3963377774 * a + .2158037573 * b) ** 3, m = (L - .1055613458 * a - .0638541728 * b) ** 3,
      s = (L - .0894841775 * a - 1.2914855480 * b) ** 3;
    return [4.0767416621 * l - 3.3077115913 * m + .2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - .3413193965 * s,
      -.0041960863 * l - .7034186147 * m + 1.7076147010 * s];
  };
  /** A deeper shade of a ribbon's colour, dark enough to read on that ribbon but never black: the same hue, with as much of
   * its colour as the screen can show at that depth. */
  const deepen = rgb => {
    const [L, a, b] = toLab(rgb), depth = clamp(L - .22, .38, .6);
    for (let k = 20; k > 0; k--) {
      const out = fromLab([depth, a * k / 20, b * k / 20]);
      if (out.every(v => v >= 0 && v <= 1)) return 'rgb(' + out.map(gamma).join() + ')';
    }
    return 'rgb(' + fromLab([depth, 0, 0]).map(v => gamma(clamp(v, 0, 1))).join() + ')';
  };

  // The draw, in the host's 0..1: the known path, then the futures. The last one reaches the right edge at about 1.
  const PAST = [0, .32];                // the one path runs in from the left edge to Now
  const GROW = { from: .27, step: .034, run: .5 };   // each future's tip leaves Now a little after the last
  const TAPER = .5;                     // a future is a point at Now and reaches its weight this far along

  // Stations from Now (0) to the right edge (1), shared by every future so the yarn keeps one cadence without the
  // paths being copies of one wave. Ordinates in amplitudes: up is negative (in their charts, higher is worse).
  const knots = [0,.2,.4,.6,.8,1];
  // fan: where a possible future runs. grow: its turn to leave Now.
  const lanes = [
    { fan:[0,-.26,-.80,-1.00,-.80,-.94], c:['#C993A8','#D4F587','#AABAD7','#889EEB'], stops:[0,.3,.62,1], weight:.98, grow:5 },
    { fan:[0,-.10,-.50,-.36,-.68,-.56], c:['#8163D8','#8AA9FF','#95ACA8','#EA94E6'], weight:.9, grow:3 },
    { fan:[0, .16,-.18,-.52,-.20,-.26], c:['#8EADA6','#FF97FC','#B79DCD','#78629A'], weight:.86, grow:1 },
    { fan:[0,-.20,-.04, .24,-.02, .08], c:['#8163D8','#8AA9FF','#A390E3','#FF97FC'], weight:1, grow:0 },
    { fan:[0, .26, .46, .10, .42, .30], c:['#DC91DC','#A27EDD','#8AA9FF','#D4F587'], weight:1.04, grow:2 },
    { fan:[0, .08, .54, .76, .50, .64], c:['#A3A4DC','#D4F587','#8EADA6','#8AA9FF'], weight:.96, grow:4 },
    { fan:[0, .40, .28, .62, .98, .90], c:['#D4DEA2','#D49DA9','#8AA9FF','#A3A4DC'], weight:.88, grow:6 },
  ];
  // The known path, from the left edge (0) to Now (1): a soft climb, level as it arrives.
  // events: how far along the way to Now, as parts of nowX. On a phone the way is short: a gentler climb, two events.
  const past = { ys:[.56,.50,.33,.37,.13,0], gain:.6, events:[.2,.5,.79], small:{ gain:.44, events:[.36,.72] } };
  // His 1:19 PM clip: "I think these dots are cool, so maybe sprinkle them across some... across the places". Events on the
  // futures: [lane, how far along, also on a phone]. Each sits clear of the crossings and comes up as its ribbon reaches it.
  const sprinkled = [[1,.3,true],[6,.39,true],[3,.46,false],[0,.48,false],[5,.6,true],[3,.77,false],[6,.82,false],[2,.86,true],[0,.92,false]];
  // EXT round: the Lines option. Absent for Multi, which keeps each lane's own colours.
  const MONO = {
    2: { lanes: ['#8A64FC', '#C2B1FF', '#6A4FD0', '#A98FFF', '#7B6BB8', '#DDD4FF'], plum: '#63539C' },
    3: { lanes: ['#4A6FE8', '#AFC3FF', '#2F52C9', '#8AA9FF', '#6C86D6', '#D3DEFF'], plum: '#2F52C9' },
    4: { lanes: ['#3A4452', '#9AA3AE', '#56616E', '#C3C9D1', '#6F7A88', '#2B3340'], plum: '#3A4452' },
  };
  // The yarn's measures in a box of this size: with no words to make room for, it takes the height of the box.
  const measures = (w,h) => {
    const compact=w<560, width=clamp(Math.min(w*.027,h*.078),compact?7:10,46);
    return {compact,width,amp:Math.min(h*(compact?.4:.42),h*.5-width*.62-6),cy:h*.5};
  };
  const unease = y => .5-Math.sin(Math.asin(1-2*y)/3);   // the t at which ease(t) is y
  // One cubic Hermite interpolant per path. Sample the same curve for ink edges and for event dots so the dots stay
  // attached after any resize. Level at Now: the last station of the known path, the first of every future.
  function ordinate(ys,t,levelEnd) {
    const n = ys.length-1;
    let k = 0;
    while (k < n-1 && t >= knots[k+1]) k++;
    const span = knots[k+1]-knots[k], q=(t-knots[k])/span, q2=q*q, q3=q2*q;
    const slope = i => i === (levelEnd ? n : 0) ? 0 :
      i === 0 ? (ys[1]-ys[0])/(knots[1]-knots[0]) :
      i === n ? (ys[n]-ys[n-1])/(knots[n]-knots[n-1]) :
      (ys[i+1]-ys[i-1])/(knots[i+1]-knots[i-1]);
    return (2*q3-3*q2+1)*ys[k]+(q3-2*q2+q)*span*slope(k)
      +(-2*q3+3*q2)*ys[k+1]+(q3-q2)*span*slope(k+1);
  }

  class PatientJourney extends HTMLElement {
    static get observedAttributes() { return ['progress']; }
    constructor() {
      super();
      this.attachShadow({mode:'open'});
      this._size = '';
      this._p = 1;
      this._bleed = 0;
      this._bleedRight = 0;
      this._palette = 0;
      this._observer = new ResizeObserver(() => this._layout());
    }
    connectedCallback() {
      this.setAttribute('role','img');
      if (!this.hasAttribute('aria-label')) this.setAttribute('aria-label',
        'Illustration of one patient\'s journey. A single recorded path leads to the present. From there many possible futures fan out to the right.');
      if (!this.shadowRoot.firstChild) {
        const css = document.createElement('style');
        // Flow round, Emmett: "more interactive". A dot grows under the pointer with a soft halo of its own colour, eased
        // like the rest of the page, over a target bigger than the dot. The element takes the pointer even where the page
        // around it does not; inside it only the dots do, so a ribbon never gets between the pointer and a dot. Touch
        // screens have no hover, so they keep the still dots. The colours: --dot is each dot's own, set where it is made;
        // --journey-dot on the element overrides all of them; the ring is the page's ground.
        css.textContent = `
          :host{display:block;position:relative;width:100%;height:var(--journey-height,clamp(275px,26vw,410px));color:var(--ink,#121a24);pointer-events:auto}
          svg{display:block;position:relative;width:100%;height:100%;overflow:visible;isolation:isolate;pointer-events:none}
          canvas{position:absolute;pointer-events:none}
          .ribbon{mix-blend-mode:multiply;pointer-events:none}
          .dot{pointer-events:auto}
          .dot__hit{fill:transparent}
          .dot__core{fill:var(--journey-dot,var(--dot,#4F3E78));stroke:var(--journey-paper,var(--paper,#f4f4f2))}
          .dot__ring{fill:var(--journey-paper,var(--paper,#f4f4f2));stroke:var(--journey-dot,var(--dot,#4F3E78))}
          .dot__halo{fill:var(--journey-dot,var(--dot,#4F3E78));opacity:0}
          .dot__mark,.dot__halo{transform-box:fill-box;transform-origin:center;transition:transform .35s cubic-bezier(.2,.8,.2,1),opacity .35s cubic-bezier(.2,.8,.2,1)}
          @media (hover:hover){
            .dot:hover .dot__mark{transform:scale(1.6)}
            .dot:hover .dot__halo{opacity:.22;transform:scale(2.9)}
            .dot--now:hover .dot__mark{transform:scale(1.3)}
            .dot--now:hover .dot__halo{transform:scale(2.1)}
          }
          @media (prefers-reduced-motion:reduce){.dot__mark,.dot__halo{transition:none}}
        `;
        this.shadowRoot.append(css);
        this._svg=svg(this.shadowRoot,'svg',{'aria-hidden':'true',focusable:'false'});
      }
      // Honor property writes made before the custom element was registered.
      if (Object.hasOwn(this, 'progress')) {
        const initial = this.progress;
        delete this.progress;
        this.progress = initial;
      }
      this._observer.observe(this);
      this._layout();
    }
    disconnectedCallback() { this._observer.disconnect(); }
    get bleed() { return this._bleed; }
    set bleed(v) {
      const n = Math.max(0, Number(v) || 0);
      if (n !== this._bleed) { this._bleed = n; this._size = ''; this._layout(); }
    }
    // Nov 6: the futures run on past the right edge by this much, as the known path does past the left.
    get bleedRight() { return this._bleedRight; }
    set bleedRight(v) {
      const n = Math.max(0, Number(v) || 0);
      if (n !== this._bleedRight) { this._bleedRight = n; this._size = ''; this._layout(); }
    }
    get palette() { return this._palette; }
    set palette(v) { if (v !== this._palette) { this._palette = v; this._size = ''; this._layout(); } }
    // His 10:53 PM clip, the Fill option (palette 5): every ribbon the picked colour, flat; its marks take the darker thread.
    set fill(v) {
      if (!v || !v.hex || v.hex + v.thread === this._fillKey) return;
      this._fillKey = v.hex + v.thread;
      MONO[5] = { lanes: Array(6).fill(v.hex), plum: v.thread };
      if (this._palette === 5) { this._size = ''; this._layout(); }
    }
    /** Where the yarn's ink starts and ends, top to bottom, in a box of this size (world.js spaces the words off it). */
    inkBand(w,h) {
      const {width,amp,cy}=measures(w,h);
      let top=h, bottom=0;
      for(const {fan,weight} of lanes) for(let i=0;i<=80;i++){
        const t=i/80, y=cy+amp*ordinate(fan,t,false), r=width*weight*.5*phase(t,0,TAPER);
        top=Math.min(top,y-r); bottom=Math.max(bottom,y+r);
      }
      return [top,bottom];
    }
    get progress() { return this._p; }
    set progress(v) {
      const n = Number(v);
      if (Number.isFinite(n)) {
        const p = clamp(n,0,1);
        if (p !== this._p) { this._p=p; this._paint(); }
      }
    }
    attributeChangedCallback(name,old,val) { this.progress = val === null ? 1 : val; }
    _layout() {
      if (!this._svg) return;
      const rawW=this.offsetWidth, rawH=this.offsetHeight;
      const w=Math.round(rawW), h=Math.round(rawH);
      if (!w || !h || this._size === w+':'+h) return;
      this._size=w+':'+h;
      const s=this._svg, {compact,width,amp,cy}=measures(w,h);
      const left=-(this._bleed+4), right=w+this._bleedRight+4;
      const nowX=w*.24;
      const mono=MONO[this._palette];
      // The known path is the page's one line (the hero's line, the thread): its colour, which follows the Lines option.
      const thread='var(--thread,'+(mono?mono.plum:'#4F3E78')+')';
      s.replaceChildren();
      s.setAttribute('viewBox', '0 0 '+w+' '+h);
      const defs=svg(s,'defs'), box={x:left-20,y:-h,width:right-left+40,height:h*3};
      this._left=left; this._right=right; this._cy=cy; this._amp=amp; this._width=width; this._lanes=[]; this._drawn=true;
      this._nodes=[]; this._w=w; this._nowX=nowX; this._pastShown=-1;
      const record=(node,at,end) => (this._nodes.push([node,at,end]),node);
      const group=(at,end) => record(svg(s,'g'),at,end);
      // Flow round, Emmett: "either should be colored or larger". A third bigger than they were, on a phone too.
      const dotR=1.35*(compact?3.3:clamp(w*.0034,3.8,5.2)), nowR=compact?7.2:clamp(w*.0062,8.5,10.5);
      // A dot fades in from at to end in its own colour: an invisible target bigger than the dot, the halo it shows under the
      // pointer, and the dot itself with its ring of ground. Now is a ring with a centre (the style is in connectedCallback).
      const dot=(at,end,x,y,colour,now) => {
        const g=group(at,end), r=now?nowR:dotR, centre={cx:p2(x),cy:p2(y)};
        g.setAttribute('class',now?'dot dot--now':'dot');
        g.setAttribute('style','--dot:'+colour);
        svg(g,'circle',{...centre,r:p2(Math.max(14,r*2.4,r+8)),class:'dot__hit'});
        svg(g,'circle',{...centre,r:p2(r),class:'dot__halo'});
        if(!now) return svg(g,'circle',{...centre,r:p2(r),class:'dot__core dot__mark','stroke-width':p2(Math.max(1.7,r*.3))});
        svg(g,'circle',{...centre,r:p2(r),class:'dot__ring dot__mark','stroke-width':1.5});
        svg(g,'circle',{...centre,r:p2(r*.46),class:'dot__core dot__mark','stroke-width':0});
      };

      // Nov 6, Safari on phones "really chugs": there seven masked, multiply-blended SVG ribbons were repainted on every frame of the
      // draw. On a phone the same ribbons go on one canvas under the marks, the same shapes, colours, blend and soft head.
      // Under 660 wide or on any touch screen, so a tablet is covered too; a desktop window keeps the SVG.
      const onCanvas=(w<660||matchMedia('(pointer: coarse)').matches)&&!/[?&]figma\b/.test(location.search);   // ?figma: the frozen copy for Figma wants real shapes
      if(this._canvas) this._canvas.hidden=!onCanvas;
      this._ctx=null;
      if(onCanvas){
        const [top,bottom]=this.inkBand(w,h), y0=Math.floor(top-12), y1=Math.ceil(bottom+12), ratio=Math.min(window.devicePixelRatio||1,2), start=Math.floor(nowX)-2;
        const canvas=this._canvas||(this._canvas=document.createElement('canvas'));
        if(!canvas.isConnected) this.shadowRoot.insertBefore(canvas,s);
        canvas.style.cssText='left:'+start+'px;top:'+y0+'px;width:'+(right-start)+'px;height:'+(y1-y0)+'px';
        canvas.width=Math.round((right-start)*ratio); canvas.height=Math.round((y1-y0)*ratio);
        this._ctx=canvas.getContext('2d');
        this._ctx.setTransform(ratio,0,0,ratio,-start*ratio,-y0*ratio);
        this._box=[start,y0,right-start,y1-y0];
      }
      // The futures share one isolated ink group. Each is a closed contour that leaves Now as a point, with a level
      // tangent, and widens to its weight on the way out.
      const bands=svg(s,'g',{style:'isolation:isolate'}), inks=[];
      lanes.forEach(({fan,c,weight,grow,stops=[0,.35,.7,1]},index)=>{
        const hues=(mono?[0,2,4,1].map(k=>mono.lanes[(index+k)%mono.lanes.length]):c).map(rgbOf);
        inks.push({hues,stops});   // for the dots that sit on it
        if(this._ctx){
          this._lanes.push({fan,weight,grow,hues,stops,shown:-1,shape:null,tip:0});
          return;
        }
        const gradient=svg(defs,'linearGradient',{id:'ink'+index,x1:nowX,y1:0,x2:right,y2:0,gradientUnits:'userSpaceOnUse'});
        hues.forEach((color,i)=>svg(gradient,'stop',{offset:stops[i],'stop-color':'rgb('+color.join()+')'}));
        // Its head: a soft end that runs along with the tip (opaque behind it, nothing at it), as the hero's strings arrive.
        const head=svg(defs,'linearGradient',{id:'head'+index,x1:nowX,y1:0,x2:nowX+1,y2:0,gradientUnits:'userSpaceOnUse'});
        svg(head,'stop',{offset:0,'stop-color':'#fff','stop-opacity':1}); svg(head,'stop',{offset:1,'stop-color':'#fff','stop-opacity':0});
        const headMask=svg(defs,'mask',{id:'headmask'+index,maskUnits:'userSpaceOnUse',...box});
        svg(headMask,'rect',{...box,fill:'url(#head'+index+')'});
        const path=svg(bands,'path',{d:'',fill:'url(#ink'+index+')',class:'ribbon',mask:'url(#headmask'+index+')'});
        this._lanes.push({fan,weight,grow,path,head,shown:-1});
      });

      // The one known path, drawn by trimming it from the left edge.
      const known=compact?past.small:past, pastAt=q => cy+amp*known.gain*ordinate(past.ys,q,true);
      const points=[], lengths=[0];
      for(let i=0;i<=72;i++){
        const q=i/72, x=left+(nowX-left)*q, y=pastAt(q);
        if(i) lengths.push(lengths[i-1]+Math.hypot(x-points[i-1][0],y-points[i-1][1]));
        points.push([x,y]);
      }
      this._past=svg(s,'path',{d:'M'+points.map(([x,y])=>p2(x)+','+p2(y)).join(' L'),fill:'none',stroke:thread,'stroke-width':compact?2:clamp(w*.0019,2.2,3.2),
        'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1,visibility:'hidden'});
      // When the line's tip gets to x. It is drawn by its length, not by x, and it climbs, so this is the share of its
      // length up to x (by x alone the first dot came up a little ahead of the line).
      const reach=x=>{
        const k=clamp((x-left)/(nowX-left),0,1)*72, i=Math.min(71,Math.floor(k));
        return PAST[0]+(PAST[1]-PAST[0])*(lengths[i]+(lengths[i+1]-lengths[i])*(k-i))/lengths[72];
      };
      // What is on record: each dot comes up as the line reaches its near edge, in the line's colour.
      known.events.forEach(f=>{
        const x=nowX*f, at=reach(x-dotR);
        dot(at,at+.05,x,pastAt((x-left)/(nowX-left)),thread);
      });

      // Now: where the one path ends and the futures begin. It comes up as the line gets there (it used to stand waiting a
      // little ahead of the line), in the page's one accent.
      dot(reach(nowX-nowR),PAST[1]+.035,nowX,cy,'var(--accent,'+thread+')',true);

      // What might happen along the futures: each dot comes up as its ribbon's solid end reaches it, in a deeper shade of
      // the ribbon's colour there.
      const span=right-nowX, soft=this._soft=clamp(span*.1,40,160);
      for(const [index,t,small] of sprinkled){
        if(compact&&!small) continue;
        const at=GROW.from+lanes[index].grow*GROW.step+GROW.run*unease(Math.min(1,(t*span+soft*.6)/(span+soft)));
        dot(at-.012,at+.03,nowX+span*t,cy+amp*ordinate(lanes[index].fan,t,false),deepen(colourAt(inks[index].hues,inks[index].stops,t)));
      }
      this._paint();
    }
    /** One future from Now to tEnd (0..1 of the way to the right edge), its head rounded off; the whole of it at 1. */
    _lanePath(lane,tEnd){
      const span=this._right-this._nowX, n=Math.max(2,Math.ceil(tEnd*(this._ctx&&tEnd<1?Math.min(170,span/5):170))), up=[], lo=[], at=t=>ordinate(lane.fan,t,false);
      const weight=this._width*lane.weight, capT=Math.min(tEnd,weight*.6/span);
      for(let i=0;i<=n;i++){
        const t=tEnd*i/n, x=this._nowX+span*t, y=this._cy+this._amp*at(t);
        const dy=(at(Math.min(1,t+.001))-at(Math.max(0,t-.001)))*this._amp/(span*((t===0||t===1)?.001:.002));
        let r=weight*.5*phase(t,0,TAPER)*Math.sqrt(1+dy*dy);
        if(tEnd<1&&t>tEnd-capT){ const q=(t-(tEnd-capT))/capT; r*=Math.sqrt(Math.max(0,1-q*q)); }
        up.push(p2(x)+','+p2(y-r)); lo.push(p2(x)+','+p2(y+r));
      }
      return 'M'+up.join(' L')+' L'+lo.reverse().join(' L')+'Z';
    }
    _paint() {
      if (!this._drawn) return;
      const p=this._p, span=this._right-this._nowX, soft=this._soft;
      const drawn=clamp((p-PAST[0])/(PAST[1]-PAST[0]),0,1);
      if(drawn!==this._pastShown){
        this._pastShown=drawn;
        const offset=(1-drawn).toFixed(4);   // four places: two made the tip step 1% of the line at a time
        this._past.setAttribute('stroke-dashoffset',offset);
        // Emmett: "This also shouldn't be stub showing, right? That should be hidden." Shown only once there is some line to
        // show: a dash of nothing (a hair past 0 rounds to one) still prints its round cap, a dot at the left edge. And shown
        // by inheriting, never by visibility="visible": that beats the page's own visibility:hidden on the element (world.js
        // hides the chart that way when you scroll back above it, at whatever progress it had), which left the piece of line
        // drawn so far standing at the left edge.
        visible(this._past,offset<1);
      }
      let moved=false;
      this._lanes.forEach(lane=>{
        // Its tip runs from Now to the right edge.
        const t=ease(clamp((p-GROW.from-lane.grow*GROW.step)/GROW.run,0,1));
        if(t===lane.shown) return;
        lane.shown=t;
        // The head runs a soft length past the right end, so its fade has left the ribbon by the time the ribbon is whole.
        // (It used to stop at the end and turn solid there in one step: a hard cut at the right edge, once per ribbon.)
        const tip=this._nowX+(span+soft)*t, tEnd=Math.min(1,(tip-this._nowX)/span);
        if(this._ctx){
          // Once its shape is whole only the fade still moves, so the shape is not rebuilt.
          if(!(tEnd===1&&lane.whole)) lane.shape=t>0?new Path2D(this._lanePath(lane,tEnd)):null;
          lane.whole=tEnd===1; lane.tip=tip; moved=true; return;
        }
        lane.path.setAttribute('d',t>0?this._lanePath(lane,tEnd):'');
        lane.head.setAttribute('x1',p2(tip-soft));
        lane.head.setAttribute('x2',p2(tip));
      });
      if(moved) this._paintCanvas();
      // Before a dot fades in it is not there at all: nothing of it shows and the pointer cannot find it.
      for(const node of this._nodes){
        const o=phase(p,node[1],node[2]).toFixed(3);
        if(o===node[3]) continue;
        node[3]=o;
        node[0].setAttribute('opacity',o);
        visible(node[0],+o>0);
      }
    }
    /** Phones: every ribbon, multiplied together, each fading out over the soft length behind its tip. */
    _paintCanvas(){
      const ctx=this._ctx, soft=this._soft, nowX=this._nowX, right=this._right, span=right-nowX;
      ctx.globalCompositeOperation='source-over';
      ctx.clearRect(...this._box);
      ctx.globalCompositeOperation='multiply';
      for(const {shape,tip,hues,stops} of this._lanes){
        if(!shape) continue;
        const fill=ctx.createLinearGradient(nowX,0,right,0), a=(tip-soft-nowX)/span, b=(tip-nowX)/span;
        const add=(x,alpha)=>{ if(x>=0&&x<=1) fill.addColorStop(x,'rgba('+colourAt(hues,stops,x).join()+','+alpha+')'); };
        if(a<0) add(0,b/(b-a));
        stops.forEach(x=>{ if(x<a) add(x,1); });
        add(a,1);
        if(b<=1) add(b,0); else add(1,(b-1)/(b-a));
        ctx.fillStyle=fill;
        ctx.fill(shape);
      }
    }
  }
  customElements.define(tag,PatientJourney);
})();
