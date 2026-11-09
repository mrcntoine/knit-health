const of=`<div class="header-dials" role="group" aria-label="Header sizes">
      <label class="line-dial"><span>Logo</span><input data-dial="logoSize" type="range" min="50" max="300" step="1" value="230" aria-label="Size of the Knit Health words, percent of the Figma size"><input class="dial-number" type="number" min="50" max="300" step="1" value="130" aria-label="Size of the Knit Health words, percent of the Figma size, typed"></label>
      <label class="line-dial"><span>Nav</span><input data-dial="navSize" type="range" min="50" max="300" step="1" value="170" aria-label="Size of the nav links, percent of the Figma size"><input class="dial-number" type="number" min="50" max="300" step="1" value="130" aria-label="Size of the nav links, percent of the Figma size, typed"></label>
      <label class="line-dial"><span>CTA</span><input data-dial="ctaSize" type="range" min="50" max="300" step="1" value="140" aria-label="Size of the Partner with Knit button, percent of the Figma size"><input class="dial-number" type="number" min="50" max="300" step="1" value="110" aria-label="Size of the Partner with Knit button, percent of the Figma size, typed"></label>
    </div>
    <!-- His 11:27 AM clip: "the y-axis on this and this... the thickness of it... the spacing amount".
         The world model's dials, here once the panel has landed, hidden until T. -->
    <div class="world-dials" role="group" aria-label="World model section">
      <label class="line-dial"><span>Words Y</span><input data-dial="worldWords" type="range" min="110" max="800" step="1" value="149" aria-label="Height of the world model words, pixels at 1920 wide"><input class="dial-number" type="number" min="110" max="800" step="1" value="149" aria-label="Height of the world model words, pixels at 1920 wide, typed"></label>
      <label class="line-dial"><span>Chart top</span><input data-dial="chartTop" type="range" min="0" max="100" step="1" value="33" aria-label="Top of the chart, percent of the screen height"><input class="dial-number" type="number" min="0" max="100" step="1" value="33" aria-label="Top of the chart, percent of the screen height, typed"></label>
      <label class="line-dial"><span>Chart bottom</span><input data-dial="chartBottom" type="range" min="0" max="100" step="1" value="85" aria-label="Bottom of the chart, percent of the screen height"><input class="dial-number" type="number" min="0" max="100" step="1" value="85" aria-label="Bottom of the chart, percent of the screen height, typed"></label>
      <label class="line-dial" data-later><span>Stats top</span><input data-dial="statsTop" type="range" min="0" max="100" step="1" value="36" aria-label="Top of the difference rows, percent of the screen height"><input class="dial-number" type="number" min="0" max="100" step="1" value="36" aria-label="Top of the difference rows, percent of the screen height, typed"></label>
      <label class="line-dial" data-later><span>Stats bottom</span><input data-dial="statsBottom" type="range" min="0" max="100" step="1" value="83" aria-label="Bottom of the difference rows, percent of the screen height"><input class="dial-number" type="number" min="0" max="100" step="1" value="83" aria-label="Bottom of the difference rows, percent of the screen height, typed"></label>
      <label class="line-dial" data-later><span>Line Y</span><input data-dial="worldLine" type="range" min="30" max="100" step="1" value="86" aria-label="Height of the line, percent of the screen"><input class="dial-number" type="number" min="30" max="100" step="1" value="86" aria-label="Height of the line, percent of the screen, typed"></label>
      <label class="line-dial" data-later><span>Thickness</span><input data-dial="ribbon" type="range" min="4" max="120" step="1" value="14" aria-label="Thickness of the ribbons, pixels at 1920 wide"><input class="dial-number" type="number" min="4" max="120" step="1" value="14" aria-label="Thickness of the ribbons, pixels at 1920 wide, typed"></label>
      <label class="line-dial" data-later><span>Spacing</span><input data-dial="spacing" type="range" min="0" max="300" step="1" value="54" aria-label="How far the ribbons spread, percent of the study"><input class="dial-number" type="number" min="0" max="300" step="1" value="54" aria-label="How far the ribbons spread, percent of the study, typed"></label>
      <label class="line-dial" data-later><span>Flat line</span><input data-dial="flatLine" type="range" min="1" max="120" step="1" value="1" aria-label="Thickness of the finished line, pixels at 1920 wide"><input class="dial-number" type="number" min="1" max="120" step="1" value="1" aria-label="Thickness of the finished line, pixels at 1920 wide, typed"></label>
    </div>
    <!-- His 12:23 PM clip: the four looks as little buttons (main.js LOOKS). Hidden until T,
         with the dials, the openings and the tools (his 12:50 AM clip). -->
    <nav class="looks" aria-label="Looks" data-later>
      <button type="button" data-look="look1" aria-pressed="false" title="Option 1: 15 strings, two-tone, Knit palette">1</button>
      <button type="button" data-look="look2" aria-pressed="false" title="Option 2: 6 strings, overlapping gradient, record colours">2</button>
      <button type="button" data-look="look3" aria-pressed="false" title="Option 3: 15 thin strings, overlapping gradient, record colours">3</button>
      <button type="button" data-look="look4" aria-pressed="true" title="Option 4: 6 thick strings, overlapping gradient, Knit palette">4</button>
    </nav>
    <!-- The line's width at the ends and at the pinch, hidden until T, tied to the panel's sliders. -->
    <div class="review-row">
    <div class="dials">
      <label class="line-dial"><span>Strings</span><input data-dial="heroCount" type="range" min="3" max="15" step="1" value="10" aria-label="How many strings"><input class="dial-number" type="number" min="3" max="15" step="1" value="5" aria-label="How many strings, typed"></label>
      <label class="line-dial"><span>Spacing</span><input data-dial="heroSpread" type="range" min="30" max="130" step="1" value="80" aria-label="How far the strings spread up and down, percent"><input class="dial-number" type="number" min="30" max="130" step="1" value="80" aria-label="How far the strings spread up and down, percent, typed"></label>
      <label class="line-dial" data-e data-no-f><span>Line Y</span><input data-dial="heroLineY" type="range" min="40" max="95" step="1" value="77" aria-label="Where the line and the fan sit, up and down, percent of the window's height from the top"><input class="dial-number" type="number" min="40" max="95" step="1" value="82" aria-label="Where the line and the fan sit, up and down, percent of the window's height, typed"></label>
      <label class="line-dial" data-e data-no-f><span>Text Y</span><input data-dial="heroTextY" type="range" min="30" max="95" step="1" value="73" aria-label="Where the bottom of the hero's words sits, up and down, percent of the window's height from the top"><input class="dial-number" type="number" min="30" max="95" step="1" value="77" aria-label="Where the bottom of the hero's words sits, up and down, percent of the window's height, typed"></label>
      <!-- His 2:24 PM clip, hero B: "adjust the spacing between here and... the movement". -->
      <label class="line-dial" data-f><span>Line Y</span><input data-dial="betweenLineY" type="range" min="40" max="95" step="1" value="73" aria-label="Where the line and the words around it sit, up and down, percent of the window's height from the top"><input class="dial-number" type="number" min="40" max="95" step="1" value="73" aria-label="Where the line and the words around it sit, up and down, percent of the window's height from the top, typed"></label>
      <label class="line-dial" data-f><span>Gap above</span><input data-dial="gapAbove" type="range" min="0" max="120" step="1" value="45" aria-label="Space between the headline and the line"><input class="dial-number" type="number" min="0" max="120" step="1" value="45" aria-label="Space between the headline and the line, typed"></label>
      <label class="line-dial" data-f><span>Gap below</span><input data-dial="gapBelow" type="range" min="0" max="120" step="1" value="38" aria-label="Space between the line and the intro"><input class="dial-number" type="number" min="0" max="120" step="1" value="38" aria-label="Space between the line and the intro, typed"></label>
      <label class="line-dial" data-no-e><span>Thick</span><input data-dial="thickness" type="range" min="4" max="100" step="1" value="26" aria-label="String thickness, pixels at 1920 wide"><input class="dial-number" type="number" min="4" max="100" step="1" value="26" aria-label="String thickness, pixels at 1920 wide, typed"></label>
      <label class="line-dial"><span>Intro</span><input data-dial="heroIntro" type="range" min="25" max="600" step="1" value="300" aria-label="How fast the line comes in, percent of the original line study's pace"><input class="dial-number" type="number" min="25" max="600" step="1" value="300" aria-label="How fast the line comes in, percent of the line study's pace, typed"></label>
      <label class="line-dial" data-waves><span>Speed</span><input data-dial="heroSpeed" type="range" min="0" max="200" step="1" value="4" aria-label="How fast the strings travel after they come in"><input class="dial-number" type="number" min="0" max="200" step="1" value="4" aria-label="How fast the strings travel, percent of 1500 units a second, typed"></label>
      <label class="line-dial"><span>Line</span><input data-dial="line" type="range" min="2" max="400" step="1" value="2" aria-label="Line width at the ends, pixels at 1920 wide"><input class="dial-number" type="number" min="2" max="400" step="1" value="4" aria-label="Line width at the ends, type a number or press up and down"></label>
      <label class="line-dial"><span>Pinch</span><input data-dial="pinch" type="range" min="2" max="120" step="1" value="4" aria-label="Line width at the pinch, pixels at 1920 wide"><input class="dial-number" type="number" min="2" max="120" step="1" value="4" aria-label="Line width at the pinch, type a number or press up and down"></label>
    </div>
    <!-- His 12:03 AM clip: the ways the line can open. Stays over the purple while T is on, so they can be flipped anywhere. -->
    <nav class="open-pick" aria-label="How the line opens" data-waves>
      <span>Opening</span>
      <button type="button" data-open="0" aria-pressed="true" title="A: both edges bow as it opens">A</button>
      <button type="button" data-open="1" aria-pressed="false" title="B: the sides open first and wider, the centre last">B</button>
      <button type="button" data-open="2" aria-pressed="false" title="C: a whip across the screen">C</button>
      <button type="button" data-open="3" aria-pressed="false" title="D: the strings whip apart, the purple opens between them">D</button>
      <button type="button" data-open="4" aria-pressed="false" title="E: the warp, the page is a sheet seen edge-on that twists open in 3D">E</button>
    </nav>
    <!-- His 1:12 AM clip: the portrait section's colour, that section only (src/ground.js). -->
    <div class="ground-pick" id="ground-pick" role="group" aria-label="Colour of the portrait section">
      <span>Colour</span>
      <input class="ground-swatch" type="color" value="#ffffff" aria-label="Pick a colour for the portrait section">
      <input class="ground-hex" type="text" value="#FFFFFF" maxlength="7" autocomplete="off" spellcheck="false" aria-label="Type a hex colour for the portrait section">
      <button type="button" data-ground="#FFFFFF" style="--swatch:#FFFFFF" aria-pressed="true" title="White, the default"></button>
      <button type="button" data-ground="#FAFAF7" style="--swatch:#FAFAF7" aria-pressed="false" title="Warm off-white"></button>
      <button type="button" data-ground="#F4F4F2" style="--swatch:#F4F4F2" aria-pressed="false" title="The hero's paper"></button>
      <button type="button" data-ground="#CED8DA" style="--swatch:#CED8DA" aria-pressed="false" title="Pale blue-grey, the last round"></button>
      <button type="button" data-ground="#C2C2C2" style="--swatch:#C2C2C2" aria-pressed="false" title="Grey"></button>
      <button type="button" data-ground="#41278F" style="--swatch:#41278F" aria-pressed="false" title="Purple, the original"></button>
      <button type="button" data-ground="#1A1A1A" style="--swatch:#1A1A1A" aria-pressed="false" title="Near black, the Figma ring frames"></button>
      <button type="button" data-ground="#1F4BD8" style="--swatch:#1F4BD8" aria-pressed="false" title="Knit blue"></button>
      <button type="button" data-ground="#8A64FC" style="--swatch:#8A64FC" aria-pressed="false" title="Violet"></button>
      <button type="button" data-ground="#78629A" style="--swatch:#78629A" aria-pressed="false" title="Plum"></button>
      <button type="button" data-ground="#78A69C" style="--swatch:#78A69C" aria-pressed="false" title="Sage"></button>
      <button type="button" data-ground="#DE949A" style="--swatch:#DE949A" aria-pressed="false" title="Rose"></button>
      <button type="button" data-ground="#D4F587" style="--swatch:#D4F587" aria-pressed="false" title="Lime green"></button>
    </div>
    <!-- His 1:17 AM clip: the colour behind every portrait; the people are cut-outs (tools/cutouts). -->
    <div class="ground-pick" id="photo-pick" role="group" aria-label="Background colour of the photos">
      <span>Photos</span>
      <input class="ground-swatch" type="color" value="#bec6c7" aria-label="Pick a background colour for the photos">
      <input class="ground-hex" type="text" value="#BEC6C7" maxlength="7" autocomplete="off" spellcheck="false" aria-label="Type a hex background colour for the photos">
      <!-- His 1:55 AM clip: the photos follow Colour, a darker or a lighter version of it. -->
      <span class="shade-pick" role="group" aria-label="Photos follow Colour">
        <button type="button" data-shade="darker" aria-pressed="false" title="A darker version of Colour">Darker</button>
        <button type="button" data-shade="lighter" aria-pressed="false" title="A lighter version of Colour">Lighter</button>
      </span>
      <button type="button" data-ground="#F4F4F2" style="--swatch:#F4F4F2" aria-pressed="true" title="The hero's paper, the default"></button>
      <button type="button" data-ground="#331F70" style="--swatch:#331F70" aria-pressed="false" title="Deep purple"></button>
      <button type="button" data-ground="#E0E0E0" style="--swatch:#E0E0E0" aria-pressed="false" title="Grey, the original"></button>
      <button type="button" data-ground="#FFFFFF" style="--swatch:#FFFFFF" aria-pressed="false" title="White"></button>
      <button type="button" data-ground="#D4F587" style="--swatch:#D4F587" aria-pressed="false" title="Lime green"></button>
      <button type="button" data-ground="#DE949A" style="--swatch:#DE949A" aria-pressed="false" title="Rose"></button>
      <button type="button" data-ground="#FF97FC" style="--swatch:#FF97FC" aria-pressed="false" title="Light pink"></button>
      <button type="button" data-ground="#8AA9FF" style="--swatch:#8AA9FF" aria-pressed="false" title="Light purple"></button>
      <button type="button" data-ground="#8A64FC" style="--swatch:#8A64FC" aria-pressed="false" title="Violet"></button>
      <button type="button" data-ground="#121A24" style="--swatch:#121A24" aria-pressed="false" title="Ink"></button>
    </div>
    </div>
    <!-- Alex, Nov 5 10:33 PM: "Can we see a proto link with color options?" Shown on the page when the link ends in ?colors
         (main.js), so the team can flip the graphics between multi-colour and the mono options without the review tools. -->
    <nav class="colour-pick" id="colour-pick" aria-label="Colour of the lines">
      <span>Lines</span>
      <!-- Flow round, his 4:30 PM clip: "Option A, B, C, D where they can switch out the style" (main.js LINE_STYLES). -->
      <button type="button" data-style="0" aria-pressed="true" title="Option A: shades of violet, two-tone gradient"><span class="cp-word">Option </span>A</button>
      <button type="button" data-style="1" aria-pressed="false" title="Option B: the Knit palette, two-tone gradient"><span class="cp-word">Option </span>B</button>
      <button type="button" data-style="2" aria-pressed="false" title="Option C: the Knit palette, gradient"><span class="cp-word">Option </span>C</button>
      <button type="button" data-style="3" aria-pressed="false" title="Option D: one colour, no gradient, no transparency"><span class="cp-word">Option </span>D</button>
      <!-- His 10:53 PM clip: "a color fill and they can select and change the color": Option D's colour. -->
      <label class="colour-pick__fill" title="Option D's colour"><input type="color" id="fill-colour" value="#1f4bd8" aria-label="Option D's colour"></label>
    </nav>
    <!-- Review tools (not in the design): float bottom right, hidden until T is pressed. -->
    <div class="tools">
      <button class="view-toggle" id="view-toggle" aria-expanded="false" aria-controls="view-panel">Adjust view <span aria-hidden="true">+</span></button>
      <button class="restart" id="copy-settings" title="Copy every setting on this page, to paste into a message so they can become the defaults"><span>Copy settings</span></button>
      <button class="restart" id="reset-all" title="Back to the original settings"><span>Reset</span></button>
      <button class="restart" id="hero-toggle" title="The two heroes: A the line under the words, B the line between the headline and the intro (H)"><span>Hero: A</span></button>
      <button class="restart" id="lines-toggle" title="The strings, the chart and the line: Option A, B, C or D"><span>Lines: Option A</span></button>
      <button class="restart" id="thread-toggle" aria-pressed="false" title="The thread through the page: one colour, a one-colour gradient, or the rainbow"><span>Thread: one colour</span></button>
      <button class="restart" id="rulers-toggle" aria-pressed="false" title="Rulers and guides, like Figma: drag a guide out of a ruler (R)"><span>Rulers</span><kbd>R</kbd></button>
      <button class="restart" id="restart" aria-label="Replay from the beginning"><span>Replay</span><svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 7a7 7 0 1 1-1 6M4 2v5h5" stroke="currentColor" stroke-width="1.4"/></svg></button>
    </div>
    <section class="view-panel" id="view-panel" aria-label="Adjust view" data-lenis-prevent hidden>
      <div class="panel-content" id="panel-content">
      <div class="panel-heading"><span>THE STRINGS</span><button id="view-close" aria-label="Close view controls">×</button></div>
      <div class="view-control" data-later>
        <div class="setting-heading"><label for="view-count">Strings</label><span class="setting-number" data-unit="" data-decimals="0"><input type="number" id="value-count" aria-label="How many strings" value="15"></span></div>
        <input id="view-count" data-setting="count" type="range" min="3" max="15" step="1" value="15">
      </div>
      <div class="view-control" data-lifted>
        <div class="setting-heading"><label for="view-y">Strings Y</label><span class="setting-number" data-unit="%" data-decimals="1"><input type="number" id="value-y" aria-label="Move the tangle up or down (percent of the screen height, negative is up)" value="-6.0"></span></div>
        <input id="view-y" data-setting="y" type="range" min="-0.25" max="0.25" step="0.005" value="-0.06">
      </div>
      <!-- His 6:12 PM ask: "give me the ability to add more strings". 5 is one a route, as the original. -->
      <div class="view-control">
        <div class="setting-heading"><label for="view-heroCount">Strings</label><span class="setting-number" data-unit=""><input type="number" id="value-heroCount" aria-label="How many strings in the hero" value="5"></span></div>
        <input id="view-heroCount" data-setting="heroCount" type="range" min="3" max="15" step="1" value="10">
      </div>
      <!-- His 6:10 PM clip: "give me the ability to adjust the spacing here... tighten it up a little bit". -->
      <div class="view-control">
        <div class="setting-heading"><label for="view-heroSpread">Spacing</label><span class="setting-number" data-unit="percent"><input type="number" id="value-heroSpread" aria-label="How far the strings spread up and down (percent)" value="80"></span></div>
        <input id="view-heroSpread" data-setting="heroSpread" type="range" min="30" max="130" step="1" value="80">
      </div>
      <!-- His 1:52 PM clip: "give me the ability to move this and the text up and down on a y-axis" (hero option E). -->
      <div class="view-control" data-e data-no-f>
        <div class="setting-heading"><label for="view-heroLineY">Line Y</label><span class="setting-number" data-unit="percent"><input type="number" id="value-heroLineY" aria-label="Where the line and the fan sit, up and down (percent of the window's height from the top)" value="82"></span></div>
        <input id="view-heroLineY" data-setting="heroLineY" type="range" min="40" max="95" step="1" value="77">
      </div>
      <div class="view-control" data-e data-no-f>
        <div class="setting-heading"><label for="view-heroTextY">Text Y</label><span class="setting-number" data-unit="percent"><input type="number" id="value-heroTextY" aria-label="Where the bottom of the hero's words sits, up and down (percent of the window's height from the top)" value="77"></span></div>
        <input id="view-heroTextY" data-setting="heroTextY" type="range" min="30" max="95" step="1" value="73">
      </div>
      <!-- His 2:24 PM clip, hero B: the line between the headline and the intro. -->
      <div class="view-control" data-f>
        <div class="setting-heading"><label for="view-betweenLineY">Line Y</label><span class="setting-number" data-unit="percent"><input type="number" id="value-betweenLineY" aria-label="Where the line and the words around it sit, up and down (percent of the window's height from the top)" value="73"></span></div>
        <input id="view-betweenLineY" data-setting="betweenLineY" type="range" min="40" max="95" step="1" value="73">
      </div>
      <div class="view-control" data-f>
        <div class="setting-heading"><label for="view-gapAbove">Gap above</label><span class="setting-number" data-unit="px"><input type="number" id="value-gapAbove" aria-label="Space between the headline and the line" value="45"></span></div>
        <input id="view-gapAbove" data-setting="gapAbove" type="range" min="0" max="120" step="1" value="45">
      </div>
      <div class="view-control" data-f>
        <div class="setting-heading"><label for="view-gapBelow">Gap below</label><span class="setting-number" data-unit="px"><input type="number" id="value-gapBelow" aria-label="Space between the line and the intro" value="38"></span></div>
        <input id="view-gapBelow" data-setting="gapBelow" type="range" min="0" max="120" step="1" value="38">
      </div>
      <!-- How fast the line comes in: 100 = the original line study's own pace (the Julie round ran 150). -->
      <div class="view-control">
        <div class="setting-heading"><label for="view-heroIntro">Intro</label><span class="setting-number" data-unit="percent"><input type="number" id="value-heroIntro" aria-label="How fast the line comes in (percent of the line study's pace)" value="300"></span></div>
        <input id="view-heroIntro" data-setting="heroIntro" type="range" min="25" max="600" step="1" value="300">
      </div>
      <!-- His 5:57 PM clip: "give me a toggle to slow down the speed on it"; his 6:03 PM clip: it sets only the travel after the strings come in. EXT round: 7, was 30. -->
      <div class="view-control" data-waves>
        <div class="setting-heading"><label for="view-heroSpeed">Speed</label><span class="setting-number" data-unit="percent"><input type="number" id="value-heroSpeed" aria-label="How fast the strings travel (percent of 1500 units a second)" value="4"></span></div>
        <input id="view-heroSpeed" data-setting="heroSpeed" type="range" min="0" max="200" step="1" value="4">
      </div>
      <div class="view-control pattern-control"><label for="view-palette">Palette</label><select id="view-palette" data-setting="palette"><option value="0" selected>Knit palette</option><option value="1">Record colours</option><option value="2">Mono violet</option><option value="3">Mono blue</option><option value="4">Mono ink</option><option value="5">Colour fill</option></select></div>
      <div class="view-control pattern-control"><label for="view-colour">Colour</label><select id="view-colour" data-setting="colour"><option value="0">Solid</option><option value="1">Sections</option><option value="2">Gradient</option><option value="3">Gradient, overlapping</option><option value="4" selected>Two-tone gradient</option></select></div>
      <div class="view-control pattern-control"><label for="view-shade">Shading</label><select id="view-shade" data-setting="shade"><option value="1">3D</option><option value="0" selected>Flat</option></select></div>
      <div class="view-control" data-no-e>
        <div class="setting-heading"><label for="view-thickness">Thickness</label><span class="setting-number" data-unit="px" data-decimals="0"><input type="number" id="value-thickness" aria-label="String thickness (pixels at 1920 wide)" value="91"></span></div>
        <input id="view-thickness" data-setting="thickness" type="range" min="4" max="100" step="1" value="26">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-line">Line weight</label><span class="setting-number" data-unit="px" data-decimals="0"><input type="number" id="value-line" aria-label="The line's width at the ends (pixels at 1920 wide)" value="90"></span></div>
        <input id="view-line" data-setting="line" type="range" min="2" max="400" step="1" value="2">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-pinch">Pinch</label><span class="setting-number" data-unit="px" data-decimals="0"><input type="number" id="value-pinch" aria-label="The line's width at the pinch (pixels at 1920 wide)" value="6"></span></div>
        <input id="view-pinch" data-setting="pinch" type="range" min="2" max="120" step="1" value="6">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-worldWords">Words Y</label><span class="setting-number" data-unit="px" data-decimals="0"><input type="number" id="value-worldWords" aria-label="Height of the world model words, pixels at 1920 wide" value="6"></span></div>
        <input id="view-worldWords" data-setting="worldWords" type="range" min="110" max="800" step="1" value="149">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-chartTop">Chart top</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-chartTop" aria-label="Top of the chart, percent of the screen height" value="6"></span></div>
        <input id="view-chartTop" data-setting="chartTop" type="range" min="0" max="100" step="1" value="33">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-chartBottom">Chart bottom</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-chartBottom" aria-label="Bottom of the chart, percent of the screen height" value="6"></span></div>
        <input id="view-chartBottom" data-setting="chartBottom" type="range" min="0" max="100" step="1" value="85">
      </div>
      <div class="view-control" data-later>
        <div class="setting-heading"><label for="view-statsTop">Stats top</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-statsTop" aria-label="Top of the difference rows, percent of the screen height" value="6"></span></div>
        <input id="view-statsTop" data-setting="statsTop" type="range" min="0" max="100" step="1" value="36">
      </div>
      <div class="view-control" data-later>
        <div class="setting-heading"><label for="view-statsBottom">Stats bottom</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-statsBottom" aria-label="Bottom of the difference rows, percent of the screen height" value="6"></span></div>
        <input id="view-statsBottom" data-setting="statsBottom" type="range" min="0" max="100" step="1" value="83">
      </div>
      <div class="view-control" data-later>
        <div class="setting-heading"><label for="view-worldLine">Line Y</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-worldLine" aria-label="Height of the line, percent of the screen" value="6"></span></div>
        <input id="view-worldLine" data-setting="worldLine" type="range" min="30" max="100" step="1" value="86">
      </div>
      <div class="view-control" data-later>
        <div class="setting-heading"><label for="view-ribbon">Thickness</label><span class="setting-number" data-unit="px" data-decimals="0"><input type="number" id="value-ribbon" aria-label="Thickness of the ribbons, pixels at 1920 wide" value="6"></span></div>
        <input id="view-ribbon" data-setting="ribbon" type="range" min="4" max="120" step="1" value="14">
      </div>
      <div class="view-control" data-later>
        <div class="setting-heading"><label for="view-spacing">Spacing</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-spacing" aria-label="How far the ribbons spread, percent of the study" value="6"></span></div>
        <input id="view-spacing" data-setting="spacing" type="range" min="0" max="300" step="1" value="54">
      </div>
      <div class="view-control" data-later>
        <div class="setting-heading"><label for="view-flatLine">Flat line</label><span class="setting-number" data-unit="px" data-decimals="0"><input type="number" id="value-flatLine" aria-label="Thickness of the finished line, pixels at 1920 wide" value="6"></span></div>
        <input id="view-flatLine" data-setting="flatLine" type="range" min="1" max="120" step="1" value="1">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-logoSize">Logo</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-logoSize" aria-label="Size of the Knit Health words, percent of the Figma size" value="6"></span></div>
        <input id="view-logoSize" data-setting="logoSize" type="range" min="50" max="300" step="1" value="230">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-navSize">Nav</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-navSize" aria-label="Size of the nav links, percent of the Figma size" value="6"></span></div>
        <input id="view-navSize" data-setting="navSize" type="range" min="50" max="300" step="1" value="170">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-ctaSize">CTA</label><span class="setting-number" data-unit=" percent" data-decimals="0"><input type="number" id="value-ctaSize" aria-label="Size of the Partner with Knit button, percent of the Figma size" value="6"></span></div>
        <input id="view-ctaSize" data-setting="ctaSize" type="range" min="50" max="300" step="1" value="140">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-tangle">Tangle</label><span class="setting-number" data-unit="%"><input type="number" id="value-tangle" aria-label="How tangled the strings are (percent)" value="100"></span></div>
        <input id="view-tangle" data-setting="tangle" type="range" min="0.2" max="1.6" step="0.01" value="1.6">
      </div>
      <div class="view-control" data-waves>
        <div class="setting-heading"><label for="view-depth" title="0 keeps every string in its own layer, so they never run into each other; more lets them swap over and under, and past about 50% they can touch at a crossing">Over and under</label><span class="setting-number" data-unit="%"><input type="number" id="value-depth" aria-label="How much the strings swap over and under each other (percent); 0 keeps each in its own layer" value="0"></span></div>
        <input id="view-depth" data-setting="depth" type="range" min="0" max="2" step="0.01" value="0">
      </div>
      <div class="view-control">
        <div class="setting-heading"><label for="view-waveSpeed">Wave speed</label><span class="setting-number" data-unit="×"><input type="number" id="value-waveSpeed" aria-label="Idle wave speed (multiplier)" value="1.50"></span></div>
        <input id="view-waveSpeed" data-setting="waveSpeed" type="range" min="0" max="3" step="0.05" value="3">
      </div>
      <div class="view-control" data-shaded>
        <div class="setting-heading"><label for="view-gloss">Gloss</label><span class="setting-number" data-unit="%"><input type="number" id="value-gloss" aria-label="Gloss (percent)" value="0"></span></div>
        <input id="view-gloss" data-setting="gloss" type="range" min="0" max="1" step="0.01" value="0">
      </div>
      <div class="view-control" data-shaded>
        <div class="setting-heading"><label for="view-light">Light</label><span class="setting-number" data-unit="%"><input type="number" id="value-light" aria-label="Lighting strength (percent)" value="40"></span></div>
        <input id="view-light" data-setting="light" type="range" min="0.4" max="1.8" step="0.01" value="0.4">
      </div>
      <div class="view-control pattern-control" data-waves><label for="view-open">Opening</label><select id="view-open" data-setting="open"><option value="0" selected>A · Both edges bow</option><option value="1">B · Sides first</option><option value="2">C · Whip across</option><option value="3">D · Strings whip apart</option><option value="4">E · Warp</option></select></div>
      <div class="panel-actions"><button id="preview-line" data-waves>Jump to the line ↗</button><button id="reset-view">Reset</button></div>
      <div class="saved-note" id="saved-note" role="status">Settings apply for this visit.</div>
      </div>
    </section>
    `;window.__KNIT_BASE__=new URL("./",import.meta.url).href;if(!document.querySelector("#view-panel")){const n=document.createElement("div");n.id="knit-review-ui",n.hidden=!0,n.style.display="none",n.innerHTML=of,document.body.append(n)}window.addEventListener("keydown",n=>{/^[tchr]$/i.test(n.key)&&!n.metaKey&&!n.ctrlKey&&!n.altKey&&n.stopImmediatePropagation()},!0);var yc="1.3.27";function bd(n,e,t){return Math.max(n,Math.min(e,t))}function lf(n,e,t){return(1-t)*n+t*e}function cf(n,e,t,i){return lf(n,e,1-Math.exp(-t*i))}function uf(n,e){return(n%e+e)%e}var df=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(n){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const t=bd(0,this.currentTime/this.duration,1);e=t>=1;const i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=cf(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:s,onStart:r,onUpdate:a}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=a}};function hf(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var ff=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){this.wrapper=n,this.content=e,t&&(this.debouncedResize=hf(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},wd=class{events={};emit(n,...e){const t=this.events[n]||[];for(let i=0,s=t.length;i<s;i++)t[i]?.(...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{this.events[n]=this.events[n]?.filter(t=>e!==t)}}off(n,e){this.events[n]=this.events[n]?.filter(t=>e!==t)}destroy(){this.events={}}};const pf=100/6,yi={passive:!1};function bc(n,e){return n===1?pf:n===2?e:1}var mf=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new wd;constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,yi),this.element.addEventListener("touchstart",this.onTouchStart,yi),this.element.addEventListener("touchmove",this.onTouchMove,yi),this.element.addEventListener("touchend",this.onTouchEnd,yi)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,yi),this.element.removeEventListener("touchstart",this.onTouchStart,yi),this.element.removeEventListener("touchmove",this.onTouchMove,yi),this.element.removeEventListener("touchend",this.onTouchEnd,yi)}onTouchStart=n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})};onTouchMove=n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,s=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:n})};onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})};onWheel=n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const s=bc(i,this.window.width),r=bc(i,this.window.height);e*=s,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const wc=n=>Math.min(1,1.001-2**(-10*n));var gf=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new df;emitter=new wd;dimensions;virtualScroll;constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:x=!0,prevent:p,virtualScroll:m,overscroll:R=!0,autoRaf:B=!1,anchors:M=!1,autoToggle:v=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:L=!1,naiveDimensions:S=L,stopInertiaOnNavigate:T=!1,respectReducedMotion:U=!0}={}){window.lenisVersion=yc,window.lenis||(window.lenis={}),window.lenis.version=yc,h==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof o=="number"&&typeof l!="function"?l=wc:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:s,syncTouchLerp:r,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:_,autoResize:x,prevent:p,virtualScroll:m,overscroll:R,autoRaf:B,anchors:M,autoToggle:v,allowNestedScroll:b,naiveDimensions:S,stopInertiaOnNavigate:T,respectReducedMotion:U},this.dimensions=new ff(n,e,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new mf(t,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}onScrollEnd=n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=n=>{n.propertyName?.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()};setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}onClick=n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(s=>t.host===s.host&&t.pathname===s.pathname&&s.hash);if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(i.hash);this.scrollTo(r,s);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}};onPointerDown=n=>{n.button===1&&this.reset()};isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const s=i[0],r=i[i.length-1],a=40,o=Math.hypot(t.clientX-s.left,t.clientY-s.top)<=a,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=a;return o||l}onVirtualScroll=n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const s=i.type.includes("touch"),r=i.type.includes("wheel");if(s&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&s&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>_ instanceof HTMLElement&&(typeof c=="function"&&c?.(_)||_.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||s&&_.hasAttribute?.("data-lenis-prevent-touch")||r&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const d=s&&this.options.syncTouch,f=s&&i.type==="touchend";f&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:s=!0,lerp:r=s?this.options.lerp:void 0,duration:a=s?this.options.duration:void 0,easing:o=s?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(s?t=!0:(r=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=n,f=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let _=null;if(typeof d=="string"?(_=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),_||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(_=d),_){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?M.left:M.top}const x=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),R=getComputedStyle(this.rootElement),B=this.isHorizontal?Number.parseFloat(R.scrollPaddingLeft):Number.parseFloat(R.scrollPaddingTop);d=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(B)?0:B)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;const _=d-this.animatedScroll;_>this.limit/2?d-=this.limit:_<-this.limit/2&&(d+=this.limit)}}else d=bd(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=d),typeof a=="number"&&typeof o!="function"?o=wc:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,d,{duration:a,easing:o,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(_,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),s&&(this.targetScroll=_),x||this.emit(),x&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const s=n._lenis;let r,a,o,l,c,u,h,d,f,_;if(i-(s.time??0)>2e3){s.time=Date.now();const b=window.getComputedStyle(n);if(s.computedStyle=b,r=["auto","overlay","scroll"].includes(b.overflowX),a=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),u=["auto"].includes(b.overscrollBehaviorY),s.hasOverflowX=r,s.hasOverflowY=a,!(r||a))return!1;h=n.scrollWidth,d=n.scrollHeight,f=n.clientWidth,_=n.clientHeight,o=h>f,l=d>_,s.isScrollableX=o,s.isScrollableY=l,s.scrollWidth=h,s.scrollHeight=d,s.clientWidth=f,s.clientHeight=_,s.hasOverscrollBehaviorX=c,s.hasOverscrollBehaviorY=u}else o=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,a=s.hasOverflowY,h=s.scrollWidth,d=s.scrollHeight,f=s.clientWidth,_=s.clientHeight,c=s.hasOverscrollBehaviorX,u=s.hasOverscrollBehaviorY;if(!(r&&o||a&&l))return!1;const x=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,m,R,B,M,v;if(x==="horizontal")p=Math.round(n.scrollLeft),m=h-f,R=e,B=r,M=o,v=c;else if(x==="vertical")p=Math.round(n.scrollTop),m=d-_,R=t,B=a,M=l,v=u;else return!1;return!v&&(p>=m||p<=0)?!0:(R>0?p<m:p>0)&&B&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?uf(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};const Wo="knit-flow-keep",Ed=n=>{try{return localStorage.getItem(n)}catch{return null}},Td=(n,e)=>{try{localStorage.setItem(n,e)}catch{}},Ad=n=>{try{localStorage.removeItem(n)}catch{}},Ec=new URLSearchParams(location.search).get("keep");if(Ec!==null){/^(off|no|0)$/i.test(Ec)?Ad(Wo):Td(Wo,"on");const n=new URL(location.href);n.searchParams.delete("keep"),history.replaceState(history.state,"",n)}const Ua=Ed(Wo)==="on",Zl=new Map,ai=n=>Ua?Ed(n):Zl.get(n)??null,ji=(n,e)=>{Ua?Td(n,e):Zl.set(n,e)},ks=n=>{Ua?Ad(n):Zl.delete(n)},Za="knit-weave-guides-v1",on=20,_f="#F24822";function vf({button:n}={}){const e=document.createElement("div");e.className="guides",e.hidden=!0,e.innerHTML=`
    <canvas class="guides__ruler guides__ruler--top" aria-hidden="true"></canvas>
    <canvas class="guides__ruler guides__ruler--left" aria-hidden="true"></canvas>
    <div class="guides__corner"><span class="guides__xy">x 0 · y 0</span><button type="button" class="guides__clear" title="Remove all guides">×</button></div>
    <div class="guides__lines"></div>`,document.body.append(e);const t={h:e.querySelector(".guides__ruler--top"),v:e.querySelector(".guides__ruler--left")},i=e.querySelector(".guides__lines"),s=e.querySelector(".guides__xy"),r={on:!1,h:[],v:[]};try{const M=JSON.parse(ai(Za)||"null");if(M&&typeof M=="object"){r.on=M.on===!0;for(const v of["h","v"])r[v]=(Array.isArray(M[v])?M[v]:[]).filter(Number.isFinite)}}catch{}const a={x:-1,y:-1};let o=null,l=0;function c(){ji(Za,JSON.stringify(r))}function u(M){const v=t[M],b=M==="h",L=b?window.innerWidth:window.innerHeight,S=Math.min(window.devicePixelRatio||1,3),T=b?L:on,U=b?on:L;(v.width!==Math.round(T*S)||v.height!==Math.round(U*S))&&(v.width=Math.round(T*S),v.height=Math.round(U*S),v.style.width=`${T}px`,v.style.height=`${U}px`);const A=v.getContext("2d");A.setTransform(S,0,0,S,0,0),A.clearRect(0,0,T,U),A.fillStyle="rgba(244,244,242,.94)",A.fillRect(0,0,T,U),A.fillStyle="#C9CECC",b?A.fillRect(0,on-1,T,1):A.fillRect(on-1,0,1,U),A.fillStyle="#6B7280",A.font='9px "JetBrains Mono", "SF Mono", Menlo, monospace',A.textBaseline="top";for(let F=0;F<=L;F+=10){const w=F%100===0?on:F%50===0?8:4;b?A.fillRect(F,on-w,1,w):A.fillRect(on-w,F,w,1),F%100===0&&F>0&&(b?A.fillText(String(F),F+3,2):(A.save(),A.translate(2,F+3),A.rotate(Math.PI/2),A.fillText(String(F),0,-10),A.restore()))}A.fillStyle=_f;for(const F of r[M])b?A.fillRect(Math.round(F),0,1,on):A.fillRect(0,Math.round(F),on,1);const P=b?a.x:a.y;P>=0&&(A.fillStyle="#121A24",b?A.fillRect(Math.round(P),0,1,on):A.fillRect(0,Math.round(P),on,1))}function h(){u("h"),u("v")}function d(){const M=[];for(const v of["h","v"]){const b=v==="h",L=r[v];L.forEach((T,U)=>{const A=b?`top:${T}px`:`left:${T}px`;M.push(`<div class="guide guide--${v}" data-axis="${v}" data-index="${U}" style="${A}"><span class="guide__label">${b?"y":"x"} ${Math.round(T)}</span></div>`)});const S=[...L].sort((T,U)=>T-U);for(let T=1;T<S.length;T++){const U=S[T-1],A=S[T],P=Math.round(A-U);if(P<14)continue;const F=b?`top:${(U+A)/2}px`:`left:${(U+A)/2}px`;M.push(`<div class="guide__gap guide__gap--${v}" style="${F}"><span>${P}</span></div>`)}}i.innerHTML=M.join("")}function f(){cancelAnimationFrame(l),l=requestAnimationFrame(()=>{h()})}function _(M){r.on=M,e.hidden=!M,n?.setAttribute("aria-pressed",String(M)),M&&(h(),d()),c()}function x(M,v){if(v.button!==0)return;v.preventDefault();const b=M==="h"?v.clientY:v.clientX;r[M].push(b),o={axis:M,index:r[M].length-1,pointerId:v.pointerId,target:t[M]};try{t[M].setPointerCapture(v.pointerId)}catch{}d(),f()}function p(M){const v=M.target.closest(".guide");if(!v||M.button!==0)return;M.preventDefault();const b=v.dataset.axis,L=Number(v.dataset.index);o={axis:b,index:L,pointerId:M.pointerId,target:v};try{v.setPointerCapture(M.pointerId)}catch{}}function m(M){if(a.x=M.clientX,a.y=M.clientY,s.textContent=`x ${Math.round(a.x)} · y ${Math.round(a.y)}`,o&&M.pointerId===o.pointerId){r[o.axis][o.index]=Math.round(o.axis==="h"?M.clientY:M.clientX);const v=i.querySelector(`.guide[data-axis="${o.axis}"][data-index="${o.index}"]`);if(v){const b=r[o.axis][o.index];o.axis==="h"?v.style.top=`${b}px`:v.style.left=`${b}px`,v.querySelector(".guide__label").textContent=`${o.axis==="h"?"y":"x"} ${b}`}}f()}function R(M){if(!o||M.pointerId!==o.pointerId)return;const{axis:v,index:b}=o;o=null,r[v][b]<on&&r[v].splice(b,1),c(),d(),f()}function B(){o&&(r[o.axis].splice(o.index,1),o=null,c(),d(),f())}return t.h.addEventListener("pointerdown",M=>x("h",M)),t.v.addEventListener("pointerdown",M=>x("v",M)),i.addEventListener("pointerdown",p),i.addEventListener("dblclick",M=>{const v=M.target.closest(".guide");v&&(r[v.dataset.axis].splice(Number(v.dataset.index),1),c(),d(),f())}),window.addEventListener("pointermove",m,{passive:!0}),window.addEventListener("pointerup",R),window.addEventListener("pointercancel",B),e.querySelector(".guides__clear").addEventListener("click",()=>{r.h=[],r.v=[],c(),d(),f()}),window.addEventListener("resize",()=>{r.on&&f()},{passive:!0}),document.addEventListener("keydown",M=>{if(M.metaKey||M.ctrlKey||M.altKey)return;const v=M.target;v instanceof Element&&v.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')||(M.key==="r"||M.key==="R"?(M.preventDefault(),_(!r.on)):M.key==="Escape"&&o&&B())}),n?.addEventListener("click",()=>_(!r.on)),_(r.on),{toggle:()=>_(!r.on),get on(){return r.on},reset(){r.h=[],r.v=[],d(),_(!1),ks(Za)}}}const St={on:!1};const Jl="186",xf=0,Tc=1,Sf=2,fa=1,Mf=2,or=3,ts=0,jt=1,Nn=2,oi=0,Ds=1,Ac=2,Rc=3,Xo=4,yf=5,Es=100,bf=101,wf=102,Ef=103,Tf=104,Af=200,Rf=201,Cf=202,Pf=203,Rd=204,Cd=205,Lf=206,Df=207,Ff=208,If=209,Nf=210,Uf=211,Of=212,Bf=213,kf=214,qo=0,Yo=1,$o=2,vr=3,Ko=4,Zo=5,Jo=6,Qo=7,Pd=0,Hf=1,zf=2,yn=0,Ld=1,Dd=2,Fd=3,Id=4,Nd=5,Ud=6,Od=7,Bd=300,ns=301,Hs=302,Ja=303,Qa=304,Oa=306,jo=1e3,On=1001,el=1002,Ft=1003,Gf=1004,kr=1005,Nt=1006,ja=1007,Zi=1008,rn=1009,kd=1010,Hd=1011,xr=1012,Ql=1013,Gn=1014,Sn=1015,Vn=1016,jl=1017,ec=1018,Sr=1020,zd=35902,Gd=35899,Vd=1021,Wd=1022,Mn=1023,fi=1026,Ji=1027,Xd=1028,tc=1029,Ni=1030,nc=1031,ic=1033,pa=33776,ma=33777,ga=33778,_a=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37488,cl=37489,ya=37490,ul=37491,dl=37808,hl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,vl=37815,xl=37816,Sl=37817,Ml=37818,yl=37819,bl=37820,wl=37821,El=36492,Tl=36494,Al=36495,Rl=36283,Cl=36284,ba=36285,Pl=36286,Vf=3200,Ll=0,Wf=1,Li="",sn="srgb",wa="srgb-linear",Ea="linear",dt="srgb",eo=7680,Xf=519,qf=512,Yf=513,$f=514,sc=515,Kf=516,Zf=517,rc=518,Jf=519,Qf=35044,Cc="300 es",Bn=2e3,Mr=2001;function jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ep(){const n=Ta("canvas");return n.style.display="block",n}const Pc={};function Lc(...n){const e="THREE."+n.shift();console.log(e,...n)}function qd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ke(...n){n=qd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=qd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Fs(...n){const e=n.join(" ");e in Pc||(Pc[e]=!0,Ke(...n))}function tp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const np={[qo]:Yo,[$o]:Jo,[Ko]:Qo,[vr]:Zo,[Yo]:qo,[Jo]:$o,[Qo]:Ko,[Zo]:vr};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Dl=180/Math.PI;function Cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function ip(n,e){return(n%e+e)%e}function no(n,e,t){return(1-t)*n+t*e}function Zs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mc=class mc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mc.prototype.isVector2=!0;let ot=mc;class Ys{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],_=r[a+2],x=r[a+3];if(h!==x||l!==d||c!==f||u!==_){let p=l*d+c*f+u*_+h*x;p<0&&(d=-d,f=-f,_=-_,x=-x,p=-p);let m=1-o;if(p<.9995){const R=Math.acos(p),B=Math.sin(R);m=Math.sin(m*R)/B,o=Math.sin(o*R)/B,l=l*m+d*o,c=c*m+f*o,u=u*m+_*o,h=h*m+x*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+_*o,h=h*m+x*o;const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gc=class gc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gc.prototype.isVector3=!0;let ne=gc;const io=new ne,Dc=new Ys,_c=class _c{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],x=s[0],p=s[3],m=s[6],R=s[1],B=s[4],M=s[7],v=s[2],b=s[5],L=s[8];return r[0]=a*x+o*R+l*v,r[3]=a*p+o*B+l*b,r[6]=a*m+o*M+l*L,r[1]=c*x+u*R+h*v,r[4]=c*p+u*B+h*b,r[7]=c*m+u*M+h*L,r[2]=d*x+f*R+_*v,r[5]=d*p+f*B+_*b,r[8]=d*m+f*M+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,_=t*h+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(so.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(so.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_c.prototype.isMatrix3=!0;let Je=_c;const so=new Je,Fc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){const n={enabled:!0,workingColorSpace:wa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wa]:{primaries:e,whitePoint:i,transfer:Ea,toXYZ:Fc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Fc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const at=sp();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class rp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Ta("canvas")),us.width=e.width,us.height=e.height;const s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ap=0;class ac{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ro(s[a].image)):r.push(ro(s[a]))}else r=ro(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let op=0;const ao=new ne;class Gt extends ss{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=On,s=On,r=Nt,a=Zi,o=Mn,l=rn,c=Gt.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Cr(),this.name="",this.source=new ac(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Bd;Gt.DEFAULT_ANISOTROPY=1;const vc=class vc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const B=(c+1)/2,M=(f+1)/2,v=(m+1)/2,b=(u+d)/4,L=(h+x)/4,S=(_+p)/4;return B>M&&B>v?B<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(B),s=b/i,r=L/i):M>v?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=S/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=L/r,s=S/r),this.set(i,s,r,t),this}let R=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(p-_)/R,this.y=(h-x)/R,this.z=(d-u)/R,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vc.prototype.isVector4=!0;let xt=vc;class lp extends ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Gt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ac(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends lp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yd extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cp extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Na=class Na{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,_,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,_,x,p)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,_,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,x=c*h;t[0]=d+x*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,dp)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),bi.crossVectors(i,en),bi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),bi.crossVectors(i,en)),bi.normalize(),Hr.crossVectors(en,bi),s[0]=bi.x,s[4]=Hr.x,s[8]=en.x,s[1]=bi.y,s[5]=Hr.y,s[9]=en.y,s[2]=bi.z,s[6]=Hr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],x=i[6],p=i[10],m=i[14],R=i[3],B=i[7],M=i[11],v=i[15],b=s[0],L=s[4],S=s[8],T=s[12],U=s[1],A=s[5],P=s[9],F=s[13],w=s[2],O=s[6],V=s[10],k=s[14],K=s[3],Z=s[7],Y=s[11],$=s[15];return r[0]=a*b+o*U+l*w+c*K,r[4]=a*L+o*A+l*O+c*Z,r[8]=a*S+o*P+l*V+c*Y,r[12]=a*T+o*F+l*k+c*$,r[1]=u*b+h*U+d*w+f*K,r[5]=u*L+h*A+d*O+f*Z,r[9]=u*S+h*P+d*V+f*Y,r[13]=u*T+h*F+d*k+f*$,r[2]=_*b+x*U+p*w+m*K,r[6]=_*L+x*A+p*O+m*Z,r[10]=_*S+x*P+p*V+m*Y,r[14]=_*T+x*F+p*k+m*$,r[3]=R*b+B*U+M*w+v*K,r[7]=R*L+B*A+M*O+v*Z,r[11]=R*S+B*P+M*V+v*Y,r[15]=R*T+B*F+M*k+v*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],x=e[7],p=e[11],m=e[15],R=l*f-c*d,B=o*f-c*h,M=o*d-l*h,v=a*f-c*u,b=a*d-l*u,L=a*h-o*u;return t*(x*R-p*B+m*M)-i*(_*R-p*v+m*b)+s*(_*B-x*v+m*L)-r*(_*M-x*b+p*L)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],x=e[13],p=e[14],m=e[15],R=t*o-i*a,B=t*l-s*a,M=t*c-r*a,v=i*l-s*o,b=i*c-r*o,L=s*c-r*l,S=u*x-h*_,T=u*p-d*_,U=u*m-f*_,A=h*p-d*x,P=h*m-f*x,F=d*m-f*p,w=R*F-B*P+M*A+v*U-b*T+L*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/w;return e[0]=(o*F-l*P+c*A)*O,e[1]=(s*P-i*F-r*A)*O,e[2]=(x*L-p*b+m*v)*O,e[3]=(d*b-h*L-f*v)*O,e[4]=(l*U-a*F-c*T)*O,e[5]=(t*F-s*U+r*T)*O,e[6]=(p*M-_*L-m*B)*O,e[7]=(u*L-d*M+f*B)*O,e[8]=(a*P-o*U+c*S)*O,e[9]=(i*U-t*P-r*S)*O,e[10]=(_*b-x*M+m*R)*O,e[11]=(h*M-u*b-f*R)*O,e[12]=(o*T-a*A-l*S)*O,e[13]=(t*A-i*T+s*S)*O,e[14]=(x*B-_*v-p*R)*O,e[15]=(u*v-h*B+d*R)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,_=r*h,x=a*u,p=a*h,m=o*h,R=l*c,B=l*u,M=l*h,v=i.x,b=i.y,L=i.z;return s[0]=(1-(x+m))*v,s[1]=(f+M)*v,s[2]=(_-B)*v,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(d+m))*b,s[6]=(p+R)*b,s[7]=0,s[8]=(_+B)*L,s[9]=(p-R)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);const c=1/a,u=1/o,h=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Bn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let _,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===Bn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Mr)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Bn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let _,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===Bn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===Mr)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Na.prototype.isMatrix4=!0;let Mt=Na;const ds=new ne,pn=new Mt,up=new ne(0,0,0),dp=new ne(1,1,1),bi=new ne,Hr=new ne,en=new ne,Nc=new Mt,Uc=new Ys;class Ui{constructor(e=0,t=0,i=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class $d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hp=0;const Oc=new ne,hs=new Ys,Yn=new Mt,zr=new ne,Js=new ne,fp=new ne,pp=new Ys,Bc=new ne(1,0,0),kc=new ne(0,1,0),Hc=new ne(0,0,1),zc={type:"added"},mp={type:"removed"},fs={type:"childadded",child:null},oo={type:"childremoved",child:null};class Vt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new ne,t=new Ui,i=new Ys,s=new ne(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(Hc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(Hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Js,zr,this.up):Yn.lookAt(zr,Js,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Yn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),fs.child=e,this.dispatchEvent(fs),fs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mp),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new ne(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gp={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=ip(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=co(a,r,e+1/3),this.g=co(a,r,e),this.b=co(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=Kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return at.workingToColorSpace(Ht.copy(this),e),Math.round(st(Ht.r*255,0,255))*65536+Math.round(st(Ht.g*255,0,255))*256+Math.round(st(Ht.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Ht.copy(this),t);const i=Ht.r,s=Ht.g,r=Ht.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=sn){at.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,s=Ht.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Vr);const i=no(wi.h,Vr.h,t),s=no(wi.s,Vr.s,t),r=no(wi.l,Vr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Qe;Qe.NAMES=Kd;class Zd extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new ne,$n=new ne,uo=new ne,Kn=new ne,ps=new ne,ms=new ne,Gc=new ne,ho=new ne,fo=new ne,po=new ne,mo=new xt,go=new xt,_o=new xt;class xn{constructor(e=new ne,t=new ne,i=new ne){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){mn.subVectors(s,t),$n.subVectors(i,t),uo.subVectors(e,t);const a=mn.dot(mn),o=mn.dot($n),l=mn.dot(uo),c=$n.dot($n),u=$n.dot(uo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,i),_o.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(_o,r.z),a}static isFrontFacing(e,t,i,s){return mn.subVectors(i,t),$n.subVectors(e,t),mn.cross($n).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),mn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,i),ms.subVectors(r,i),ho.subVectors(e,i);const l=ps.dot(ho),c=ms.dot(ho);if(l<=0&&c<=0)return t.copy(i);fo.subVectors(e,s);const u=ps.dot(fo),h=ms.dot(fo);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ps,a);po.subVectors(e,r);const f=ps.dot(po),_=ms.dot(po);if(_>=0&&f<=_)return t.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ms,o);const p=u*_-f*h;if(p<=0&&h-u>=0&&f-_>=0)return Gc.subVectors(r,s),o=(h-u)/(h-u+(f-_)),t.copy(s).addScaledVector(Gc,o);const m=1/(p+x+d);return a=x*m,o=d*m,t.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pr{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Xr.subVectors(this.max,Qs),gs.subVectors(e.a,Qs),_s.subVectors(e.b,Qs),vs.subVectors(e.c,Qs),Ei.subVectors(_s,gs),Ti.subVectors(vs,_s),zi.subVectors(gs,vs);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-zi.z,zi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,zi.z,0,-zi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-zi.y,zi.x,0];return!vo(t,gs,_s,vs,Xr)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,gs,_s,vs,Xr))?!1:(qr.crossVectors(Ei,Ti),t=[qr.x,qr.y,qr.z],vo(t,gs,_s,vs,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],gn=new ne,Wr=new Pr,gs=new ne,_s=new ne,vs=new ne,Ei=new ne,Ti=new ne,zi=new ne,Qs=new ne,Xr=new ne,qr=new ne,Gi=new ne;function vo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gi.fromArray(n,r);const o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wt=new ne,Yr=new ot;let _p=0;class fn extends ss{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qf,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Jd extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qd extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ci extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const vp=new Pr,js=new ne,xo=new ne;class Ba{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(xo)),this.expandByPoint(js.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xp=0;const ln=new Mt,So=new Vt,xs=new ne,tn=new Pr,er=new Pr,Lt=new ne;class Wn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?Qd:Jd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ci(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(tn.min,er.min),tn.expandByPoint(Lt),Lt.addVectors(tn.max,er.max),tn.expandByPoint(Lt)):(tn.expandByPoint(er.min),tn.expandByPoint(er.max))}tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(e,c),Lt.add(xs)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new ne,l[S]=new ne;const c=new ne,u=new ne,h=new ne,d=new ot,f=new ot,_=new ot,x=new ne,p=new ne;function m(S,T,U){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,U),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,T),_.fromBufferAttribute(r,U),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const A=1/(f.x*_.y-_.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(A),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(A),o[S].add(x),o[T].add(x),o[U].add(x),l[S].add(p),l[T].add(p),l[U].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let S=0,T=R.length;S<T;++S){const U=R[S],A=U.start,P=U.count;for(let F=A,w=A+P;F<w;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const B=new ne,M=new ne,v=new ne,b=new ne;function L(S){v.fromBufferAttribute(s,S),b.copy(v);const T=o[S];B.copy(T),B.sub(v.multiplyScalar(v.dot(T))).normalize(),M.crossVectors(b,T);const A=M.dot(l[S])<0?-1:1;a.setXYZW(S,B.x,B.y,B.z,A)}for(let S=0,T=R.length;S<T;++S){const U=R[S],A=U.start,P=U.count;for(let F=A,w=A+P;F<w;F+=3)L(e.getX(F+0)),L(e.getX(F+1)),L(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new ne,r=new ne,a=new ne,o=new ne,l=new ne,c=new ne,u=new ne,h=new ne;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new fn(d,u,h)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new ne,Sp=new ne,Mp=new Je;class Ci{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Mo.subVectors(i,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Mo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mp.getNormalMatrix(e),s=this.coplanarPoint(Mo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yp=0;class Lr extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Ds,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Cd,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jn=new ne,yo=new ne,$r=new ne,Kr=new ne;class bp{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yo.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(yo);const r=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=Kr.dot(this.direction),l=-Kr.dot($r),c=Kr.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yo).addScaledVector($r,d),f}intersectSphere(e,t){if(e.radius<0)return null;Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,_=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=i.x-a.x,R=i.y-a.y,B=i.z-a.z,M=Math.abs(l),v=Math.abs(c),b=Math.abs(u);let L,S,T,U,A,P,F,w,O,V,k,K;if(M>=v&&M>=b?(T=l,P=h,O=_,K=m,l>=0?(L=c,S=u,U=d,A=f,F=x,w=p,V=R,k=B):(L=u,S=c,U=f,A=d,F=p,w=x,V=B,k=R)):v>=b?(T=c,P=d,O=x,K=R,c>=0?(L=u,S=l,U=f,A=h,F=p,w=_,V=B,k=m):(L=l,S=u,U=h,A=f,F=_,w=p,V=m,k=B)):(T=u,P=f,O=p,K=B,u>=0?(L=l,S=c,U=h,A=d,F=_,w=x,V=m,k=R):(L=c,S=l,U=d,A=h,F=x,w=_,V=R,k=m)),T===0)return null;const Z=L/T,Y=S/T,$=1/T,fe=U-Z*P,he=A-Y*P,me=F-Z*O,ye=w-Y*O,Oe=V-Z*K,J=k-Y*K,ae=Oe*ye-J*me,Ce=fe*J-he*Oe,ze=me*he-ye*fe;if(s){if(ae<0||Ce<0||ze<0)return null}else if((ae<0||Ce<0||ze<0)&&(ae>0||Ce>0||ze>0))return null;const Pe=ae+Ce+ze;if(Pe===0)return null;const Se=$*(ae*P+Ce*O+ze*K);return(Pe>0?Se<0:Se>0)?null:this.at(Se/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oc extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vc=new Mt,Vi=new bp,Zr=new Ba,Wc=new ne,Jr=new ne,Qr=new ne,jr=new ne,bo=new ne,ea=new ne,Xc=new ne,ta=new ne;class wn extends Vt{constructor(e=new Wn,t=new oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(bo.fromBufferAttribute(h,e),a?ea.addScaledVector(bo,u):ea.addScaledVector(bo.sub(t),u))}t.add(ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Zr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Zr,Wc)===null||Vi.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Vc.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=a[p.materialIndex],R=Math.max(p.start,f.start),B=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=R,v=B;M<v;M+=3){const b=o.getX(M),L=o.getX(M+1),S=o.getX(M+2);s=na(this,m,e,i,c,u,h,b,L,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const R=o.getX(p),B=o.getX(p+1),M=o.getX(p+2);s=na(this,a,e,i,c,u,h,R,B,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=a[p.materialIndex],R=Math.max(p.start,f.start),B=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=R,v=B;M<v;M+=3){const b=M,L=M+1,S=M+2;s=na(this,m,e,i,c,u,h,b,L,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const R=p,B=p+1,M=p+2;s=na(this,a,e,i,c,u,h,R,B,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function wp(n,e,t,i,s,r,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ts,o),l===null)return null;ta.copy(o),ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:n}}function na(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,jr);const u=wp(n,e,t,i,Jr,Qr,jr,Xc);if(u){const h=new ne;xn.getBarycoord(Xc,Jr,Qr,jr,h),s&&(u.uv=xn.getInterpolatedAttribute(s,o,l,c,h,new ot)),r&&(u.uv1=xn.getInterpolatedAttribute(r,o,l,c,h,new ot)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,h,new ne),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new ne,materialIndex:0};xn.getNormal(Jr,Qr,jr,d.normal),u.face=d,u.barycoord=h}return u}class jd extends Gt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ft,u=Ft,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wi=new Ba,Ep=new ot(.5,.5),ia=new ne;class lc{constructor(e=new Ci,t=new Ci,i=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],x=r[9],p=r[10],m=r[11],R=r[12],B=r[13],M=r[14],v=r[15];if(s[0].setComponents(c-a,f-u,m-_,v-R).normalize(),s[1].setComponents(c+a,f+u,m+_,v+R).normalize(),s[2].setComponents(c+o,f+h,m+x,v+B).normalize(),s[3].setComponents(c-o,f-h,m-x,v-B).normalize(),i)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,f-d,m-p,v-M).normalize();else if(s[4].setComponents(c-l,f-d,m-p,v-M).normalize(),t===Bn)s[5].setComponents(c+l,f+d,m+p,v+M).normalize();else if(t===Mr)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);const t=Ep.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eh extends Gt{constructor(e=[],t=ns,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tp extends Gt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yr extends Gt{constructor(e,t,i=Gn,s,r,a,o=Ft,l=Ft,c,u=fi,h=1){if(u!==fi&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ac(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ap extends yr{constructor(e,t=Gn,i=ns,s,r,a=Ft,o=Ft,l,c=fi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class th extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dr extends Wn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(h,2));function _(x,p,m,R,B,M,v,b,L,S,T){const U=M/L,A=v/S,P=M/2,F=v/2,w=b/2,O=L+1,V=S+1;let k=0,K=0;const Z=new ne;for(let Y=0;Y<V;Y++){const $=Y*A-F;for(let fe=0;fe<O;fe++){const he=fe*U-P;Z[x]=he*R,Z[p]=$*B,Z[m]=w,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[m]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(fe/L),h.push(1-Y/S),k+=1}}for(let Y=0;Y<S;Y++)for(let $=0;$<L;$++){const fe=d+$+O*Y,he=d+$+O*(Y+1),me=d+($+1)+O*(Y+1),ye=d+($+1)+O*Y;l.push(fe,he,ye),l.push(he,me,ye),K+=6}o.addGroup(f,K,T),f+=K,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fr extends Wn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],x=[],p=[];for(let m=0;m<u;m++){const R=m*d-a;for(let B=0;B<c;B++){const M=B*h-r;_.push(M,-R,0),x.push(0,0,1),p.push(B/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<o;R++){const B=R+c*m,M=R+c*(m+1),v=R+1+c*(m+1),b=R+1+c*m;f.push(B,M,b),f.push(M,v,b)}this.setIndex(f),this.setAttribute("position",new ci(_,3)),this.setAttribute("normal",new ci(x,3)),this.setAttribute("uv",new ci(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}function zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(qc(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(qc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=zs(n[t]);for(const s in i)e[s]=i[s]}return e}function qc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Cp={clone:zs,merge:Yt};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Dp extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fp extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ip extends Fp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Np extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Up extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ih extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const wo=new Mt,Yc=new ne,$c=new ne;class Op{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Mr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sa=new ne,ra=new Ys,An=new ne;class sh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sa,ra,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sa,ra,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new ne,Kc=new ot,Zc=new ot;class hn extends sh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,Zc),t.subVectors(Zc,Kc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ka extends sh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bp extends Op{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jc extends ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Bp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class kp extends ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ss=-90,Ms=1;class Hp extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Ss,Ms,e,t);s.layers=this.layers,this.add(s);const r=new hn(Ss,Ms,e,t);r.layers=this.layers,this.add(r);const a=new hn(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const o=new hn(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const l=new hn(Ss,Ms,e,t);l.layers=this.layers,this.add(l);const c=new hn(Ss,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zp extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xc=class xc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};xc.prototype.isMatrix2=!0;let Qc=xc;function jc(n,e,t,i){const s=Gp(i);switch(t){case Vd:return n*e;case Xd:return n*e/s.components*s.byteLength;case tc:return n*e/s.components*s.byteLength;case Ni:return n*e*2/s.components*s.byteLength;case nc:return n*e*2/s.components*s.byteLength;case Wd:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case ic:return n*e*4/s.components*s.byteLength;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(n,16)*Math.max(e,8)/4;case tl:case il:return Math.max(n,8)*Math.max(e,8)/2;case rl:case al:case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case ya:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case El:case Tl:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ba:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gp(n){switch(n){case rn:case kd:return{byteLength:1,components:1};case xr:case Hd:case Vn:return{byteLength:2,components:1};case jl:case ec:return{byteLength:2,components:4};case Gn:case Ql:case Sn:return{byteLength:4,components:1};case zd:case Gd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function rh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vp(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],x=h[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,im=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Um=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:$p,alphatest_pars_fragment:Kp,aomap_fragment:Zp,aomap_pars_fragment:Jp,batching_pars_vertex:Qp,batching_vertex:jp,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:um,color_pars_vertex:dm,color_vertex:hm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:_m,emissivemap_fragment:vm,emissivemap_pars_fragment:xm,colorspace_fragment:Sm,colorspace_pars_fragment:Mm,envmap_fragment:ym,envmap_common_pars_fragment:bm,envmap_pars_fragment:wm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Um,envmap_vertex:Tm,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Dm,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Im,lights_pars_begin:Nm,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:km,lights_phong_pars_fragment:Hm,lights_physical_fragment:zm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:Xm,lightprobes_pars_fragment:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:jm,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:h0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:v0,packing:x0,premultiplied_alpha_fragment:S0,project_vertex:M0,dithering_fragment:y0,dithering_pars_fragment:b0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:F0,specularmap_fragment:I0,specularmap_pars_fragment:N0,tonemapping_fragment:U0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:k0,uv_pars_fragment:H0,uv_pars_vertex:z0,uv_vertex:G0,worldpos_vertex:V0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:$0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distance_vert:Q0,distance_frag:j0,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:hg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:_g,points_vert:vg,points_frag:xg,shadow_vert:Sg,shadow_frag:Mg,sprite_vert:yg,sprite_frag:bg},Fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Dn={basic:{uniforms:Yt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Yt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Yt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Yt([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Yt([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Yt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Yt([Fe.points,Fe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Yt([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Yt([Fe.common,Fe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Yt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Yt([Fe.sprite,Fe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Yt([Fe.common,Fe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Yt([Fe.lights,Fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Dn.physical={uniforms:Yt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const aa={r:0,b:0,g:0},wg=new Mt,ah=new Je;ah.set(-1,0,0,0,1,0,0,0,1);function Eg(n,e,t,i,s,r){const a=new Qe(0);let o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(R){let B=R.isScene===!0?R.background:null;if(B&&B.isTexture){const M=R.backgroundBlurriness>0;B=e.get(B,M)}return B}function _(R){let B=!1;const M=f(R);M===null?p(a,o):M&&M.isColor&&(p(M,1),B=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||B)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(R,B){const M=f(B);M&&(M.isCubeTexture||M.mapping===Oa)?(c===void 0&&(c=new wn(new Dr(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:zs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(B.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ah),c.material.toneMapped=at.getTransfer(M.colorSpace)!==dt,(u!==M||h!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new wn(new Fr(2,2),new En({name:"BackgroundMaterial",uniforms:zs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,l.material.toneMapped=at.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=n.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function p(R,B){R.getRGB(aa,nh(n)),t.buffers.color.setClear(aa.r,aa.g,aa.b,B,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,B=1){a.set(R),o=B,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,p(a,o)},render:_,addToRenderList:x,dispose:m}}function Tg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(A,P,F,w,O){let V=!1;const k=h(A,w,F,P);r!==k&&(r=k,c(r.object)),V=f(A,w,F,O),V&&_(A,w,F,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(A,P,F,w),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function h(A,P,F,w){const O=w.wireframe===!0;let V=i[P.id];V===void 0&&(V={},i[P.id]=V);const k=A.isInstancedMesh===!0?A.id:0;let K=V[k];K===void 0&&(K={},V[k]=K);let Z=K[F.id];Z===void 0&&(Z={},K[F.id]=Z);let Y=Z[O];return Y===void 0&&(Y=d(l()),Z[O]=Y),Y}function d(A){const P=[],F=[],w=[];for(let O=0;O<t;O++)P[O]=0,F[O]=0,w[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:w,object:A,attributes:{},index:null}}function f(A,P,F,w){const O=r.attributes,V=P.attributes;let k=0;const K=F.getAttributes();for(const Z in K)if(K[Z].location>=0){const $=O[Z];let fe=V[Z];if(fe===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),$===void 0||$.attribute!==fe||fe&&$.data!==fe.data)return!0;k++}return r.attributesNum!==k||r.index!==w}function _(A,P,F,w){const O={},V=P.attributes;let k=0;const K=F.getAttributes();for(const Z in K)if(K[Z].location>=0){let $=V[Z];$===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&($=A.instanceColor));const fe={};fe.attribute=$,$&&$.data&&(fe.data=$.data),O[Z]=fe,k++}r.attributes=O,r.attributesNum=k,r.index=w}function x(){const A=r.newAttributes;for(let P=0,F=A.length;P<F;P++)A[P]=0}function p(A){m(A,0)}function m(A,P){const F=r.newAttributes,w=r.enabledAttributes,O=r.attributeDivisors;F[A]=1,w[A]===0&&(n.enableVertexAttribArray(A),w[A]=1),O[A]!==P&&(n.vertexAttribDivisor(A,P),O[A]=P)}function R(){const A=r.newAttributes,P=r.enabledAttributes;for(let F=0,w=P.length;F<w;F++)P[F]!==A[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function B(A,P,F,w,O,V,k){k===!0?n.vertexAttribIPointer(A,P,F,O,V):n.vertexAttribPointer(A,P,F,w,O,V)}function M(A,P,F,w){x();const O=w.attributes,V=F.getAttributes(),k=P.defaultAttributeValues;for(const K in V){const Z=V[K];if(Z.location>=0){let Y=O[K];if(Y===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor)),Y!==void 0){const $=Y.normalized,fe=Y.itemSize,he=e.get(Y);if(he===void 0)continue;const me=he.buffer,ye=he.type,Oe=he.bytesPerElement,J=ye===n.INT||ye===n.UNSIGNED_INT||Y.gpuType===Ql;if(Y.isInterleavedBufferAttribute){const ae=Y.data,Ce=ae.stride,ze=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Z.locationSize;Pe++)m(Z.location+Pe,ae.meshPerAttribute);A.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<Z.locationSize;Pe++)p(Z.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Pe=0;Pe<Z.locationSize;Pe++)B(Z.location+Pe,fe/Z.locationSize,ye,$,Ce*Oe,(ze+fe/Z.locationSize*Pe)*Oe,J)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)m(Z.location+ae,Y.meshPerAttribute);A.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<Z.locationSize;ae++)p(Z.location+ae);n.bindBuffer(n.ARRAY_BUFFER,me);for(let ae=0;ae<Z.locationSize;ae++)B(Z.location+ae,fe/Z.locationSize,ye,$,fe*Oe,fe/Z.locationSize*ae*Oe,J)}}else if(k!==void 0){const $=k[K];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(Z.location,$);break;case 3:n.vertexAttrib3fv(Z.location,$);break;case 4:n.vertexAttrib4fv(Z.location,$);break;default:n.vertexAttrib1fv(Z.location,$)}}}}R()}function v(){T();for(const A in i){const P=i[A];for(const F in P){const w=P[F];for(const O in w){const V=w[O];for(const k in V)u(V[k].object),delete V[k];delete w[O]}}delete i[A]}}function b(A){if(i[A.id]===void 0)return;const P=i[A.id];for(const F in P){const w=P[F];for(const O in w){const V=w[O];for(const k in V)u(V[k].object),delete V[k];delete w[O]}}delete i[A.id]}function L(A){for(const P in i){const F=i[P];for(const w in F){const O=F[w];if(O[A.id]===void 0)continue;const V=O[A.id];for(const k in V)u(V[k].object),delete V[k];delete O[A.id]}}}function S(A){for(const P in i){const F=i[P],w=A.isInstancedMesh===!0?A.id:0,O=F[w];if(O!==void 0){for(const V in O){const k=O[V];for(const K in k)u(k[K].object),delete k[K];delete O[V]}delete F[w],Object.keys(F).length===0&&delete i[P]}}}function T(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:U,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:p,disableUnusedAttributes:R}}function Ag(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Mn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const S=L===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==rn&&L!==Sn&&!S&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),B=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:R,maxVaryings:B,maxFragmentUniforms:M,maxSamples:v,samples:b}}function Cg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ci,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const R=r?0:i,B=R*4;let M=m.clippingState||null;l.value=M,M=u(_,d,B,f);for(let v=0;v!==B;++v)M[v]=t[v];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const m=f+x*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<m)&&(p=new Float32Array(m));for(let B=0,M=f;B!==x;++B,M+=4)a.copy(h[B]).applyMatrix4(R,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const Rs=4,Pg=6,Lg=20,Dg=256,tr=new ka,eu=new Qe;let Eo=null,To=0,Ao=0,Ro=!1;const Fg=new ne,Xi=new ne;class tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Fg}=r;Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,To,Ao),this._renderer.xr.enabled=Ro,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Vn,format:Mn,colorSpace:wa,depthBuffer:!1},s=nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ig(r)),this._blurMaterial=Ug(r,e,t),this._ggxMaterial=Ng(r,e,t)}return s}_compileMaterial(e){const t=new wn(new Wn,e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,i,s,r){const l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(eu),h.toneMapping=yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new Dr,new oc({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const R=e.background;R?R.isColor&&(p.color.copy(R),e.background=null,m=!0):(p.color.copy(eu),m=!0);for(let B=0;B<6;B++){const M=B%3;M===0?(l.up.set(0,c[B],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[B],r.y,r.z)):M===1?(l.up.set(0,0,c[B]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[B],r.z)):(l.up.set(0,c[B],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[B]));const v=this._cubeSize;ys(s,M*v,B>2?v:0,v,v),h.setRenderTarget(s),m&&h.render(x,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ns||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ys(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:_}=this,x=this._sizeLods[i],p=3*x*(i>_-Rs?i-_+Rs:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,ys(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(o,tr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ys(e,p,m,3*x,2*x),s.setRenderTarget(e),s.render(o,tr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],h=3*u*(s>this._lodMax-Rs?s-this._lodMax+Rs:0),d=4*(this._cubeSize-u);ys(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,tr)}}function Ig(n){const e=[],t=[];let i=n;const s=n-Rs+1+Pg;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,_=new Float32Array(f*d*h),x=new Float32Array(f*d*h);for(let m=0;m<h;m++){const R=m%3*2/3-1,B=m>2?0:-1,M=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];_.set(M,f*d*m);for(let v=0;v<d;v++){const b=u[v*2]*2-1,L=u[v*2+1]*2-1;m===0?Xi.set(1,L,b):m===1?Xi.set(-b,1,-L):m===2?Xi.set(-b,L,1):m===3?Xi.set(-1,L,-b):m===4?Xi.set(-b,-1,L):Xi.set(b,L,-1),Xi.toArray(x,(m*d+v)*f)}}const p=new Wn;p.setAttribute("position",new fn(_,f)),p.setAttribute("outputDirection",new fn(x,f)),t.push(new wn(p,null)),i>Rs&&i--}return{lodMeshes:t,sizeLods:e}}function nu(n,e,t){const i=new bn(n,e,t);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ng(n,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ug(n,e,t){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:Lg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function iu(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function su(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class oh extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new eh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Dr(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:oi});r.uniforms.tEquirect.value=t;const a=new wn(s,r),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Nt),new Hp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Og(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ja||f===Qa)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const x=new oh(_.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,_=f===Ja||f===Qa,x=f===ns||f===Hs;if(_||x){let p=t.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new tu(n)),p=_?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const R=d.image;return _&&R&&R.height>0||x&&R&&l(R)?(i===null&&(i=new tu(n)),p=_?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===Ja?d.mapping=ns:f===Qa&&(d.mapping=Hs),d}function l(d){let f=0;const _=6;for(let x=0;x<_;x++)d[x]!==void 0&&f++;return f===_}function c(d){const f=d.target;f.removeEventListener("dispose",c);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Bg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fs("WebGLRenderer: "+i+" extension not supported."),s}}}function kg(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let x=0;if(_===void 0)return;if(f!==null){const R=f.array;x=f.version;for(let B=0,M=R.length;B<M;B+=3){const v=R[B+0],b=R[B+1],L=R[B+2];d.push(v,b,b,L,L,v)}}else{const R=_.array;x=_.version;for(let B=0,M=R.length/3-1;B<M;B+=3){const v=B+0,b=B+1,L=B+2;d.push(v,b,b,L,L,v)}}const p=new(_.count>=65535?Qd:Jd)(d,1);p.version=x;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Hg(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function zg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Gg(n,e,t){const i=new WeakMap,s=new xt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let T=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let B=0;f===!0&&(B=1),_===!0&&(B=2),x===!0&&(B=3);let M=o.attributes.position.count*B,v=1;M>e.maxTextureSize&&(v=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*v*4*h),L=new Yd(b,M,v,h);L.type=Sn,L.needsUpdate=!0;const S=B*4;for(let U=0;U<h;U++){const A=p[U],P=m[U],F=R[U],w=M*v*4*U;for(let O=0;O<A.count;O++){const V=O*S;f===!0&&(s.fromBufferAttribute(A,O),b[w+V+0]=s.x,b[w+V+1]=s.y,b[w+V+2]=s.z,b[w+V+3]=0),_===!0&&(s.fromBufferAttribute(P,O),b[w+V+4]=s.x,b[w+V+5]=s.y,b[w+V+6]=s.z,b[w+V+7]=0),x===!0&&(s.fromBufferAttribute(F,O),b[w+V+8]=s.x,b[w+V+9]=s.y,b[w+V+10]=s.z,b[w+V+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:L,size:new ot(M,v)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Vg(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Wg={[Ld]:"LINEAR_TONE_MAPPING",[Dd]:"REINHARD_TONE_MAPPING",[Fd]:"CINEON_TONE_MAPPING",[Id]:"ACES_FILMIC_TONE_MAPPING",[Ud]:"AGX_TONE_MAPPING",[Od]:"NEUTRAL_TONE_MAPPING",[Nd]:"CUSTOM_TONE_MAPPING"};function Xg(n,e,t,i,s,r){const a=new bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Wn;c.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ci([0,2,0,0,2,0],2));const u=new Dp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new wn(c,u),d=new ka(-1,1,1,-1,0,1);let f=null,_=null,x=!1,p,m=null,R=[],B=!1;this.setSize=function(M,v){a.setSize(M,v),o!==null&&o.setSize(M,v),l!==null&&l.setSize(M,v);for(let b=0;b<R.length;b++){const L=R[b];L.setSize&&L.setSize(M,v)}},this.setEffects=function(M){R=M,B=R.length>0&&R[0].isRenderPass===!0;const v=a.width,b=a.height;R.length>0&&o===null&&(o=new bn(v,b,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(v,b,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<R.length;L++){const S=R[L];S.setSize&&S.setSize(v,b)}},this.begin=function(M,v){if(x||M.toneMapping===yn&&R.length===0)return!1;if(m=v,v!==null){const b=v.width,L=v.height;(a.width!==b||a.height!==L)&&this.setSize(b,L)}return B===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=yn,!0},this.hasRenderPass=function(){return B},this.end=function(M,v){M.toneMapping=p,x=!0;let b=a,L=o;for(let S=0;S<R.length;S++){const T=R[S];T.enabled!==!1&&(T.render(M,L,b,v),T.needsSwap!==!1&&(b=L,L=L===o?l:o))}if(f!==M.outputColorSpace||_!==M.toneMapping){f=M.outputColorSpace,_=M.toneMapping,u.defines={},at.getTransfer(f)===dt&&(u.defines.SRGB_TRANSFER="");const S=Wg[_];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(m),M.render(h,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const lh=new Gt,Fl=new yr(1,1),ch=new Yd,uh=new cp,dh=new eh,ru=[],au=[],ou=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function za(n,e){let t=au[e];t===void 0&&(t=new Int32Array(e),au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function Zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;cu.set(i),n.uniformMatrix2fv(this.addr,!1,cu),Ct(t,i)}}function Jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;lu.set(i),n.uniformMatrix3fv(this.addr,!1,lu),Ct(t,i)}}function Qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;ou.set(i),n.uniformMatrix4fv(this.addr,!1,ou),Ct(t,i)}}function jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function i_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function o_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fl.compareFunction=t.isReversedDepthBuffer()?rc:sc,r=Fl):r=lh,t.setTexture2D(e||r,s)}function l_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||uh,s)}function c_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dh,s)}function u_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ch,s)}function d_(n){switch(n){case 5126:return qg;case 35664:return Yg;case 35665:return $g;case 35666:return Kg;case 35674:return Zg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return u_}}function h_(n,e){n.uniform1fv(this.addr,e)}function f_(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function p_(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function m_(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function g_(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function __(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function v_(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x_(n,e){n.uniform1iv(this.addr,e)}function S_(n,e){n.uniform2iv(this.addr,e)}function M_(n,e){n.uniform3iv(this.addr,e)}function y_(n,e){n.uniform4iv(this.addr,e)}function b_(n,e){n.uniform1uiv(this.addr,e)}function w_(n,e){n.uniform2uiv(this.addr,e)}function E_(n,e){n.uniform3uiv(this.addr,e)}function T_(n,e){n.uniform4uiv(this.addr,e)}function A_(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fl:a=lh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function R_(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||uh,r[a])}function C_(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dh,r[a])}function P_(n,e,t){const i=this.cache,s=e.length,r=za(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ch,r[a])}function L_(n){switch(n){case 5126:return h_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return S_;case 35668:case 35672:return M_;case 35669:case 35673:return y_;case 5125:return b_;case 36294:return w_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}class D_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d_(t.type)}}class F_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L_(t.type)}}class I_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function uu(n,e){n.seq.push(e),n.map[e.id]=e}function N_(n,e,t){const i=n.name,s=i.length;for(Co.lastIndex=0;;){const r=Co.exec(i),a=Co.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uu(t,c===void 0?new D_(o,n,e):new F_(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new I_(o),uu(t,h)),t=h}}}class va{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);N_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const U_=37297;let O_=0;function B_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const hu=new Je;function k_(n){at._getMatrix(hu,at.workingColorSpace,n);const e=`mat3( ${hu.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Ea:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+B_(n.getShaderSource(e),o)}else return r}function H_(n,e){const t=k_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const z_={[Ld]:"Linear",[Dd]:"Reinhard",[Fd]:"Cineon",[Id]:"ACESFilmic",[Ud]:"AgX",[Od]:"Neutral",[Nd]:"Custom"};function G_(n,e){const t=z_[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oa=new ne;function V_(){at.getLuminanceCoefficients(oa);const n=oa.x.toFixed(4),e=oa.y.toFixed(4),t=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function X_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function lr(n){return n!==""}function pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(n){return n.replace(Y_,K_)}const $_=new Map;function K_(n,e){let t=et[e];if(t===void 0){const i=$_.get(e);if(i!==void 0)t=et[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Il(t)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(n){return n.replace(Z_,J_)}function J_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Q_={[fa]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function j_(n){return Q_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ev={[ns]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE_UV"};function tv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ev[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const nv={[Hs]:"ENVMAP_MODE_REFRACTION"};function iv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sv={[Pd]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};function rv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sv[n.combine]||"ENVMAP_BLENDING_NONE"}function av(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ov(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=j_(t),c=tv(t),u=iv(t),h=rv(t),d=av(t),f=W_(t),_=X_(r),x=s.createProgram();let p,m,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),m.length>0&&(m+=`
`)):(p=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),m=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?et.tonemapping_pars_fragment:"",t.toneMapping!==yn?G_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,H_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Il(a),a=pu(a,t),a=mu(a,t),o=Il(o),o=pu(o,t),o=mu(o,t),a=gu(a),o=gu(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const B=R+p+a,M=R+m+o,v=du(s,s.VERTEX_SHADER,B),b=du(s,s.FRAGMENT_SHADER,M);s.attachShader(x,v),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(A){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(v)||"",w=s.getShaderInfoLog(b)||"",O=P.trim(),V=F.trim(),k=w.trim();let K=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,v,b);else{const Y=fu(s,v,"vertex"),$=fu(s,b,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+Y+`
`+$)}else O!==""?Ke("WebGLProgram: Program Info Log:",O):(V===""||k==="")&&(Z=!1);Z&&(A.diagnostics={runnable:K,programLog:O,vertexShader:{log:V,prefix:p},fragmentShader:{log:k,prefix:m}})}s.deleteShader(v),s.deleteShader(b),S=new va(s,x),T=q_(s,x)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,U_)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=b,this}let lv=0;class cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new uv(e),t.set(e,i)),i}}class uv{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}}function dv(n){return n===Ni||n===ya||n===ba}function hv(n,e,t,i,s,r){const a=new $d,o=new cv,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,T,U,A,P,F){const w=A.fog,O=P.geometry,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?A.environment:null,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,K=e.get(S.envMap||V,k),Z=K&&K.mapping===Oa?K.image.height:null,Y=f[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&Ke("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=$!==void 0?$.length:0;let he=0;O.morphAttributes.position!==void 0&&(he=1),O.morphAttributes.normal!==void 0&&(he=2),O.morphAttributes.color!==void 0&&(he=3);let me,ye,Oe,J;if(Y){const $e=Dn[Y];me=$e.vertexShader,ye=$e.fragmentShader}else{me=S.vertexShader,ye=S.fragmentShader;const $e=o.getVertexShaderStage(S),Ze=o.getFragmentShaderStage(S);o.update(S,$e,Ze),Oe=$e.id,J=Ze.id}const ae=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),ze=P.isInstancedMesh===!0,Pe=P.isBatchedMesh===!0,Se=!!S.map,qe=!!S.matcap,we=!!K,ge=!!S.aoMap,Ae=!!S.lightMap,Ee=!!S.bumpMap&&S.wireframe===!1,Me=!!S.normalMap,Ne=!!S.displacementMap,Ye=!!S.emissiveMap,De=!!S.metalnessMap,Le=!!S.roughnessMap,D=S.anisotropy>0,Be=S.clearcoat>0,_e=S.dispersion>0,E=S.retroreflectivity>0,g=S.iridescence>0,H=S.sheen>0,z=S.transmission>0,N=D&&!!S.anisotropyMap,te=Be&&!!S.clearcoatMap,le=Be&&!!S.clearcoatNormalMap,G=Be&&!!S.clearcoatRoughnessMap,I=g&&!!S.iridescenceMap,q=g&&!!S.iridescenceThicknessMap,oe=H&&!!S.sheenColorMap,re=H&&!!S.sheenRoughnessMap,ie=!!S.specularMap,de=!!S.specularColorMap,xe=!!S.specularIntensityMap,pe=z&&!!S.transmissionMap,C=z&&!!S.thicknessMap,ce=!!S.gradientMap,W=!!S.alphaMap,ue=S.alphaTest>0,ve=!!S.alphaHash,ee=!!S.extensions;let be=yn;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(be=n.toneMapping);const Re={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:me,fragmentShader:ye,defines:S.defines,customVertexShaderID:Oe,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&P._colorsTexture!==null,instancing:ze,instancingColor:ze&&P.instanceColor!==null,instancingMorph:ze&&P.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Se,matcap:qe,envMap:we,envMapMode:we&&K.mapping,envMapCubeUVHeight:Z,aoMap:ge,lightMap:Ae,bumpMap:Ee,normalMap:Me,displacementMap:Ne,emissiveMap:Ye,normalMapObjectSpace:Me&&S.normalMapType===Wf,normalMapTangentSpace:Me&&S.normalMapType===Ll,packedNormalMap:Me&&S.normalMapType===Ll&&dv(S.normalMap.format),metalnessMap:De,roughnessMap:Le,anisotropy:D,anisotropyMap:N,clearcoat:Be,clearcoatMap:te,clearcoatNormalMap:le,clearcoatRoughnessMap:G,dispersion:_e,retroreflection:E,iridescence:g,iridescenceMap:I,iridescenceThicknessMap:q,sheen:H,sheenColorMap:oe,sheenRoughnessMap:re,specularMap:ie,specularColorMap:de,specularIntensityMap:xe,transmission:z,transmissionMap:pe,thicknessMap:C,gradientMap:ce,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:W,alphaTest:ue,alphaHash:ve,combine:S.combine,mapUv:Se&&_(S.map.channel),aoMapUv:ge&&_(S.aoMap.channel),lightMapUv:Ae&&_(S.lightMap.channel),bumpMapUv:Ee&&_(S.bumpMap.channel),normalMapUv:Me&&_(S.normalMap.channel),displacementMapUv:Ne&&_(S.displacementMap.channel),emissiveMapUv:Ye&&_(S.emissiveMap.channel),metalnessMapUv:De&&_(S.metalnessMap.channel),roughnessMapUv:Le&&_(S.roughnessMap.channel),anisotropyMapUv:N&&_(S.anisotropyMap.channel),clearcoatMapUv:te&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:I&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:q&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:re&&_(S.sheenRoughnessMap.channel),specularMapUv:ie&&_(S.specularMap.channel),specularColorMapUv:de&&_(S.specularColorMap.channel),specularIntensityMapUv:xe&&_(S.specularIntensityMap.channel),transmissionMapUv:pe&&_(S.transmissionMap.channel),thicknessMapUv:C&&_(S.thicknessMap.channel),alphaMapUv:W&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Me||D),vertexNormals:!!O.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Se||W),fog:!!w,useFog:S.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||O.attributes.normal===void 0&&Me===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:he,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===dt,decodeVideoTextureEmissive:Ye&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nn,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ee&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&S.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)T.push(U),T.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(m(T,S),R(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function m(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function R(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function B(S){const T=f[S.type];let U;if(T){const A=Dn[T];U=Cp.clone(A.uniforms)}else U=S.uniforms;return U}function M(S,T){let U=u.get(T);return U!==void 0?++U.usedTimes:(U=new ov(n,T,S,s),c.push(U),u.set(T,U)),U}function v(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function b(S){o.remove(S)}function L(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:B,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:L}}function fv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function pv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function vu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,x,p,m){let R=n[e];return R===void 0?(R={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},n[e]=R):(R.id=d.id,R.object=d,R.geometry=f,R.material=_,R.materialVariant=a(d),R.groupOrder=x,R.renderOrder=d.renderOrder,R.z=p,R.group=m),e++,R}function l(d,f,_,x,p,m,R){R.reversedDepth===!0&&(p=-p);const B=o(d,f,_,x,p,m);_.transmission>0?i.push(B):_.transparent===!0?s.push(B):t.push(B)}function c(d,f,_,x,p,m){const R=o(d,f,_,x,p,m);_.transmission>0?i.unshift(R):_.transparent===!0?s.unshift(R):t.unshift(R)}function u(d,f){t.length>1&&t.sort(d||pv),i.length>1&&i.sort(f||vu),s.length>1&&s.sort(f||vu)}function h(){for(let d=e,f=n.length;d<f;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function mv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new xu,n.set(i,[a])):s>=r.length?(a=new xu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function gv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ne,color:new Qe};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function _v(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vv=0;function xv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sv(n){const e=new gv,t=_v(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ne);const s=new ne,r=new Mt,a=new Mt;function o(c){let u=0,h=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let f=0,_=0,x=0,p=0,m=0,R=0,B=0,M=0,v=0,b=0,L=0,S=0,T=0,U=0;c.sort(xv);for(let P=0,F=c.length;P<F;P++){const w=c[P],O=w.color,V=w.intensity,k=w.distance;let K=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ni?K=w.shadow.map.texture:K=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=O.r*V,h+=O.g*V,d+=O.b*V;else if(w.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(w.sh.coefficients[Z],V);U++}else if(w.isSunLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Y=w.shadow,$=t.get(w);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[_]=$,i.sunShadowMap[_]=K;const fe=Y.getViewportCount();for(let he=0;he<fe;he++)i.sunShadowMatrix[x+he]=Y.getMatrix(he),i.sunShadowCascade[x+he]=Y._cascadeData[he];x+=fe,_++}i.sun[f]=Z,f++}else if(w.isDirectionalLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Y=w.shadow,$=t.get(w);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=w.shadow.matrix,v++}i.directional[p]=Z,p++}else if(w.isSpotLight){const Z=e.get(w);Z.position.setFromMatrixPosition(w.matrixWorld),Z.color.copy(O).multiplyScalar(V),Z.distance=k,Z.coneCos=Math.cos(w.angle),Z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Z.decay=w.decay,i.spot[R]=Z;const Y=w.shadow;if(w.map&&(i.spotLightMap[S]=w.map,S++,Y.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[R]=Y.matrix,w.castShadow){const $=t.get(w);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.spotShadow[R]=$,i.spotShadowMap[R]=K,L++}R++}else if(w.isRectAreaLight){const Z=e.get(w);Z.color.copy(O).multiplyScalar(V),Z.halfWidth.set(w.width*.5,0,0),Z.halfHeight.set(0,w.height*.5,0),i.rectArea[B]=Z,B++}else if(w.isPointLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),Z.distance=w.distance,Z.decay=w.decay,w.castShadow){const Y=w.shadow,$=t.get(w);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=w.shadow.matrix,b++}i.point[m]=Z,m++}else if(w.isHemisphereLight){const Z=e.get(w);Z.skyColor.copy(w.color).multiplyScalar(V),Z.groundColor.copy(w.groundColor).multiplyScalar(V),i.hemi[M]=Z,M++}}B>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.sunLength!==f||A.directionalLength!==p||A.pointLength!==m||A.spotLength!==R||A.rectAreaLength!==B||A.hemiLength!==M||A.numSunShadows!==_||A.numDirectionalShadows!==v||A.numPointShadows!==b||A.numSpotShadows!==L||A.numSpotMaps!==S||A.numLightProbes!==U)&&(i.sun.length=f,i.directional.length=p,i.spot.length=R,i.rectArea.length=B,i.point.length=m,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=U,A.sunLength=f,A.directionalLength=p,A.pointLength=m,A.spotLength=R,A.rectAreaLength=B,A.hemiLength=M,A.numSunShadows=_,A.numDirectionalShadows=v,A.numPointShadows=b,A.numSpotShadows=L,A.numSpotMaps=S,A.numLightProbes=U,i.version=vv++)}function l(c,u){let h=0,d=0,f=0,_=0,x=0,p=0;const m=u.matrixWorldInverse;for(let R=0,B=c.length;R<B;R++){const M=c[R];if(M.isSunLight){const v=i.sun[h];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),h++}else if(M.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isSpotLight){const v=i.spot[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),_++}else if(M.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Su(n){const e=new Sv(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Mv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Su(n),e.set(s,[o])):r>=a.length?(o=new Su(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wv=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],Ev=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Mu=new Mt,nr=new ne,Po=new ne;function Tv(n,e,t){let i=new lc;const s=new ot,r=new ot,a=new xt,o=new Np,l=new Up,c={},u=t.maxTextureSize,h={[ts]:jt,[jt]:ts,[Nn]:Nn},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:yv,fragmentShader:bv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Wn;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new wn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let m=this.type;this.render=function(b,L,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Mf&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fa);const T=n.getRenderTarget(),U=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),P=n.state;P.setBlending(oi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const F=m!==this.type;F&&L.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(O=>O.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,O=b.length;w<O;w++){const V=b[w],k=V.shadow;if(k===void 0){Ke("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const K=k.getFrameExtents();s.multiply(K),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,k.mapSize.y=r.y));const Z=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Z,k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===or){if(V.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new bn(s.x,s.y,{format:Ni,type:Vn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new yr(s.x,s.y,Sn),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=fi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft}else V.isPointLight?(k.map=new oh(s.x),k.map.depthTexture=new Ap(s.x,Gn)):(k.map=new bn(s.x,s.y),k.map.depthTexture=new yr(s.x,s.y,Gn)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=fi,this.type===fa?(k.map.depthTexture.compareFunction=Z?rc:sc,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const Y=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();V.isPointLight!==!0&&k.updateMatrices(V,S);for(let $=0;$<Y;$++){const fe=k.getCamera($);if(V.isPointLight){const he=k.camera,me=k.matrix,ye=V.distance||he.far;ye!==he.far&&(he.far=ye,he.updateProjectionMatrix()),nr.setFromMatrixPosition(V.matrixWorld),he.position.copy(nr),Po.copy(he.position),Po.add(wv[$]),he.up.copy(Ev[$]),he.lookAt(Po),he.updateMatrixWorld(),me.makeTranslation(-nr.x,-nr.y,-nr.z),Mu.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Mu,he.coordinateSystem,he.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,$),n.clear();else{$===0&&(n.setRenderTarget(k.map),n.clear());const he=k.getViewport($);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),P.viewport(a)}i=k.getFrustum($),M(L,S,fe,V,this.type)}k.isPointLightShadow!==!0&&this.type===or&&R(k,S),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(T,U,A)};function R(b,L){const S=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new bn(s.x,s.y,{format:Ni,type:Vn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(L,null,S,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(L,null,S,f,x,null)}function B(b,L,S,T){let U=null;const A=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)U=A;else if(U=S.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const P=U.uuid,F=L.uuid;let w=c[P];w===void 0&&(w={},c[P]=w);let O=w[F];O===void 0&&(O=U.clone(),w[F]=O,L.addEventListener("dispose",v)),U=O}if(U.visible=L.visible,U.wireframe=L.wireframe,T===or?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:h[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const P=n.properties.get(U);P.light=S}return U}function M(b,L,S,T,U){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===or)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const F=e.update(b),w=b.material;if(Array.isArray(w)){const O=F.groups;for(let V=0,k=O.length;V<k;V++){const K=O[V],Z=w[K.materialIndex];if(Z&&Z.visible){const Y=B(b,Z,T,U);b.onBeforeShadow(n,b,L,S,F,Y,K),n.renderBufferDirect(S,null,F,Y,b,K),b.onAfterShadow(n,b,L,S,F,Y,K)}}}else if(w.visible){const O=B(b,w,T,U);b.onBeforeShadow(n,b,L,S,F,O,null),n.renderBufferDirect(S,null,F,O,b,null),b.onAfterShadow(n,b,L,S,F,O,null)}}const P=b.children;for(let F=0,w=P.length;F<w;F++)M(P[F],L,S,T,U)}function v(b){b.target.removeEventListener("dispose",v);for(const S in c){const T=c[S],U=b.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function Av(n,e){function t(){let C=!1;const ce=new xt;let W=null;const ue=new xt(0,0,0,0);return{setMask:function(ve){W!==ve&&!C&&(n.colorMask(ve,ve,ve,ve),W=ve)},setLocked:function(ve){C=ve},setClear:function(ve,ee,be,Re,$e){$e===!0&&(ve*=Re,ee*=Re,be*=Re),ce.set(ve,ee,be,Re),ue.equals(ce)===!1&&(n.clearColor(ve,ee,be,Re),ue.copy(ce))},reset:function(){C=!1,W=null,ue.set(-1,0,0,0)}}}function i(){let C=!1,ce=!1,W=null,ue=null,ve=null;return{setReversed:function(ee){if(ce!==ee){const be=e.get("EXT_clip_control");ee?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;const Re=ve;ve=null,this.setClear(Re)}},getReversed:function(){return ce},setTest:function(ee){ee?ae(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ee){W!==ee&&!C&&(n.depthMask(ee),W=ee)},setFunc:function(ee){if(ce&&(ee=np[ee]),ue!==ee){switch(ee){case qo:n.depthFunc(n.NEVER);break;case Yo:n.depthFunc(n.ALWAYS);break;case $o:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Ko:n.depthFunc(n.EQUAL);break;case Zo:n.depthFunc(n.GEQUAL);break;case Jo:n.depthFunc(n.GREATER);break;case Qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ee}},setLocked:function(ee){C=ee},setClear:function(ee){ve!==ee&&(ve=ee,ce&&(ee=1-ee),n.clearDepth(ee))},reset:function(){C=!1,W=null,ue=null,ve=null,ce=!1}}}function s(){let C=!1,ce=null,W=null,ue=null,ve=null,ee=null,be=null,Re=null,$e=null;return{setTest:function(Ze){C||(Ze?ae(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Ze){ce!==Ze&&!C&&(n.stencilMask(Ze),ce=Ze)},setFunc:function(Ze,Et,Ot){(W!==Ze||ue!==Et||ve!==Ot)&&(n.stencilFunc(Ze,Et,Ot),W=Ze,ue=Et,ve=Ot)},setOp:function(Ze,Et,Ot){(ee!==Ze||be!==Et||Re!==Ot)&&(n.stencilOp(Ze,Et,Ot),ee=Ze,be=Et,Re=Ot)},setLocked:function(Ze){C=Ze},setClear:function(Ze){$e!==Ze&&(n.clearStencil(Ze),$e=Ze)},reset:function(){C=!1,ce=null,W=null,ue=null,ve=null,ee=null,be=null,Re=null,$e=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d={},f=new WeakMap,_=[],x=null,p=!1,m=null,R=null,B=null,M=null,v=null,b=null,L=null,S=new Qe(0,0,0),T=0,U=!1,A=null,P=null,F=null,w=null,O=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=K>=2);let Y=null,$={};const fe=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),me=new xt().fromArray(fe),ye=new xt().fromArray(he);function Oe(C,ce,W,ue){const ve=new Uint8Array(4),ee=n.createTexture();n.bindTexture(C,ee),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<W;be++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ce+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ee}const J={};J[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(vr),Ee(!1),Me(Tc),ae(n.CULL_FACE),ge(oi);function ae(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function Ce(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function ze(C,ce){return d[C]!==ce?(n.bindFramebuffer(C,ce),d[C]=ce,C===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),C===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(C,ce){let W=_,ue=!1;if(C){W=f.get(ce),W===void 0&&(W=[],f.set(ce,W));const ve=C.textures;if(W.length!==ve.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,be=ve.length;ee<be;ee++)W[ee]=n.COLOR_ATTACHMENT0+ee;W.length=ve.length,ue=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,ue=!0);ue&&n.drawBuffers(W)}function Se(C){return x!==C?(n.useProgram(C),x=C,!0):!1}const qe={[Es]:n.FUNC_ADD,[bf]:n.FUNC_SUBTRACT,[wf]:n.FUNC_REVERSE_SUBTRACT};qe[Ef]=n.MIN,qe[Tf]=n.MAX;const we={[Af]:n.ZERO,[Rf]:n.ONE,[Cf]:n.SRC_COLOR,[Rd]:n.SRC_ALPHA,[Nf]:n.SRC_ALPHA_SATURATE,[Ff]:n.DST_COLOR,[Lf]:n.DST_ALPHA,[Pf]:n.ONE_MINUS_SRC_COLOR,[Cd]:n.ONE_MINUS_SRC_ALPHA,[If]:n.ONE_MINUS_DST_COLOR,[Df]:n.ONE_MINUS_DST_ALPHA,[Uf]:n.CONSTANT_COLOR,[Of]:n.ONE_MINUS_CONSTANT_COLOR,[Bf]:n.CONSTANT_ALPHA,[kf]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(C,ce,W,ue,ve,ee,be,Re,$e,Ze){if(C===oi){p===!0&&(Ce(n.BLEND),p=!1);return}if(p===!1&&(ae(n.BLEND),p=!0),C!==yf){if(C!==m||Ze!==U){if((R!==Es||v!==Es)&&(n.blendEquation(n.FUNC_ADD),R=Es,v=Es),Ze)switch(C){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",C);break}else switch(C){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rc:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xo:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",C);break}B=null,M=null,b=null,L=null,S.set(0,0,0),T=0,m=C,U=Ze}return}ve=ve||ce,ee=ee||W,be=be||ue,(ce!==R||ve!==v)&&(n.blendEquationSeparate(qe[ce],qe[ve]),R=ce,v=ve),(W!==B||ue!==M||ee!==b||be!==L)&&(n.blendFuncSeparate(we[W],we[ue],we[ee],we[be]),B=W,M=ue,b=ee,L=be),(Re.equals(S)===!1||$e!==T)&&(n.blendColor(Re.r,Re.g,Re.b,$e),S.copy(Re),T=$e),m=C,U=!1}function Ae(C,ce){C.side===Nn?Ce(n.CULL_FACE):ae(n.CULL_FACE);let W=C.side===jt;ce&&(W=!W),Ee(W),C.blending===Ds&&C.transparent===!1?ge(oi):ge(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const ue=C.stencilWrite;o.setTest(ue),ue&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ye(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(C){A!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),A=C)}function Me(C){C!==xf?(ae(n.CULL_FACE),C!==P&&(C===Tc?n.cullFace(n.BACK):C===Sf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),P=C}function Ne(C){C!==F&&(k&&n.lineWidth(C),F=C)}function Ye(C,ce,W){C?(ae(n.POLYGON_OFFSET_FILL),(w!==ce||O!==W)&&(w=ce,O=W,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,W))):Ce(n.POLYGON_OFFSET_FILL)}function De(C){C?ae(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Le(C){C===void 0&&(C=n.TEXTURE0+V-1),Y!==C&&(n.activeTexture(C),Y=C)}function D(C,ce,W){W===void 0&&(Y===null?W=n.TEXTURE0+V-1:W=Y);let ue=$[W];ue===void 0&&(ue={type:void 0,texture:void 0},$[W]=ue),(ue.type!==C||ue.texture!==ce)&&(Y!==W&&(n.activeTexture(W),Y=W),n.bindTexture(C,ce||J[C]),ue.type=C,ue.texture=ce)}function Be(){const C=$[Y];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _e(){try{n.compressedTexImage2D(...arguments)}catch(C){ct("WebGLState:",C)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(C){ct("WebGLState:",C)}}function g(){try{n.texSubImage2D(...arguments)}catch(C){ct("WebGLState:",C)}}function H(){try{n.texSubImage3D(...arguments)}catch(C){ct("WebGLState:",C)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(C){ct("WebGLState:",C)}}function N(){try{n.compressedTexSubImage3D(...arguments)}catch(C){ct("WebGLState:",C)}}function te(){try{n.texStorage2D(...arguments)}catch(C){ct("WebGLState:",C)}}function le(){try{n.texStorage3D(...arguments)}catch(C){ct("WebGLState:",C)}}function G(){try{n.texImage2D(...arguments)}catch(C){ct("WebGLState:",C)}}function I(){try{n.texImage3D(...arguments)}catch(C){ct("WebGLState:",C)}}function q(C){return h[C]!==void 0?h[C]:n.getParameter(C)}function oe(C,ce){h[C]!==ce&&(n.pixelStorei(C,ce),h[C]=ce)}function re(C){me.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),me.copy(C))}function ie(C){ye.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ye.copy(C))}function de(C,ce){let W=c.get(ce);W===void 0&&(W=new WeakMap,c.set(ce,W));let ue=W.get(C);ue===void 0&&(ue=n.getUniformBlockIndex(ce,C.name),W.set(C,ue))}function xe(C,ce){const ue=c.get(ce).get(C);l.get(ce)!==ue&&(n.uniformBlockBinding(ce,ue,C.__bindingPointIndex),l.set(ce,ue))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Y=null,$={},d={},f=new WeakMap,_=[],x=null,p=!1,m=null,R=null,B=null,M=null,v=null,b=null,L=null,S=new Qe(0,0,0),T=0,U=!1,A=null,P=null,F=null,w=null,O=null,me.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Ce,bindFramebuffer:ze,drawBuffers:Pe,useProgram:Se,setBlending:ge,setMaterial:Ae,setFlipSided:Ee,setCullFace:Me,setLineWidth:Ne,setPolygonOffset:Ye,setScissorTest:De,activeTexture:Le,bindTexture:D,unbindTexture:Be,compressedTexImage2D:_e,compressedTexImage3D:E,texImage2D:G,texImage3D:I,pixelStorei:oe,getParameter:q,updateUBOMapping:de,uniformBlockBinding:xe,texStorage2D:te,texStorage3D:le,texSubImage2D:g,texSubImage3D:H,compressedTexSubImage2D:z,compressedTexSubImage3D:N,scissor:re,viewport:ie,reset:pe}}function Rv(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,g){return _?new OffscreenCanvas(E,g):Ta("canvas")}function p(E,g,H){let z=1;const N=_e(E);if((N.width>H||N.height>H)&&(z=H/Math.max(N.width,N.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const te=Math.floor(z*N.width),le=Math.floor(z*N.height);d===void 0&&(d=x(te,le));const G=g?x(te,le):d;return G.width=te,G.height=le,G.getContext("2d").drawImage(E,0,0,te,le),Ke("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+te+"x"+le+")."),G}else return"data"in E&&Ke("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),E;return E}function m(E){return E.generateMipmaps}function R(E){n.generateMipmap(E)}function B(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,g,H,z,N,te=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le;z&&(le=e.get("EXT_texture_norm16"),le||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=g;if(g===n.RED&&(H===n.FLOAT&&(G=n.R32F),H===n.HALF_FLOAT&&(G=n.R16F),H===n.UNSIGNED_BYTE&&(G=n.R8),H===n.UNSIGNED_SHORT&&le&&(G=le.R16_EXT),H===n.SHORT&&le&&(G=le.R16_SNORM_EXT)),g===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(G=n.R8UI),H===n.UNSIGNED_SHORT&&(G=n.R16UI),H===n.UNSIGNED_INT&&(G=n.R32UI),H===n.BYTE&&(G=n.R8I),H===n.SHORT&&(G=n.R16I),H===n.INT&&(G=n.R32I)),g===n.RG&&(H===n.FLOAT&&(G=n.RG32F),H===n.HALF_FLOAT&&(G=n.RG16F),H===n.UNSIGNED_BYTE&&(G=n.RG8),H===n.UNSIGNED_SHORT&&le&&(G=le.RG16_EXT),H===n.SHORT&&le&&(G=le.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(G=n.RG8UI),H===n.UNSIGNED_SHORT&&(G=n.RG16UI),H===n.UNSIGNED_INT&&(G=n.RG32UI),H===n.BYTE&&(G=n.RG8I),H===n.SHORT&&(G=n.RG16I),H===n.INT&&(G=n.RG32I)),g===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(G=n.RGB8UI),H===n.UNSIGNED_SHORT&&(G=n.RGB16UI),H===n.UNSIGNED_INT&&(G=n.RGB32UI),H===n.BYTE&&(G=n.RGB8I),H===n.SHORT&&(G=n.RGB16I),H===n.INT&&(G=n.RGB32I)),g===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),H===n.UNSIGNED_INT&&(G=n.RGBA32UI),H===n.BYTE&&(G=n.RGBA8I),H===n.SHORT&&(G=n.RGBA16I),H===n.INT&&(G=n.RGBA32I)),g===n.RGB&&(H===n.UNSIGNED_SHORT&&le&&(G=le.RGB16_EXT),H===n.SHORT&&le&&(G=le.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),g===n.RGBA){const I=te?Ea:at.getTransfer(N);H===n.FLOAT&&(G=n.RGBA32F),H===n.HALF_FLOAT&&(G=n.RGBA16F),H===n.UNSIGNED_BYTE&&(G=I===dt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&le&&(G=le.RGBA16_EXT),H===n.SHORT&&le&&(G=le.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function v(E,g){let H;return E?g===null||g===Gn||g===Sr?H=n.DEPTH24_STENCIL8:g===Sn?H=n.DEPTH32F_STENCIL8:g===xr&&(H=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Gn||g===Sr?H=n.DEPTH_COMPONENT24:g===Sn?H=n.DEPTH_COMPONENT32F:g===xr&&(H=n.DEPTH_COMPONENT16),H}function b(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ft&&E.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function L(E){const g=E.target;g.removeEventListener("dispose",L),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&h.delete(g)}function S(E){const g=E.target;g.removeEventListener("dispose",S),A(g)}function T(E){const g=i.get(E);if(g.__webglInit===void 0)return;const H=E.source,z=f.get(H);if(z){const N=z[g.__cacheKey];N.usedTimes--,N.usedTimes===0&&U(E),Object.keys(z).length===0&&f.delete(H)}i.remove(E)}function U(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const H=E.source,z=f.get(H);delete z[g.__cacheKey],a.memory.textures--}function A(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let N=0;N<g.__webglFramebuffer[z].length;N++)n.deleteFramebuffer(g.__webglFramebuffer[z][N]);else n.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)n.deleteFramebuffer(g.__webglFramebuffer[z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const H=E.textures;for(let z=0,N=H.length;z<N;z++){const te=i.get(H[z]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(H[z])}i.remove(E)}let P=0;function F(){P=0}function w(){return P}function O(E){P=E}function V(){const E=P;return E>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function k(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function K(E,g){const H=i.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&H.__version!==E.version){const z=E.image;if(z===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(H,E,g);return}}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+g)}function Z(E,g){const H=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){Ce(H,E,g);return}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+g)}function Y(E,g){const H=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){Ce(H,E,g);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+g)}function $(E,g){const H=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&H.__version!==E.version){ze(H,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+g)}const fe={[jo]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},he={[Ft]:n.NEAREST,[Gf]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},me={[qf]:n.NEVER,[Jf]:n.ALWAYS,[Yf]:n.LESS,[sc]:n.LEQUAL,[$f]:n.EQUAL,[rc]:n.GEQUAL,[Kf]:n.GREATER,[Zf]:n.NOTEQUAL};function ye(E,g){if(g.type===Sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===ja||g.magFilter===kr||g.magFilter===Zi||g.minFilter===Nt||g.minFilter===ja||g.minFilter===kr||g.minFilter===Zi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,fe[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,fe[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,fe[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,he[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ft||g.minFilter!==kr&&g.minFilter!==Zi||g.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Oe(E,g){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",L));const z=g.source;let N=f.get(z);N===void 0&&(N={},f.set(z,N));const te=k(g);if(te!==E.__cacheKey){N[te]===void 0&&(N[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),N[te].usedTimes++;const le=N[E.__cacheKey];le!==void 0&&(N[E.__cacheKey].usedTimes--,le.usedTimes===0&&U(g)),E.__cacheKey=te,E.__webglTexture=N[te].texture}return H}function J(E,g,H){return Math.floor(Math.floor(E/H)/g)}function ae(E,g,H,z){const te=E.updateRanges;if(te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,H,z,g.data);else{te.sort((oe,re)=>oe.start-re.start);let le=0;for(let oe=1;oe<te.length;oe++){const re=te[le],ie=te[oe],de=re.start+re.count,xe=J(ie.start,g.width,4),pe=J(re.start,g.width,4);ie.start<=de+1&&xe===pe&&J(ie.start+ie.count-1,g.width,4)===xe?re.count=Math.max(re.count,ie.start+ie.count-re.start):(++le,te[le]=ie)}te.length=le+1;const G=t.getParameter(n.UNPACK_ROW_LENGTH),I=t.getParameter(n.UNPACK_SKIP_PIXELS),q=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let oe=0,re=te.length;oe<re;oe++){const ie=te[oe],de=Math.floor(ie.start/4),xe=Math.ceil(ie.count/4),pe=de%g.width,C=Math.floor(de/g.width),ce=xe,W=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,C),t.texSubImage2D(n.TEXTURE_2D,0,pe,C,ce,W,H,z,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,G),t.pixelStorei(n.UNPACK_SKIP_PIXELS,I),t.pixelStorei(n.UNPACK_SKIP_ROWS,q)}}function Ce(E,g,H){let z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=n.TEXTURE_3D);const N=Oe(E,g),te=g.source;t.bindTexture(z,E.__webglTexture,n.TEXTURE0+H);const le=i.get(te);if(te.version!==le.__version||N===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const W=at.getPrimaries(at.workingColorSpace),ue=g.colorSpace===Li?null:at.getPrimaries(g.colorSpace),ve=g.colorSpace===Li||W===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let I=p(g.image,!1,s.maxTextureSize);I=Be(g,I);const q=r.convert(g.format,g.colorSpace),oe=r.convert(g.type);let re=M(g.internalFormat,q,oe,g.normalized,g.colorSpace,g.isVideoTexture);ye(z,g);let ie;const de=g.mipmaps,xe=g.isVideoTexture!==!0,pe=le.__version===void 0||N===!0,C=te.dataReady,ce=b(g,I);if(g.isDepthTexture)re=v(g.format===Ji,g.type),pe&&(xe?t.texStorage2D(n.TEXTURE_2D,1,re,I.width,I.height):t.texImage2D(n.TEXTURE_2D,0,re,I.width,I.height,0,q,oe,null));else if(g.isDataTexture)if(de.length>0){xe&&pe&&t.texStorage2D(n.TEXTURE_2D,ce,re,de[0].width,de[0].height);for(let W=0,ue=de.length;W<ue;W++)ie=de[W],xe?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,q,oe,ie.data):t.texImage2D(n.TEXTURE_2D,W,re,ie.width,ie.height,0,q,oe,ie.data);g.generateMipmaps=!1}else xe?(pe&&t.texStorage2D(n.TEXTURE_2D,ce,re,I.width,I.height),C&&ae(g,I,q,oe)):t.texImage2D(n.TEXTURE_2D,0,re,I.width,I.height,0,q,oe,I.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){xe&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,re,de[0].width,de[0].height,I.depth);for(let W=0,ue=de.length;W<ue;W++)if(ie=de[W],g.format!==Mn)if(q!==null)if(xe){if(C)if(g.layerUpdates.size>0){const ve=jc(ie.width,ie.height,g.format,g.type);for(const ee of g.layerUpdates){const be=ie.data.subarray(ee*ve/ie.data.BYTES_PER_ELEMENT,(ee+1)*ve/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ee,ie.width,ie.height,1,q,be)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ie.width,ie.height,I.depth,q,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,re,ie.width,ie.height,I.depth,0,ie.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ie.width,ie.height,I.depth,q,oe,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,re,ie.width,ie.height,I.depth,0,q,oe,ie.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{xe&&pe&&t.texStorage2D(n.TEXTURE_2D,ce,re,de[0].width,de[0].height);for(let W=0,ue=de.length;W<ue;W++)ie=de[W],g.format!==Mn?q!==null?xe?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,q,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,W,re,ie.width,ie.height,0,ie.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,q,oe,ie.data):t.texImage2D(n.TEXTURE_2D,W,re,ie.width,ie.height,0,q,oe,ie.data)}else if(g.isDataArrayTexture)if(xe){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,re,I.width,I.height,I.depth),C)if(g.layerUpdates.size>0){const W=jc(I.width,I.height,g.format,g.type);for(const ue of g.layerUpdates){const ve=I.data.subarray(ue*W/I.data.BYTES_PER_ELEMENT,(ue+1)*W/I.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,I.width,I.height,1,q,oe,ve)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,q,oe,I.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,I.width,I.height,I.depth,0,q,oe,I.data);else if(g.isData3DTexture)xe?(pe&&t.texStorage3D(n.TEXTURE_3D,ce,re,I.width,I.height,I.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,q,oe,I.data)):t.texImage3D(n.TEXTURE_3D,0,re,I.width,I.height,I.depth,0,q,oe,I.data);else if(g.isFramebufferTexture){if(pe)if(xe)t.texStorage2D(n.TEXTURE_2D,ce,re,I.width,I.height);else{let W=I.width,ue=I.height;for(let ve=0;ve<ce;ve++)t.texImage2D(n.TEXTURE_2D,ve,re,W,ue,0,q,oe,null),W>>=1,ue>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const W=n.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),I.parentNode!==W){W.appendChild(I),h.add(g),W.onpaint=ue=>{const ve=ue.changedElements;for(const ee of h)ve.includes(ee.image)&&(ee.needsUpdate=!0)},W.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,I);else{const ve=n.RGBA,ee=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,ee,be,I)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(xe&&pe){const W=_e(de[0]);t.texStorage2D(n.TEXTURE_2D,ce,re,W.width,W.height)}for(let W=0,ue=de.length;W<ue;W++)ie=de[W],xe?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,q,oe,ie):t.texImage2D(n.TEXTURE_2D,W,re,q,oe,ie);g.generateMipmaps=!1}else if(xe){if(pe){const W=_e(I);t.texStorage2D(n.TEXTURE_2D,ce,re,W.width,W.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,q,oe,I)}else t.texImage2D(n.TEXTURE_2D,0,re,q,oe,I);m(g)&&R(z),le.__version=te.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ze(E,g,H){if(g.image.length!==6)return;const z=Oe(E,g),N=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+H);const te=i.get(N);if(N.version!==te.__version||z===!0){t.activeTexture(n.TEXTURE0+H);const le=at.getPrimaries(at.workingColorSpace),G=g.colorSpace===Li?null:at.getPrimaries(g.colorSpace),I=g.colorSpace===Li||le===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const q=g.isCompressedTexture||g.image[0].isCompressedTexture,oe=g.image[0]&&g.image[0].isDataTexture,re=[];for(let ee=0;ee<6;ee++)!q&&!oe?re[ee]=p(g.image[ee],!0,s.maxCubemapSize):re[ee]=oe?g.image[ee].image:g.image[ee],re[ee]=Be(g,re[ee]);const ie=re[0],de=r.convert(g.format,g.colorSpace),xe=r.convert(g.type),pe=M(g.internalFormat,de,xe,g.normalized,g.colorSpace),C=g.isVideoTexture!==!0,ce=te.__version===void 0||z===!0,W=N.dataReady;let ue=b(g,ie);ye(n.TEXTURE_CUBE_MAP,g);let ve;if(q){C&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,pe,ie.width,ie.height);for(let ee=0;ee<6;ee++){ve=re[ee].mipmaps;for(let be=0;be<ve.length;be++){const Re=ve[be];g.format!==Mn?de!==null?C?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Re.width,Re.height,de,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,pe,Re.width,Re.height,0,Re.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Re.width,Re.height,de,xe,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,pe,Re.width,Re.height,0,de,xe,Re.data)}}}else{if(ve=g.mipmaps,C&&ce){ve.length>0&&ue++;const ee=_e(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,pe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,re[ee].width,re[ee].height,de,xe,re[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,pe,re[ee].width,re[ee].height,0,de,xe,re[ee].data);for(let be=0;be<ve.length;be++){const $e=ve[be].image[ee].image;C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,$e.width,$e.height,de,xe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,pe,$e.width,$e.height,0,de,xe,$e.data)}}else{C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de,xe,re[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,pe,de,xe,re[ee]);for(let be=0;be<ve.length;be++){const Re=ve[be];C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,de,xe,Re.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,pe,de,xe,Re.image[ee])}}}m(g)&&R(n.TEXTURE_CUBE_MAP),te.__version=N.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Pe(E,g,H,z,N,te){const le=r.convert(H.format,H.colorSpace),G=r.convert(H.type),I=M(H.internalFormat,le,G,H.normalized,H.colorSpace),q=i.get(g),oe=i.get(H);if(oe.__renderTarget=g,!q.__hasExternalTextures){const re=Math.max(1,g.width>>te),ie=Math.max(1,g.height>>te);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,te,I,re,ie,g.depth,0,le,G,null):t.texImage2D(N,te,I,re,ie,0,le,G,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Le(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,N,oe.__webglTexture,0,De(g)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,N,oe.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(E,g,H){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const z=g.depthTexture,N=z&&z.isDepthTexture?z.type:null,te=v(g.stencilBuffer,N),le=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Le(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(g),te,g.width,g.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(g),te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,te,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,E)}else{const z=g.textures;for(let N=0;N<z.length;N++){const te=z[N],le=r.convert(te.format,te.colorSpace),G=r.convert(te.type),I=M(te.internalFormat,le,G,te.normalized,te.colorSpace);Le(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(g),I,g.width,g.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(g),I,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,I,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(E,g,H){const z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const N=i.get(g.depthTexture);if(N.__renderTarget=g,(!N.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(N.__webglInit===void 0&&(N.__webglInit=!0,g.depthTexture.addEventListener("dispose",L)),N.__webglTexture===void 0){N.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),ye(n.TEXTURE_CUBE_MAP,g.depthTexture);const q=r.convert(g.depthTexture.format),oe=r.convert(g.depthTexture.type);let re;g.depthTexture.format===fi?re=n.DEPTH_COMPONENT24:g.depthTexture.format===Ji&&(re=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,g.width,g.height,0,q,oe,null)}}else K(g.depthTexture,0);const te=N.__webglTexture,le=De(g),G=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,I=g.depthTexture.format===Ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===fi)Le(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,G,te,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,I,G,te,0);else if(g.depthTexture.format===Ji)Le(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,G,te,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,I,G,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(E){const g=i.get(E),H=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const z=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const N=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",N)};z.addEventListener("dispose",N),g.__depthDisposeCallback=N}g.__boundDepthTexture=z}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(H)for(let z=0;z<6;z++)qe(g.__webglFramebuffer[z],E,z);else{const z=E.texture.mipmaps;z&&z.length>0?qe(g.__webglFramebuffer[0],E,0):qe(g.__webglFramebuffer,E,0)}else if(H){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=n.createRenderbuffer(),Se(g.__webglDepthbuffer[z],E,!1);else{const N=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,te)}}else{const z=E.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Se(g.__webglDepthbuffer,E,!1);else{const N=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(E,g,H){const z=i.get(E);g!==void 0&&Pe(z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&we(E)}function Ae(E){const g=E.texture,H=i.get(E),z=i.get(g);E.addEventListener("dispose",S);const N=E.textures,te=E.isWebGLCubeRenderTarget===!0,le=N.length>1;if(le||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=g.version,a.memory.textures++),te){H.__webglFramebuffer=[];for(let G=0;G<6;G++)if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer[G]=[];for(let I=0;I<g.mipmaps.length;I++)H.__webglFramebuffer[G][I]=n.createFramebuffer()}else H.__webglFramebuffer[G]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer=[];for(let G=0;G<g.mipmaps.length;G++)H.__webglFramebuffer[G]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(le)for(let G=0,I=N.length;G<I;G++){const q=i.get(N[G]);q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Le(E)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let G=0;G<N.length;G++){const I=N[G];H.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[G]);const q=r.convert(I.format,I.colorSpace),oe=r.convert(I.type),re=M(I.internalFormat,q,oe,I.normalized,I.colorSpace,E.isXRRenderTarget===!0),ie=De(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,H.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),ye(n.TEXTURE_CUBE_MAP,g);for(let G=0;G<6;G++)if(g.mipmaps&&g.mipmaps.length>0)for(let I=0;I<g.mipmaps.length;I++)Pe(H.__webglFramebuffer[G][I],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,I);else Pe(H.__webglFramebuffer[G],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);m(g)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let G=0,I=N.length;G<I;G++){const q=N[G],oe=i.get(q);let re=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,oe.__webglTexture),ye(re,q),Pe(H.__webglFramebuffer,E,q,n.COLOR_ATTACHMENT0+G,re,0),m(q)&&R(re)}t.unbindTexture()}else{let G=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(G=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(G,z.__webglTexture),ye(G,g),g.mipmaps&&g.mipmaps.length>0)for(let I=0;I<g.mipmaps.length;I++)Pe(H.__webglFramebuffer[I],E,g,n.COLOR_ATTACHMENT0,G,I);else Pe(H.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,G,0);m(g)&&R(G),t.unbindTexture()}E.depthBuffer&&we(E)}function Ee(E){const g=E.textures;for(let H=0,z=g.length;H<z;H++){const N=g[H];if(m(N)){const te=B(E),le=i.get(N).__webglTexture;t.bindTexture(te,le),R(te),t.unbindTexture()}}}const Me=[],Ne=[];function Ye(E){if(E.samples>0){if(Le(E)===!1){const g=E.textures,H=E.width,z=E.height;let N=n.COLOR_BUFFER_BIT;const te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(E),G=g.length>1;if(G)for(let q=0;q<g.length;q++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const I=E.texture.mipmaps;I&&I.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let q=0;q<g.length;q++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),G){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[q]);const oe=i.get(g[q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,H,z,0,0,H,z,N,n.NEAREST),l===!0&&(Me.length=0,Ne.length=0,Me.push(n.COLOR_ATTACHMENT0+q),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Me.push(te),Ne.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let q=0;q<g.length;q++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,le.__webglColorRenderbuffer[q]);const oe=i.get(g[q]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function De(E){return Math.min(s.maxSamples,E.samples)}function Le(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Be(E,g){const H=E.colorSpace,z=E.format,N=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==wa&&H!==Li&&(at.getTransfer(H)===dt?(z!==Mn||N!==rn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",H)),g}function _e(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.getTextureUnits=w,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=ge,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cv(n,e){function t(i,s=Li){let r;const a=at.getTransfer(s);if(i===rn)return n.UNSIGNED_BYTE;if(i===jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kd)return n.BYTE;if(i===Hd)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===Ql)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Vn)return n.HALF_FLOAT;if(i===Vd)return n.ALPHA;if(i===Wd)return n.RGB;if(i===Mn)return n.RGBA;if(i===fi)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===Xd)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===_a)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===al||i===ol||i===ll||i===cl||i===ya||i===ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rl||i===al)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ol)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ll)return r.COMPRESSED_R11_EAC;if(i===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ya)return r.COMPRESSED_RG11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dl||i===hl||i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml||i===yl||i===bl||i===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ml)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===Tl||i===Al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===El)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Cl||i===ba||i===Pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new th(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new En({vertexShader:Pv,fragmentShader:Lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends ss{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const x=typeof XRWebGLBinding<"u",p=new Dv,m={},R=t.getContextAttributes();let B=null,M=null;const v=[],b=[],L=new ot;let S=null,T=null;const U=new hn;U.viewport=new xt;const A=new hn;A.viewport=new xt;const P=[U,A],F=new zp;let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=v[J];return ae===void 0&&(ae=new lo,v[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=v[J];return ae===void 0&&(ae=new lo,v[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=v[J];return ae===void 0&&(ae=new lo,v[J]=ae),ae.getHandSpace()};function V(J){const ae=b.indexOf(J.inputSource);if(ae===-1)return;const Ce=v[ae];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,c||a),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let J=0;J<v.length;J++){const ae=b[J];ae!==null&&(b[J]=null,v[J].disconnect(ae))}w=null,O=null,p.reset();for(const J in m)delete m[J];if(e.setRenderTarget(B),f=null,d=null,h=null,s=null,M=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(L.width,L.height,!1),T!==null){const J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(B=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),R.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ze=null,Pe=null;R.depth&&(Pe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=R.stencil?Ji:fi,ze=R.stencil?Sr:Gn);const Se={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new bn(d.textureWidth,d.textureHeight,{format:Mn,type:rn,depthTexture:new yr(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new bn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let ae=0;ae<J.removed.length;ae++){const Ce=J.removed[ae],ze=b.indexOf(Ce);ze>=0&&(b[ze]=null,v[ze].disconnect(Ce))}for(let ae=0;ae<J.added.length;ae++){const Ce=J.added[ae];let ze=b.indexOf(Ce);if(ze===-1){for(let Se=0;Se<v.length;Se++)if(Se>=b.length){b.push(Ce),ze=Se;break}else if(b[Se]===null){b[Se]=Ce,ze=Se;break}if(ze===-1)break}const Pe=v[ze];Pe&&Pe.connect(Ce)}}const Z=new ne,Y=new ne;function $(J,ae,Ce){Z.setFromMatrixPosition(ae.matrixWorld),Y.setFromMatrixPosition(Ce.matrixWorld);const ze=Z.distanceTo(Y),Pe=ae.projectionMatrix.elements,Se=Ce.projectionMatrix.elements,qe=Pe[14]/(Pe[10]-1),we=Pe[14]/(Pe[10]+1),ge=(Pe[9]+1)/Pe[5],Ae=(Pe[9]-1)/Pe[5],Ee=(Pe[8]-1)/Pe[0],Me=(Se[8]+1)/Se[0],Ne=qe*Ee,Ye=qe*Me,De=ze/(-Ee+Me),Le=De*-Ee;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Le),J.translateZ(De),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const D=qe+De,Be=we+De,_e=Ne-Le,E=Ye+(ze-Le),g=ge*we/Be*D,H=Ae*we/Be*D;J.projectionMatrix.makePerspective(_e,E,g,H,D,Be),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function fe(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,Ce=J.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(Ce=p.depthFar)),F.near=A.near=U.near=ae,F.far=A.far=U.far=Ce,(w!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),w=F.near,O=F.far),F.layers.mask=J.layers.mask|6,U.layers.mask=F.layers.mask&-5,A.layers.mask=F.layers.mask&-3;const ze=J.parent,Pe=F.cameras;fe(F,ze);for(let Se=0;Se<Pe.length;Se++)fe(Pe[Se],ze);Pe.length===2?$(F,U,A):F.projectionMatrix.copy(U.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),he(J,F,ze)};function he(J,ae,Ce){Ce===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Dl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return m[J]};let me=null;function ye(J,ae){if(u=ae.getViewerPose(c||a),_=ae,u!==null){const Ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ze=!1;Ce.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let we=0;we<Ce.length;we++){const ge=Ce[we];let Ae=null;if(f!==null)Ae=f.getViewport(ge);else{const Me=h.getViewSubImage(d,ge);Ae=Me.viewport,we===0&&(e.setRenderTargetTextures(M,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(M))}let Ee=P[we];Ee===void 0&&(Ee=new hn,Ee.layers.enable(we),Ee.viewport=new xt,P[we]=Ee),Ee.matrix.fromArray(ge.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ge.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),we===0&&(F.matrix.copy(Ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(Ee)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const we=h.getDepthInformation(Ce[0]);we&&we.isValid&&we.texture&&p.init(we,s.renderState)}if(Pe&&Pe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let we=0;we<Ce.length;we++){const ge=Ce[we].camera;if(ge){let Ae=m[ge];Ae||(Ae=new th,m[ge]=Ae);const Ee=h.getCameraImage(ge);Ae.sourceTexture=Ee}}}}for(let Ce=0;Ce<v.length;Ce++){const ze=b[Ce],Pe=v[Ce];ze!==null&&Pe!==void 0&&Pe.update(ze,ae,c||a)}me&&me(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Oe=new rh;Oe.setAnimationLoop(ye),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}}const Iv=new Mt,hh=new Je;hh.set(-1,0,0,0,1,0,0,0,1);function Nv(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,nh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,R,B,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,R,B):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const R=e.get(m),B=R.envMap,M=R.envMapRotation;B&&(p.envMap.value=B,p.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(M)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(hh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,R,B){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*R,p.scale.value=B*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,R){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const R=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Uv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const b=v.program;i.uniformBlockBinding(M,b)}function c(M,v){let b=s[M.id];b===void 0&&(p(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",R));const L=v.program;i.updateUBOMapping(M,L);const S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function u(M){const v=h();M.__bindingPointIndex=v;const b=n.createBuffer(),L=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,L,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],b=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let S=0,T=b.length;S<T;S++){const U=b[S];if(Array.isArray(U))for(let A=0,P=U.length;A<P;A++)f(U[A],S,A,L);else f(U,S,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,v,b,L){if(x(M,v,b,L)===!0){const S=M.__offset,T=M.value;if(Array.isArray(T)){let U=0;for(let A=0;A<T.length;A++){const P=T[A],F=m(P);_(P,M.__data,U),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function _(M,v,b){typeof M=="number"||typeof M=="boolean"?v[0]=M:M.isMatrix3?(v[0]=M.elements[0],v[1]=M.elements[1],v[2]=M.elements[2],v[3]=0,v[4]=M.elements[3],v[5]=M.elements[4],v[6]=M.elements[5],v[7]=0,v[8]=M.elements[6],v[9]=M.elements[7],v[10]=M.elements[8],v[11]=0):ArrayBuffer.isView(M)?v.set(new M.constructor(M.buffer,M.byteOffset,v.length)):M.toArray(v,b)}function x(M,v,b,L){const S=M.value,T=v+"_"+b;if(L[T]===void 0)return typeof S=="number"||typeof S=="boolean"?L[T]=S:ArrayBuffer.isView(S)?L[T]=S.slice():L[T]=S.clone(),!0;{const U=L[T];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return L[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(U.equals(S)===!1)return U.copy(S),!0}}return!1}function p(M){const v=M.uniforms;let b=0;const L=16;for(let T=0,U=v.length;T<U;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let P=0,F=A.length;P<F;P++){const w=A[P],O=Array.isArray(w.value)?w.value:[w.value];for(let V=0,k=O.length;V<k;V++){const K=O[V],Z=m(K),Y=b%L,$=Y%Z.boundary,fe=Y+$;b+=$,fe!==0&&L-fe<Z.storage&&(b+=L-fe),w.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,b+=Z.storage}}}const S=b%L;return S>0&&(b+=L-S),M.__size=b,M.__cache={},this}function m(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",M),v}function R(M){const v=M.target;v.removeEventListener("dispose",R);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function B(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:B}}const Ov=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function Bv(){return Rn===null&&(Rn=new jd(Ov,16,16,Ni,Vn),Rn.name="DFG_LUT",Rn.minFilter=Nt,Rn.magFilter=Nt,Rn.wrapS=On,Rn.wrapT=On,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class fh{constructor(e={}){const{canvas:t=ep(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=f,p=new Set([ic,nc,tc]),m=new Set([rn,Gn,xr,Sr,jl,ec]),R=new Uint32Array(4),B=new Int32Array(4),M=new ne;let v=null,b=null;const L=[],S=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let A=!1,P=null,F=null,w=null,O=null;this._outputColorSpace=sn;let V=0,k=0,K=null,Z=-1,Y=null;const $=new xt,fe=new xt;let he=null;const me=new Qe(0);let ye=0,Oe=t.width,J=t.height,ae=1,Ce=null,ze=null;const Pe=new xt(0,0,Oe,J),Se=new xt(0,0,Oe,J);let qe=!1;const we=new lc;let ge=!1,Ae=!1;const Ee=new Mt,Me=new ne,Ne=new xt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Le(){return K===null?ae:1}let D=i;function Be(y,X){return t.getContext(y,X)}let _e,E,g,H,z,N,te,le,G,I,q,oe,re,ie,de,xe,pe,C,ce,W,ue,ve,ee;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Et,!1),D===null){const X="webgl2";if(D=Be(X,y),D===null)throw Be(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}be()}catch(y){throw t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),ct("WebGLRenderer: "+y.message),y}function be(){_e=new Bg(D),_e.init(),ue=new Cv(D,_e),E=new Rg(D,_e,e,ue),g=new Av(D,_e),E.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),F=D.createFramebuffer(),w=D.createFramebuffer(),O=D.createFramebuffer(),H=new zg(D),z=new fv,N=new Rv(D,_e,g,z,E,ue,H),te=new Og(U),le=new Vp(D),ve=new Tg(D,le),G=new kg(D,le,H,ve),I=new Vg(D,G,le,ve,H),C=new Gg(D,E,N),de=new Cg(z),q=new hv(U,te,_e,E,ve,de),oe=new Nv(U,z),re=new mv,ie=new Mv(_e),pe=new Eg(U,te,g,I,_,l),xe=new Tv(U,I,E),ee=new Uv(D,H,E,g),ce=new Ag(D,_e,H),W=new Hg(D,_e,H),H.programs=q.programs,U.capabilities=E,U.extensions=_e,U.properties=z,U.renderLists=re,U.shadowMap=xe,U.state=g,U.info=H}x!==rn&&(T=new Xg(x,t.width,t.height,o,s,r));const Re=new Fv(U,D);this.xr=Re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=_e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=_e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(y){y!==void 0&&(ae=y,this.setSize(Oe,J,!1))},this.getSize=function(y){return y.set(Oe,J)},this.setSize=function(y,X,se=!0){if(Re.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=y,J=X,t.width=Math.floor(y*ae),t.height=Math.floor(X*ae),se===!0&&(t.style.width=y+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,X)},this.getDrawingBufferSize=function(y){return y.set(Oe*ae,J*ae).floor()},this.setDrawingBufferSize=function(y,X,se){Oe=y,J=X,ae=se,t.width=Math.floor(y*se),t.height=Math.floor(X*se),this.setViewport(0,0,y,X)},this.setEffects=function(y){if(x===rn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let X=0;X<y.length;X++)if(y[X].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy($)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,X,se,Q){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,X,se,Q),g.viewport($.copy(Pe).multiplyScalar(ae).round())},this.getScissor=function(y){return y.copy(Se)},this.setScissor=function(y,X,se,Q){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,X,se,Q),g.scissor(fe.copy(Se).multiplyScalar(ae).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(y){g.setScissorTest(qe=y)},this.setOpaqueSort=function(y){Ce=y},this.setTransparentSort=function(y){ze=y},this.getClearColor=function(y){return y.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(y=!0,X=!0,se=!0){let Q=0;if(y){let j=!1;if(K!==null){const Ue=K.texture.format;j=p.has(Ue)}if(j){const Ue=K.texture.type,He=m.has(Ue),Ie=pe.getClearColor(),Ge=pe.getClearAlpha(),Xe=Ie.r,je=Ie.g,it=Ie.b;He?(R[0]=Xe,R[1]=je,R[2]=it,R[3]=Ge,D.clearBufferuiv(D.COLOR,0,R)):(B[0]=Xe,B[1]=je,B[2]=it,B[3]=Ge,D.clearBufferiv(D.COLOR,0,B))}else Q|=D.COLOR_BUFFER_BIT}X&&(Q|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),P=y},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),pe.dispose(),re.dispose(),ie.dispose(),z.dispose(),te.dispose(),I.dispose(),ve.dispose(),ee.dispose(),q.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Bi),Re.removeEventListener("sessionend",Pt),gt.stop()};function $e(y){y.preventDefault(),Lc("WebGLRenderer: Context Lost."),A=!0}function Ze(){Lc("WebGLRenderer: Context Restored."),A=!1;const y=H.autoReset,X=xe.enabled,se=xe.autoUpdate,Q=xe.needsUpdate,j=xe.type;be(),H.autoReset=y,xe.enabled=X,xe.autoUpdate=se,xe.needsUpdate=Q,xe.type=j}function Et(y){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ot(y){const X=y.target;X.removeEventListener("dispose",Ot),Oi(X)}function Oi(y){rs(y),z.remove(y)}function rs(y){const X=z.get(y).programs;X!==void 0&&(X.forEach(function(se){q.releaseProgram(se)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,X,se,Q,j,Ue){X===null&&(X=Ye);const He=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ie=sf(y,X,se,Q,j);g.setMaterial(Q,He);let Ge=se.index,Xe=1;if(Q.wireframe===!0){if(Ge=G.getWireframeAttribute(se),Ge===void 0)return;Xe=2}const je=se.drawRange,it=se.attributes.position;let Ve=je.start*Xe,ut=(je.start+je.count)*Xe;Ue!==null&&(Ve=Math.max(Ve,Ue.start*Xe),ut=Math.min(ut,(Ue.start+Ue.count)*Xe)),Ge!==null?(Ve=Math.max(Ve,0),ut=Math.min(ut,Ge.count)):it!=null&&(Ve=Math.max(Ve,0),ut=Math.min(ut,it.count));const bt=ut-Ve;if(bt<0||bt===1/0)return;ve.setup(j,Q,Ie,se,Ge);let vt,pt=ce;if(Ge!==null&&(vt=le.get(Ge),pt=W,pt.setIndex(vt)),j.isMesh)Q.wireframe===!0?(g.setLineWidth(Q.wireframeLinewidth*Le()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(j.isLine){let Bt=Q.linewidth;Bt===void 0&&(Bt=1),g.setLineWidth(Bt*Le()),j.isLineSegments?pt.setMode(D.LINES):j.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else j.isPoints?pt.setMode(D.POINTS):j.isSprite&&pt.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Bt=j._multiDrawStarts,ke=j._multiDrawCounts,Wt=j._multiDrawCount,lt=Ge?le.get(Ge).bytesPerElement:1,an=z.get(Q).currentProgram.getUniforms();for(let Tn=0;Tn<Wt;Tn++)an.setValue(D,"_gl_DrawID",Tn),pt.render(Bt[Tn]/lt,ke[Tn])}else if(j.isInstancedMesh)pt.renderInstances(Ve,bt,j.count);else if(se.isInstancedBufferGeometry){const Bt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ke=Math.min(se.instanceCount,Bt);pt.renderInstances(Ve,bt,ke)}else pt.render(Ve,bt)};function Xn(y,X,se,Q){P!==null&&y.isNodeMaterial&&P.setObject(Q,y),ge===!0&&de.setState(y,se,!1),y.transparent===!0&&y.side===Nn&&y.forceSinglePass===!1?(y.side=jt,y.needsUpdate=!0,Hi(y,X,Q),y.side=ts,y.needsUpdate=!0,Hi(y,X,Q),y.side=Nn):Hi(y,X,Q)}this.compile=function(y,X,se=null){se===null&&(se=y),P!==null&&P.renderStart(y,X,se),b=ie.get(se),b.init(X),S.push(b),se.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),y!==se&&y.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),Ae=this.localClippingEnabled,ge=de.init(this.clippingPlanes,Ae),ge===!0&&de.setGlobalState(this.clippingPlanes,X),P!==null&&xe.render(b.state.shadowsArray,se,X);const Q=new Set;return y.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ue=j.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Ie=Ue[He];Xn(Ie,se,X,j),Q.add(Ie)}else Xn(Ue,se,X,j),Q.add(Ue)}),b=S.pop(),P!==null&&P.renderEnd(),Q},this.compileAsync=function(y,X,se=null){const Q=this.compile(y,X,se);return new Promise(j=>{function Ue(){if(Q.forEach(function(He){const Ge=z.get(He).currentProgram;(Ge===void 0||Ge.isReady())&&Q.delete(He)}),Q.size===0){j(y);return}setTimeout(Ue,10)}_e.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let _i=null;function vi(y){_i&&_i(y)}function Bi(){gt.stop()}function Pt(){gt.start()}const gt=new rh;gt.setAnimationLoop(vi),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(y){_i=y,Re.setAnimationLoop(y),y===null?gt.stop():gt.start()},Re.addEventListener("sessionstart",Bi),Re.addEventListener("sessionend",Pt),this.render=function(y,X){if(X!==void 0&&X.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;P!==null&&P.renderStart(y,X);const se=Re.enabled===!0&&Re.isPresenting===!0,Q=T!==null&&(K===null||se)&&T.begin(U,K);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),y.isScene===!0&&y.onBeforeRender(U,y,X,K),b=ie.get(y,S.length),b.init(X),b.state.textureUnits=N.getTextureUnits(),S.push(b),Ee.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),we.setFromProjectionMatrix(Ee,Bn,X.reversedDepth),Ae=this.localClippingEnabled,ge=de.init(this.clippingPlanes,Ae),v=re.get(y,L.length),v.init(),L.push(v),Re.enabled===!0&&Re.isPresenting===!0){const He=U.xr.getDepthSensingMesh();He!==null&&qn(He,X,-1/0,U.sortObjects)}qn(y,X,0,U.sortObjects),v.finish(),P!==null&&P.updateLights(b.state.lightsArray),U.sortObjects===!0&&v.sort(Ce,ze),De=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,De&&pe.addToRenderList(v,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&de.beginShadows();const j=b.state.shadowsArray;if(xe.render(j,y,X),ge===!0&&de.endShadows(),(Q&&T.hasRenderPass())===!1){const He=v.opaque,Ie=v.transmissive;if(b.setupLights(),X.isArrayCamera){const Ge=X.cameras;if(Ie.length>0)for(let Xe=0,je=Ge.length;Xe<je;Xe++){const it=Ge[Xe];Ur(He,Ie,y,it)}De&&pe.render(y);for(let Xe=0,je=Ge.length;Xe<je;Xe++){const it=Ge[Xe];ki(v,y,it,it.viewport)}}else Ie.length>0&&Ur(He,Ie,y,X),De&&pe.render(y),ki(v,y,X)}K!==null&&k===0&&(N.updateMultisampleRenderTarget(K),N.updateRenderTargetMipmap(K)),Q&&T.end(U),y.isScene===!0&&y.onAfterRender(U,y,X),ve.resetDefaultState(),Z=-1,Y=null,S.pop(),S.length>0?(b=S[S.length-1],N.setTextureUnits(b.state.textureUnits),ge===!0&&de.setGlobalState(U.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?v=L[L.length-1]:v=null,P!==null&&P.renderEnd()};function qn(y,X,se,Q){if(y.visible===!1)return;if(y.layers.test(X.layers)){if(y.isGroup)se=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(X);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(we)){Q&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ee);const He=I.update(y),Ie=y.material;Ie.visible&&v.push(y,He,Ie,se,Ne.z,null,X)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(we))){const He=I.update(y),Ie=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ne.copy(He.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ie)){const Ge=He.groups;for(let Xe=0,je=Ge.length;Xe<je;Xe++){const it=Ge[Xe],Ve=Ie[it.materialIndex];Ve&&Ve.visible&&v.push(y,He,Ve,se,Ne.z,it,X)}}else Ie.visible&&v.push(y,He,Ie,se,Ne.z,null,X)}}const Ue=y.children;for(let He=0,Ie=Ue.length;He<Ie;He++)qn(Ue[He],X,se,Q)}function ki(y,X,se,Q){const{opaque:j,transmissive:Ue,transparent:He}=y;b.setupLightsView(se),ge===!0&&de.setGlobalState(U.clippingPlanes,se),Q&&g.viewport($.copy(Q)),j.length>0&&as(j,X,se),Ue.length>0&&as(Ue,X,se),He.length>0&&as(He,X,se),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ur(y,X,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Q.id]===void 0){const Ve=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Q.id]=new bn(1,1,{generateMipmaps:!0,type:Ve?Vn:rn,minFilter:Zi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ue=b.state.transmissionRenderTarget[Q.id],He=Q.viewport||$;Ue.setSize(He.z*U.transmissionResolutionScale,He.w*U.transmissionResolutionScale);const Ie=U.getRenderTarget(),Ge=U.getActiveCubeFace(),Xe=U.getActiveMipmapLevel();U.setRenderTarget(Ue),U.getClearColor(me),ye=U.getClearAlpha(),ye<1&&U.setClearColor(16777215,.5),U.clear(),De&&pe.render(se);const je=U.toneMapping;U.toneMapping=yn;const it=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),b.setupLightsView(Q),ge===!0&&de.setGlobalState(U.clippingPlanes,Q),as(y,se,Q),N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ut=0,bt=X.length;ut<bt;ut++){const vt=X[ut],{object:pt,geometry:Bt,material:ke,group:Wt}=vt;if(ke.side===Nn&&pt.layers.test(Q.layers)){const lt=ke.side;ke.side=jt,ke.needsUpdate=!0,os(pt,se,Q,Bt,ke,Wt),ke.side=lt,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue))}U.setRenderTarget(Ie,Ge,Xe),U.setClearColor(me,ye),it!==void 0&&(Q.viewport=it),U.toneMapping=je}function as(y,X,se){const Q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Ue=y.length;j<Ue;j++){const He=y[j],{object:Ie,geometry:Ge,group:Xe}=He;let je=He.material;je.allowOverride===!0&&Q!==null&&(je=Q),Ie.layers.test(se.layers)&&os(Ie,X,se,Ge,je,Xe)}}function os(y,X,se,Q,j,Ue){P!==null&&j.isNodeMaterial&&P.setObject(y,j),y.onBeforeRender(U,X,se,Q,j,Ue),y.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),j.onBeforeRender(U,X,se,Q,y,Ue),j.transparent===!0&&j.side===Nn&&j.forceSinglePass===!1?(j.side=jt,j.needsUpdate=!0,U.renderBufferDirect(se,X,Q,j,y,Ue),j.side=ts,j.needsUpdate=!0,U.renderBufferDirect(se,X,Q,j,y,Ue),j.side=Nn):U.renderBufferDirect(se,X,Q,j,y,Ue),y.onAfterRender(U,X,se,Q,j,Ue)}function Hi(y,X,se){X.isScene!==!0&&(X=Ye);const Q=z.get(y),j=b.state.lights,Ue=b.state.shadowsArray,He=j.state.version,Ie=q.getParameters(y,j.state,Ue,X,se,b.state.lightProbeGridArray),Ge=q.getProgramCacheKey(Ie);let Xe=Q.programs;Q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?X.environment:null,Q.fog=X.fog;const je=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Q.envMap=te.get(y.envMap||Q.environment,je),Q.envMapRotation=Q.environment!==null&&y.envMap===null?X.environmentRotation:y.envMapRotation,Xe===void 0&&(y.addEventListener("dispose",Ot),Xe=new Map,Q.programs=Xe);let it=Xe.get(Ge);if(it!==void 0){if(Q.currentProgram===it&&Q.lightsStateVersion===He)return Br(y,Ie),it}else Ie.uniforms=q.getUniforms(y),P!==null&&y.isNodeMaterial&&P.build(y,se,Ie),y.onBeforeCompile(Ie,U),it=q.acquireProgram(Ie,Ge),Xe.set(Ge,it),Q.uniforms=Ie.uniforms;const Ve=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=de.uniform),Br(y,Ie),Q.needsLights=af(y),Q.lightsStateVersion=He,Q.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.sunLights.value=j.state.sun,Ve.sunLightShadows.value=j.state.sunShadow,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.sunShadowMatrix.value=j.state.sunShadowMatrix,Ve.sunShadowCascade.value=j.state.sunShadowCascade,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=b.state.lightProbeGridArray.length>0,Q.currentProgram=it,Q.uniformsList=null,it}function Or(y){if(y.uniformsList===null){const X=y.currentProgram.getUniforms();y.uniformsList=va.seqWithValue(X.seq,y.uniforms)}return y.uniformsList}function Br(y,X){const se=z.get(y);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Ka(y,X){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(X.matrixWorld);for(let se=0,Q=y.length;se<Q;se++){const j=y[se];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function sf(y,X,se,Q,j){X.isScene!==!0&&(X=Ye),N.resetTextureUnits();const Ue=X.fog,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?X.environment:null,Ie=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:at.workingColorSpace,Ge=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Xe=te.get(Q.envMap||He,Ge),je=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ve=!!se.morphAttributes.position,ut=!!se.morphAttributes.normal,bt=!!se.morphAttributes.color;let vt=yn;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(vt=U.toneMapping);const pt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Bt=pt!==void 0?pt.length:0,ke=z.get(Q),Wt=b.state.lights;if(ge===!0&&(Ae===!0||y!==Y)){const _t=y===Y&&Q.id===Z;de.setState(Q,y,_t)}let lt=!1;Q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Wt.state.version||ke.outputColorSpace!==Ie||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Xe||Q.fog===!0&&ke.fog!==Ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==de.numPlanes||ke.numIntersection!==de.numIntersection)||ke.vertexAlphas!==je||ke.vertexTangents!==it||ke.morphTargets!==Ve||ke.morphNormals!==ut||ke.morphColors!==bt||ke.toneMapping!==vt||ke.morphTargetsCount!==Bt||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,ke.__version=Q.version);let an=ke.currentProgram;lt===!0&&(an=Hi(Q,X,j),P&&Q.isNodeMaterial&&P.onUpdateProgram(Q,an,ke));let Tn=!1,xi=!1,ls=!1;const ht=an.getUniforms(),yt=ke.uniforms;if(g.useProgram(an.program)&&(Tn=!0,xi=!0,ls=!0),Q.id!==Z&&(Z=Q.id,xi=!0),ke.needsLights){const _t=Ka(b.state.lightProbeGridArray,j);ke.lightProbeGrid!==_t&&(ke.lightProbeGrid=_t,xi=!0)}if(Tn||Y!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",y.projectionMatrix),ht.setValue(D,"viewMatrix",y.matrixWorldInverse);const Mi=ht.map.cameraPosition;Mi!==void 0&&Mi.setValue(D,Me.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ht.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),Y!==y&&(Y=y,xi=!0,ls=!0)}if(ke.needsLights&&(Wt.state.sunShadowMap.length>0&&ht.setValue(D,"sunShadowMap",Wt.state.sunShadowMap,N),Wt.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",Wt.state.directionalShadowMap,N),Wt.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",Wt.state.spotShadowMap,N),Wt.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",Wt.state.pointShadowMap,N)),j.isSkinnedMesh){ht.setOptional(D,j,"bindMatrix"),ht.setOptional(D,j,"bindMatrixInverse");const _t=j.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ht.setValue(D,"boneTexture",_t.boneTexture,N))}j.isBatchedMesh&&(ht.setOptional(D,j,"batchingTexture"),ht.setValue(D,"batchingTexture",j._matricesTexture,N),ht.setOptional(D,j,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",j._indirectTexture,N),ht.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",j._colorsTexture,N));const Si=se.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&C.update(j,se,an),(xi||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,ht.setValue(D,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&X.environment!==null&&(yt.envMapIntensity.value=X.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=Bv()),xi){if(ht.setValue(D,"toneMappingExposure",U.toneMappingExposure),ke.needsLights&&rf(yt,ls),Ue&&Q.fog===!0&&oe.refreshFogUniforms(yt,Ue),oe.refreshMaterialUniforms(yt,Q,ae,J,b.state.transmissionRenderTarget[y.id]),ke.needsLights&&ke.lightProbeGrid){const _t=ke.lightProbeGrid;yt.probesSH.value=_t.texture,yt.probesMin.value.copy(_t.boundingBox.min),yt.probesMax.value.copy(_t.boundingBox.max),yt.probesResolution.value.copy(_t.resolution)}va.upload(D,Or(ke),yt,N)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(va.upload(D,Or(ke),yt,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ht.setValue(D,"center",j.center),ht.setValue(D,"modelViewMatrix",j.modelViewMatrix),ht.setValue(D,"normalMatrix",j.normalMatrix),ht.setValue(D,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){const _t=Q.uniformsGroups;for(let Mi=0,cs=_t.length;Mi<cs;Mi++){const Mc=_t[Mi];ee.update(Mc,an),ee.bind(Mc,an)}}return an}function rf(y,X){y.ambientLightColor.needsUpdate=X,y.lightProbe.needsUpdate=X,y.sunLights.needsUpdate=X,y.sunLightShadows.needsUpdate=X,y.directionalLights.needsUpdate=X,y.directionalLightShadows.needsUpdate=X,y.pointLights.needsUpdate=X,y.pointLightShadows.needsUpdate=X,y.spotLights.needsUpdate=X,y.spotLightShadows.needsUpdate=X,y.rectAreaLights.needsUpdate=X,y.hemisphereLights.needsUpdate=X}function af(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(y,X,se){const Q=z.get(y);Q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),z.get(y.texture).__webglTexture=X,z.get(y.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,X){const se=z.get(y);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(y,X=0,se=0){K=y,V=X,k=se;let Q=null,j=!1,Ue=!1;if(y){const Ie=z.get(y);if(Ie.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,Ie.__webglFramebuffer),$.copy(y.viewport),fe.copy(y.scissor),he=y.scissorTest,g.viewport($),g.scissor(fe),g.setScissorTest(he),Z=-1;return}else if(Ie.__webglFramebuffer===void 0)N.setupRenderTarget(y);else if(Ie.__hasExternalTextures)N.rebindTextures(y,z.get(y.texture).__webglTexture,z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const je=y.depthTexture;if(Ie.__boundDepthTexture!==je){if(je!==null&&z.has(je)&&(y.width!==je.image.width||y.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(y)}}const Ge=y.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ue=!0);const Xe=z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?Q=Xe[X][se]:Q=Xe[X],j=!0):y.samples>0&&N.useMultisampledRTT(y)===!1?Q=z.get(y).__webglMultisampledFramebuffer:Array.isArray(Xe)?Q=Xe[se]:Q=Xe,$.copy(y.viewport),fe.copy(y.scissor),he=y.scissorTest}else $.copy(Pe).multiplyScalar(ae).floor(),fe.copy(Se).multiplyScalar(ae).floor(),he=qe;if(se!==0&&(Q=F),g.bindFramebuffer(D.FRAMEBUFFER,Q)&&g.drawBuffers(y,Q),g.viewport($),g.scissor(fe),g.setScissorTest(he),j){const Ie=z.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie.__webglTexture,se)}else if(Ue){const Ie=X;for(let Ge=0;Ge<y.textures.length;Ge++){const Xe=z.get(y.textures[Ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,se,Ie)}}else if(y!==null&&se!==0){const Ie=z.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ie.__webglTexture,se)}Z=-1};function Sc(y){const X=z.get(y);return(X.__readFormat!==y.format||X.__readType!==y.type)&&(X.__readFormat=y.format,X.__readType=y.type,X.__formatReadable=E.textureFormatReadable(y.format),X.__typeReadable=E.textureTypeReadable(y.type)),X}this.readRenderTargetPixels=function(y,X,se,Q,j,Ue,He,Ie=0){if(!(y&&y.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&He!==void 0&&(Ge=Ge[He]),Ge){g.bindFramebuffer(D.FRAMEBUFFER,Ge);try{const Xe=y.textures[Ie],je=Xe.format,it=Xe.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie);const Ve=Sc(Xe);if(Ve.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=y.width-Q&&se>=0&&se<=y.height-j&&D.readPixels(X,se,Q,j,ue.convert(je),ue.convert(it),Ue)}finally{const Xe=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(y,X,se,Q,j,Ue,He,Ie=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&He!==void 0&&(Ge=Ge[He]),Ge)if(X>=0&&X<=y.width-Q&&se>=0&&se<=y.height-j){g.bindFramebuffer(D.FRAMEBUFFER,Ge);const Xe=y.textures[Ie],je=Xe.format,it=Xe.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie);const Ve=Sc(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,Ue.byteLength,D.STREAM_READ),D.readPixels(X,se,Q,j,ue.convert(je),ue.convert(it),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const bt=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,bt);const vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await tp(D,vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ut),D.deleteSync(vt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,X=null,se=0){const Q=Math.pow(2,-se),j=Math.floor(y.image.width*Q),Ue=Math.floor(y.image.height*Q),He=X!==null?X.x:0,Ie=X!==null?X.y:0;N.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,se,0,0,He,Ie,j,Ue),g.unbindTexture()},this.copyTextureToTexture=function(y,X,se=null,Q=null,j=0,Ue=0){let He,Ie,Ge,Xe,je,it,Ve,ut,bt;const vt=y.isCompressedTexture?y.mipmaps[Ue]:y.image;if(se!==null)He=se.max.x-se.min.x,Ie=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,je=se.min.y,it=se.isBox3?se.min.z:0;else{const yt=Math.pow(2,-j);He=Math.floor(vt.width*yt),Ie=Math.floor(vt.height*yt),y.isDataArrayTexture?Ge=vt.depth:y.isData3DTexture?Ge=Math.floor(vt.depth*yt):Ge=1,Xe=0,je=0,it=0}Q!==null?(Ve=Q.x,ut=Q.y,bt=Q.z):(Ve=0,ut=0,bt=0);const pt=ue.convert(X.format),Bt=ue.convert(X.type);let ke;X.isData3DTexture?(N.setTexture3D(X,0),ke=D.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(N.setTexture2DArray(X,0),ke=D.TEXTURE_2D_ARRAY):(N.setTexture2D(X,0),ke=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment);const Wt=g.getParameter(D.UNPACK_ROW_LENGTH),lt=g.getParameter(D.UNPACK_IMAGE_HEIGHT),an=g.getParameter(D.UNPACK_SKIP_PIXELS),Tn=g.getParameter(D.UNPACK_SKIP_ROWS),xi=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),g.pixelStorei(D.UNPACK_SKIP_ROWS,je),g.pixelStorei(D.UNPACK_SKIP_IMAGES,it);const ls=y.isDataArrayTexture||y.isData3DTexture,ht=X.isDataArrayTexture||X.isData3DTexture;if(y.isDepthTexture){const yt=z.get(y),Si=z.get(X),_t=z.get(yt.__renderTarget),Mi=z.get(Si.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,_t.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let cs=0;cs<Ge;cs++)ls&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(y).__webglTexture,j,it+cs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(X).__webglTexture,Ue,bt+cs)),D.blitFramebuffer(Xe,je,He,Ie,Ve,ut,He,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(j!==0||y.isRenderTargetTexture||z.has(y)){const yt=z.get(y),Si=z.get(X);g.bindFramebuffer(D.READ_FRAMEBUFFER,w),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let _t=0;_t<Ge;_t++)ls?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.__webglTexture,j,it+_t):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,j),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Si.__webglTexture,Ue,bt+_t):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Si.__webglTexture,Ue),j!==0?D.blitFramebuffer(Xe,je,He,Ie,Ve,ut,He,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(ke,Ue,Ve,ut,bt+_t,Xe,je,He,Ie):D.copyTexSubImage2D(ke,Ue,Ve,ut,Xe,je,He,Ie);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(ke,Ue,Ve,ut,bt,He,Ie,Ge,pt,Bt,vt.data):X.isCompressedArrayTexture?D.compressedTexSubImage3D(ke,Ue,Ve,ut,bt,He,Ie,Ge,pt,vt.data):D.texSubImage3D(ke,Ue,Ve,ut,bt,He,Ie,Ge,pt,Bt,vt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ue,Ve,ut,He,Ie,pt,Bt,vt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ue,Ve,ut,vt.width,vt.height,pt,vt.data):D.texSubImage2D(D.TEXTURE_2D,Ue,Ve,ut,He,Ie,pt,Bt,vt);g.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt),g.pixelStorei(D.UNPACK_SKIP_PIXELS,an),g.pixelStorei(D.UNPACK_SKIP_ROWS,Tn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,xi),Ue===0&&X.generateMipmaps&&D.generateMipmap(ke),g.unbindTexture()},this.initRenderTarget=function(y){z.get(y).__webglFramebuffer===void 0&&N.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?N.setTextureCube(y,0):y.isData3DTexture?N.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?N.setTexture2DArray(y,0):N.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){V=0,k=0,K=null,g.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const br={sourceSize:[19564,1080],outputSize:[1920,1080],paths:[{d:"M-48,546.000024 C-48,546.000024 1139.999966,546.000024 1698.00004,546.000024 C2256.000006,546.000024 2496.003317,612.999946 3372.004951,612.999946 C4248.004405,612.999946 4127.993049,815 5051.992163,815 C5975.99302,815 5854.008998,187.000061 6724.003699,187.000061 C7594.001452,187.000061 7473.999687,546.000137 8403.99963,546.000137 C9333.999573,546.000137 9198.000247,718.999933 10079.999658,718.999933 C10961.999941,718.999933 10770.000431,815 11766.000342,815 C12630,815 12540,612.999946 13440,612.999946 C14330,612.999946 14510,546.000024 15440,546.000024 C16640,546.000024 19500,546.000024 19500,546.000024",width:2.5,start:{times:[7.066666666666666,9.866666666666667],bezier:[.33333333,0,0,1.0000000503071187]},end:{times:[0,8.533333333333333],bezier:[.33333333,0,.66666667,1]},openingLength:14890.223121},{d:"M-48,545.999971 C-48,545.999971 1139.999966,545.999971 1698.00004,545.999971 C2256.000006,545.999971 2496.000919,720.999939 3372.002335,720.999939 C4248.001789,720.999939 4127.996973,179.000061 5051.996086,179.000061 C5975.996943,179.000061 5854.006818,535.000039 6724.001955,535.000039 C7593.999708,535.000039 7473.999687,714.000067 8403.99963,714.000067 C9333.999573,714.000067 9198.000247,362.999963 10079.999658,362.999963 C10961.999941,362.999963 10770.000431,179.000061 11766.000342,179.000061 C12630,179.000061 12540,720.999939 13440,720.999939 C14330,720.999939 14510,545.999971 15440,545.999971 C16640,545.999971 19500,545.999971 19500,545.999971",width:2.5,start:{times:[7.066666666666666,9.866666666666667],bezier:[.33333333,0,0,1.0000000503071187]},end:{times:[.12132161458333333,8.492903645833334],bezier:[.33333333,0,.66666667,1]},openingLength:14898.822802},{d:"M-48,545.999996 C-48,545.999996 1139.999966,545.999996 1698.00004,545.999996 C2256.000006,545.999996 2496.000047,365 3372.001245,365 C4248.000481,365 4127.999152,727.000048 5051.99783,727.000048 C5975.999123,727.000048 5854.005946,911.000092 6724.001083,911.000092 C7593.998836,911.000092 7473.999687,361.999969 8403.99963,361.999969 C9333.999573,361.999969 9198.000247,902.999983 10079.999658,902.999983 C10961.999941,902.999983 10770.000431,727.000048 11766.000342,727.000048 C12630,727.000048 12540,365 13440,365 C14330,365 14510,545.999996 15440,545.999996 C16640,545.999996 19500,545.999996 19500,545.999996",width:2.5,start:{times:[7.066666666666666,9.866666666666667],bezier:[.33333333,0,0,1.0000000503071187]},end:{times:[.16178385416666666,8.533333333333333],bezier:[.33333333,0,.66666667,1]},openingLength:15014.430298},{d:"M-48,546.000011 C-48,546.000011 1139.999966,546.000011 1698.00004,546.000011 C2256.000006,546.000011 2496.000047,909.000003 3372.001245,909.000003 C4248.000481,909.000003 4128.000024,355.000061 5051.999138,355.000046 C5975.999995,355.000061 5856.005206,703.000009 6726.000343,703.000009 C7595.998095,703.000009 7475.999818,918 8405.999761,918 C9335.999704,918 9198.000247,523.000029 10079.999658,523.000029 C10961.999941,523.000029 10770.000431,355.000046 11766.000342,355.000046 C12630,355.000046 12540,909.000003 13440,909.000003 C14330,909.000003 14510,546.000011 15440,546.000011 C16640,546.000011 19500,546.000011 19500,546.000011",width:2.5,start:{times:[7.066666666666666,9.866666666666667],bezier:[.33333333,0,0,1.0000000503071187]},end:{times:[.08089192708333333,8.492903645833334],bezier:[.33333333,0,.66666667,1]},openingLength:14945.40515},{d:"M-48,546 C-48,546 1139.999966,546 1698.00004,546 C2256.000006,546 2496.000047,174 3372.001245,174 C4248.000481,174 4128.000024,893.999979 5051.999138,893.999979 C5975.999995,893.999979 5856.005206,360 6726.000343,360 C7595.998095,360 7475.999818,918 8405.999761,918 C9335.999704,918 9198.000247,180 10079.999658,180 C10961.999941,180 10770.000431,893.999979 11766.000342,893.999979 C12630,893.999979 12540,174 13440,174 C14330,174 14510,546 15440,546 C16640,546 19500,546 19500,546",width:2.5,start:{times:[7.066666666666666,9.866666666666667],bezier:[.33333333,0,0,1.0000000503071187]},end:{times:[.20221354166666666,8.533333333333333],bezier:[.33333333,0,.66666667,1]},openingLength:15407.657909}],pan:{anchor:[6720,540],segments:[{startTime:0,endTime:2.566666666666667,startX:6700,endX:5113.739308475584,bezier:[.33333333102946205,0,.666666664910776,.1211351698656633]},{startTime:2.566666666666667,endTime:3.7666666666666666,startX:5113.739308475584,endX:1880.9013828762418,bezier:[.33333333288875144,.20161576506285436,.6666666663490528,.7456018088814924]},{startTime:3.7666666666666666,endTime:5.6,startX:1880.9013828762418,endX:-2450.853637290984,bezier:[.33333333328569625,.29006428085166686,.6666666668996957,.7536871867371213]},{startTime:5.6,endTime:7.2,startX:-2450.853637290984,endX:-4800,bezier:[.3333333333333333,.39638696448141736,.6666666666666666,.6537749429986965]},{startTime:7.2,endTime:8.65,startX:-4800,endX:-7350,bezier:[.3333333333333333,.28905228758169943,.6666666666666666,.6711437908496731]},{startTime:8.65,endTime:9.75,startX:-7350,endX:-8875,bezier:[.3333333333333333,.41715846994535505,.6666666666666666,1]}]}},yu="#F4F4F2",wr=[{name:"Violet",hex:"#8A64FC"},{name:"Lime green",hex:"#D4F587"},{name:"Rose",hex:"#DE949A"},{name:"Light purple",hex:"#8AA9FF"},{name:"Plum",hex:"#78629A"},{name:"Light pink",hex:"#FF97FC"},{name:"Sage",hex:"#78A69C"}],ri=[{name:"Knit palette",label:"multi",colours:wr.map(n=>n.hex),thread:"#4F3E78",thread2:"#8A64FC"},{name:"Record colours",label:"record",colours:["#1C8F5A","#0B7FA0","#CF3F2C","#B98100"],thread:"#4F3E78",thread2:"#8A64FC"},{name:"Mono violet",label:"violet",colours:["#8A64FC","#C2B1FF","#6A4FD0","#DDD4FF","#7B6BB8","#A98FFF","#5A4A9C"],thread:"#4F3E78",thread2:"#8A64FC"},{name:"Mono blue",label:"blue",colours:["#4A6FE8","#AFC3FF","#2F52C9","#D3DEFF","#6C86D6","#8AA9FF","#2A3F9E"],thread:"#1F4BD8",thread2:"#8AA9FF"},{name:"Mono ink",label:"ink",colours:["#3A4452","#9AA3AE","#56616E","#C3C9D1","#6F7A88","#DDE1E6","#2B3340"],thread:"#2B3340",thread2:"#9AA3AE"},{name:"Colour fill",label:"fill",colours:["#8A64FC"],thread:"#4F3E78",thread2:"#8A64FC",hex:""}],Fn=5,cc="#1F4BD8",kv=[18,26,36];function ph(n){const e=ri[Fn];if(/^#[0-9a-f]{6}$/i.test(n||"")||(n=cc),n=n.toUpperCase(),e.hex===n)return e;const t=[1,3,5].map(a=>parseInt(n.slice(a,a+2),16)),i=(.2126*t[0]+.7152*t[1]+.0722*t[2])/255,s=Math.min(.6,Math.max(0,(i-.25)*1.1)),r="#"+t.map((a,o)=>Math.round(a+(kv[o]-a)*s).toString(16).padStart(2,"0")).join("").toUpperCase();return Object.assign(e,{hex:n,colours:[n],thread:r,thread2:n})}ph(cc);const la=15,bu=3,wu={centre:(136.72+829.72)/2/1200,half:(829.72-136.72)/2/1200},Hv=.5,zv=6,Gv=.9,Gs=Object.freeze({count:6,palette:0,fill:cc,colour:2,shade:0,y:-.06,heroIntro:300,heroSpeed:4,heroSpread:80,heroCount:5,thickness:26,line:2,pinch:2,open:0,tangle:.94,depth:0,waveSpeed:2.6,gloss:0,light:.4,worldWords:207,worldLine:86,ribbon:14,spacing:54,flatLine:1,chartTop:33,chartBottom:79,statsTop:38,statsBottom:70,logoSize:230,navSize:170,ctaSize:140,heroLineY:77,heroTextY:73,betweenLineY:69,gapAbove:45,gapBelow:38}),Nl=n=>{const e=Math.abs(n),t=Math.min(1,e/.75);return .7*t*t*(3-2*t)+.3*e*e},mh=[{key:"look1",name:"Option 1 · 15 strings, two-tone, Knit palette",values:{count:15,palette:0,colour:4,shade:0,thickness:91}},{key:"look2",name:"Option 2 · 6 strings, overlapping, record colours",values:{count:6,palette:1,colour:3,shade:0,thickness:91}},{key:"look3",name:"Option 3 · 15 thin strings, overlapping, record colours",values:{count:15,palette:1,colour:3,shade:0,thickness:12}},{key:"look4",name:"Option 4 · 6 thick strings, overlapping, Knit palette",values:{count:6,palette:0,colour:3,shade:0,thickness:100}}],gh=(n,e)=>{const t=Math.sin(Math.PI*n),i=Math.min(1,n/.35);return{grow:e*.56*n,whip:e*.12*t,phase:1.5*n,fan:e*.09*t,swell:i*i*(3-2*i)}},Eu=.12,ui=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<760,ir=ui?Math.max(screen.width,screen.height)>1e3?320:160:520,qi=ui?6:28,Tu=2.4,Au=.6,Ru=1.2,Ri=Math.PI*2,Vs=n=>Math.min(1,Math.max(0,n)),Cu=-48,Vv=19500,ni=2048,In=br.paths.map(n=>{const e=n.d.match(/-?(?:\d*\.)?\d+(?:e[-+]?\d+)?/gi).map(Number),t=[];for(let l=0;l<e.length;l+=2)t.push([e[l],e[l+1]]);const i=[[t[0][0],t[0][1],0]];for(let l=1;l+2<t.length;l+=3){const[c,u,h,d]=[t[l-1],t[l],t[l+1],t[l+2]];for(let f=1;f<=400;f++){const _=f/400,x=1-_,p=3*x*x*(u[0]-c[0])+6*x*_*(h[0]-u[0])+3*_*_*(d[0]-h[0]),m=3*x*x*(u[1]-c[1])+6*x*_*(h[1]-u[1])+3*_*_*(d[1]-h[1]);i.push([x*x*x*c[0]+3*x*x*_*u[0]+3*x*_*_*h[0]+_*_*_*d[0],x*x*x*c[1]+3*x*x*_*u[1]+3*x*_*_*h[1]+_*_*_*d[1],Math.abs(p)>1e-6?m/p:0])}}const s=[0];for(let l=1;l<i.length;l++)s.push(s[l-1]+Math.hypot(i[l][0]-i[l-1][0],i[l][1]-i[l-1][1]));const r=new Float32Array(ni),a=new Float32Array(ni);let o=0;for(let l=0;l<ni;l++){const c=Cu+(Vv-Cu)*l/(ni-1);for(;o<i.length-2&&i[o+1][0]<c;)o++;const[u,h]=[i[o],i[o+1]],d=Vs((c-u[0])/Math.max(1e-6,h[0]-u[0]));r[l]=u[1]+(h[1]-u[1])*d,a[l]=u[2]+(h[2]-u[2])*d}return{y:r,slope:a,dense:i,lengths:s,total:s.at(-1),end:n.end}}),Wv=(()=>{const n=new Float32Array(ni*In.length*2);In.forEach((t,i)=>{for(let s=0;s<ni;s++)n[(i*ni+s)*2]=t.y[s],n[(i*ni+s)*2+1]=t.slope[s]});const e=new jd(n,ni,In.length,Ni,Sn);return e.minFilter=e.magFilter=Ft,e.needsUpdate=!0,e})();function Pu(n,e,t){const i=1-n;return 3*i*i*n*e+3*i*n*n*t+n*n*n}function Xv(n,[e,t,i,s]){if(n<=0)return 0;if(n>=1)return 1;let r=0,a=1,o=n;for(let l=0;l<24;l++){const c=Pu(o,e,i);if(Math.abs(c-n)<1e-9)break;c<n?r=o:a=o,o=(r+a)/2}return Pu(o,t,s)}function xa(n,e){const[t,i]=n.end.times,r=Xv((e-t)/(i-t),n.end.bezier)*n.total,a=n.lengths;let o=0,l=a.length-1;for(;l-o>1;){const u=o+l>>1;a[u]<r?o=u:l=u}const c=Vs((r-a[o])/Math.max(1e-6,a[l]-a[o]));return n.dense[o][0]+(n.dense[l][0]-n.dense[o][0])*c}function Lu(n){let e=1/0,t=-1/0;for(const i of In){const s=xa(i,n);s<e&&(e=s),s>t&&(t=s)}return[e,t]}const Du=1698,Xt=[67,175,-181,363,-372],sr=[1,.84,.64,.52,.36,.25,.1,-.04,-.2,-.44,-.72,-1];function qv(n,e,t=!1){const i=e>1?n/(e-1):.5,s=n===0||n===e-1?0:(ft(n,31)-.5)*.5/(e-1);let r=i+s;if(t){const o=i*(sr.length-1),l=Math.floor(o),c=Math.min(l+1,sr.length-1);r=(1-(sr[l]+(sr[c]-sr[l])*(o-l)))/2}const a=-372+735*Vs(r);return a<Xt[2]?3+(Xt[3]-a)/(Xt[3]-Xt[4]):a>Xt[1]?2+(a-Xt[2])/(Xt[3]-Xt[2]):a>=Xt[0]?(a-Xt[0])/(Xt[1]-Xt[0]):1+(Xt[1]-a)/(Xt[1]-Xt[2])}const Yv=n=>(n=Vs(n),n*n*n*(n*(n*6-15)+10)),$v=n=>{const e=Math.sin(n*127.1+311.7)*43758.5453;return e-Math.floor(e)},ft=(n,e)=>$v(n*17.3+e*3.7+1),rr=n=>n<.5?-1:1;function Kv(n){const e=[[.52+.2*ft(n,1),.65+.55*ft(n,2),ft(n,3)*Ri,(.12+.12*ft(n,4))*rr(ft(n,5))],[.22+.14*ft(n,6),1.3+.8*ft(n,7),ft(n,8)*Ri,(.18+.22*ft(n,9))*rr(ft(n,10))],[.06+.06*ft(n,11),2.2+1.1*ft(n,12),ft(n,13)*Ri,(.3+.3*ft(n,14))*rr(ft(n,15))]],t=[[.6+.3*ft(n,16),.8+.6*ft(n,17),ft(n,18)*Ri,(.12+.18*ft(n,19))*rr(ft(n,20))],[.3+.2*ft(n,21),1.7+.8*ft(n,22),ft(n,23)*Ri,(.2+.3*ft(n,24))*rr(ft(n,25))]],i=.94/e.reduce((r,a)=>r+a[0],0),s=1/t.reduce((r,a)=>r+a[0],0);return{y:e.map(([r,a,o,l])=>new xt(r*i,a*Ri,o,l)),z:t.map(([r,a,o,l])=>new xt(r*s,a*Ri,o,l))}}function Zv(){const n=new Wn,e=(ir+1)*(qi+1),t=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*2);let r=0;for(let o=0;o<=ir;o++)for(let l=0;l<=qi;l++,r++)t[r*3]=o/ir,t[r*3+1]=l/qi*Ri,i[r*3+2]=1,s[r*2]=o/ir,s[r*2+1]=l/qi;const a=[];for(let o=0;o<ir;o++)for(let l=0;l<qi;l++){const c=o*(qi+1)+l,u=c+qi+1;a.push(c,c+1,u,u,c+1,u+1)}return n.setAttribute("position",new fn(t,3)),n.setAttribute("normal",new fn(i,3)),n.setAttribute("uv",new fn(s,2)),n.setIndex(a),n.boundingSphere=new Ba(new ne,1e9),n}const Jv=`
uniform sampler2D uPaths;
uniform float uCamX, uSy, uLow, uRow, uWob, uScreenW, uLoopEnd, uLift, uGather, uFlare;
uniform float uTime, uK, uHead, uSplit, uAmp, uZAmp, uBaseY, uCentreY, uRadius, uPinchR, uEndR, uSlot, uRibbon, uSide, uGrow, uWhip, uPhase, uFanOut, uSwell, uLeft, uWidth, uCycles, uLayer;
uniform vec4 uWY[3];
uniform vec4 uWZ[2];
varying float vU;
varying float vFront;
varying float vHead;
vec3 wP; vec3 wN;
const float PINCH_W = 0.7;     // how long the taper into the line is (1 = the middle to the edge)
const float PINCH_ROUND = 0.08;
// His 10:26 PM clip: "I swipe down and it goes right to this... I don't want it to go through four waves of it". The scroll
// no longer flies the camera on to the shared exit (four screens of crossings); the strings fold into the line where they
// are. A reunion front, the exit's own funnel, comes in from the right edge and runs out past the left as uGather goes
// 0 to 1, and the tangle behind it holds still. GATHER_W is the funnel's length, as a share of the tube (1.08 screens).
const float GATHER_W = 0.7;
const float FAN = 0.58;       // how long the stem takes to fan out into the strings (his 5:46 PM clip: "longer... go out there")
// Alex, Nov 5 10:27 PM: "the lines got 'sharp' at the end". The heads are full width with a round end now, the colour
// fading in over HEAD_SOFT of the length behind it (was a needle taper, TIP .07), so a string arrives softly.
const float HEAD_SOFT = 0.16;
// The string's centreline at u, and the ring vertex at angle th around it. As uK rises
// (0 tangled .. 1 one line) the pinch grows out of the middle of the screen: inside it the
// string is a ribbon in the line; outside it the string is where it would be on its own
// (far), so the ends stay wide until the pinch reaches them. The line itself is an hourglass:
// rest is its half thickness here, and the ribbons share that, each a little off the next.
// His 5:52 PM clip + original-line-study.md ("this is just for movement, I want the same look"): the strings follow the
// original After Effects line study's five routes (one stem at Y 546, fan, crossings, back to 546 at the shared exit),
// sampled into uPaths (one row a route, PATH_N samples from PATH_X0 to PATH_X1 of its 19564 wide composition), seen through
// its camera (uCamX, the composition x at the screen's left edge, 1920 units across the screen).
const float PATH_X0 = -48.0;
const float PATH_X1 = 19500.0;
const float PATH_N = 2048.0;
// Height and slope between two samples by cubic Hermite (each sample holds the route's height and exact slope), so the
// strings bend smoothly with no corners at the samples (his 6:03 PM clip: "almost jagged... I don't want it to be jagged").
float pathAt(float row, float X, out float slope) {
  float fx = clamp((X - PATH_X0) / (PATH_X1 - PATH_X0), 0.0, 1.0) * (PATH_N - 1.0);
  float i0 = floor(fx);
  float i1 = min(i0 + 1.0, PATH_N - 1.0);
  float t = fx - i0;
  float v = (row + 0.5) / 5.0;
  float h = (PATH_X1 - PATH_X0) / (PATH_N - 1.0);
  vec2 a = texture2D(uPaths, vec2((i0 + 0.5) / PATH_N, v)).rg;
  vec2 b = texture2D(uPaths, vec2((i1 + 0.5) / PATH_N, v)).rg;
  float t2 = t * t, t3 = t2 * t;
  slope = ((6.0 * t2 - 6.0 * t) * a.x + (-6.0 * t2 + 6.0 * t) * b.x) / h + (3.0 * t2 - 4.0 * t + 1.0) * a.y + (3.0 * t2 - 2.0 * t) * b.y;
  return (2.0 * t3 - 3.0 * t2 + 1.0) * a.x + (t3 - 2.0 * t2 + t) * h * a.y + (-2.0 * t3 + 3.0 * t2) * b.x + (t3 - t2) * h * b.y;
}
void weaveVertex() {
  float u = position.x; float th = position.y;
  vU = u;
  // Distance from the middle, rounded there so the pinch has no corner.
  float a = 2.0 * (u - 0.5);
  float r = sqrt(a * a + PINCH_ROUND * PINCH_ROUND);
  float d = r - PINCH_ROUND;
  // Where this string is in the composition, and its route (strings between two routes take the mix of both).
  float Xv = uCamX + (uLeft + u * uWidth) / uScreenW * 1920.0;
  // His 5:57 PM clip: "it has to keep going... we don't want that [slowing down]". Every route is at the same height,
  // level, at 5052 and at 11766, so that stretch repeats without a seam: the camera can travel on for ever (uCamX keeps
  // growing, main.js), and past uLoopEnd the routes carry on from 11766 to the shared exit (the reunion, on scroll).
  float X = Xv < 5052.0 ? Xv : (Xv < uLoopEnd ? 5052.0 + mod(Xv - 5052.0, 6714.0) : Xv - (uLoopEnd - 11766.0));
  float dXdu = uWidth / uScreenW * 1920.0;
  float ra = floor(uRow), rb = min(ra + 1.0, 4.0), rf = uRow - ra;
  float sa, sb;
  float routeY = mix(pathAt(ra, X, sa), pathAt(rb, X, sb), rf);
  float dRoute = mix(sa, sb, rf) * dXdu;
  // On the shared stem and the shared exit the strings are the thin layered line; between, full strings.
  float e1 = clamp((X - 1698.0) / 1000.0, 0.0, 1.0), e2 = clamp((15440.0 - X) / 1040.0, 0.0, 1.0);
  float g1 = e1 * e1 * (3.0 - 2.0 * e1), g2 = e2 * e2 * (3.0 - 2.0 * e2);
  float front = g1 * g2;
  float dfront = (6.0 * e1 * (1.0 - e1) / 1000.0 * g2 - g1 * 6.0 * e2 * (1.0 - e2) / 1040.0) * dXdu;
  // The scroll's reunion (GATHER_W above): full strings left of the front, the line right of it.
  float gm0 = clamp(((1.0 + GATHER_W) * (1.0 - uGather) - u) / GATHER_W, 0.0, 1.0);
  float gm = gm0 * gm0 * (3.0 - 2.0 * gm0);
  dfront = dfront * gm - front * 6.0 * gm0 * (1.0 - gm0) / GATHER_W;
  front *= gm;
  vFront = max(front, uSwell);   // the line's colour on the stem and the exit (and back to their own in opening D)
  float y = 0.0, dy = 0.0, z = 0.0, dz = 0.0;
  for (int i = 0; i < 3; i++) { vec4 w = uWY[i]; float f = w.y * uCycles; float ph = f * u + w.z + w.w * uTime; y += w.x * sin(ph); dy += w.x * f * cos(ph); }
  for (int i = 0; i < 2; i++) { vec4 w = uWZ[i]; float f = w.y * uCycles; float ph = f * u + w.z + w.w * uTime; z += w.x * sin(ph); dz += w.x * f * cos(ph); }
  // lineFlare (above) and its slope along u.
  float fx = min(1.0, abs(a) / 0.75);
  float flare = 0.7 * fx * fx * (3.0 - 2.0 * fx) + 0.3 * a * a;
  float dflare = (0.7 * 6.0 * fx * (1.0 - fx) / 0.75 * sign(a) + 0.6 * a) * 2.0;
  float rest = uPinchR + (uEndR - uPinchR) * flare;
  float ribbon = rest * uRibbon;
  float off = uSlot * (rest - ribbon);
  float doff = uSlot * (1.0 - uRibbon) * (uEndR - uPinchR) * dflare;
  // The route, plus a little of the strings' own drift so they never stand still (uWob), plus Strings Y (uLift). His 6:16 PM
  // clip: "the line needs to start here and it also needs to end there", on the finished line's height; "it's okay if it
  // moves back up". So the lift rides with front: none on the shared stem or the shared exit, all of it where they fan out.
  // uLow: how far the strands below the line reach, as a share of those above it (the phone's words are under the fan).
  float below = routeY - 546.0, sy = below > 0.0 ? uSy * uLow : uSy;
  float far = below * sy + uWob * uAmp * y + uLift;
  float dfar = dRoute * sy + uWob * uAmp * dy;
  float cy = uCentreY + off + front * (far - off);
  // Opening D: the two halves of the line part, a wave running out through them from the
  // pinch, each string a little behind the one inside it.
  float ax = abs(a);
  float pe = clamp(ax / 0.5, 0.0, 1.0);
  float env = pe * pe * (3.0 - 2.0 * pe);
  float pth = 6.2832 * (1.1 * ax - uPhase) + uSide * 1.1 + abs(uSlot) * 1.4;
  float denv = 6.0 * pe * (1.0 - pe) / 0.5 * sign(a) * 2.0;
  float part = uGrow * (1.0 + 0.3 * flare) + uWhip * env * sin(pth);
  float dpart = uGrow * 0.3 * dflare + uWhip * (denv * sin(pth) + env * cos(pth) * 6.2832 * 1.1 * sign(a) * 2.0);
  cy += uSide * part + uSlot * uFanOut;
  // Each string keeps its own depth layer (uLayer); the over-and-under wave rides on top.
  float cz = uLayer + uZAmp * front * z;
  // World y points up; the page's y points down.
  vec3 p = vec3(uLeft + u * uWidth, -cy, cz);
  vec3 dp = vec3(uWidth, -(dfront * (far - off) + front * dfar + (1.0 - front) * doff + uSide * dpart), uZAmp * (dfront * z + front * dz));
  vec3 T = normalize(dp);
  vec3 N1 = normalize(cross(vec3(0.0, 0.0, 1.0), T));
  vec3 B = cross(T, N1);
  vec3 n = cos(th) * N1 + sin(th) * B;
  // The tips taper to nothing as the strings draw in (uHead, the entrance); past the tip there is no string.
  float rad = mix(mix(ribbon, uRadius * 0.75, uSwell), uRadius, front);
  // His 1:39 PM clip: the big fan gains weight on its way out. His 2:13 PM clip: "a little more tapered... wider when they get out
  // here... maybe like 10% wider": it keeps widening to the right edge (X 2995 at rest) instead of levelling off there.
  // Flow round, Emmett: "do they need to keep increasing in weight... after this amount", "this is where it looks just kind of
  // gangly". main.js sets no flare now; where there is any, it rides with front, so the folded line never widens.
  rad *= 1.0 + uFlare * front * smoothstep(1800.0, 3400.0, X);
  float capLen = max(1e-4, rad / max(1.0, uWidth));
  float cap = clamp((uHead - u) / capLen, 0.0, 1.0);
  vHead = clamp((uHead - u) / HEAD_SOFT, 0.0, 1.0);
  // Flow round, Nicole: "the trajectory is going to the right, so once we start moving into this next module, the line should
  // come in from the right". Once folded, the line's tail runs out to the right (uSplit, main.js), a round end leading it.
  float tail = clamp((u - uSplit) / capLen, 0.0, 1.0);
  wP = p + rad * sqrt(cap * (2.0 - cap)) * sqrt(tail * (2.0 - tail)) * n;
  wN = n;
}
`,Qv=`
uniform vec3 uPalette[7];
uniform float uIndex, uCount, uColour, uShade, uSections, uOverlap, uPaletteN;
uniform vec3 uLine, uFadeTo;
varying float vU;
varying float vFront;
varying float vHead;
vec3 paletteAt(float t) {
  float x = fract(t) * uPaletteN;
  float i = floor(x);
  float f = x - i;
  vec3 a = uPalette[int(mod(i, uPaletteN))];
  vec3 b = uPalette[int(mod(i + 1.0, uPaletteN))];
  return mix(a, b, f * f * (3.0 - 2.0 * f));
}
// The string's colour at u along its length, by style (uPaletteN colours in uPalette).
vec3 weaveColour(float u) {
  vec3 base = uPalette[int(mod(uIndex, uPaletteN))];
  if (uColour < 0.5) return base;
  if (uColour < 1.5) {
    // Sections: consecutive palette colours along the string, each string starting elsewhere.
    float s = floor(u * uSections + 0.5 + uIndex * 0.6);
    return uPalette[int(mod(s + uIndex, uPaletteN))];
  }
  if (uColour < 3.5) return paletteAt(u * 0.85 + uIndex / uCount);
  // Two-tone: this string's colour running into a partner colour from across the palette.
  vec3 partner = uPalette[int(mod(uIndex + floor(uPaletteN * 0.5), uPaletteN))];
  float f = smoothstep(0.0, 1.0, u);
  return mix(base, partner, f);
}
`;function jv(n,{initialSettings:e=Gs,onError:t}={}){const i=new fh({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:/[?&]figma\b/.test(location.search)});i.setClearColor(new Qe(yu),0),i.toneMapping=yn;const s=new Zd,r=new ka(0,1,0,-1,-4e3,4e3);r.position.z=1e3;const a=new Jc(16777215,Tu);a.position.set(-.55,1,.95);const o=new Jc(16777215,Au);o.position.set(.7,-.6,.8);const l=new kp(16777215,Ru);s.add(a,o,l);const c=Zv(),u={...Gs,...e},h=wr.map(Y=>new Qe(Y.hex)),d={value:wr.length},f=new Qe,_=Y=>{const[$,fe,he]=[1,3,5].map(me=>{const ye=parseInt(Y.slice(me,me+2),16)/255;return u.colour===3?Math.sqrt(ye):ye});f.setRGB($,fe,he,sn)},x=new Qe,p=new Qe("#FFFFFF"),m=new Qe(yu);let R=0,B="";function M(Y){Y=Math.max(0,Math.min(ri.length-1,Math.round(Y)));const $=ri[Y].colours,fe=Y+":"+$.join();fe!==B&&(R=Y,B=fe,$.forEach((he,me)=>h[me].set(he)),d.value=$.length)}const v=[];for(let Y=0;Y<la;Y++){const $=Kv(Y),fe={uTime:{value:0},uK:{value:0},uHead:{value:9},uSplit:{value:-9},uPaths:{value:Wv},uCamX:{value:0},uLoopEnd:{value:11766},uGather:{value:0},uFlare:{value:0},uSy:{value:1},uLow:{value:1},uRow:{value:0},uWob:{value:.1},uLift:{value:0},uScreenW:{value:1},uAmp:{value:0},uZAmp:{value:0},uBaseY:{value:0},uCentreY:{value:0},uRadius:{value:1},uPinchR:{value:1},uEndR:{value:1},uSlot:{value:0},uRibbon:{value:1},uSide:{value:1},uGrow:{value:0},uWhip:{value:0},uPhase:{value:0},uFanOut:{value:0},uSwell:{value:0},uLeft:{value:0},uWidth:{value:1},uCycles:{value:1},uLayer:{value:0},uWY:{value:$.y},uWZ:{value:$.z},uPalette:{value:h},uPaletteN:d,uLine:{value:f},uFadeTo:{value:x},uIndex:{value:Y},uCount:{value:7},uColour:{value:0},uShade:{value:1},uSections:{value:zv},uOverlap:{value:0}},he=ui?new oc({color:16777215}):new Ip({color:16777215,roughness:.38,metalness:0,clearcoat:.3,clearcoatRoughness:.32});he.onBeforeCompile=ye=>{Object.assign(ye.uniforms,fe),ye.vertexShader=Jv+ye.vertexShader.replace("#include <beginnormal_vertex>",ui?"#include <beginnormal_vertex>":`weaveVertex();
	vec3 objectNormal = wN;`).replace("#include <begin_vertex>",ui?`weaveVertex();
	vec3 transformed = wP;`:"vec3 transformed = wP;"),ye.fragmentShader=Qv+ye.fragmentShader.replace("#include <color_fragment>","diffuseColor.rgb = mix(uLine, weaveColour(vU), smoothstep(0.04, 0.55, vFront));").replace("#include <opaque_fragment>",`#ifdef OPAQUE
	diffuseColor.a = 1.0;
#endif
	vec3 weaveOut = mix( diffuseColor.rgb, outgoingLight, uShade );
	weaveOut = mix( weaveOut, vec3( 1.0 ), uOverlap );
	weaveOut = mix( uFadeTo, weaveOut, smoothstep( 0.0, 1.0, vHead ) );
	gl_FragColor = vec4( weaveOut, diffuseColor.a );`)},he.customProgramCacheKey=()=>"knit-weave-2-tube";const me=new wn(c,he);me.frustumCulled=!1,s.add(me),v.push({uniforms:fe,material:he,mesh:me})}const b={k:new Float32Array(la),fps:0,live:!0,renders:0,get strings(){return P()}};let L=1,S=1,T=0,U=0,A=0;const P=()=>Math.max(bu,Math.min(la,Math.round(u.count))),F=()=>L<760&&S>L?Math.min(L/390,S/844)*.45:Math.min(L/1920,S/1200),w=()=>Math.max(.5,u.pinch/2*F()),O=()=>Math.max(w(),u.line/2*F());function V(){L=n.clientWidth||1,S=n.clientHeight||1,i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(L,S,!1),r.left=0,r.right=L,r.top=0,r.bottom=-S,r.updateProjectionMatrix()}function k(Y){Object.assign(u,Y),M(u.palette),_(ri[R].thread),x.copy(u.colour===3?p:m),i.setClearColor(m,u.colour===3?1:0)}function K({merge:Y,part:$=0,dt:fe,still:he,draw:me=!0,head:ye=9,split:Oe=-9,aeTime:J=null,camX:ae=0,loopEnd:Ce=11766,rest:ze=1,gather:Pe=0,fan:Se=!1,spread:qe=1,big:we=null,skipDraw:ge=!1}){he||(T+=fe*u.waveSpeed);const Ae=L,Ee=S,Me=Math.max(bu,Math.min(la,Math.round(u.heroCount+(we?we.more:0)))),Ne=we?we.radius:Math.max(3,Math.min(44,u.thickness/2*Ae/1920,Ee*Hv/Me*.4)),Ye=w(),De=O(),Le=Math.min(.7,2.04/Me),D=gh($,Ee),Be=Math.min(Ee*wu.half,Ae*.34),_e=Math.min(1.1,Math.max(.4,Ae*1.08/1600)),E=Ee*(wu.centre+u.y),g=Ee*.5,H=u.colour===3;let z=!1;v.forEach(({mesh:te,material:le,uniforms:G},I)=>{if(te.visible=I<Me,I>=Me)return;const q=Vs((Y-I/Math.max(1,Me-1)*Eu)/(1-Eu));b.k[I]=q,he||(z=!0);const oe=Yv((q-.55)/.45),re=1-.4*oe;G.uTime.value=T,G.uK.value=q,G.uSplit.value=Oe;const ie=Se?qv(I,Me,!!we):Me>1?I*(In.length-1)/(Me-1):0,de=Math.min(Math.floor(ie),In.length-1),xe=Math.min(de+1,In.length-1);if(G.uRow.value=ie,G.uCamX.value=ae,G.uLoopEnd.value=Ce,G.uGather.value=we?Vs((Pe-ft(I,23)*.14)/.86):Pe,G.uScreenW.value=Ae,G.uSy.value=u.tangle*u.heroSpread/100*qe*Math.min(Ae/1920,Ee*.31/372),G.uWob.value=we?we.wob:.14,G.uLow.value=we?we.low??1:1,we)G.uHead.value=we.head<=we.origin?we.head:we.origin+(we.head-we.origin)*(1-we.lag*ft(I,41));else if(J===null)G.uHead.value=ye;else{const C=xa(In[de],J)+(xa(In[xe],J)-xa(In[de],J))*(ie-de);G.uHead.value=ye<0?-1:((C-ae)/1920+.04)/1.08}G.uAmp.value=u.tangle*Be*re,G.uZAmp.value=u.depth*Ne*2.2*re,G.uLayer.value=(I-(Me-1)/2)*Ne*2.3,G.uBaseY.value=E+(g-E)*oe,G.uCentreY.value=we?Ee*we.centre:g,G.uFlare.value=we?we.flare:0,G.uLift.value=Ee*u.y*ze;const pe=Me>1?I/(Me-1)*2-1:0;G.uSlot.value=pe,G.uSide.value=pe<0?-1:1,G.uGrow.value=D.grow,G.uWhip.value=D.whip,G.uPhase.value=D.phase,G.uFanOut.value=D.fan,G.uSwell.value=D.swell,G.uRadius.value=Ne,G.uPinchR.value=Ye,G.uEndR.value=De,G.uRibbon.value=Le,G.uLeft.value=-Ae*.04,G.uWidth.value=Ae*1.08,G.uCycles.value=_e,G.uCount.value=Me,G.uColour.value=u.colour,G.uShade.value=u.shade?1:0,G.uOverlap.value=H?1-Gv:0,H!==le.transparent&&(le.transparent=H,le.blending=H?Xo:Ds,le.premultipliedAlpha=H,le.depthWrite=!H,le.needsUpdate=!0),le.clearcoat=u.gloss,le.roughness=.58-.32*u.gloss}),a.intensity=Tu*u.light,o.intensity=Au*u.light,l.intensity=Ru*u.light,b.live=z,(me||z)&&!ge&&(i.render(s,r),b.renders++),U++;const N=performance.now();N-A>1e3&&(b.fps=Math.round(U*1e3/(N-A)),U=0,A=N)}function Z(){for(const Y of v)Y.material.dispose();c.dispose(),i.dispose()}return V(),M(u.palette),_(ri[R].thread),x.copy(u.colour===3?p:m),{resize:V,update:K,setSettings:k,dispose:Z,stats:b,get shape(){const Y=P();return{pinchR:w(),endR:O(),ribbon:Math.min(.7,2.04/Y),inner:Y>1?1/(Y-1):0}},get settings(){return{...u}}}}const ti={eyeY:940,eyeToChin:640,cx:1580},Ul={wide:{x0:120,y0:50,w:2920},circle:{x0:600,y0:50,w:1960}},Cs={eyeToChin:.34,eyeY:.45},cn={K:1.36,size:.155,spin:20,pace:1.25,fade:[.88,.64],fadeSpan:.24},Qn={N:10,GA:Math.PI*(3-Math.sqrt(5)),from:1,arrive:.3,arriveDur:.55},ex=["13","14","17","16","18","19","20","21","22","23","24","25","26","27","28","30","31","32","33","34","35","36","37","38","39","40","41"],cr=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),bs=(n,e,t)=>n+(e-n)*t,Fu=(n,[e,t])=>cr((n-e)/(t-e)),Iu=n=>n*n*(3-2*n),tx=n=>1-Math.pow(1-n,3),nx=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function ix({stage:n,tiles:e,folder:t,timeline:i,blocks:s}){const r=(w,O)=>{const V=document.createElement("div");V.className="person person--feed";const k=new Image;return k.crossOrigin="anonymous",k.alt="",k.decoding="async",k.dataset.src=`${t}${w}.webp`,V.append(k),n.append(V),{id:w,el:V,img:k,box:O,placed:!1,on:!1}},a=ex.map(w=>r(w,"circle")),o=e.map(w=>r(w.id,w.box||"wide")),l=[...a,...o],c=new Set(o),u=Math.log(cn.K);let h=1,d=1,f=1,_=1,x=1,p=2,m=!1,R=cn.fade[0],B=cn.fade[1],M=!1,v=0,b=0,L=0;function S(){if(!m){m=!0;for(const{img:w}of l)w.src=w.dataset.src}}function T(w,O,V){h=w,d=O,M=!1,V?(f=.5*h,_=.4*d):f=_=Math.min(.49*d,.42*h);const k=Math.sqrt(f*_);x=cn.size*k,p=Math.hypot(h/2/f,d/2/_)+cn.size;const K=me=>-Math.PI/2+(me+.5)*2*Math.PI/e.length,Z=me=>Math.atan2((me.y-d/2)/_,(me.x-h/2)/f),Y=(me,ye)=>Math.abs(Math.atan2(Math.sin(me-ye),Math.cos(me-ye))),$=new Set(e.keys());for(const me of[...e].sort((ye,Oe)=>Z(ye)-Z(Oe))){let ye=-1,Oe=1/0;for(const J of $){const ae=Y(Z(me),K(J));ae<Oe&&(Oe=ae,ye=J)}$.delete(ye),me.theta=K(ye)}const fe=me=>(me+Math.PI/2+2*Math.PI)%(2*Math.PI);[...e].sort((me,ye)=>fe(me.theta)-fe(ye.theta)).forEach((me,ye)=>{me.circleDelay=ye/(e.length-1)*i.circleStagger});for(const me of e){const ye=Ul[me.box||"wide"];me.d=Math.min(me.tw,me.th);const Oe=me.photo.w/ye.w,J=Cs.eyeToChin*me.d/ti.eyeToChin;me.crop={k:J/Oe,dx:me.tw/2-(ti.cx-ye.x0)*J-me.photo.x,dy:(me.th-me.d)/2+Cs.eyeY*me.d-(ti.eyeY-ye.y0)*J-me.photo.y},me.cpShown=-1}const he=Math.round(x*p);for(const me of l){me.d=he,Object.assign(me.el.style,{width:`${he}px`,height:`${he}px`,borderRadius:"50%"});const ye=Ul[me.box],Oe=Cs.eyeToChin*he/ti.eyeToChin;Object.assign(me.img.style,{width:`${ye.w*Oe}px`,left:`${he/2-(ti.cx-ye.x0)*Oe}px`,top:`${Cs.eyeY*he-(ti.eyeY-ye.y0)*Oe}px`})}}function U(){M=!0;const w=document.createRange();let O=0;for(const V of s){let k=0;for(const K of V.children)w.selectNodeContents(K),k=Math.max(k,w.getBoundingClientRect().width/2);O=Math.max(O,Math.hypot(k/f,V.offsetHeight/2/_))}B=Math.max(cn.fade[1],O),R=Math.max(cn.fade[0],O+cn.fadeSpan)}const A=w=>Iu(cr((w-B)/(R-B)));function P(w,O){v=w;const V=Fu(v,i.feed);b=cn.pace*(i.feed[1]-i.feed[0])*bs(V,Iu(V),.35),L=cn.spin*Math.max(0,v-i.circle[0])*Math.PI/180,v>=i.circle[0]&&!M&&U();const k=l.length,K=Math.log(1/B)/u,Z=b+Math.log(B)/u,Y=b+Math.log(p*(1+Qn.from))/u;for(const $ of l)$.placed=!1;if(b>0&&!O)for(let $=Math.max(0,Math.floor((Z-1)*Qn.N));$<=Math.ceil((Y-1)*Qn.N);$++){const fe=1+$/Qn.N,he=Math.pow(cn.K,fe-b),me=l[$%k];if(me.placed)continue;const ye=tx(cr((b-(fe-1)*Qn.arrive)/Qn.arriveDur)),Oe=he*(1+Qn.from*(1-ye));let J=A(he)*cr(ye*2.5);const ae=$>=k?fe-k/Qn.N:c.has(me)?0:null;if(ae!==null&&(J*=cr((b-ae-K)/.3)),J<=.001||Oe>p)continue;me.placed=!0;const Ce=-Math.PI/2+$*Qn.GA+L,ze=h/2+Math.cos(Ce)*f*Oe,Pe=d/2+Math.sin(Ce)*_*Oe;me.el.style.opacity=J.toFixed(3),me.el.style.transform=`translate3d(${(ze-me.d/2).toFixed(1)}px,${(Pe-me.d/2).toFixed(1)}px,0) scale(${(x*Oe/me.d).toFixed(4)})`}for(const $ of l)$.placed!==$.on&&($.on=$.placed,$.el.style.display=$.on?"block":"none")}function F(w,O,V,k){const K=nx(Fu(v,[i.circle[0]+w.circleDelay,i.circle[1]-i.circleStagger+w.circleDelay]));if(K!==w.cpShown)if(w.cpShown=K,K>0){const $=(w.tw-w.d)/2*K,fe=(w.th-w.d)/2*K;w.el.style.clipPath=`inset(${fe.toFixed(2)}px ${$.toFixed(2)}px round ${bs(w.corner,w.d/2,K).toFixed(2)}px)`,w.img.style.transform=`translate(${(w.crop.dx*K).toFixed(2)}px,${(w.crop.dy*K).toFixed(2)}px) scale(${bs(1,w.crop.k,K).toFixed(4)})`}else w.el.style.clipPath="",w.img.style.transform="";if(K<=0)return[O,V,k,1];const Z=Math.pow(cn.K,-b),Y=w.theta+L;return[bs(O,h/2+Math.cos(Y)*f*Z,K),bs(V,d/2+Math.sin(Y)*_*Z,K),bs(k,x*Z/w.d,K),A(Z*Math.max(1,R))]}return{layout:T,load:S,frame:P,place:F}}const Cn="http://www.w3.org/2000/svg";let Lo=0;const sx=matchMedia("(max-width: 759px)"),Nu=8,_h=new Set;let vh=2400;function rx(n){let e=0,t=0;for(let i=n;i;i=i.offsetParent)e+=i.offsetTop,t+=i.offsetLeft;return{x:t,y:e}}function xh({svg:n,flow:e}){let t=n.parentNode;if(!t)return;getComputedStyle(t).position==="sticky"&&(t=t.parentNode);const i=rx(t),s=vh/2;e.setAttribute("x1",(-i.x).toFixed(1)),e.setAttribute("y1",(-i.y).toFixed(1)),e.setAttribute("x2",(-i.x+s).toFixed(1)),e.setAttribute("y2",(-i.y+s).toFixed(1))}function ax(n){n&&(vh=n);for(const e of _h)xh(e)}function Qi(n,{className:e="",before:t=null}={}){const i=document.createElementNS(Cn,"svg");i.setAttribute("class",`thread ${e}`.trim()),i.setAttribute("aria-hidden","true");const s=document.createElementNS(Cn,"path"),r=document.createElementNS(Cn,"defs"),a=document.createElementNS(Cn,"linearGradient"),o=`thread-rainbow-${++Lo}`;a.setAttribute("id",o),a.setAttribute("gradientUnits","userSpaceOnUse"),a.setAttribute("x1","0"),a.setAttribute("y1","0"),a.setAttribute("x2","1920"),a.setAttribute("y2","0");const l=[...wr.map(v=>v.hex),wr[0].hex];l.forEach((v,b)=>{const L=document.createElementNS(Cn,"stop");L.setAttribute("offset",(b/(l.length-1)).toFixed(3)),L.setAttribute("stop-color",v),a.append(L)});const c=document.createElementNS(Cn,"linearGradient"),u=`thread-shades-${Lo}`;c.setAttribute("id",u),c.setAttribute("gradientUnits","userSpaceOnUse"),c.setAttribute("x1","0"),c.setAttribute("y1","0"),c.setAttribute("x2","1920"),c.setAttribute("y2","0"),[["0","var(--thread)"],[".55","var(--thread-2)"],["1","var(--thread)"]].forEach(([v,b])=>{const L=document.createElementNS(Cn,"stop");L.setAttribute("offset",v),L.style.stopColor=b,c.append(L)});const h=document.createElementNS(Cn,"linearGradient"),d=`thread-flow-${Lo}`;h.setAttribute("id",d),h.setAttribute("gradientUnits","userSpaceOnUse"),h.setAttribute("spreadMethod","reflect");for(let v=0;v<Nu;v++){const b=document.createElementNS(Cn,"stop");b.setAttribute("offset",(v/(Nu-1)).toFixed(4)),b.style.stopColor=`var(--flow-${v}, var(--thread))`,h.append(b)}r.append(a,c,h),i.append(r,s),i.style.setProperty("--rainbow",`url(#${o})`),i.style.setProperty("--shades",`url(#${u})`),i.style.setProperty("--flow",`url(#${d})`),_h.add({svg:i,flow:h}),n.insertBefore(i,t??n.firstChild);let f=0,_=-1,x=-1,p=[],m=0;function R(v,{radius:b=40,dots:L=[],dotR:S=5}={}){let T="",U=0,A={x:v[0].x,y:v[0].y};const P=[],F=(w,O)=>{U+=Math.hypot(w-A.x,O-A.y),A={x:w,y:O},T+=`L${w.toFixed(1)} ${O.toFixed(1)}`,P.push([U,w,O])};T=`M${A.x.toFixed(1)} ${A.y.toFixed(1)}`,P.push([0,A.x,A.y]);for(let w=1;w<v.length;w++){const O=v[w];if(w===v.length-1){F(O.x,O.y);break}const V=v[w-1],k=v[w+1],K=Math.hypot(O.x-V.x,O.y-V.y),Z=Math.hypot(k.x-O.x,k.y-O.y),Y={x:(O.x-V.x)/K,y:(O.y-V.y)/K},$={x:(k.x-O.x)/Z,y:(k.y-O.y)/Z},fe=Math.max(0,Math.min(O.r??b,w===1?K:K/2,w===v.length-2?Z:Z/2));if(F(O.x-Y.x*fe,O.y-Y.y*fe),fe>.01){const he=Y.x*$.y-Y.y*$.x>0?1:0,me=O.x+$.x*fe,ye=O.y+$.y*fe;U+=Math.PI*fe/2,A={x:me,y:ye},T+=`A${fe.toFixed(1)} ${fe.toFixed(1)} 0 0 ${he} ${me.toFixed(1)} ${ye.toFixed(1)}`}}B(T,{dots:L,dotR:S})}function B(v,{dots:b=[],dotR:L=5}={}){s.setAttribute("d",v),f=Math.max(1,s.getTotalLength()),m++;const S=Math.max(1,i.getBoundingClientRect().width||n.clientWidth).toFixed(0);a.setAttribute("x2",S),c.setAttribute("x2",S),xh({svg:i,flow:h});for(const T of p)T.el.remove();p=b.map(([T,U])=>{let A=0,P=1/0;for(let w=0;w<=240;w++){const O=s.getPointAtLength(f*w/240),V=Math.hypot(O.x-T,O.y-U);V<P&&(P=V,A=w/240)}const F=document.createElementNS(Cn,"circle");return F.setAttribute("cx",T.toFixed(1)),F.setAttribute("cy",U.toFixed(1)),F.setAttribute("class","thread__dot"),F.setAttribute("r",L.toFixed(1)),i.append(F),{el:F,at:A}}),_=-1,x=-1}function M(v,b=0){if(!(sx.matches&&!document.documentElement.classList.contains("flow"))&&(v=Math.min(1,Math.max(0,v)),b=Math.min(v,Math.max(0,b)),!(v===_&&b===x))){_=v,x=b,i.style.visibility=v-b>0?"inherit":"hidden",s.style.strokeDasharray=`${(f*(v-b)).toFixed(1)} ${(f*2+2).toFixed(1)}`,s.style.strokeDashoffset=(-f*b).toFixed(1);for(const L of p){const S=Math.min(1,Math.max(0,(v-L.at)*18+1))*(L.at>=b?1:0);L.el.style.opacity=S.toFixed(3),L.el.style.transform=`scale(${(.4+.6*S).toFixed(3)})`}}}return{set:R,setPath:B,draw:M,svg:i,path:s,get length(){return f},get version(){return m},get stops(){return p.map(v=>v.at)}}}function Di(n,e,t=0){n.classList.contains("rise-in")||(n.classList.add("rise-in"),t&&n.style.setProperty("--d",`${t}s`)),n.classList.toggle("is-in",e)}function $t(n,e){const t=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:t.left-i.left,y:t.top-i.top,w:t.width,h:t.height}}const Sh=[{id:"07",c:1,r:0,w:1.514,h:1},{id:"02",c:3,r:0,w:1,h:1,circle:!0},{id:"24",c:0,r:1,w:1,h:1,circle:!0,box:"circle"},{id:"12",c:4,r:1,w:1.514,h:1},{id:"11",c:1,r:2,w:1,h:1,circle:!0},{id:"13",c:3,r:2,w:.98,h:1,box:"circle"}],Uu={"07":[0,0],"02":[1,0],24:[2,0],12:[0,3],11:[1,3],13:[2,3]},Pi=11,ox=.135,Ou=.9,ar=.757,ii={dur:1.05,stagger:.035,titleDelay:.55,titleDur:.6,back:1.5},ca=Math.max(ii.dur+(Sh.length-1)*ii.stagger,ii.titleDelay+ii.titleDur),ws=96,Bu=.4,lx=.6,cx=[.05,.11],ku=Math.PI*2,Kt=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Yi=(n,e,t)=>n+(e-n)*t,ua=n=>1-Math.pow(1-n,3),ux=n=>n>=1?1:1-Math.pow(2,-10*n),un=n=>n*n*(3-2*n),nn=(n,[e,t])=>Kt((n-e)/(t-e)),Hu=(n,[e,t])=>{const i=(e+t)/2;return[un(nn(n,[e,i])),un(nn(n,[i,t]))]},dx=(n,e=1.25)=>1+(e+1)*Math.pow(n-1,3)+e*Math.pow(n-1,2),hx=n=>{const e=Math.sin(n*91.7+13.1)*43758.5453;return e-Math.floor(e)},Do=[({a:n,opened:e,vh:t,rest:i})=>{const s=t*e/2+Math.min(1,e/.2)*(1+2*Math.sin(Math.PI*e))*i;return[s,s]},({a:n,opened:e,vh:t,rest:i})=>{const s=.42*(1-Nl(n)),r=t*.62*un(Kt((e-s)/.58))+Math.min(1,e/.2)*i;return[r,r]},({a:n,opened:e,vh:t,rest:i})=>{const r=a=>{const o=Kt(e*1.7-.7*a);return t*.6*un(o)+t*.09*Math.sin(Math.PI*o)**2*Math.sin(ku*(1.4*a-2.2*e))+Math.min(1,e/.2)*i};return[r((n+1)/2),r((1-n)/2)]},({a:n,opened:e,vh:t,rest:i,shape:s})=>{const r=gh(e,t),a=Math.abs(n),o=Kt(a/.5),l=o*o*(3-2*o),c=s.inner*(i*(1-s.ribbon)+r.fan)+r.grow*(1+.3*Nl(n)),u=h=>r.whip*l*Math.sin(ku*(1.1*a-r.phase)+h*1.1+s.inner*1.4);return[c+u(-1),c+u(1)]}];function fx({pen:n=null,page:e,stage:t,copy:i,eyebrow:s,titles:r,echoes:a,beats:o,cta:l,timeline:c,base:u}){const h=Math.min(screen.width,screen.height)<600,d=`${u}images/people/${h?"sm/":""}`,f=Sh.map((Se,qe)=>{const we=document.createElement("div");we.className="person";const ge=new Image;return ge.crossOrigin="anonymous",ge.alt="",ge.decoding="async",ge.dataset.src=`${d}${Se.id}.webp`,we.append(ge),t.append(we),{...Se,el:we,img:ge,order:0,spin:(hx(qe)-.5)*70,x:0,y:0,tw:0,th:0}}),_=ix({stage:t,tiles:f,folder:d,timeline:c,blocks:o});let x=1,p=1,m=0,R=!1,B=0,M=f.length,v=null,b=0,L=!1,S=0,T=0;const U=e.querySelector("#open-side"),A=e.querySelector(".open__screen--faces")||e,P=e.querySelector(".open__screen--list")||e;let F=!1;const w=Qi(P,{className:"thread--open",before:U.parentNode===P?U:null});function O(){if(!x)return;const Se=U.style.transform,qe=[...U.children,...o];U.style.transform="none";for(const Me of qe)Me.style.transition="none",Me.style.transform="none";const we=o.filter(Me=>U.contains(Me)).map(Me=>$t(Me.querySelector(".open__eyebrow")||Me,P)),ge=$t(U.querySelector(".open__list"),P);U.style.transform=Se;for(const Me of qe)Me.style.transform="",Me.style.transition="";if(we.length<2)return;const Ae=x/1920,Ee=Me=>Me.y+Me.h/2;if(x<760&&n){const Me=$t(U.querySelector(".open__eyebrow"),P),Ne=ge.y+ge.h,Ye=Math.max(Ne+40,Math.min(p-30,(Ne+p)/2));w.set([{x:Pi,y:-4},{x:Pi,y:Ye,r:24},{x:x/2,y:Ye,r:24},{x:x/2,y:Math.max(p+4,Ye+28)}],{dots:[...we.map(De=>[Pi,Ee(De)]),[Pi,Ee(Me)]],dotR:3.5})}else if(x<760){const Me=ge.x+4;w.set([{x:Me,y:we[0].y-14},{x:Me,y:ge.y+ge.h+8}],{dots:we.map(Ne=>[Me,Ee(Ne)]),dotR:3.5})}else{const Me=x/2;w.set([{x:Me,y:-4},{x:Me,y:p+4}],{dots:we.map(Ne=>[Me,Ee(Ne)]),dotR:Math.max(3.5,6*Ae)})}}const V=Qi(A,{className:"thread--faces thread--faces-in"}),k=Qi(A,{className:"thread--faces"});for(const Se of[V,k,w])n?.add(Se);let K=!1;function Z(){K=!1;const Se=()=>{V.setPath("M0 0"),k.setPath("M0 0")};if(!x||!T||x<760&&!(n&&L)){Se();return}const qe=[s,r[0],i].map(z=>z.style.transform);for(const z of[s,r[0],i])z.style.transition="none",z.style.transform="none";const we=document.createRange();we.selectNodeContents(r[0]);const ge=we.getBoundingClientRect(),Ae=A.getBoundingClientRect(),Ee=s.getBoundingClientRect();[s.style.transform,r[0].style.transform,i.style.transform]=qe;for(const z of[s,r[0],i])z.style.transition="";if(!ge.width){Se();return}const Me=x/1920,Ne=x/2,Ye=Math.max(3.5,6*Me),De=Ee.top-Ae.top-Math.max(16,30*Me);if(L){const z=q=>Uu[q.id]?.[1],N=Math.max(0,...f.filter(q=>z(q)===0).map(q=>q.y+q.th/2)),te=Math.min(p,...f.filter(q=>z(q)===3).map(q=>q.y-q.th/2)),le=Math.max(N+14,Math.min((N+De)/2,De-36));V.set([{x:x+8,y:le},{x:Ne,y:le,r:24},{x:Ne,y:De}],{dots:[[Ne,De]],dotR:Ye});const G=ge.bottom-Ae.top+18,I=Math.max(G+30,(ge.bottom-Ae.top+te)/2);te-G<50?k.setPath("M0 0"):k.set([{x:Ne,y:G},{x:Ne,y:I,r:24},{x:Pi,y:I,r:24},{x:Pi,y:p+4}]),K=!0;return}const Le=f.filter(z=>z.x>x/2),D=Math.max(0,...Le.filter(z=>z.r===0).map(z=>z.y+z.th/2)),Be=Math.min(p,...Le.filter(z=>z.r===1).map(z=>z.y-z.th/2)),_e=Math.max(36,70*Me),E=D+Math.max(10,18*Me);let g=Math.min((D+Be)/2,De-_e);g<E&&(g=Math.min(E,De-12)),V.set([{x:x+8,y:g},{x:Ne,y:g,r:Math.max(24,48*Me)},{x:Ne,y:De}],{dots:[[Ne,De]],dotR:Ye});const H=ge.bottom-Ae.top+Math.max(20,44*Me);p-H<40?k.setPath("M0 0"):k.set([{x:Ne,y:H},{x:Ne,y:p+4}]),K=!0}const Y=()=>{O(),Z()};new ResizeObserver(Y).observe(U),new ResizeObserver(Y).observe(i);let $="#CED8DA",fe="#121A24",he="#434B53",me="#BEC6C7";for(const Se of f)Se.img.addEventListener("load",()=>{M--,B++},{once:!0});function ye(){if(!R){R=!0;for(const{img:Se}of f)Se.src=Se.dataset.src;c.faces||_.load()}}function Oe(Se,qe,we){x=Se,p=qe,B++;const ge=x<760&&p>x;L=ge,S=we+16;let Ae,Ee,Me,Ne,Ye,De;if(ge){Ee=18,Ae=Math.min((x-2*Ee)/4.6,p*.1);const Le=Ee+ar*Ae,D=x-Ee-ar*Ae;Me=[Le,(Le+D)/2,D];const Be=Math.max(Ee+56,we+12)+Ae/2,_e=Ae*1.35;Ne=[Be,Be+_e,p-Ee-56-Ae/2-_e,p-Ee-56-Ae/2],Ye=x-2*Ee,De=Math.min(36*x/390,Ye/10.6)}else{Ee=Kt(Math.min(x,p)*.08,28,110);const Le=Math.max(Ee,we+Ee*.35);Ae=Math.min(p*.152,(x-2*Ee)/7.6,(p-2*Le)/3.6);const D=Ee+ar*Ae,Be=x-Ee-ar*Ae;Me=[0,1,2,3,4].map(_e=>Yi(D,Be,_e/4)),Ne=[Le+Ae/2,p/2,p-Le-Ae/2],Ye=2*(Math.min(x/2-(Me[0]+.5*Ae),Me[4]-ar*Ae-x/2)-.45*Ae),De=Math.min(74*Math.min(x/1920,p/1200),Ye/(953/74))}T=Ae;for(const Le of f){Le.tw=Le.w*Ae,Le.th=Le.h*Ae;const D=Le.circle?Le.th/2:ox*Ae;Object.assign(Le.el.style,{width:`${Le.tw}px`,height:`${Le.th}px`,borderRadius:`${D}px`});const[Be,_e]=ge?Uu[Le.id]:[Le.c,Le.r];Le.x=Me[Be],Le.y=Ne[_e];const E=Ul[Le.box||"wide"],g=Math.max(Cs.eyeToChin*Le.th/ti.eyeToChin,Le.tw/E.w);Le.corner=D,Le.photo={w:E.w*g,x:Le.tw/2-(ti.cx-E.x0)*g,y:Cs.eyeY*Le.th-(ti.eyeY-E.y0)*g},Object.assign(Le.img.style,{width:`${Le.photo.w}px`,left:`${Le.photo.x}px`,top:`${Le.photo.y}px`})}[...f].sort((Le,D)=>Math.hypot(Le.x-x/2,Le.y-p/2)-Math.hypot(D.x-x/2,D.y-p/2)).forEach((Le,D)=>{Le.order=D}),Object.assign(i.style,{width:`${Math.min(Ye,De*953/74)}px`,fontSize:`${De}px`}),s.style.fontSize=`${Math.max(11,De*.243)}px`,e.style.setProperty("--open-size",`${De}px`),e.style.setProperty("--open-box",`${ge?x-2*Ee:Math.min(x-2*Ee,De*953/74)}px`),e.style.setProperty("--open-eyebrow",`${Math.max(11,De*.243)}px`),e.style.setProperty("--open-sub",`${Math.max(15,De*.3)}px`),_.layout(x,p,ge),r[1].style.width=`${De*15.05<=Ye?De*15.05:Math.min(Ye,De*953/74)}px`,v=null,O(),Z()}function J(Se){Se.fillStyle=$,Se.fillRect(0,0,x,p);for(const ge of f)Se.save(),Se.beginPath(),Se.roundRect(ge.x-ge.tw/2,ge.y-ge.th/2,ge.tw,ge.th,ge.corner),Se.clip(),Se.fillStyle=me,Se.fill(),ge.img.naturalWidth&&Se.drawImage(ge.img,ge.x-ge.tw/2+ge.photo.x,ge.y-ge.th/2+ge.photo.y,ge.photo.w,ge.photo.w*ge.img.naturalHeight/ge.img.naturalWidth),Se.restore();const qe=(ge,Ae,Ee,Me)=>{const Ne=ge.style.transform;ge.style.transform="none";const Ye=ge.firstChild,De=Ye.textContent,Le=document.createRange(),D=getComputedStyle(ge),Be=parseFloat(D.fontSize),_e=[];for(let g=0;g<De.length;){const H=De.indexOf(" ",g)<0?De.length:De.indexOf(" ",g);Le.setStart(Ye,g),Le.setEnd(Ye,H);const z=Le.getBoundingClientRect(),N=_e[_e.length-1];N&&Math.abs(N.top-z.top)<Be/2?N.text+=" "+De.slice(g,H):_e.push({text:De.slice(g,H),left:z.left,top:z.top}),g=H+1}ge.style.transform=Ne,Se.font=`500 ${Be}px Gilroy`,Se.letterSpacing=`${Ae*Be}px`,Se.fillStyle=Me,Se.textBaseline="alphabetic";const E=Se.measureText("H").fontBoundingBoxAscent;for(const g of _e)Se.fillText(Ee?g.text.toUpperCase():g.text,g.left,g.top+E)},we=i.style.transform;i.style.transform="",qe(s,.1,!0,he),qe(r[0],-.035,!1,fe),i.style.transform=we}function ae({style:Se,opened:qe,burstOn:we,swap:ge,screens:Ae,covered:Ee,shape:Me,dt:Ne,still:Ye}){const De=(W,ue)=>{const ve=(2*W/ws-1)/1.08,ee=Me.pinchR+(Me.endR-Me.pinchR)*Nl(ve),[be,Re]=Do[Se===Do.length?0:Se]({a:ve,opened:ue,vh:p,rest:ee,shape:Me});return[Math.max(0,be),Math.max(0,Re),ee]},Le=W=>{const ue=[],ve=[];for(let ee=0;ee<=ws;ee++){const be=(x*ee/ws).toFixed(1),[Re,$e]=De(ee,W);ue.push(`${be}px ${(p/2-Re).toFixed(1)}px`),ve.unshift(`${be}px ${(p/2+$e).toFixed(1)}px`)}return`polygon(${ue.join(",")},${ve.join(",")})`},D=Se<3&&qe>0&&qe<1;a.forEach((W,ue)=>{W.style.visibility=D?"visible":"hidden",D&&(W.style.clipPath=Le(Math.min(1,qe+cx[ue]*Math.min(1,qe/.1))))});const Be=Se===Do.length;Be&&(m=qe>=1?ca:0);const _e=Be?qe>=1:qe>0;if(e.style.visibility=_e&&!Ee?"visible":"hidden",Be&&!_e){for(const W of f)W.el.style.visibility!=="hidden"&&(W.el.style.visibility="hidden");return Array(3).fill(qe>.6?0:p)}if(!_e&&m===0)return[p,p,p];R||ye();const E=W=>De(W,qe),g=W=>p/2-E(Math.round(ws*W))[0],H=[g(.5),g(.06),g(.94)];e.style.clipPath=qe>=1?"none":Le(qe);let z=qe>=1||Se===3;if(z)e.style.maskImage="none";else{const W=[];z=!0;for(let ue=0;ue<=ws;ue+=4){const[ve,ee,be]=E(ue),Re=Kt((Math.min(ve,ee)/Math.max(be,1)-1)/lx),$e=Bu+(1-Bu)*un(Re);$e<.999&&(z=!1),W.push(`rgba(0,0,0,${$e.toFixed(3)}) ${(ue/ws*100).toFixed(1)}%`)}e.style.maskImage=z?"none":`linear-gradient(90deg,${W.join(",")})`}const N=un(Kt((qe-.05)/.12));t.style.opacity=N.toFixed(3),Be||(Ye?m=we?ca:0:we?m=Math.min(ca,m+Ne):m=Math.max(0,m-Ne*ii.back));const te=m>0?m:-1,le=x/2,G=p/2;!Ye&&m>=ca&&(b+=Ne);const I=un(nn(Ae,c.clear)),q=Math.min(x,p)*.012;_.frame(Ae,Ee);for(const W of f){const ue=te<0?0:Kt((te-W.order*ii.stagger)/ii.dur);if(W.el.style.visibility=ue>0&&!Ee?"visible":"hidden",ue<=0||Ee)continue;const ve=dx(ux(ue)*.82+ue*.18),[ee,be,Re,$e]=_.place(W,Yi(le,W.x,ve),Yi(G,W.y,ve),Yi(.2,1,ua(Kt(ue*1.6)))),Ze=W.spin*(1-ua(ue));if($e<=.001){W.el.style.visibility="hidden";continue}const Et=(1-I)*$e;if(Et<=.001){W.el.style.visibility="hidden";continue}const Ot=q*Math.sin(b*.55+W.order*1.7),Oi=q*Math.cos(b*.45+W.order*2.3),rs=f.indexOf(W),Xn=x*.52,_i=x-Math.max(56,x*.045),vi=(_i-Xn)/3,Bi=(p-24-S)/4,Pt=Math.min(1.15,.82*Bi/T),gt=T*Pt*1.05,qn=S+gt/2,ki=p-24-gt/2,Ur=Xn+vi*(rs%3+.5),as=qn+(ki-qn)*Math.floor(rs/3)/3,os=0,Hi=1+.08*I,Or=le+(Yi(ee,Ur,os)-le)*Hi,Br=G+(Yi(be,as,os)-G)*Hi,Ka=Re*Yi(1,Pt,os);W.el.style.opacity=(Kt(ue*6)*Et).toFixed(3),W.el.style.transform=`translate3d(${(Or+Ot-W.tw/2).toFixed(1)}px,${(Br+Oi-W.th/2).toFixed(1)}px,0) rotate(${Ze.toFixed(2)}deg) scale(${Ka.toFixed(3)})`}const oe=te<0?0:ua(Kt((te-ii.titleDelay)/ii.titleDur)),re=un(Kt(ge*2)),ie=un(Kt(ge*2-1)),de=W=>`translateY(${((1-W)*14).toFixed(1)}px)`;s.style.opacity=oe.toFixed(3),s.style.transform=de(oe),r[0].style.opacity=(oe*(1-re)).toFixed(3),r[0].style.transform=de(oe*(1-re)),r[1].style.opacity=ie.toFixed(3),r[1].style.transform=de(ie),ge>0&&v===null&&(v=r[1].offsetHeight-r[0].offsetHeight);const xe=0;i.style.transform=ge>0&&v||xe?`translateY(${(-(v||0)/2*un(ge)-xe).toFixed(1)}px)`:"";const[pe]=Hu(Ae,c.providers);Hu(Ae,c.innovators),i.style.opacity=(N*(1-pe)*(1-un(Kt(I*1.6)))).toFixed(3);const C=(W,ue)=>{W.style.opacity=ue.toFixed(3),W.style.visibility=ue>.001?"inherit":"hidden",W.style.transform=de(ue)},ce=un(nn(Ae,c.duo));return C(U,ce),w.draw(c.thread?nn(Ae,c.thread):0),k.draw(K&&c.facesThread?nn(Ae,c.facesThread):0,c.facesOut?nn(Ae,c.facesOut):0),k.svg.style.opacity=c.facesFade?(1-nn(Ae,c.facesFade)).toFixed(3):"1",C(o[0],1),C(o[1],1),C(l,1),H}function Ce({screens:Se,covered:qe,under:we,dt:ge,still:Ae}){const Ee=nn(Se,c.faces),Me=nn(Se,c.list),Ne=p*(1-Ee),Ye=Ee>0&&!qe;if(e.style.visibility=Ye||St.on&&!qe?"visible":"hidden",Ee<=0)for(const _e of f)_e.seen=0;if(!Ye)return[Ne,Ne,Ne];if(R||ye(),!F){F=!0,e.style.clipPath="none",e.style.maskImage="none",t.style.opacity="1";for(const _e of[s,r[0],i,U,l,...o])_e.style.visibility="inherit",_e.style.transform="";for(const _e of[s,r[0],U])_e.style.opacity="1";l.style.opacity="",r[1].style.opacity="0",k.svg.style.opacity="1",V.svg.style.opacity="1"}St.on||(e.style.transform=`translate3d(0,${Ne.toFixed(1)}px,0)`,A.style.transform=`translate3d(0,${(-Me*p).toFixed(1)}px,0)`,P.style.transform=`translate3d(0,${((1-Me)*p).toFixed(1)}px,0)`),A.style.visibility=Me<1?"inherit":"hidden",P.style.visibility=Me>0||St.on?"inherit":"hidden",Ae||(b+=ge);const De=Ae?0:Math.min(x,p)*.012;if(Me<1)for(const _e of f){const E=De*Math.sin(b*.55+_e.order*1.7),g=De*Math.cos(b*.45+_e.order*2.3),H=Ne+_e.y<p*(_e.x>x/2?.86:.94);_e.seen=Ae?H?1:0:Kt((_e.seen||0)+(H?ge/Ou:-ge/(Ou*.6)));const z=ua(_e.seen),N=(1-z)*Math.min(x,p)*.035,te=.96+.04*z;_e.el.style.visibility="inherit",_e.el.style.opacity=z.toFixed(3),_e.el.style.transform=`translate3d(${(_e.x+E-_e.tw/2).toFixed(1)}px,${(_e.y+g+N-_e.th/2).toFixed(1)}px,0) scale(${te.toFixed(3)})`}n||(k.draw(K&&c.facesThread?nn(Se,c.facesThread):0),w.draw(c.thread?nn(Se,c.thread):0));const Le=n?n.progress(w):c.thread?nn(Se,c.thread):0,D=w.stops;Di(i,n&&K?n.progress(V)>=.999||Ee>=1:Ee>.55);const Be=n&&x<760?Me>.18:Le>=(D[0]??0);return[...U.children].filter(_e=>!_e.matches(".open__list")).forEach((_e,E)=>Di(_e,Be,E*.16)),o.forEach((_e,E)=>Di(_e,Le>=(D[E]??0))),[Ne,Ne,Ne]}function ze(Se){$=Se.ground,fe=Se.on,he=Se.soft,B++}function Pe(Se){me=Se,B++}return{layout:Oe,frame:ae,flow:Ce,loadPeople:ye,paint:J,setGround:ze,setPhotoGround:Pe,get version(){return B},get ready(){return M===0}}}const zu=46,px=1.3,mx=1.35,gx=.7,_x=.2,Gu=[.05,.12],vx=`
uniform float uRoll, uTwist, uDepth, uRear, uLift, uHalfW, uHalfH;
varying vec2 vUv;
varying float vRoll;
const float PI = 3.141592653589793;
void main() {
  float q = position.x;
  float y = position.y * uHalfH;
  // Wind about the centre line first, then bend, then lift: in this order the cross-sections
  // are rolled and the centre line still follows the curve.
  float a = uRoll + uTwist * q;
  vRoll = a;
  float wy = y * cos(a);
  float wz = y * sin(a);
  wz -= uDepth * sin(PI * (q * 0.62 - 0.12)) * exp(-q * q * 0.8);
  float rear = 1.0 - smoothstep(-1.0, 0.3, q);
  wy += uLift * rear;
  wz += uRear * rear;
  vUv = vec2(q * 0.5 + 0.5, position.y * 0.5 + 0.5);
  gl_Position = projectionMatrix * viewMatrix * vec4(q * uHalfW, wy, wz, 1.0);
}
`,xx=`
uniform sampler2D uPage;
uniform float uShade;
uniform vec3 uGround;
varying vec2 vUv;
varying float vRoll;
void main() {
  // The light reads the turn: full colour face on, darker as the sheet turns away, a thin
  // sheen on the way to edge-on. All of it eases out, so the sheet lands the page's exact colour.
  float facing = abs(cos(vRoll));
  vec3 colour = gl_FrontFacing ? texture2D(uPage, vUv).rgb : uGround * 0.82;
  colour *= mix(1.0, 0.5 + 0.5 * facing, uShade);
  colour += (uGround * 1.2 + 0.1) * pow(1.0 - facing, 4.0) * 0.5 * uShade;
  gl_FragColor = vec4(colour, 1.0);
}
`,Vu=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Fo=n=>n*n*(3-2*n);function Sx(n){const e=new fh({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setClearColor(0,0);const t=new Zd,i=new hn(zu,1,1,1e5),s=new Fr(px*2,2,200,48),r=document.createElement("canvas"),a=new Tp(r);a.minFilter=Nt,a.generateMipmaps=!1,a.wrapS=a.wrapT=On;const o={uRoll:{value:0},uTwist:{value:0},uDepth:{value:0},uRear:{value:0},uLift:{value:0},uHalfW:{value:1},uHalfH:{value:1},uShade:{value:0},uGround:{value:new ne(.2549,.1529,.5608)},uPage:{value:a}},l=new En({vertexShader:vx,fragmentShader:xx,uniforms:o,side:Nn}),c=new wn(s,l);c.frustumCulled=!1,t.add(c);let u=1,h=1,d=!1,f=-1;function _(B,M){u=B,h=M,e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(u,h,!1),i.aspect=u/h,i.position.set(0,0,h/2/Math.tan(zu*Math.PI/360)),i.updateProjectionMatrix(),o.uHalfW.value=u/2,o.uHalfH.value=h/2}function x(B,M){if(M===f)return;f=M;const v=Math.min(window.devicePixelRatio||1,2);r.width=Math.round(u*v),r.height=Math.round(h*v);const b=r.getContext("2d");b.setTransform(v,0,0,v,0,0),B(b),a.needsUpdate=!0,e.initTexture(a)}function p([B,M,v]){o.uGround.value.set(B,M,v)}function m(){d&&(d=!1,n.style.visibility="hidden")}function R(B,M){const v=Fo(B)*.35+B*.65,b=Math.sin(Math.PI*v);o.uRoll.value=Math.PI/2*(1-v),o.uTwist.value=mx*b*(1+gx*M),o.uDepth.value=h*_x*b,o.uRear.value=u*Gu[1]*M*b,o.uLift.value=u*Gu[0]*M*b,o.uShade.value=1-Fo(Vu((B-.72)/.28)),n.style.opacity=(.4+.6*Fo(Vu(B/.14))).toFixed(3),e.render(t,i),d||(d=!0,n.style.visibility="visible")}return{resize:_,setPage:x,setGround:p,frame:R,hide:m}}const Wu="#FFFFFF",Xu="#F4F4F2",Io="#121A24",qu={mix:.74,contrast:4.5},No={step:.0549,chroma:.819},fr=n=>[1,3,5].map(e=>parseInt(n.slice(e,e+2),16)/255),Yu=n=>{const[e,t,i]=fr(n).map(s=>s<=.03928?s/12.92:((s+.055)/1.055)**2.4);return .2126*e+.7152*t+.0722*i},Uo=(n,e)=>{const[t,i]=[Yu(n),Yu(e)].sort((s,r)=>r-s);return(t+.05)/(i+.05)};function Aa(n){const e=n.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)?"#"+[...e].map(t=>t+t).join("").toUpperCase():/^[0-9a-f]{6}$/i.test(e)?"#"+e.toUpperCase():null}const Mx=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,yx=n=>n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055;function bx(n){const[e,t,i]=fr(n).map(Mx),s=Math.cbrt(.4122214708*e+.5363325363*t+.0514459929*i),r=Math.cbrt(.2119034982*e+.6806995451*t+.1073969566*i),a=Math.cbrt(.0883024619*e+.2817188376*t+.6299787005*i);return[.2104542553*s+.793617785*r-.0040720468*a,1.9779984951*s-2.428592205*r+.4505937099*a,.0259040371*s+.7827717662*r-.808675766*a]}function $u(n,e,t){const i=(n+.3963377774*e+.2158037573*t)**3,s=(n-.1055613458*e-.0638541728*t)**3,r=(n-.0894841775*e-1.291485548*t)**3;return[4.0767416621*i-3.3077115913*s+.2309699292*r,-1.2684380046*i+2.6097574011*s-.3413193965*r,-.0041960863*i-.7034186147*s+1.707614701*r]}function wx(n,e){const t=e==="darker",[i,s,r]=bx(n),a=Math.min(.985,Math.max(.05,i+(t?-.0549:No.step)));let o=t?No.chroma:1/No.chroma,l=$u(a,s*o,r*o);for(;o>0&&l.some(u=>u<-5e-4||u>1.0005);)o-=.02,l=$u(a,s*o,r*o);const c=u=>Math.round(Math.min(1,Math.max(0,yx(Math.max(0,u))))*255).toString(16).padStart(2,"0");return"#"+l.map(c).join("").toUpperCase()}function Ex(n){const e=Uo(n,"#FFFFFF")>=Uo(n,Io),t=e?"#FFFFFF":Io,i=document.documentElement.style;i.setProperty("--ground",n),i.setProperty("--on-ground",t),i.setProperty("--on-ground-text",e?Io:"#FFFFFF"),i.setProperty("--on-ground-hover",e?"#E4E4E8":"#2C3644");const s=a=>"#"+fr(n).map((o,l)=>Math.round((o+(fr(t)[l]-o)*a)*255).toString(16).padStart(2,"0")).join("").toUpperCase();let r=t;for(let a=qu.mix;a<1;a+=.02)if(Uo(s(a),n)>=qu.contrast){r=s(a);break}return i.setProperty("--on-ground-soft",r),{ground:n,on:t,soft:r,rgb:fr(n)}}function Ku({root:n,onChange:e,onPick:t,onReach:i}){const s=n.querySelector("input[type=color]"),r=n.querySelector(".ground-hex"),a=[...n.querySelectorAll("[data-ground]")];let o="";function l(u){o=u,s.value=u.toLowerCase(),r!==document.activeElement&&(r.value=u);for(const h of a)h.setAttribute("aria-pressed",String(h.dataset.ground===u));e(u)}const c=u=>{l(u),t(u)};s.addEventListener("input",()=>c(Aa(s.value))),r.addEventListener("input",()=>{const u=Aa(r.value);u&&c(u)}),r.addEventListener("focus",()=>r.select()),r.addEventListener("blur",()=>{r.value=o}),r.addEventListener("keydown",u=>{u.key==="Enter"&&r.blur()});for(const u of a)u.addEventListener("click",()=>c(u.dataset.ground));return n.addEventListener("pointerdown",i),n.addEventListener("focusin",i),{show:l}}function Tx({groundRoot:n,photoRoot:e,onGround:t,onPhotos:i,onReach:s}){const r="knit-flow-ground-v1",a="knit-flow-photo-v1",o=[...e.querySelectorAll("[data-shade]")],l=x=>x==="darker"||x==="lighter";let c=Aa(ai(r)||"")||Wu,u=ai(a);l(u)||(u=Aa(u||"")||Xu);const h=Ku({root:e,onChange:i,onReach:s,onPick:x=>{u=x,ji(a,u),d()}});function d(){for(const x of o)x.setAttribute("aria-pressed",String(x.dataset.shade===u))}function f(){h.show(l(u)?wx(c,u):u),d()}const _=Ku({root:n,onReach:s,onChange:x=>{c=x,t(x),f()},onPick:x=>ji(r,x)});for(const x of o)x.addEventListener("click",()=>{u=x.dataset.shade,ji(a,u),f()});return _.show(c),{reset(){ks(r),ks(a),u=Xu,_.show(Wu)}}}const Ax="http://www.w3.org/2000/svg",Rx=-64,Cx=3.3,Px="#1A1A1A",Oo=.45,Zu=4,Ol=["#8A64FC","#D4F587","#DE949A","#8AA9FF","#78629A","#FF97FC","#78A69C"],Lx=["#1C8F5A","#0B7FA0","#CF3F2C","#B98100"],Dx=["overlap","gradient","solid","sections","duotone"],Mh={count:6,width:60,spread:100,palette:"knit",mode:"overlap",colors:[...Ol]},qt=(n,e,t)=>Math.max(e,Math.min(t,n)),Zt=(n,e,t)=>n+(e-n)*t,Ln=n=>Number(n.toFixed(4)),jn=(n,e)=>Number.isFinite(Number(n))?Number(n):e;let Fx=0;function Tt(n,e={}){const t=document.createElementNS(Ax,n);for(const[i,s]of Object.entries(e))t.setAttribute(i,s);return t}function Ix(n,e){const t=n.d.match(/-?(?:\d*\.)?\d+(?:e[-+]?\d+)?/gi).map(Number),i=[];for(let s=0;s<t.length;s+=2)i.push([t[s],t[s+1]]);return{...n,points:i,sourceIndex:e}}function yh(n){const e=n.map(([i,s])=>`${i},${Number(s.toFixed(6))}`);let t=`M${e[0]}`;for(let i=1;i<e.length;i+=3)t+=` C${e.slice(i,i+3).join(" ")}`;return t}function Nx(n){const e=[];for(let t=3;t<n.length-4;t+=3){const[i,s,r,a]=n.slice(t,t+4);let o=i;for(let l=1;l<=40;l++){const c=l/40,u=1-c,h=[0,1].map(d=>u**3*i[d]+3*u*u*c*s[d]+3*u*c*c*r[d]+c**3*a[d]);e.push([h[0]-o[0],h[1]-o[1],h[0]]),o=h}}return e}function Ju(n,e){const t=[0];let i=0;for(const[s,r]of n)i+=Math.hypot(s,r*e),t.push(i);return t.map(s=>s/i)}function Ux(n,e,t){const i=n.points.map(([r,a],o)=>[Ln(Zt(r,e.points[o][0],t)),Ln(Zt(a,e.points[o][1],t))]),s=r=>({times:n[r].times.map((a,o)=>Zt(a,e[r].times[o],t)),bezier:n[r].bezier.map((a,o)=>Zt(a,e[r].bezier[o],t))});return{points:i,d:yh(i),start:s("start"),end:s("end"),sourceIndex:null,openingLength:Zt(n.openingLength,e.openingLength,t)}}function Ox(n,e){const t=[...n].sort((i,s)=>i.points[6][1]-s.points[6][1]);if(t.forEach((i,s)=>{i.rank=s}),e<t.length)return e===1?[t[0]]:Array.from({length:e},(i,s)=>t[Math.round(s*(t.length-1)/(e-1))]);for(;t.length<e;){let i=-1,s=0;for(let l=0;l<t.length-1;l++){const c=t[l],u=t[l+1],h=c.points.reduce((d,f,_)=>d+(f[1]-u.points[_][1])**2,0);h>i&&(i=h,s=l)}const r=t[s],a=t[s+1],o=Ux(r,a,.5);o.rank=(r.rank+a.rank)/2,t.splice(s+1,0,o)}return t}function Bx(n){const e=parseInt(n.slice(1),16);return[e>>16,e>>8&255,e&255]}const Bl=(n,e,t)=>n.map((i,s)=>Zt(i,e[s],t)),kx=n=>`rgb(${n.map(Math.round).join(",")})`;function Hx(n,e){const t=Math.floor(e),i=(t%n.length+n.length)%n.length;return Bl(n[i],n[(i+1)%n.length],e-t)}function ei(n){const e=qt(n,0,1);return e*e*(3-2*e)}function zx(n){const e=a=>{const o=Math.sin((n*17.3+a*3.7+1)*127.1+311.7)*43758.5453;return o-Math.floor(o)},t=Math.PI*2,i=(a,o,l,c,u,h,d)=>({amplitude:o+l*e(a),frequency:(c+u*e(a+1))*t,phase:e(a+2)*t,drift:1.5*(h+d*e(a+3))*(e(a+4)<.5?-1:1)}),s=[i(1,.52,.2,.65,.55,.12,.12),i(6,.22,.14,1.3,.8,.18,.22),i(11,.06,.06,2.2,1.1,.3,.3)],r=s.reduce((a,o)=>a+o.amplitude,0);for(const a of s)a.amplitude/=r;return s}function Gx(n,e){let t=0;for(;t<n.length-4&&n[t+3][0]<e;)t+=3;const[i,s,r,a]=n.slice(t,t+4),o=(d,f)=>(1-d)**3*i[f]+3*(1-d)**2*d*s[f]+3*(1-d)*d**2*r[f]+d**3*a[f];let l=0,c=1;for(let d=0;d<28;d++){const f=(l+c)/2;o(f,0)<e?l=f:c=f}const u=(l+c)/2,h=d=>(1-u)**2*(s[d]-i[d])+2*(1-u)*u*(r[d]-s[d])+u**2*(a[d]-r[d]);return[o(u,1),h(1)/(h(0)||1)]}function Vx(n,e){if(!Array.isArray(n))return e;const t=n.filter(i=>typeof i=="string"&&/^#[0-9a-f]{6}$/i.test(i));return t.length?t.map(i=>i.toUpperCase()):e}function Wx(n,e,t,i={}){const s=i.entryEnd??Cx,r=!!i.keepColour,a=`ribbons-${++Fx}`,[o,l]=t.sourceSize,[c]=t.outputSize,u=t.paths.map(Ix),h=u[0].points,d=h[0][0],f=h.at(-1)[0],_=h[3][0],x=h.at(-4)[0],p=_-h[0][0],m=f-x,R=c*.52,B=c*.34,M=c/3,v={...Mh,colors:[...Ol]},b=Tt("defs"),L=u.flatMap(({points:I})=>I.map(([,q])=>I[0][1]+3*(q-I[0][1]))),S=Math.min(0,Math.floor(Math.min(...L))-61),T=Math.max(l,Math.ceil(Math.max(...L))+61),U={x:0,y:S,width:o,height:T-S},A=Tt("clipPath",{id:`${a}-boundary`,clipPathUnits:"userSpaceOnUse"});A.append(Tt("rect",U)),b.append(A),n.prepend(b),e.setAttribute("clip-path",`url(#${a}-boundary)`),e.setAttribute("fill","none"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("stroke-linecap","round"),e.style.isolation="isolate";const P=Tt("g"),F=Tt("g",{mask:`url(#${a}-weaving-only)`,opacity:.53});F.style.isolation="isolate",F.style.mixBlendMode="multiply",e.replaceChildren(P,F);const w=Tt("path",{visibility:"hidden"});e.append(w);const O=Tt("linearGradient",{id:`${a}-ink-fade`,gradientUnits:"userSpaceOnUse",x1:_,x2:x,y1:0,y2:0}),V=R/(x-_);[[0,0],[V*.35,0],[V,1],[1-V,1],[1-V*.35,0],[1,0]].forEach(([I,q])=>{O.append(Tt("stop",{offset:I,"stop-color":"white","stop-opacity":q}))});const k=Tt("mask",{id:`${a}-weaving-only`,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse",...U,"mask-type":"alpha"});k.append(Tt("rect",{...U,fill:`url(#${a}-ink-fade)`})),b.append(O,k);const K=Tt("linearGradient",{id:`${a}-settle-fade`,gradientUnits:"userSpaceOnUse",y1:0,y2:0});K.append(Tt("stop",{offset:0,"stop-color":"white"}),Tt("stop",{offset:1,"stop-color":"white","stop-opacity":0}));const Z=Tt("mask",{id:`${a}-settle-ink`,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse",...U,"mask-type":"alpha"});Z.append(Tt("rect",{...U,fill:`url(#${a}-settle-fade)`})),b.append(K,Z);let Y=[],$=null,fe=null,he=!1,me=null;const ye=e.parentElement;let Oe=0,J=1,ae=1.1;const Ce=()=>(v.palette==="custom"?v.colors:v.palette==="records"?Lx:Ol).map(Bx);function ze(I,q,oe,re){const ie=ei((I-_)/R)*ei((x-I)/R),de=q*1.37,xe=Math.round(q*1.37)%oe.length;if(v.mode==="gradient"||v.mode==="overlap")return Hx(oe,I/B+de*ie);let pe=oe[xe];if(v.mode==="sections"){const C=(re+xe+oe.length)%oe.length;pe=oe[C]}else if(v.mode==="duotone"){const C=oe[(xe+Math.ceil(oe.length/2))%oe.length],ce=(1-Math.cos((I/c+q/5)*Math.PI))/2;pe=Bl(pe,C,ce)}return Bl(oe[0],pe,ie)}function Pe(I,q){const oe=[],re=(ie,de)=>oe.push(Tt("stop",{offset:ie/o,"stop-color":kx(de)}));if(v.mode==="sections"){const ie=Math.ceil(o/M);for(let de=0;de<ie;de++){const xe=de*M,pe=Math.min(o,xe+M);for(let C=0;C<=8;C++){const ce=Zt(xe,pe,C/8);re(ce,ze(ce,I.spec.rank,q,de))}}}else{const ie=Math.ceil(o/(c/28));for(let de=0;de<=ie;de++){const xe=o*de/ie;re(xe,ze(xe,I.spec.rank,q,0))}}I.gradient.replaceChildren(...oe)}function Se(){Y.forEach(I=>I.gradient.remove()),P.replaceChildren(),F.replaceChildren(),Y=Ox(u,v.count).map((I,q)=>{const oe=`${a}-color-${q}`,re=`${a}-path-${q}`,ie=Tt("linearGradient",{id:oe,gradientUnits:"userSpaceOnUse",x1:0,x2:o,y1:0,y2:0});b.append(ie);const de=Tt("path",{id:re,d:I.d,stroke:`url(#${oe})`,visibility:"hidden","stroke-width":v.width});P.append(de);const xe=Tt("use",{href:`#${re}`,opacity:.68});xe.style.mixBlendMode="multiply",F.append(xe);const pe=de.getTotalLength(),C=Nx(I.points);return{spec:I,element:de,gradient:ie,staticD:I.d,length:pe,originalLength:pe,chords:C,originalFractions:Ju(C,1),spreadFractions:null,waves:zx(I.rank)}})}function qe(){const I=v.spread/100;for(const q of Y){const{spec:oe,element:re}=q,ie=oe.points[0][1];q.staticD=I===1?oe.d:yh(oe.points.map(([de,xe])=>[de,ie+(xe-ie)*I])),re.setAttribute("d",q.staticD)}for(const q of Y)q.length=I===1?q.originalLength:q.element.getTotalLength(),q.spreadFractions=I===1?null:Ju(q.chords,I)}function we(I,q){if(!I.spreadFractions||q<=p)return q;const oe=I.originalLength-q;if(oe<=m)return I.length-oe;const re=(q-p)/(I.originalLength-p-m),ie=I.originalFractions;let de=0,xe=ie.length-1;for(;xe-de>1;){const ce=xe+de>>1;ie[ce]<re?de=ce:xe=ce}const pe=(re-ie[de])/(ie[xe]-ie[de]),C=Zt(I.spreadFractions[de],I.spreadFractions[xe],pe);return p+C*(I.length-p-m)}function ge(I,q){if(q<=_)return qt(q-d,0,p);if(q>=x)return I.originalLength-Math.max(0,f-q);const{chords:oe,originalFractions:re}=I;let ie=0,de=oe.length-1;for(;ie<de;){const ce=ie+de>>1;oe[ce][2]<q?ie=ce+1:de=ce}const xe=ie===0?_:oe[ie-1][2],pe=(q-xe)/(oe[ie][2]-xe),C=Zt(re[ie],re[ie+1],pe);return p+C*(I.originalLength-p-m)}function Ae(I={}){const q={...v};v.count=qt(Math.round(jn(I.count??v.count,v.count)),1,15),v.width=qt(jn(I.width??v.width,v.width),1,120),v.spread=qt(jn(I.spread??v.spread,v.spread),0,300),["knit","records","custom"].includes(I.palette)&&(v.palette=I.palette),Dx.includes(I.mode)&&(v.mode=I.mode),v.colors=Vx(I.colors,v.colors);const oe=!Y.length||q.count!==v.count;if(oe&&Se(),(q.spread!==v.spread||oe&&v.spread!==100)&&qe(),oe||q.palette!==v.palette||q.mode!==v.mode||q.colors.join()!==v.colors.join()){const re=Ce();Y.forEach(ie=>Pe(ie,re))}q.width!==v.width&&Y.forEach(re=>re.element.setAttribute("stroke-width",v.width)),P.setAttribute("opacity",v.mode==="overlap"?"0.91":"1"),F.style.display=v.mode==="overlap"?"":"none",te()}function Ee(I){if(J!==1||Oe!==0){const q=Oe+(J-1)*I;e.setAttribute("transform",`matrix(${J} 0 0 1 ${q} 0)`)}}function Me(I,q,oe,re){if(he){for(const C of Y)C.element.setAttribute("d",C.staticD),C.live=!1;F.setAttribute("mask",`url(#${a}-weaving-only)`),he=!1,me=null}Ee(q);const ie=-q,de=ei((I-1.85)/(s-1.85)),pe=t.pan.anchor[0]-t.pan.segments[0].startX+re-d;for(const C of Y){const{element:ce,spec:W,length:ue,originalLength:ve}=C,ee=Zt(pe,W.openingLength||ve,oe(I,W.end)),be=ge(C,ie+c+64),Re=we(C,Zt(ee,Math.max(ee,be),de)),$e=ge(C,ie-64),Ze=we(C,oe(I,W.start)*$e),Et=Math.max(0,Re-Ze);ce.setAttribute("visibility",Et>.01?"visible":"hidden"),ce.setAttribute("stroke-dasharray",`${Et} ${ue*2}`),ce.setAttribute("stroke-dashoffset",-Ze)}}function Ne(I,q,oe){$=[I,q,oe],fe=null,Me(I,q,oe,c*.25)}const Ye=96,De=32,Le=(c+2*Ye)/De;function D(I,q){I.sampleOrigin===q&&I.sampleCycles===ae||(I.sampleOrigin=q,I.sampleCycles=ae,I.samples=Array.from({length:De+1},(oe,re)=>{const ie=-Ye+re*Le,de=ie/c,xe=q+ie,[pe,C]=Gx(I.spec.points,xe),ce=I.waves.map(W=>{const ue=W.frequency*ae*de+W.phase;return[Math.sin(ue),Math.cos(ue)]});return{x:xe,u:de,initialY:pe-I.spec.points[0][1],initialSlope:C,bases:ce}}))}function Be(I,q,oe,re,ie,de,xe=0){const pe=l*.335,C=v.spread/100,ce=Math.round(h[0][1]);for(const be of I.waves)be.sinTime=Math.sin(be.drift*q),be.cosTime=Math.cos(be.drift*q);let W="",ue=0,ve=0,ee=0;for(const be of I.samples){let Re=0,$e=0;for(let Pt=0;Pt<I.waves.length;Pt++){const gt=I.waves[Pt],[qn,ki]=be.bases[Pt];Re+=gt.amplitude*(qn*gt.cosTime+ki*gt.sinTime),$e+=gt.amplitude*gt.frequency*ae/c*(ki*gt.cosTime-qn*gt.sinTime)}const Ze=Zt(be.initialY,pe*Re,oe),Et=Zt(be.initialSlope,pe*$e,oe),Ot=qt((be.u-re)/ie,0,1),Oi=1-ei(Ot),rs=-6*Ot*(1-Ot)/(ie*c);let Xn=1,_i=0;if(xe>0){const Pt=2*(be.u-.5),gt=qt((xe*(1+Oo)-Math.abs(Pt))/Oo,0,1);Xn=1-gt*gt*(3-2*gt),gt>0&&gt<1&&(_i=12*gt*(1-gt)*Math.sign(Pt)/(Oo*c))}const vi=ce+C*de*Oi*Ze*Xn,Bi=C*de*((Oi*Et+rs*Ze)*Xn+Oi*Ze*_i);if(!W)W=`M${Ln(be.x)},${Ln(vi)}`;else{const Pt=Le/3;W+=` C${Ln(ee+Pt)},${Ln(ue+Pt*ve)} ${Ln(be.x-Pt)},${Ln(vi-Pt*Bi)} ${Ln(be.x)},${Ln(vi)}`}ee=be.x,ue=vi,ve=Bi}return W}function _e(I,q,oe,re,ie=0){const de=-oe,xe=Ye/c,pe=.55,C=1+xe-q*(1+2*xe+pe),ce=de+C*c;he||(he=!0,F.setAttribute("mask",`url(#${a}-settle-ink)`)),me!==ce&&(K.setAttribute("x1",ce),K.setAttribute("x2",ce+pe*c),me=ce),Ee(oe);const W=q===1||v.spread===0,ue=1-.2*ei(q);for(let ve=0;ve<Y.length;ve++){const ee=Y[ve];ee.live||(ee.element.setAttribute("stroke-dasharray","none"),ee.element.setAttribute("stroke-dashoffset",0),ee.live=!0);const be=!W||ve===Y.length-1;if(ee.element.setAttribute("visibility",be?"visible":"hidden"),!!be)if(W){const Re=Math.round(h[0][1]);ee.element.setAttribute("d",`M${de-Ye},${Re}H${de+c+Ye}`)}else D(ee,de),ee.element.setAttribute("d",Be(ee,I,re,C,pe,ue,ie))}}let E=null,g=4,H=null;function z(I,q,oe=null){const re=ei(I/.6),ie=oe??Zt(v.width,g,ei((I-.4)/.6)),de=Y.at(-1);if(ie!==E&&(de.element.setAttribute("stroke-width",ie),E=ie),w.setAttribute("visibility",re>0&&!r?"visible":"hidden"),re<=0||r)return;const xe=Math.round(h[0][1]);w.setAttribute("d",`M${q-Ye},${xe}H${q+c+Ye}`),w.setAttribute("stroke",Px),w.setAttribute("stroke-width",ie),w.setAttribute("opacity",re),re>=1&&de.element.setAttribute("visibility","hidden")}function N(I,q,oe,re,ie,de=1,xe=0,pe=0){fe=[I,q,oe,re,ie,de,xe,pe],$=null;const C=qt(jn(I,0),0,1),ce=Math.max(0,jn(q,0)),W=qt(jn(oe,0),0,1),ue=qt(jn(de,0),0,1),ve=qt(jn(pe,0),0,1),ee=qt((C-.75)*4,0,1),be=(C<.75?4*C:3+ee+ee*ee-ee*ee*ee)*s/4,Re=re(be);ye&&ye.setAttribute("transform",`translate(${Re},0)`),C<1||ue===0&&W===0?Me(be,Re,ie,Rx):_e(ce,W,Re,ei(ue),ve);const $e=ve>0?Zt(v.width,Zu,ei(qt((ve-.2)/.8,0,1))):null;$e!==H&&(Y.slice(0,-1).forEach(Ze=>Ze.element.setAttribute("stroke-width",$e??v.width)),H=$e),z(qt(jn(xe,0),0,1),-Re,$e)}function te(){fe?N(...fe):$&&Ne(...$)}function le(){const I=n.getScreenCTM?.(),q=n.getBoundingClientRect?.();!I||!q?.width||I.a<=0||(Oe=(q.left-I.e)/I.a,J=q.width/(I.a*c),ae=qt(q.width*1.08/1600,.4,1.1),Math.abs(J-1)<1e-5&&Math.abs(Oe)<.01&&(J=1,Oe=0,e.removeAttribute("transform")),te())}return Ae(),le(),typeof ResizeObserver<"u"&&new ResizeObserver(le).observe(n),{setSettings:Ae,setSolidWidth:I=>{g=I,te()},render:Ne,renderMotion:N,get trunk(){return h[0][1]},pinchLine:Zu}}const Qu={defaults:Mh,create:Wx};(()=>{const n="knit-patient-journey";if(customElements.get(n))return;const e="http://www.w3.org/2000/svg",t=(A,P,F)=>Math.min(F,Math.max(P,A)),i=A=>A*A*(3-2*A),s=(A,P,F)=>i(t((A-P)/(F-P),0,1)),r=(A,P,F={},w)=>{const O=document.createElementNS(e,P);for(const[V,k]of Object.entries(F))O.setAttribute(V,k);return A.append(O),O},a=A=>+A.toFixed(2),o=(A,P)=>P?A.removeAttribute("visibility"):A.setAttribute("visibility","hidden"),l=A=>[1,3,5].map(P=>parseInt(A.slice(P,P+2),16)),c=(A,P,F)=>{let w=0;for(;w<P.length-2&&F>P[w+1];)w++;const O=t((F-P[w])/(P[w+1]-P[w]),0,1);return A[w].map((V,k)=>Math.round(V+(A[w+1][k]-V)*O))},u=A=>{const P=A/255;return P<=.04045?P/12.92:((P+.055)/1.055)**2.4},h=A=>Math.round(255*(A<=.0031308?12.92*A:1.055*A**(1/2.4)-.055)),d=A=>{const[P,F,w]=A.map(u),O=Math.cbrt(.4122214708*P+.5363325363*F+.0514459929*w),V=Math.cbrt(.2119034982*P+.6806995451*F+.1073969566*w),k=Math.cbrt(.0883024619*P+.2817188376*F+.6299787005*w);return[.2104542553*O+.793617785*V-.0040720468*k,1.9779984951*O-2.428592205*V+.4505937099*k,.0259040371*O+.7827717662*V-.808675766*k]},f=([A,P,F])=>{const w=(A+.3963377774*P+.2158037573*F)**3,O=(A-.1055613458*P-.0638541728*F)**3,V=(A-.0894841775*P-1.291485548*F)**3;return[4.0767416621*w-3.3077115913*O+.2309699292*V,-1.2684380046*w+2.6097574011*O-.3413193965*V,-.0041960863*w-.7034186147*O+1.707614701*V]},_=A=>{const[P,F,w]=d(A),O=t(P-.22,.38,.6);for(let V=20;V>0;V--){const k=f([O,F*V/20,w*V/20]);if(k.every(K=>K>=0&&K<=1))return"rgb("+k.map(h).join()+")"}return"rgb("+f([O,0,0]).map(V=>h(t(V,0,1))).join()+")"},x=[0,.32],p={from:.27,step:.034,run:.5},m=.5,R=[0,.2,.4,.6,.8,1],B=[{fan:[0,-.26,-.8,-1,-.8,-.94],c:["#C993A8","#D4F587","#AABAD7","#889EEB"],stops:[0,.3,.62,1],weight:.98,grow:5},{fan:[0,-.1,-.5,-.36,-.68,-.56],c:["#8163D8","#8AA9FF","#95ACA8","#EA94E6"],weight:.9,grow:3},{fan:[0,.16,-.18,-.52,-.2,-.26],c:["#8EADA6","#FF97FC","#B79DCD","#78629A"],weight:.86,grow:1},{fan:[0,-.2,-.04,.24,-.02,.08],c:["#8163D8","#8AA9FF","#A390E3","#FF97FC"],weight:1,grow:0},{fan:[0,.26,.46,.1,.42,.3],c:["#DC91DC","#A27EDD","#8AA9FF","#D4F587"],weight:1.04,grow:2},{fan:[0,.08,.54,.76,.5,.64],c:["#A3A4DC","#D4F587","#8EADA6","#8AA9FF"],weight:.96,grow:4},{fan:[0,.4,.28,.62,.98,.9],c:["#D4DEA2","#D49DA9","#8AA9FF","#A3A4DC"],weight:.88,grow:6}],M={ys:[.56,.5,.33,.37,.13,0],gain:.6,events:[.2,.5,.79],small:{gain:.44,events:[.36,.72]}},v=[[1,.3,!0],[6,.39,!0],[3,.46,!1],[0,.48,!1],[5,.6,!0],[3,.77,!1],[6,.82,!1],[2,.86,!0],[0,.92,!1]],b={2:{lanes:["#8A64FC","#C2B1FF","#6A4FD0","#A98FFF","#7B6BB8","#DDD4FF"],plum:"#63539C"},3:{lanes:["#4A6FE8","#AFC3FF","#2F52C9","#8AA9FF","#6C86D6","#D3DEFF"],plum:"#2F52C9"},4:{lanes:["#3A4452","#9AA3AE","#56616E","#C3C9D1","#6F7A88","#2B3340"],plum:"#3A4452"}},L=(A,P)=>{const F=A<560,w=t(Math.min(A*.027,P*.078),F?7:10,46);return{compact:F,width:w,amp:Math.min(P*(F?.4:.42),P*.5-w*.62-6),cy:P*.5}},S=A=>.5-Math.sin(Math.asin(1-2*A)/3);function T(A,P,F){const w=A.length-1;let O=0;for(;O<w-1&&P>=R[O+1];)O++;const V=R[O+1]-R[O],k=(P-R[O])/V,K=k*k,Z=K*k,Y=$=>$===(F?w:0)?0:$===0?(A[1]-A[0])/(R[1]-R[0]):$===w?(A[w]-A[w-1])/(R[w]-R[w-1]):(A[$+1]-A[$-1])/(R[$+1]-R[$-1]);return(2*Z-3*K+1)*A[O]+(Z-2*K+k)*V*Y(O)+(-2*Z+3*K)*A[O+1]+(Z-K)*V*Y(O+1)}class U extends HTMLElement{static get observedAttributes(){return["progress"]}constructor(){super(),this.attachShadow({mode:"open"}),this._size="",this._p=1,this._bleed=0,this._bleedRight=0,this._palette=0,this._observer=new ResizeObserver(()=>this._layout())}connectedCallback(){if(this.setAttribute("role","img"),this.hasAttribute("aria-label")||this.setAttribute("aria-label","Illustration of one patient's journey. A single recorded path leads to the present. From there many possible futures fan out to the right."),!this.shadowRoot.firstChild){const P=document.createElement("style");P.textContent=`
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
        `,this.shadowRoot.append(P),this._svg=r(this.shadowRoot,"svg",{"aria-hidden":"true",focusable:"false"})}if(Object.hasOwn(this,"progress")){const P=this.progress;delete this.progress,this.progress=P}this._observer.observe(this),this._layout()}disconnectedCallback(){this._observer.disconnect()}get bleed(){return this._bleed}set bleed(P){const F=Math.max(0,Number(P)||0);F!==this._bleed&&(this._bleed=F,this._size="",this._layout())}get bleedRight(){return this._bleedRight}set bleedRight(P){const F=Math.max(0,Number(P)||0);F!==this._bleedRight&&(this._bleedRight=F,this._size="",this._layout())}get palette(){return this._palette}set palette(P){P!==this._palette&&(this._palette=P,this._size="",this._layout())}set fill(P){!P||!P.hex||P.hex+P.thread===this._fillKey||(this._fillKey=P.hex+P.thread,b[5]={lanes:Array(6).fill(P.hex),plum:P.thread},this._palette===5&&(this._size="",this._layout()))}inkBand(P,F){const{width:w,amp:O,cy:V}=L(P,F);let k=F,K=0;for(const{fan:Z,weight:Y}of B)for(let $=0;$<=80;$++){const fe=$/80,he=V+O*T(Z,fe,!1),me=w*Y*.5*s(fe,0,m);k=Math.min(k,he-me),K=Math.max(K,he+me)}return[k,K]}get progress(){return this._p}set progress(P){const F=Number(P);if(Number.isFinite(F)){const w=t(F,0,1);w!==this._p&&(this._p=w,this._paint())}}attributeChangedCallback(P,F,w){this.progress=w===null?1:w}_layout(){if(!this._svg)return;const P=this.offsetWidth,F=this.offsetHeight,w=Math.round(P),O=Math.round(F);if(!w||!O||this._size===w+":"+O)return;this._size=w+":"+O;const V=this._svg,{compact:k,width:K,amp:Z,cy:Y}=L(w,O),$=-(this._bleed+4),fe=w+this._bleedRight+4,he=w*.24,me=b[this._palette],ye="var(--thread,"+(me?me.plum:"#4F3E78")+")";V.replaceChildren(),V.setAttribute("viewBox","0 0 "+w+" "+O);const Oe=r(V,"defs"),J={x:$-20,y:-O,width:fe-$+40,height:O*3};this._left=$,this._right=fe,this._cy=Y,this._amp=Z,this._width=K,this._lanes=[],this._drawn=!0,this._nodes=[],this._w=w,this._nowX=he,this._pastShown=-1;const ae=(D,Be,_e)=>(this._nodes.push([D,Be,_e]),D),Ce=(D,Be)=>ae(r(V,"g"),D,Be),ze=1.35*(k?3.3:t(w*.0034,3.8,5.2)),Pe=k?7.2:t(w*.0062,8.5,10.5),Se=(D,Be,_e,E,g,H)=>{const z=Ce(D,Be),N=H?Pe:ze,te={cx:a(_e),cy:a(E)};if(z.setAttribute("class",H?"dot dot--now":"dot"),z.setAttribute("style","--dot:"+g),r(z,"circle",{...te,r:a(Math.max(14,N*2.4,N+8)),class:"dot__hit"}),r(z,"circle",{...te,r:a(N),class:"dot__halo"}),!H)return r(z,"circle",{...te,r:a(N),class:"dot__core dot__mark","stroke-width":a(Math.max(1.7,N*.3))});r(z,"circle",{...te,r:a(N),class:"dot__ring dot__mark","stroke-width":1.5}),r(z,"circle",{...te,r:a(N*.46),class:"dot__core dot__mark","stroke-width":0})},qe=(w<660||matchMedia("(pointer: coarse)").matches)&&!/[?&]figma\b/.test(location.search);if(this._canvas&&(this._canvas.hidden=!qe),this._ctx=null,qe){const[D,Be]=this.inkBand(w,O),_e=Math.floor(D-12),E=Math.ceil(Be+12),g=Math.min(window.devicePixelRatio||1,2),H=Math.floor(he)-2,z=this._canvas||(this._canvas=document.createElement("canvas"));z.isConnected||this.shadowRoot.insertBefore(z,V),z.style.cssText="left:"+H+"px;top:"+_e+"px;width:"+(fe-H)+"px;height:"+(E-_e)+"px",z.width=Math.round((fe-H)*g),z.height=Math.round((E-_e)*g),this._ctx=z.getContext("2d"),this._ctx.setTransform(g,0,0,g,-H*g,-_e*g),this._box=[H,_e,fe-H,E-_e]}const we=r(V,"g",{style:"isolation:isolate"}),ge=[];B.forEach(({fan:D,c:Be,weight:_e,grow:E,stops:g=[0,.35,.7,1]},H)=>{const z=(me?[0,2,4,1].map(I=>me.lanes[(H+I)%me.lanes.length]):Be).map(l);if(ge.push({hues:z,stops:g}),this._ctx){this._lanes.push({fan:D,weight:_e,grow:E,hues:z,stops:g,shown:-1,shape:null,tip:0});return}const N=r(Oe,"linearGradient",{id:"ink"+H,x1:he,y1:0,x2:fe,y2:0,gradientUnits:"userSpaceOnUse"});z.forEach((I,q)=>r(N,"stop",{offset:g[q],"stop-color":"rgb("+I.join()+")"}));const te=r(Oe,"linearGradient",{id:"head"+H,x1:he,y1:0,x2:he+1,y2:0,gradientUnits:"userSpaceOnUse"});r(te,"stop",{offset:0,"stop-color":"#fff","stop-opacity":1}),r(te,"stop",{offset:1,"stop-color":"#fff","stop-opacity":0});const le=r(Oe,"mask",{id:"headmask"+H,maskUnits:"userSpaceOnUse",...J});r(le,"rect",{...J,fill:"url(#head"+H+")"});const G=r(we,"path",{d:"",fill:"url(#ink"+H+")",class:"ribbon",mask:"url(#headmask"+H+")"});this._lanes.push({fan:D,weight:_e,grow:E,path:G,head:te,shown:-1})});const Ae=k?M.small:M,Ee=D=>Y+Z*Ae.gain*T(M.ys,D,!0),Me=[],Ne=[0];for(let D=0;D<=72;D++){const Be=D/72,_e=$+(he-$)*Be,E=Ee(Be);D&&Ne.push(Ne[D-1]+Math.hypot(_e-Me[D-1][0],E-Me[D-1][1])),Me.push([_e,E])}this._past=r(V,"path",{d:"M"+Me.map(([D,Be])=>a(D)+","+a(Be)).join(" L"),fill:"none",stroke:ye,"stroke-width":k?2:t(w*.0019,2.2,3.2),"stroke-linecap":"round","stroke-linejoin":"round",pathLength:1,"stroke-dasharray":"1 1","stroke-dashoffset":1,visibility:"hidden"});const Ye=D=>{const Be=t((D-$)/(he-$),0,1)*72,_e=Math.min(71,Math.floor(Be));return x[0]+(x[1]-x[0])*(Ne[_e]+(Ne[_e+1]-Ne[_e])*(Be-_e))/Ne[72]};Ae.events.forEach(D=>{const Be=he*D,_e=Ye(Be-ze);Se(_e,_e+.05,Be,Ee((Be-$)/(he-$)),ye)}),Se(Ye(he-Pe),x[1]+.035,he,Y,"var(--accent,"+ye+")",!0);const De=fe-he,Le=this._soft=t(De*.1,40,160);for(const[D,Be,_e]of v){if(k&&!_e)continue;const E=p.from+B[D].grow*p.step+p.run*S(Math.min(1,(Be*De+Le*.6)/(De+Le)));Se(E-.012,E+.03,he+De*Be,Y+Z*T(B[D].fan,Be,!1),_(c(ge[D].hues,ge[D].stops,Be)))}this._paint()}_lanePath(P,F){const w=this._right-this._nowX,O=Math.max(2,Math.ceil(F*(this._ctx&&F<1?Math.min(170,w/5):170))),V=[],k=[],K=$=>T(P.fan,$,!1),Z=this._width*P.weight,Y=Math.min(F,Z*.6/w);for(let $=0;$<=O;$++){const fe=F*$/O,he=this._nowX+w*fe,me=this._cy+this._amp*K(fe),ye=(K(Math.min(1,fe+.001))-K(Math.max(0,fe-.001)))*this._amp/(w*(fe===0||fe===1?.001:.002));let Oe=Z*.5*s(fe,0,m)*Math.sqrt(1+ye*ye);if(F<1&&fe>F-Y){const J=(fe-(F-Y))/Y;Oe*=Math.sqrt(Math.max(0,1-J*J))}V.push(a(he)+","+a(me-Oe)),k.push(a(he)+","+a(me+Oe))}return"M"+V.join(" L")+" L"+k.reverse().join(" L")+"Z"}_paint(){if(!this._drawn)return;const P=this._p,F=this._right-this._nowX,w=this._soft,O=t((P-x[0])/(x[1]-x[0]),0,1);if(O!==this._pastShown){this._pastShown=O;const k=(1-O).toFixed(4);this._past.setAttribute("stroke-dashoffset",k),o(this._past,k<1)}let V=!1;this._lanes.forEach(k=>{const K=i(t((P-p.from-k.grow*p.step)/p.run,0,1));if(K===k.shown)return;k.shown=K;const Z=this._nowX+(F+w)*K,Y=Math.min(1,(Z-this._nowX)/F);if(this._ctx){Y===1&&k.whole||(k.shape=K>0?new Path2D(this._lanePath(k,Y)):null),k.whole=Y===1,k.tip=Z,V=!0;return}k.path.setAttribute("d",K>0?this._lanePath(k,Y):""),k.head.setAttribute("x1",a(Z-w)),k.head.setAttribute("x2",a(Z))}),V&&this._paintCanvas();for(const k of this._nodes){const K=s(P,k[1],k[2]).toFixed(3);K!==k[3]&&(k[3]=K,k[0].setAttribute("opacity",K),o(k[0],+K>0))}}_paintCanvas(){const P=this._ctx,F=this._soft,w=this._nowX,O=this._right,V=O-w;P.globalCompositeOperation="source-over",P.clearRect(...this._box),P.globalCompositeOperation="multiply";for(const{shape:k,tip:K,hues:Z,stops:Y}of this._lanes){if(!k)continue;const $=P.createLinearGradient(w,0,O,0),fe=(K-F-w)/V,he=(K-w)/V,me=(ye,Oe)=>{ye>=0&&ye<=1&&$.addColorStop(ye,"rgba("+c(Z,Y,ye).join()+","+Oe+")")};fe<0&&me(0,he/(he-fe)),Y.forEach(ye=>{ye<fe&&me(ye,1)}),me(fe,1),he<=1?me(he,0):me(1,(he-1)/(he-fe)),P.fillStyle=$,P.fill(k)}}}customElements.define(n,U)})();const Xx="http://www.w3.org/2000/svg",ju="rgba(255,255,255,.55)",qx=(n,e,t)=>Math.min(t,Math.max(e,n));function Yx(n,e,t,i){const s=Math.max(3,5*i),r=s,a=Math.max(2,Math.floor((e+r)/(s+r))),o=(e-s)/(a-1),l=Array.from({length:a},(u,h)=>{const d=document.createElementNS(Xx,"rect");for(const[f,_]of Object.entries({x:(h*o).toFixed(2),y:0,width:s,height:t,rx:Math.min(1.5,s/3),fill:ju}))d.setAttribute(f,_);return n.append(d),d});let c=-1;return u=>{const h=Math.round(u*a);if(h===c)return;const d=Math.min(h,Math.max(c,0)),f=Math.max(h,c);for(let _=d;_<f;_++)l[_].setAttribute("fill",_<h?"currentColor":ju);c=h}}function $x(n){const e=[...n.querySelectorAll(".stat")].map(a=>({value:Number(a.dataset.value),num:a.querySelector(".stat__num"),svg:a.querySelector(".stat__graphic"),paint:null}));let t="",i=[];function s(){const a=e.map(l=>l.svg.clientWidth+":"+l.svg.clientHeight).join();if(a===t)return;t=a;const o=Math.max(.6,n.offsetWidth/1602);for(const l of e){const c=l.svg.clientWidth,u=l.svg.clientHeight;l.svg.replaceChildren(),l.paint=null,!(!c||!u)&&(l.svg.setAttribute("viewBox",`0 0 ${c} ${u}`),l.paint=Yx(l.svg,c,u,o))}i=[]}function r(a){e.forEach((o,l)=>{const c=qx(a[l],0,1);c===i[l]||!o.paint||(i[l]=c,o.paint(c),o.num.textContent=Math.round(1+(o.value-1)*c)+"x")})}return{layout:s,frame:r}}const bh=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Kx=n=>Math.sin(n*Math.PI/2),ur=new WeakMap,Ps=new WeakMap;function wh(n){let e=null;for(const o of n.childNodes)if(o.nodeType===Node.TEXT_NODE&&/\d/.test(o.nodeValue)){e=o;break}if(!e)return null;n.dataset.countTo===void 0&&(n.dataset.countTo=e.nodeValue);const t=n.dataset.countTo,i=/^(\D*?)(\d[\d,]*(?:\.\d+)?)([\s\S]*)$/.exec(t);if(!i)return null;const[,s,r,a]=i;return{node:e,text:t,before:s,after:a,to:Number(r.replace(/,/g,"")),commas:r.includes(",")}}function kl(n,e){n.node.nodeValue=n.before+(n.commas?e.toLocaleString("en-US"):String(e))+n.after}function Ra(n,e){e.node.nodeValue=e.text}const Eh=n=>n<10?Math.min(1,n):Math.round(n*.8);function Th(n,e){const t=Ps.get(n);t!==void 0&&(cancelAnimationFrame(t),Ps.delete(n)),ur.get(n)?.(e)}function ed(n){const e=n.getBoundingClientRect();if(!e.width||!e.height||e.bottom<=0||e.top>=window.innerHeight||e.right<=0||e.left>=window.innerWidth)return!0;if(n.checkVisibility)return!n.checkVisibility({opacityProperty:!0,visibilityProperty:!0,checkOpacity:!0,checkVisibilityCSS:!0});for(let t=n;t;t=t.parentElement){const i=getComputedStyle(t);if(i.opacity==="0"||i.visibility==="hidden")return!0}return!1}function Ah(n,e){if(n.hasAttribute("data-count-voice"))return;const t=document.createElement("span");t.textContent=[...n.childNodes].map(i=>i===e.node?e.text:i.textContent).join(""),t.style.cssText="position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap",n.before(t),n.setAttribute("aria-hidden","true"),n.setAttribute("data-count-voice","")}function Zx(n,{duration:e=2800,from:t}={}){const i=n&&wh(n);if(!i)return()=>{};if(t??=Eh(i.to),Th(n,!1),Ah(n,i),n.dataset.countFrom=String(t),bh()||!(e>0))return Ra(n,i),()=>{};let s=0,r=null,a=Math.round(t);const o=c=>{cancelAnimationFrame(s),ur.get(n)===o&&ur.delete(n),c&&Ra(n,i)};kl(i,a);const l=c=>{r??=c;const u=(c-r)/e;if(u>=1){o(!0);return}const h=Math.round(t+(i.to-t)*Kx(u));h!==a&&kl(i,a=h),s=requestAnimationFrame(l)};return s=requestAnimationFrame(l),ur.set(n,o),()=>{ur.get(n)===o&&o(!0)}}function Jx(n,{now:e=!1}={}){const t=n&&wh(n);if(!t)return;if(Th(n,!1),bh()){Ra(n,t);return}Ah(n,t);const i=()=>{Ps.delete(n),kl(t,Math.round(Number(n.dataset.countFrom)||Eh(t.to)))};if(e||ed(n)){i();return}const s=performance.now(),r=()=>{ed(n)?i():performance.now()-s>2e3?(Ps.delete(n),Ra(n,t)):Ps.set(n,requestAnimationFrame(r))};Ps.set(n,requestAnimationFrame(r))}const Qx=n=>typeof n=="string"?[...document.querySelectorAll(n)]:n instanceof Element?[n]:[...n||[]].filter(e=>e instanceof Element);function jx(n,{rootMargin:e="0px 0px -12% 0px",once:t=!1,onEnter:i,onLeave:s}={}){const r=Qx(n),a=u=>{u.classList.contains("is-in")||(u.classList.add("is-in"),i?.(u))},o=u=>{u.classList.contains("is-in")&&(u.classList.remove("is-in"),s?.(u))};for(const u of r)u.setAttribute("data-reveal","");if(!("IntersectionObserver"in window))return r.forEach(a),()=>r.forEach(u=>u.removeAttribute("data-reveal"));const l=new IntersectionObserver(u=>{for(const{target:h,isIntersecting:d}of u)d&&(a(h),t&&l.unobserve(h))},{rootMargin:e}),c=t?null:new IntersectionObserver(u=>{for(const{target:h,isIntersecting:d,boundingClientRect:f,rootBounds:_}of u)!d&&f.top>=(_?_.bottom:window.innerHeight)&&o(h)});for(const u of r)l.observe(u),c?.observe(u);return()=>{l.disconnect(),c?.disconnect();for(const u of r)u.removeAttribute("data-reveal")}}function eS(n,e){const t=typeof n=="string"?document.querySelector(n):n;if(!t)return[];const i=[...t.children].filter(s=>s.matches(e));return i.forEach((s,r)=>s.style.setProperty("--i",String(r))),i}const Ls=(n,e,t)=>Math.min(t,Math.max(e,n)),Dt=(n,[e,t])=>Ls((n-e)/(t-e),0,1),Bo=n=>n*n*(3-2*n);function td(n,e,t){const i=1-n;return 3*i*i*n*e+3*i*n*n*t+n*n*n}function Rh(n,[e,t,i,s]){if(n<=0)return 0;if(n>=1)return 1;let r=0,a=1,o=n;for(let l=0;l<24;l++){const c=td(o,e,i);if(Math.abs(c-n)<1e-9)break;c<n?r=o:a=o,o=(r+a)/2}return td(o,t,s)}function nd(n,e){const[t,i]=e.times;return Ls(Rh((n-t)/(i-t),e.bezier),0,1)}function Hn(n){const e=br.pan.segments,t=e.find(s=>n<=s.endTime)||e[e.length-1],i=(n-t.startTime)/(t.endTime-t.startTime);return t.startX+(t.endX-t.startX)*Rh(i,t.bezier)-br.pan.anchor[0]}const da=[244,244,242],ko=[18,26,36],$i=(n,e,t)=>`rgb(${n.map((i,s)=>Math.round(i+(e[s]-i)*t)).join()})`;function tS({pen:n=null,root:e,page:t,stage:i,paths:s,copy:r,dark:a,trust:o,team:l,echoes:c,footer:u,timeline:h}){const d=Qu.create(i,s,br);let f=NaN,_=1/0,x=1,p=[255,255,255],m=ko,R=!1,B="";const M=Qu.create(o.querySelector("#trust-stage"),o.querySelector("#trust-paths"),br,{entryEnd:4});M.setSettings({width:90,spread:135});const v=o.querySelector(".trust__title"),b=[...o.querySelectorAll(".trust__points li")];let L=0,S=!1,T=1/0;o.querySelector("#trust-paths");const U=l.querySelector(".team__page"),A=[...u.querySelectorAll(".fm")],P={w:1358,h:245},F=e.querySelector("#world-journey"),w=e.querySelector("#world-journey-link"),O=window.__KNIT_BASE__+"concepts/med-beam/patient-journey/index.html",V=matchMedia("(prefers-reduced-motion: reduce)"),k=a.querySelector(".world__copy--dark"),K=a.querySelector("#world-stats"),Z=[...K.querySelectorAll(".big-stat")],Y=$x(K);let $=!1,fe=!1,he=!1,me=0,ye=33,Oe=85;const J=e.querySelector("#world-desc"),ae=Qi(a,{className:"thread--dark"}),Ce=Qi(o,{className:"thread--trust"}),ze=Qi(U,{className:"thread--team"}),Pe=Qi(t,{className:"thread--page"});if(n){n.add(Pe,{where:t.parentNode}),n.add(ae,{chain:!1});for(const te of[Ce,ze])n.add(te);const N=l.querySelector(".team__grid");N&&(eS(N,".team__card"),jx(N))}const Se=[];let qe=[];V.addEventListener("change",()=>{Se.length=0,f=NaN});const we=l.querySelector(".team__copy"),ge=document.createElement("div");ge.className="footer-underline",ge.setAttribute("aria-hidden","true"),u.append(ge);function Ae(N){const te=u.getBoundingClientRect(),le=document.createRange();le.selectNodeContents(u.querySelector(".footer-line"));const G=le.getBoundingClientRect();ge.style.top=`${(G.bottom-te.top+Math.max(10,18*N/1920)).toFixed(1)}px`,ge.style.width=`${(G.right-te.left).toFixed(1)}px`}function Ee(N,te){const le=N/1920,G=document.querySelector(".masthead")?.offsetHeight||80,I=n&&N<=700,q=k.offsetHeight,oe=K.offsetHeight,re=I?6:N<=700?Math.min(40,te*.045):Math.max(48,104*le),ie=Math.max(G+12,(te-(q+re+oe))/2-te*.02)+(I?44:0);k.style.top=`${ie.toFixed(1)}px`,K.style.top=`${(ie+q+re).toFixed(1)}px`,K.style.bottom="auto";const de=n&&N<=700?Math.ceil(ie+q+re+oe+Math.max(56,te*.08)):0;a.style.height=de>te?`${de}px`:""}function Me(){const N=e.clientWidth,te=St.on?x:e.clientHeight;if(!N||!te)return;const le=N/1920,G=N<=700;Ee(N,te),Ae(N);const I=[...b,v,we,k,...Z];for(const pe of I)pe.style.transition="none",pe.style.transform="none";const q=Z.map(pe=>$t(pe,a));if(q.length){const pe=Z[0].querySelector(".big-stat__num"),C=$t(k.querySelector("#world-link"),a),ce=$t(pe,a).y+.011*parseFloat(getComputedStyle(pe).fontSize),W=G&&n?$t(k,a).y-44:(C.y+C.h+ce)/2,ue=n?[{x:N+4,y:W},{x:-4,y:W}]:[{x:-4,y:W},{x:N+4,y:W}],ve=q.length;G&&n?ae.set(ue,{dots:[[N/2,W]],dotR:3.5}):ae.set(ue,{dots:q.map((ee,be)=>[G?N*(be+1)/(ve+1):ee.x+ee.w/2,W]),dotR:G?3.5:Math.max(3.5,6*le)}),qe=q.map(ee=>ee.y+ee.h*.35)}const oe=o.querySelector(".trust__points");if(!G&&b.length){const pe=document.querySelector(".masthead")?.offsetHeight||80,C=Math.max(pe+12,(te-oe.offsetHeight)/2);o.style.setProperty("--trust-list-y",`${C.toFixed(1)}px`),o.style.setProperty("--trust-title-y",`${(C+parseFloat(getComputedStyle(b[0]).paddingTop)).toFixed(1)}px`)}else o.style.removeProperty("--trust-list-y"),o.style.removeProperty("--trust-title-y");const re=b.map(pe=>$t(pe.querySelector(".trust__label")||pe,o));if(n&&G||(o.style.height=""),re.length&&!G){const pe=N/2,C=parseFloat(o.style.getPropertyValue("--trust-list-y"))||re[0].y-40,ce=Math.max(8,Math.min(C,re[0].y)-Math.max(26,54*le)),W=n?[{x:-4,y:ce},{x:pe,y:ce,r:Math.max(24,48*le)},{x:pe,y:te+8}]:[{x:pe,y:-4},{x:pe,y:te+8}];Ce.set(W,{dots:re.map(ue=>[pe,ue.y+ue.h/2]),dotR:Math.max(3.5,6*le)})}else if(re.length&&n){const pe=Math.max(8,$t(v,o).y-26),C=Pi,ce=b[b.length-1],W=$t(ce,o).y+ce.offsetHeight,ue=W+56,ve=Math.ceil(W+140);o.style.height=ve<te?`${ve}px`:"";const ee=Math.min(ve,te),be=$t(v,o),Re=(be.y+be.h+re[0].y)/2,$e=N-Pi;Ce.set([{x:-4,y:pe},{x:$e,y:pe,r:24},{x:$e,y:Re,r:24},{x:C,y:Re,r:24},{x:C,y:Math.min(ue,ee-30),r:24},{x:N/2,y:Math.min(ue,ee-30),r:24},{x:N/2,y:ee+8}],{dots:re.map(Ze=>[C,Ze.y+Ze.h/2]),dotR:3.5})}else if(re.length){const pe=$t(oe,o),C=pe.x+4;Ce.set([{x:C,y:re[0].y-14},{x:C,y:pe.y+pe.h+8}],{dots:re.map(ce=>[C,ce.y+ce.h/2]),dotR:3.5})}const ie=$t(we,U),de=$t(l.querySelector(".team__grid"),U);if(n){const pe=ie.y-Math.max(18,34*le);pe<24?ze.setPath("M0 0"):ze.set([{x:N/2,y:-4},{x:N/2,y:pe}],{dots:[[N/2,pe]],dotR:Math.max(3.5,6*le)})}else{const pe=(ie.y+ie.h+de.y)/2;ze.set([{x:-4,y:pe},{x:N+4,y:pe}])}const xe=r.querySelector(".world__eyebrow");if(n&&xe){const pe=$t(xe,t),C=pe.y-Math.max(16,56*le);C>24?Pe.set([{x:N/2,y:-4},{x:N/2,y:C}],{dots:[[N/2,C]],dotR:Math.max(3.5,6*le)}):Pe.setPath("M0 0")}else Pe.setPath("M0 0");for(const pe of I)pe.style.transform="",pe.style.transition=""}function Ne(){const N=me>0;F.hidden=!he,F.style.visibility=N?"":"hidden",N&&he&&(F.progress=V.matches?1:me),N&&!he?w.setAttribute("href",O):w.removeAttribute("href")}function Ye(){const N=St.on?{width:e.clientWidth,height:x}:e.getBoundingClientRect();if(!N.width)return;const te=r.getBoundingClientRect(),le=t.getBoundingClientRect(),G=N.width/1920,I=N.width<=700,q=I?14:Math.max(16,34*G),oe=Math.max(te.bottom-le.top+(I?16:Math.max(16,36*G)),N.height*ye/100),re=N.height-(I?28:Math.max(28,72*G))-J.offsetHeight-q,de=Math.min(re,N.height*Oe/100)-oe,xe=N.width<=700?24:Math.max(24,N.width*159/1920),pe=N.width<=700?24:Math.max(24,N.width*130/1920),C=Math.max(1,N.width/1920),ce=(N.width-xe-pe)/C;if(he=de/C>=(ce<560?238:205),he){const W=N.width<=700?Math.min(de,410):de/C;F.style.left=xe+"px",F.style.width=ce+"px",F.style.height=W+"px",F.style.transform=C>1?`scale(${C})`:"";const[ue,ve]=F.inkBand(ce,W),ee=(ve-ue)*C,be=te.bottom-le.top,Re=N.height-(I?28:Math.max(28,72*G))-J.offsetHeight,$e=Math.max(14,Math.min(I?56:Math.max(40,60*G),(Re-be-ee)/2));F.style.top=be+$e-ue*C+"px",F.bleed=xe/C,F.bleedRight=pe/C,J.style.top=be+$e+ee+$e+"px"}else J.style.top=te.bottom-le.top+16+"px";Ne(),Y.layout()}Ye();const De=new ResizeObserver(()=>{Ye(),Me()});De.observe(e),De.observe(r),De.observe(J),De.observe(K),De.observe(o.querySelector(".trust__points")),De.observe(we),De.observe(u.querySelector(".footer-top")),V.addEventListener("change",Ne);let Le=0;function D(N){x=N,f=NaN,$=e.clientWidth<760,fe=e.clientWidth<=700,Ye(),Me(),Le=Math.max(0,U.offsetHeight-N)/N;const te=e.clientWidth,le=te<760&&N>te,G=le?16:48,I=Math.min(te-2*G,.58*N*P.w/P.h),q=document.querySelector(".masthead")?.offsetHeight||80;for(const[oe,re]of[["--m",G],["--nav",q],["--logo-w",I],["--logo-h",I*P.h/P.w]])u.style.setProperty(oe,`${re}px`)}const Be=()=>Le;function _e({worldWords:N,worldLine:te,ribbon:le,spacing:G,flatLine:I,chartTop:q,chartBottom:oe,statsTop:re,statsBottom:ie}){e.style.setProperty("--world-y",N),i.style.top=te+"%",d.setSettings({width:le,spread:G}),d.setSolidWidth(I),ye=q,Oe=oe,f=NaN,Ye()}function E(N,te,le=0){const G=x*N;St.on||(t.style.transform=N>0?`translate3d(0,${(-G).toFixed(1)}px,0)`:"",a.style.transform=`translate3d(0,${(x-G).toFixed(1)}px,0)`),a.style.visibility=(N>0||St.on)&&te<1?"inherit":"hidden";const I=x*(1-te);St.on||(o.style.transform=`translate3d(0,${I.toFixed(1)}px,0)`),o.style.visibility=(te>0||St.on)&&le<1?"inherit":"hidden",l.style.visibility=le>0||St.on?"inherit":"hidden",St.on||(l.style.transform=`translate3d(0,${(x*(1-le)).toFixed(1)}px,0)`),l.style.clipPath="",c.forEach(re=>{re.style.visibility="hidden"});const q=Bo(Ls((N-.1)/.5,0,1)),oe=$i(da,p,q);B=oe,St.on||(e.style.backgroundColor=oe),t.style.setProperty("--ink",$i(ko,m,Ls((q-.3)/.2,0,1))),t.style.setProperty("--journey-paper",n?$i(p,p,0):$?q<.5?$i(da,p,0):$i(da,p,1):oe),_=R&&(q>=.5&&I>48||le>=.5)?0:1/0}function g(N,te=0,le=!1){if(S&&(le||(L+=te),M.renderMotion(1,L,0,Hn,nd,Dt(N,h.trustWeave),0,h.trustPinch?Dt(N,h.trustPinch):0)),N===f)return T;f=N,me=Dt(N,h.chart),Ne(),r.style.opacity=Dt(N,h.copy).toFixed(3),J.style.opacity=Bo(Ls((me-.3)/.5,0,1)).toFixed(3);const G=h.line?Dt(N,h.line):0;i.style.visibility=G>0?"inherit":"hidden",G>0&&d.renderMotion(G,0,Bo(Dt(N,h.flat)),Hn,nd,0,Dt(N,h.solid));const I=Dt(N,h.teamOpen);E(Dt(N,h.dark),Dt(N,h.trust),I),Y.frame([1,1,1]),S=0>=1,o.querySelector("#trust-stage").style.visibility="hidden";const oe=n?n.progress(ae):h.darkThread?Dt(N,h.darkThread):0,re=n?n.progress(Ce):h.trustThread?Dt(N,h.trustThread):0;n||(ae.draw(oe),Ce.draw(re),ze.draw(h.teamThread?Dt(N,h.teamThread):0)),Di(k,Dt(N,h.dark)>(n?.45:.3)),Z.forEach((C,ce)=>{const W=n&&fe?(h.dark[1]-N)*x+(qe[ce]??0)<x*.82:oe>=(ae.stops[ce]??0)&&oe>0;if(Di(C,W),!n||Se[ce]===W)return;Se[ce]=W;const ue=C.querySelector(".big-stat__num");W?Zx(ue):Jx(ue)}),Di(v,n&&fe?re>.05:re>=(Ce.stops[0]??0)),b.forEach((C,ce)=>Di(C,re>=(Ce.stops[ce]??0))),Di(we,n&&ze.length>1?n.progress(ze)>=.999||I>.7:I>.45);const ie=Ls((N-h.teamOpen[1])*x,0,Be()*x);St.on||(U.style.transform=ie>0?`translate3d(0,${(-ie).toFixed(1)}px,0)`:""),Dt(N,h.trust);const de=h.footer?Dt(N,h.footer):0,xe=x*(1-de),pe=h.footer?Dt(N,[h.footer[0]+(n?.55:.35),h.footer[1]]):0;if(ge.style.visibility=pe>0?"inherit":"hidden",ge.style.clipPath=`inset(0 ${((1-pe)*100).toFixed(2)}% 0 0)`,u.style.visibility=de>0||St.on?"inherit":"hidden",de>0){St.on||(u.style.transform=`translate3d(0,${xe.toFixed(1)}px,0)`);const C=h.footer[1],ce=A.length;return A.forEach((W,ue)=>{const ve=C-.32-(ce-1-ue)*.04,ee=1-Math.pow(1-Dt(N,[ve,ve+.32]),3);W.style.transform=`translateY(${((1-ee)*P.h*1.25).toFixed(2)}px)`}),T=Math.min(_,xe)}return T=_}function H({rgb:N,on:te}){p=N.map(le=>Math.round(le*255)),R=te.toUpperCase()==="#FFFFFF",m=R?da:ko,n||(l.style.backgroundColor=$i(p,p,0)),c.forEach(le=>{le.style.backgroundColor=$i(p,p,0)}),f=NaN}return{layout:D,apply:_e,frame:g,setGround:H,setLines:(N,te)=>{te&&(F.fill=te),F.palette=N},teamOverflow:Be,get panelGround(){return B},get chartFits(){return he}}}function nS({onOpen:n,onClose:e}={}){const t=document.documentElement,i=document.querySelector("#menu-toggle"),s=document.querySelector("#menu");if(!i||!s)return{close(){},get open(){return!1}};let r=!1,a=0;const o=i.closest(".masthead"),l=()=>[...s.querySelectorAll("a[href],button"),...o?[...o.querySelectorAll("a[href]")].filter(u=>u.offsetParent!==null):[],i];function c(u,{focus:h=!0}={}){u!==r&&(r=u,clearTimeout(a),i.setAttribute("aria-expanded",String(r)),i.setAttribute("aria-label",r?"Close the menu":"Open the menu"),r?(s.hidden=!1,s.offsetWidth,t.classList.add("menu-open"),n?.(),h&&s.querySelector("a")?.focus({preventScroll:!0})):(t.classList.remove("menu-open"),e?.(),a=setTimeout(()=>{s.hidden=!0},320),h&&i.focus({preventScroll:!0})))}return i.addEventListener("click",()=>c(!r)),s.addEventListener("click",u=>{u.target.closest("a")&&c(!1)}),o?.addEventListener("click",u=>{r&&u.target.closest("a")&&c(!1,{focus:!1})},!0),document.addEventListener("keydown",u=>{if(!r)return;if(u.key==="Escape"){u.preventDefault(),c(!1);return}if(u.key!=="Tab")return;const h=l(),d=h[0],f=h[h.length-1],_=document.activeElement;h.includes(_)?u.shiftKey&&_===d?(u.preventDefault(),f.focus()):!u.shiftKey&&_===f&&(u.preventDefault(),d.focus()):(u.preventDefault(),d.focus())}),matchMedia("(min-width:1041px)").addEventListener("change",u=>{u.matches&&c(!1,{focus:!1})}),{close:()=>c(!1,{focus:!1}),get open(){return r}}}const iS=.7,sS=.42,rS=.25,aS=.82,Ho=matchMedia("(max-width: 759px)");function oS(){const n=[];let e=1,t=1,i=!0;Ho.addEventListener("change",()=>{i=!0});function s(h,{where:d=null,ref:f=iS,chain:_=!0}={}){const x={thread:h,where:d,ref:f,chain:_,version:-1,top:NaN,table:null,p:0};return n.push(x),x}function r(h){let d=0;for(let f=h;f;f=f.offsetParent)d+=f.offsetTop;return d}function a(h,d){const{thread:f}=h,_=f.path,x=f.length;if(h.version=f.version,h.top=r(h.where||f.svg.parentNode),!_||x<=1){h.table=null;return}const p=Math.min(900,Math.max(8,Math.ceil(x/6))),m=new Float64Array((p+1)*2),R=(Ho.matches?rS:sS)*e/Math.max(1,t);let B=null,M=-1/0;for(let v=0;v<=p;v++){const b=x*v/p,L=_.getPointAtLength(b),S=h.top+L.y-(Ho.matches?aS:h.ref)*e;if(B===null)M=h.chain?Math.max(S,d):S;else{const T=Math.hypot(L.x-B.x,L.y-B.y);M=Math.max(M+(T>40?0:T*R),S)}B=L,m[v*2]=M,m[v*2+1]=b}h.table=m}function o(h,d){const f=h.length/2;if(d<=h[0])return 0;if(d>=h[(f-1)*2])return h[(f-1)*2+1];let _=0,x=f-1;for(;x-_>1;){const M=_+x>>1;h[M*2]<=d?_=M:x=M}const p=h[_*2],m=h[x*2],R=h[_*2+1],B=h[x*2+1];return m>p?R+(B-R)*(d-p)/(m-p):B}function l(h,d){h&&(t=h),d&&(e=d),i=!0}function c(h,{draw:d=!0}={}){if(i||n.some(f=>f.version!==f.thread.version)){let f=-1/0;for(const _ of n)a(_,f),_.table&&(f=_.table[_.table.length-2])}for(const f of n)f.p=f.table?o(f.table,h)/Math.max(1,f.thread.length):0,d&&f.thread.draw(f.p);i=!1}return{add:s,frame:c,invalidate:l,progress:h=>n.find(d=>d.thread===h)?.p??0}}const Te={merge:[.6,2.2],open:[2.8,3.8],burst:[3.1,3.35,3.2,3.15,3.1],swap:[4.35,4.8],circle:[5.2,6.05],circleStagger:.25,providers:[5.55,6.05],feed:[6.35,10.95],innovators:[8,8.4],cta:[8.3,8.6],next:[10.65,11.65],world:{copy:[11.35,11.8],chart:[11.7,12.95],dark:[13.2,14.2],stats:[[13.85,14.55],[14.1,14.8],[14.35,15.05]],trust:[15.3,16.3],trustLine:[15.55,16.6],trustWeave:[16.6,17],trustTitle:[16.7,17],trustPoints:[[17,17.25],[17.3,17.55],[17.6,17.85]],teamOpen:[17.25,18.25],darkThread:[13.65,14.55],trustThread:[15.6,17.05],teamThread:[17.55,18.25]},end:21,clear:[5,5.5],duo:[5.15,5.65]};Te.swap=[900,901];Te.clear=[4.3,4.8];Te.duo=[4.6,5.05];Te.thread=[4.6,5.7];const Er=.3,_n=2.6,lS=9.75,zo=5129,Hl=6714,id=11766,cS=1500,uS=2400,dS=.9,zl=()=>Math.max(.1,We.heroIntro/100),sd=()=>cS*We.heroSpeed/100,rd=n=>(Hn(n-.005)-Hn(n+.005))/.01,ad=["e","f","a","b","c","d"],Ns=["e","f"],hS={e:"A",f:"B",a:"old A",b:"old B",c:"old C",d:"old D"},fS={a:"e",b:"f","old-a":"a","old-b":"b","old-c":"c","old-d":"d"},od=(new URLSearchParams(location.search).get("hero")||"").toLowerCase(),pS=!/\/a(\.html)?\/?$/.test(location.pathname);let It=od==="waves"?"waves":fS[od]??(pS?"f":"e");const Ch={wait:.2,line:.45,burst:1.6,at:.46,weight:13,flare:0,wob:.2,more:4,lag:.45},mS={...Ch,at:.3,weight:26,wob:.12,more:0},ld=110,gS=12;let Gl=.5,Ph=1;const uc=()=>window.innerWidth<760,Lh=()=>uc()?mS:Ch,Ga=()=>It==="e"||It==="f",Dh=()=>uc()?Gl:(It==="f"?We.betweenLineY:We.heroLineY)/100;function _S(n){const e=Lh(),t=(n?9:dn*zl()/3)-e.wait,i=(e.at+.04)/1.08,s=Math.min(1,Math.max(0,(t-e.line*.7)/e.burst)),r=s<.5?4*s**3:1-(2-2*s)**3/2;return{origin:i,centre:Dh(),lag:e.lag,wob:e.wob,more:e.more,low:uc()?Ph:1,head:t<=0?-1:-.04+(i+.04)*t/e.line,spread:Ca*(.3+.7*r),radius:e.weight*(.35+.65*r)*window.innerWidth/1920,flare:e.flare*r}}const mi=()=>It!=="waves",Us=150,cd=.45,ud=260;let vn=860,pr=Er,Tr=_n,di=!1,Vl=0,Ca=1.3,At=Er,zt=-Hn(Er),dr=null,Sa=0;function Fh(){dn=0,dr=null,Sa=0,di=!1,mi()?(At=pr,zt=vn-Us):(At=Er,zt=-Hn(Er))}function vS(n,e,t){for(let i=0;i<30;i++){const s=(e+t)/2;-Hn(s)<n?e=s:t=s}return(e+t)/2}function dd(n,e,t){if(n(e))return e;for(let i=0;i<30;i++){const s=(e+t)/2;n(s)?t=s:e=s}return t}function Ih(n){if(dn+=n,Ga())return di=dn>4,zt=vn-Us*Math.exp(-dn/cd),hr();if(mi())return di||(At=Math.min(Tr,At+n*zl()),di=At>=Tr),zt=vn-Us*Math.exp(-dn/cd),hr();if(dr===null){const e=zl(),t=rd(At)*e;if(t<uS&&At<_n){const i=(_n-At)/e;if(n<i)return At+=n*e,zt=-Hn(At),hr();At=_n,zt=-Hn(_n),n-=i,dr=dn-n,Sa=rd(_n)*e}else dr=dn,Sa=t}return zt+=(sd()+(Sa-sd())*Math.exp(-(dn-dr)/dS))*n,At<_n&&(At=zt>=-Hn(_n)?_n:vS(zt,At,_n)),hr()}function hr(){return mi()?{cam:zt,time:di||Ga()?null:At}:At<_n?{cam:zt,time:At}:{cam:zt<zo?zt:zo+(zt-zo)%Hl,time:null}}const Va=2;Te.travel=[.02,.5];Te.open=Te.open.map(n=>n-Va);Te.burst=Te.burst.map(n=>n-Va);Te.facesThread=[3.55,4.05];Te.facesOut=[4.2,4.6];Te.facesFade=[4.45,4.6];for(const n of["clear","duo","thread","facesThread","facesOut","facesFade"])Te[n]=Te[n].map(e=>e-Va);const nt=mi(),xS=nt?1.65:0;document.documentElement.classList.toggle("flow",nt);if(nt){Te.faces=[0,1],Te.list=[1,2],Te.facesThread=[.95,1.3],Te.thread=[1.3,2];for(const n of["travel","open","clear","duo","facesOut","facesFade"])Te[n]=[900,901];Te.burst=Te.burst.map(()=>900)}Te.heroOut=[900,901];nt&&(Te.travel=[.02,.88],Te.heroOut=[.62,.93]);const SS=.85,Ts=(n,[e,t])=>Math.min(1,Math.max(0,(n-e)/(t-e))),Nh=document.querySelector("#scene"),MS=document.querySelector("#error-panel"),Qt=document.querySelector(".masthead"),Uh=[...document.querySelectorAll("[data-dial]")].map(n=>({input:n,key:n.dataset.dial,number:n.parentElement.querySelector(".dial-number"),slider:document.querySelector("#view-"+n.dataset.dial)})),Oh=[...document.querySelectorAll("[data-open]")],yS=vf({button:document.querySelector("#rulers-toggle")});let Bh=()=>{};{const n=document.querySelector("#thread-toggle"),e=n?.querySelector("span"),t="knit-flow-thread-v1",i=["one colour","shades","rainbow"],s=/[?&](nolines|no-lines)\b|[?&]lines=(off|none|no|0)\b/i.test(location.search);document.documentElement.classList.toggle("thread-off",s);const r=1;let a=i.indexOf(ai(t));a<0&&(a=r);const o=()=>{document.documentElement.classList.toggle("thread-shades",a===1),document.documentElement.classList.toggle("thread-rainbow",a===2),n&&(n.setAttribute("aria-pressed",String(a>0)),e.textContent=`Thread: ${i[a]}`)};o(),n?.addEventListener("click",()=>{a=(a+1)%i.length,o(),ji(t,i[a])}),Bh=()=>{a=r,o(),ks(t)}}const Pa=document.querySelector(".scroll-space"),Wa=oS(),Un=fx({pen:nt?Wa:null,page:document.querySelector("#open"),stage:document.querySelector("#open-stage"),copy:document.querySelector("#open-copy"),eyebrow:document.querySelector("#open-eyebrow"),titles:[document.querySelector("#open-title"),document.querySelector("#open-title-2")],echoes:[],beats:[...document.querySelectorAll(".open__beat")],cta:document.querySelector("#open-cta"),timeline:Te,base:window.__KNIT_BASE__}),mr=nt?{resize(){},setPage(){},setGround(){},frame(){},hide(){}}:Sx(document.querySelector("#warp"));let dn=0,is=!1,kh=!1;const Wl=document.querySelector("#lines-toggle"),Xl=document.querySelector("#next"),pi=tS({pen:nt?Wa:null,root:Xl,page:document.querySelector("#world-page"),trust:document.querySelector("#world-trust"),team:document.querySelector("#world-team"),echoes:[...document.querySelectorAll(".team-echo")],footer:document.querySelector("#world-footer"),stage:document.querySelector("#world-stage"),paths:document.querySelector("#world-paths"),copy:document.querySelector("#world-copy"),dark:document.querySelector("#world-dark"),timeline:Te.world}),Go=4;let Vo=0;const Ii=window.matchMedia("(prefers-reduced-motion: reduce)"),ql=4.9+Va+xS,fd=document.querySelector(".scene-wrap"),Fi=document.querySelector("#hero"),pd=Fi.querySelector(".hero-title");for(const n of["circle","feed","providers","innovators","cta"])Te[n]=[900,901];Te.next=Te.next.map(n=>n-ql);for(const[n,e]of Object.entries(Te.world))Te.world[n]=Array.isArray(e[0])?e.map(t=>t.map(i=>i-ql)):e.map(t=>t-ql);Te.world.chart=[Te.world.chart[0],Te.world.chart[0]+.8];for(const[n,e]of Object.entries(Te.world))n!=="copy"&&n!=="chart"&&(Te.world[n]=Array.isArray(e[0])?e.map(t=>t.map(i=>i-.65)):e.map(t=>t-.65));const Ws=()=>Te.end,Xs=document.querySelector("#view-panel"),gr=document.querySelector("#view-toggle"),Xa=[...document.querySelectorAll("[data-setting]")],bS=n=>n.tagName==="SELECT"?[Math.min(...Array.from(n.options,e=>Number(e.value))),Math.max(...Array.from(n.options,e=>Number(e.value)))]:[Number(n.min),Number(n.max)],La=new Map;for(const n of Xa.filter(e=>e.type==="range")){const e=document.getElementById("value-"+n.dataset.setting),t=e.parentElement.dataset.unit,i=t==="%"?100:1,s=Number(e.parentElement.dataset.decimals??{"×":2}[t]??0);for(const r of["min","max","step"])e[r]=(Number(n[r])*i).toFixed(s);La.set(n,{field:e,unit:t,factor:i,decimals:s})}const dc="knit-flow-view-v1",Hh=[...document.querySelectorAll(".looks [data-look]")],wS=["count","palette","colour","shade","thickness"],zh="knit-flow-tools";let hc=ai(zh)==="on";function ES(n){hc=n,document.body.classList.toggle("tools-on",n),n||Nr(!1),ji(zh,n?"on":"off")}let We={...Gs};try{const n=JSON.parse(ai(dc)||"null");if(n&&typeof n=="object")for(const e of Xa){const t=n[e.dataset.setting],[i,s]=bS(e);typeof t=="number"&&Number.isFinite(t)&&(We[e.dataset.setting]=e.tagName==="SELECT"?Math.round(Math.min(s,Math.max(i,t))):Math.min(s,Math.max(i,t)))}typeof n?.fill=="string"&&/^#[0-9a-f]{6}$/i.test(n.fill)&&(We.fill=n.fill)}catch{}We.palette=Gs.palette;We.colour=Gs.colour;let zn,rt,qa,hi=0,Da=performance.now(),tt=0,Yl=document.hidden,qs,md,gd,Os=0,mt=1,Ut=!0,_d=NaN,Gh=null;const TS=Tx({groundRoot:document.querySelector("#ground-pick"),photoRoot:document.querySelector("#photo-pick"),onReach:()=>{nt?tt<1&&kn(1):tt<Te.open[1]+.2&&kn(Te.open[1]+.4)},onGround:n=>{const e=Ex(n);Un.setGround(e),mr.setGround(e.rgb),pi.setGround(e),Ut=!0},onPhotos:n=>{document.documentElement.style.setProperty("--photo-ground",n),Un.setPhotoGround(n),Ut=!0}});function fc(){if(!rt)return;const n=rt.isStopped;rt.stop(),n||rt.start()}const Bs=document.querySelector("#world-run"),Ar=document.querySelector("#world-trust"),es=document.querySelector("#world-team"),Fa=document.querySelector("#world-footer"),AS="#open, .open__screen, #next, #world-page, #world-dark, #world-trust, #world-team, .team__page, #world-footer";function RS(n){if(n!==St.on){St.on=n,document.documentElement.classList.toggle("native",n);for(const e of document.querySelectorAll(AS))e.style.transform="";if(!n)for(const e of[Bs,Ar,es,Fa])e.style.marginTop="",e.style.height="";Ut=!0}}function CS(){if(!St.on||!Te.faces)return;const n=Te.world,e=i=>`${(i*mt).toFixed(1)}px`,t=es.offsetHeight;Pa.style.height=e(Te.faces[1]),Bs.style.marginTop=e(Te.next[1]-Te.list[1]-1),Bs.style.height=e(n.dark[1]-Te.next[1]),Ar.style.marginTop=e(n.trust[1]-n.dark[1]-1),es.style.marginTop=e(n.teamOpen[1]-n.trust[1]-1),es.style.setProperty("--team-top",`${Math.min(0,mt-t).toFixed(1)}px`),Fa.style.marginTop=e(n.footer[1]-n.teamOpen[1]-t/mt)}const PS=.6,LS=document.querySelector(".open__screen--faces"),DS=document.querySelector(".open__screen--list"),Vh=document.querySelector("#world-dark"),FS=n=>{let e=0;for(let t=n;t;t=t.offsetParent)e+=t.offsetTop;return e};function Wh(){if(!St.on||!nt)return;const n=h=>`${(h*mt).toFixed(1)}px`,e=Te.world,t=h=>FS(h)/mt;Pa.style.height=n(1),Bs.style.marginTop="0px";const i=pi.chartFits?PS:0;Bs.style.height=n(1+i);for(const h of[Ar,es,Fa])h.style.marginTop="";const s=t(LS),r=t(DS),a=t(Bs),o=t(Vh),l=t(Ar),c=t(es),u=t(Fa);Te.faces=[s-1,s],Te.list=[r-1,r],Te.next=[a-1,a],e.copy=[a-.55,a-.25],e.chart=[a-.2,a+Math.max(.2,i)],e.dark=[o-1,o],e.trust=[l-1,l],e.teamOpen=[c-1,c],e.footer=[u-1,u],Te.end=u,Wa.invalidate(window.innerWidth,mt),Kh(),Ut=!0}{const n=new ResizeObserver(()=>{qs&&Wh()});for(const e of[es,Vh,Ar])n.observe(e)}function Ks(){const{innerWidth:n,devicePixelRatio:e}=window,t=Nh.clientHeight||window.innerHeight;if(n===qs&&t===md&&e===gd)return;qs=n,md=t,gd=e,mt=t,RS(nt||n<760||ui),fc(),Yh(We),pi.layout(mt);const i=Te.world.teamOpen[1]+pi.teamOverflow();Te.world.footer=[i+.3,i+1.3],Te.end=Te.world.footer[1];const s=Math.round((Ws()+1)*mt);Pa.style.height=`${s}px`,Pa.style.height=`calc(${s}px + 100lvh - 100svh)`,nt?Wh():CS(),rt?.resize(),zn?.resize(),Os=Qt.offsetHeight,Un.layout(n,mt,Os),mr.resize(n,mt),Ya(),Ut=!0}function Ya(){if(!mi())return;const n=window.innerWidth,e=n/1920,t=n<760;let i=n*(t?.16:It==="b"?.2:.14);if(!t&&(It==="a"||It==="d")){const s=(It==="d"?Fi:pd).getBoundingClientRect();s.width&&(i=s.right+(It==="d"?0:34)*e)}if(Ga()){if(t){const s=pd.getBoundingClientRect().top+(nt&&St.on?window.scrollY:0);Gl=Math.max(.3,(s-ld)/mt),Ph=(ld-gS)/(We.tangle*(Gl+.04)*mt)}vn=Du+ud-Lh().at*1920,Vl=0,Ca=(Dh()+.04)*mt/335/(.8*Math.min(n/1920,mt*.31/372)),is||(zt=vn-Us),Ut=!0;return}vn=Du+ud-i/n*1920,Vl=t||It==="b"?1:0,Ca=t?2.1/We.tangle:It==="b"?.92/We.tangle:1.3,pr=dd(s=>Lu(s)[1]>=vn-Us-80,0,6),Tr=dd(s=>Lu(s)[0]>=vn+2335,pr,8.5),is?di&&(At=Tr):(At=pr,zt=vn-Us),Ut=!0}const Xh=n=>n==="f"?["e","f"]:[n];function Ma(n,e=!0){if(!ad.includes(n)||!mi())return;It=n;for(const i of ad)document.documentElement.classList.toggle("hero-"+i,Xh(n).includes(i));const t=document.querySelector("#hero-toggle span");t&&(t.textContent=`Hero: ${hS[n]}`),Ya(),e&&is&&qh()}function qh(){rt?rt.scrollTo(0,{immediate:!0,force:!0}):window.scrollTo({top:0,behavior:"instant"}),Ki=0,Fh(),document.body.classList.remove("hero-go"),Fi.offsetWidth,document.body.classList.add("hero-go"),Ut=!0}document.documentElement.classList.add(...mi()?Xh(It).map(n=>"hero-"+n):["hero-waves"]);function kn(n){const e=Math.min(Ws(),Math.max(0,n))*mt;rt?rt.scrollTo(e,{immediate:Ii.matches}):window.scrollTo({top:e,behavior:"instant"})}function Yh({logoSize:n,navSize:e,ctaSize:t}){const{style:i}=Qt,s=Math.min(1,Math.max(.72,window.innerWidth/2560));window.innerWidth<=700&&(n=Math.min(n,155),t=Math.min(t,110)),i.setProperty("--logo-scale",n/100*s),i.setProperty("--nav-scale",e/100*s),i.setProperty("--cta-scale",t/100*Math.max(.82,s)),qs&&Qt.offsetHeight!==Os&&(Os=Qt.offsetHeight,Un.layout(innerWidth,mt,Os),Ut=!0)}function gi(n){ph(We.fill);for(const t of Xa){const i=We[t.dataset.setting];if(t.value=String(i),!La.has(t))continue;const{field:s,unit:r,factor:a,decimals:o}=La.get(t),l=(i*a).toFixed(o);s!==n&&(s.value=l),t.setAttribute("aria-valuetext",l+r);const c=(i-Number(t.min))/(Number(t.max)-Number(t.min));t.style.setProperty("--range-fill",c*100+"%")}zn?.setSettings(We),document.documentElement.classList.toggle("shaded",!!We.shade),pi.apply(We),Fi.style.setProperty("--hero-bottom",String(100-We.heroTextY)),Fi.style.setProperty("--hero-line",String(We.betweenLineY)),Fi.style.setProperty("--gap-above",String(We.gapAbove)),Fi.style.setProperty("--gap-below",String(We.gapBelow)),Ya(),Yh(We),Kh();for(const t of Oh)t.setAttribute("aria-pressed",String(Number(t.dataset.open)===We.open));for(const{input:t,key:i,number:s}of Uh)t.value=String(We[i]),s!==document.activeElement&&(s.value=String(Math.round(We[i])));const e=mh.find(t=>wS.every(i=>Math.abs(We[i]-t.values[i])<1e-6));for(const t of Hh)t.setAttribute("aria-pressed",String(!!e&&t.dataset.look===e.key));Ut=!0}const _r=[{name:"A",palette:2,colour:4},{name:"B",palette:0,colour:4},{name:"C",palette:0,colour:2},{name:"D",palette:Fn,colour:0}],$h=()=>_r.findIndex(n=>n.palette===We.palette&&n.colour===We.colour);function Kh(){const n=ri[We.palette]??ri[0],e=document.documentElement.style;e.setProperty("--thread",n.thread),e.setProperty("--thread-2",n.thread2);const t={0:"#6A4FD0",1:"#0B7FA0",2:"#6A4FD0",3:"#2F52C9",4:"#2B3340"};e.setProperty("--accent",We.palette===Fn?n.hex:t[We.palette]??n.thread);const i=(h,d)=>[h,d,h,d,h,d,h,d],s={0:[["#8A64FC","#8AA9FF","#FF97FC","#DE949A","#78A69C","#78629A","#6A4FD0","#8A64FC"],3.5],1:[["#1C8F5A","#0B7FA0","#CF3F2C","#B98100","#1C8F5A","#0B7FA0","#CF3F2C","#B98100"],3.5],2:[i("#4F3E78","#A98FFF"),3.15],3:[i("#2A3F9E","#8AA9FF"),3.15],4:[i("#2B3340","#9AA3AE"),3.15]},[r,a]=We.palette===Fn?[Array(8).fill(n.hex),3.15]:s[We.palette]??s[2];r.forEach((h,d)=>e.setProperty(`--flow-${d}`,h)),ax(a*(mt>1?mt:window.innerHeight));const o=We.palette===Fn?n.hex:t[We.palette]??n.thread,l=h=>[1,3,5].map(d=>parseInt(h.slice(d,d+2),16)/255),c=/^#[0-9a-f]{6}$/i.test(o)?l(o).map(h=>h<=.04045?h/12.92:((h+.055)/1.055)**2.4).reduce((h,d,f)=>h+d*[.2126,.7152,.0722][f],0):0;e.setProperty("--on-accent",c>.35?"#121A24":"#FFFFFF"),document.documentElement.classList.toggle("lines-multi",We.palette===0||We.palette===1),pi.setLines(We.palette,ri[Fn]);const u=$h();Wl?.querySelector("span")&&(Wl.querySelector("span").textContent=`Lines: ${u>=0?"Option "+_r[u].name:"custom"}`);for(const h of Zh)h.setAttribute("aria-pressed",String(Number(h.dataset.style)===u));if(si){const h=ri[Fn].hex;si.value.toUpperCase()!==h&&(si.value=h.toLowerCase()),si.parentElement.style.setProperty("--fill",h),si.parentElement.classList.toggle("is-on",We.palette===Fn)}}const Zh=[...document.querySelectorAll("#colour-pick [data-style]")];function Jh(n){const e=_r[(n+_r.length)%_r.length];We.palette=e.palette,We.colour=e.colour,gi(),Ir()}const IS="knit-flow-colours";ks(IS);let pc=/[?&](colors|colours|options)\b/i.test(location.search);document.body.classList.toggle("show-colours",pc);function NS(n){pc=n,document.body.classList.toggle("show-colours",n)}for(const n of Zh)n.addEventListener("click",()=>Jh(Number(n.dataset.style)));const si=document.querySelector("#fill-colour");si?.addEventListener("input",()=>{We.fill=si.value.toUpperCase(),We.palette=Fn,We.colour=0,gi()});si?.addEventListener("change",()=>{We.fill=si.value.toUpperCase(),We.palette=Fn,We.colour=0,gi(),Ir()});Wl?.addEventListener("click",()=>Jh($h()+1));function US(n){const e=mh.find(t=>t.key===n);e&&(Object.assign(We,e.values),gi(),Ir())}document.querySelector("#copy-settings")?.addEventListener("click",async n=>{const e=n.currentTarget,t=e.querySelector("span"),i=JSON.stringify({settings:We,ground:ai("knit-flow-ground-v1"),photos:ai("knit-flow-photo-v1"),thread:ai("knit-flow-thread-v1")||"one colour"});let s=!1;try{await navigator.clipboard.writeText(i),s=!0}catch{}if(!s){const r=Object.assign(document.createElement("textarea"),{value:i,readOnly:!0});Object.assign(r.style,{position:"fixed",inset:"20% 20% auto",height:"30vh",zIndex:9,font:"12px monospace"}),document.body.append(r),r.select(),r.addEventListener("blur",()=>r.remove())}t.textContent=s?"Copied, paste it to Claude":"Select and copy",setTimeout(()=>{t.textContent="Copy settings"},2600)});const Qh=Ua?"Your settings are saved on this device.":"Settings apply for this visit.";document.querySelector("#saved-note").textContent=Qh;function Ir(){ji(dc,JSON.stringify(We)),document.querySelector("#saved-note").textContent=Qh}function jh(){We={...Gs},ks(dc),gi(),TS.reset(),Bh(),yS.reset(),document.querySelector("#saved-note").textContent="Back to the original settings."}function Nr(n){Xs.hidden=!n,gr.setAttribute("aria-expanded",String(n)),gr.querySelector("span").textContent=n?"−":"+",!n&&Xs.contains(document.activeElement)&&gr.focus()}const $l=matchMedia("(pointer: coarse)").matches,OS=.05,Ia=document.documentElement.classList;let vd="",Ki=0,xd=!1,ha=!1;function BS(n){return!$l||Ii.matches?rt.scroll:(Ki+=(rt.scroll-Ki)*(1-Math.exp(-n/OS)),Math.abs(rt.scroll-Ki)<.5&&(Ki=rt.scroll),Ki)}function $a(n){if(window.__KNIT_FROZEN__)return;const e=Math.min((n-Da)/1e3,.05);Da=n,rt.raf(n),tt=Gh??BS(e)/mt;const t=Ii.matches,i=tt!==_d;_d=tt,Ut&&(ha=!0);const s=ui&&di&&!ha&&!i&&(xd=!xd),r=ui&&di&&!ha&&tt>(nt?Te.heroOut[1]+.02:.02);Ut=!1;try{const a=Ts(tt,Te.open),o=nt||t&&We.open===Go?0:We.open,l=Math.tanh(Math.abs(rt.velocity)/(mt*.045));if(Vo+=(l*l-Vo)*(1-Math.exp(-e*8)),o===Go&&Un.ready&&mr.setPage(Un.paint,Un.version),o===Go&&a>0&&a<1?mr.frame(a,Vo):mr.hide(),nt&&(fd.style.visibility=Fi.style.visibility=tt<1?"visible":"hidden",tt<1)){const M=`${(Math.min(1,tt/.1)*14).toFixed(2)}svh`;M!==vd&&fd.style.setProperty("--hero-fade",vd=M)}if(a<1&&(!nt||tt<1)&&!r){const M=t?{cam:nt?vn:8e3,time:null}:is&&!kh?Ih(e):hr(),v=Math.max(0,Math.ceil((M.cam+2300-id)/Hl)),b=id+v*Hl,L=Ts(tt,Te.travel)**1.3,S=L*L*(3-2*L),T=Ts(tt,Te.heroOut),U=T>0?-.03+1.1*T:-9,A=M.time===null?null:M.time+(lS-M.time)*S;zn.update({merge:0,part:o===3?a:0,dt:e,still:t,draw:!0,skipDraw:s,split:U,aeTime:A,camX:M.cam,loopEnd:b,rest:nt?Vl:1-S,gather:S,head:is||t?9:-1,fan:nt,spread:nt?Ca:1,big:Ga()?_S(t):null}),ha=!1}rt.virtualScroll.options.wheelMultiplier=!nt&&tt>=5.2?SS:1;const c=Ts(tt,Te.next),u=mt*(1-c);Xl.style.visibility=c>0||St.on?"visible":"hidden";let h=1/0;nt&&Wa.frame(tt*mt),(c>0||nt)&&(St.on||(Xl.style.transform=`translate3d(0,${u.toFixed(1)}px,0)`),h=pi.frame(tt,e,t));const[d,f,_]=nt?Un.flow({screens:tt,covered:c>=1,under:c,dt:e,still:t}):Un.frame({style:o,opened:a,burstOn:tt>=Te.burst[o],swap:Ts(tt,Te.swap),screens:tt,covered:c>=1,shape:zn.shape,dt:e,still:t}),x=Os/2,p=c>0&&u<x;Qt.classList.toggle("on-purple",!nt&&d<x&&!p),Qt.classList.toggle("logo-on-purple",!nt&&f<x&&!p),Qt.classList.toggle("button-on-purple",!nt&&_<x&&!p);const m=nt&&tt>.18,R=nt&&tt>Te.world.footer[1]-.45;Ia.toggle("past-hero",m),Ia.toggle("at-footer",R),Qt.classList.toggle("on-dark",nt?R:h<x);const B=tt>=Te.world.trust[1]-.1&&tt<=Te.world.teamOpen[1]+.02;nt?Sd(tt,tt>.12?R?"var(--ink)":m?"var(--ground)":"var(--paper)":null):Sd(tt,nt&&tt<Te.next[1]?p?pi.panelGround:d<=0?"var(--ground)":null:B?"var(--paper)":null),document.body.classList.toggle("opened",nt?tt>.5:a>0),document.body.classList.toggle("on-world",tt>=Te.next[1]),GS(tt)}catch(a){Kl(a);return}hi=requestAnimationFrame($a)}let As=!1,Pn=0;function Sd(n,e=null){const t=rt.scroll,i=Te.world;n<.15?(As=!1,Pn=t):As?t>Pn?Pn=t:t<Pn-6&&(As=!1,Pn=t):t<Pn?Pn=t:t>Pn+6&&(As=!0,Pn=t);const s=i.footer?Ts(n,[i.footer[0]+.4,i.footer[0]+.75]):0;Qt.classList.toggle("is-away",As),Qt.classList.toggle("is-gone",s>=1);const r=!!e||n>i.dark[0]+.02&&n<i.dark[1]||n>i.teamOpen[1]+.02&&s<1;Qt.classList.toggle("has-bar",r),r&&Qt.style.setProperty("--bar",e??pi.panelGround),Qt.style.setProperty("--nav-fade",(1-s).toFixed(3))}function ef(){St.on&&(qs=0,Ks()),Ya(),is=!0,document.body.classList.add("hero-go");{const jh=location.hash.slice(1);rt&&jh&&document.querySelector(`[data-jump="${CSS.escape(jh)}"]`)&&(history.replaceState(null,"",location.pathname+location.search),setTimeout(()=>HS(jh),60))}}function Kl(n){console.error("The strings could not render:",n),window.__WEAVE_ERROR__=String(n?.stack??n),cancelAnimationFrame(hi),rt?.destroy(),rt=void 0,ef(),MS.hidden=!1}window.addEventListener("resize",Ks,{passive:!0});function tf(){window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{Ks(),tf()},{once:!0})}tf();Ii.addEventListener("change",()=>{fc(),qs=void 0,Ks(),Ut=!0});document.querySelector("#restart").addEventListener("click",qh);const kS=nt?{solutions:()=>Te.list[1],technology:()=>Te.world.chart[1],research:()=>Te.world.dark[1],company:()=>Te.world.teamOpen[1]-.06}:{solutions:()=>Te.thread[1],technology:()=>Te.world.chart[1]+.05,research:()=>Te.world.darkThread[1]+.05,company:()=>Te.world.teamOpen[1]},Rr=document.createElement("div");Rr.className="jump-veil";Rr.setAttribute("aria-hidden","true");Qt.before(Rr);let Md=0;function HS(n){const e=kS[n]?.();if(e===void 0||!rt)return;Ia.add("jumping"),clearTimeout(Md);const t=()=>{rt.scrollTo(Math.min(Ws(),Math.max(0,e))*mt,{immediate:!0,force:!0}),Ki=rt.scroll,As=!1,Pn=Math.min(Ws(),Math.max(0,e))*mt,Ut=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{Rr.classList.remove("on"),setTimeout(()=>Ia.remove("jumping"),400)}))};if(Ii.matches){t();return}Rr.classList.add("on"),Md=setTimeout(t,230)}for(const n of document.querySelectorAll("[data-jump]"))n.addEventListener("click",e=>{e.preventDefault(),HS(n.dataset.jump)});const zS=[...document.querySelectorAll(".nav [data-jump], .menu__links [data-jump]")];let yd="";function GS(n){const e=Te.world,t=n>=e.teamOpen[0]+.5?"company":n>=e.trust[0]+.5?"":n>=e.dark[0]+.5?"research":n>=Te.next[0]+.5?"technology":n>=(nt?.5:Te.clear[0])?"solutions":"";if(t!==yd){yd=t;for(const i of zS)i.dataset.jump===t?i.setAttribute("aria-current","true"):i.removeAttribute("aria-current")}}document.querySelector(".wordmark").addEventListener("click",n=>{n.preventDefault(),kn(0)});document.addEventListener("click",n=>{const e=n.target.closest?.('a[href^="#"]');!e||e.dataset.jump!==void 0||e.classList.contains("wordmark")||(n.preventDefault(),e.getAttribute("href")==="#start"&&kn(0))});document.querySelector("#retry").addEventListener("click",()=>window.location.reload());gr.addEventListener("click",()=>Nr(Xs.hidden));document.querySelector("#view-close").addEventListener("click",()=>Nr(!1));document.querySelector("#preview-line").addEventListener("click",()=>{nt||kn(Te.open[0]-.1)});for(const n of Oh)n.addEventListener("click",()=>{nt||(We.open=Number(n.dataset.open),gi(),Ir(),kn(Te.open[0]-.05))});for(const{input:n,number:e,key:t,slider:i}of Uh){const s=l=>{i.value=String(l),i.dispatchEvent(new Event("input"))},r=Number(n.min),a=Number(n.max),o=()=>{if(t==="ribbon"||t==="spacing"){tt>=Te.world.flat[1]&&kn(Te.world.line[1]);return}if(t==="flatLine"){(tt<Te.world.solid[1]||tt>=Te.world.dark[0])&&kn(Te.world.solid[1]);return}if(!["worldWords","worldLine","chartTop","chartBottom","statsTop","statsBottom","logoSize","navSize","ctaSize","heroIntro","heroSpeed","heroSpread","heroCount","thickness"].includes(t)){if(nt){tt>.2&&kn(0);return}(tt<Te.travel[1]||tt>Te.open[0])&&kn((Te.travel[1]+Te.open[0])/2)}};n.addEventListener("input",()=>s(n.value)),n.addEventListener("pointerdown",o),e.addEventListener("focus",()=>{o(),e.select()}),e.addEventListener("input",()=>{const l=e.valueAsNumber;Number.isFinite(l)&&l>=r&&l<=a&&s(l)}),e.addEventListener("blur",()=>{const l=e.valueAsNumber;Number.isFinite(l)&&s(Math.min(a,Math.max(r,Math.round(l)))),e.value=String(Math.round(We[t]))}),e.addEventListener("keydown",l=>{if(l.key==="Enter"){e.blur();return}if(l.key!=="ArrowUp"&&l.key!=="ArrowDown")return;l.preventDefault();const c=(l.key==="ArrowUp"?1:-1)*(l.shiftKey?10:1),u=Math.min(a,Math.max(r,Math.round(We[t])+c));s(u),e.value=String(u)})}document.querySelector("#reset-view").addEventListener("click",jh);document.querySelector("#reset-all").addEventListener("click",n=>{const e=n.currentTarget.querySelector("span");jh(),e.textContent="Back to original",setTimeout(()=>{e.textContent="Reset"},2600)});for(const n of Hh)n.addEventListener("click",()=>US(n.dataset.look));function nf(n,e){const t=n.dataset.setting,i=Number(n.value),s=We[t]!==i;We[t]=i,gi(e),s&&Ir()}for(const n of Xa)n.addEventListener("input",()=>nf(n));for(const[n,{field:e,factor:t}]of La){let i=function(s){const r=e.valueAsNumber;if(!Number.isFinite(r)){s&&gi();return}!s&&!e.validity.valid||(n.value=String(r/t),nf(n,s?void 0:e))};e.addEventListener("input",()=>i(!1)),e.addEventListener("blur",()=>i(!0)),e.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),i(!0))})}document.addEventListener("keydown",n=>{if(n.key==="Escape"&&!Xs.hidden&&Nr(!1),qa?.open||n.defaultPrevented||n.ctrlKey||n.metaKey||n.altKey)return;const e=n.target instanceof Element&&n.target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])');if((n.key==="t"||n.key==="T")&&!e){n.preventDefault(),ES(!hc);return}if((n.key==="c"||n.key==="C")&&!e){n.preventDefault(),NS(!pc);return}if((n.key==="h"||n.key==="H")&&!e&&mi()){n.preventDefault(),Ma(Ns[(Ns.indexOf(It)+1)%Ns.length]);return}if(!["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "].includes(n.key))return;const t=n.target;t instanceof Element&&(t.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),[data-lenis-prevent]')||n.key===" "&&t.closest('button,a,[role="button"]'))||fc()});document.addEventListener("pointerdown",n=>{!Xs.hidden&&!Xs.contains(n.target)&&!gr.contains(n.target)&&Nr(!1)});document.addEventListener("visibilitychange",()=>{Yl=document.hidden,Yl?(cancelAnimationFrame(hi),rt?.stop()):zn&&rt&&(qa?.open||rt.start(),Da=performance.now(),Ut=!0,cancelAnimationFrame(hi),hi=requestAnimationFrame($a))});window.addEventListener("pagehide",n=>{cancelAnimationFrame(hi),n.persisted?rt?.stop():(rt?.destroy(),rt=void 0,zn?.dispose())});window.addEventListener("pageshow",n=>{n.persisted&&zn&&rt&&!document.hidden&&(qa?.open||rt.start(),Ks(),Da=performance.now(),Ut=!0,cancelAnimationFrame(hi),hi=requestAnimationFrame($a))});try{history.scrollRestoration="manual",document.body.classList.toggle("tools-on",hc),zn=jv(Nh,{initialSettings:We,onError:Kl}),rt=new gf({autoRaf:!1,autoResize:!1,lerp:.1,smoothWheel:!Ii.matches,syncTouch:!1,eventsTarget:$l?document.createElement("div"):window});const n=e=>{e.cancelable&&!e.target.closest?.("#menu")&&e.preventDefault()};qa=nS({onOpen:()=>{rt?.stop(),$l&&window.addEventListener("touchmove",n,{passive:!1})},onClose:()=>{window.removeEventListener("touchmove",n),document.hidden||rt?.start()}}),gi(),Ks(),zn.update({merge:0,dt:0,still:Ii.matches,draw:!0,head:Ii.matches?9:-1}),ui&&setTimeout(()=>{for(const e of document.querySelectorAll(".team__photo img"))e.decode?.().catch(()=>{})},2500),setTimeout(Un.loadPeople,nt?250:2e3),document.querySelector("#hero-toggle")?.addEventListener("click",()=>Ma(Ns[(Ns.indexOf(It)+1)%Ns.length])),mi()&&Ma(It,!1),Promise.race([document.fonts.ready,new Promise(e=>setTimeout(e,2500))]).then(()=>requestAnimationFrame(ef)),Yl?rt.stop():hi=requestAnimationFrame($a),window.__WEAVE__={get hero(){return{mode:It,rest:vn,from:pr,done:Tr,finished:di,clock:dn}},setHero:Ma,get screens(){return tt},get total(){return Ws()},get viewH(){return mt},get stats(){return zn.stats},get settings(){return{...We}},get wheel(){return rt.virtualScroll.options.wheelMultiplier},timeline:Te,hold:e=>{Gh=e},heroAt:(e,t=!1)=>{for(Fh(),is=!0;dn<e-1e-9;)Ih(Math.min(1/120,e-dn));kh=t,Ut=!0},goTo:e=>{rt?.scrollTo(Math.min(Ws(),Math.max(0,e))*mt,{immediate:!0,force:!0})}}}catch(n){Kl(n)}
