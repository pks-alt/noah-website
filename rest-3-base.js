document.body.insertAdjacentHTML('beforeend',`<section class="intelligence" id="intelligence">
  <div class="section-wrap intelligence-inner reveal">
    <div class="intelligence-head"><div><div class="section-kicker">NOAH Intelligence</div><h2 class="section-title">Turn Performance Signals<br>Into the Next Move.</h2></div><div><p class="section-copy">NOAH Intelligence connects media, partner, commerce, and commercial outcome signals so teams can move from activity to a clearer next decision.</p><a class="text-link intelligence-copy" href="intelligence.html">Explore NOAH Intelligence <span>→</span></a></div></div>
    <div class="command-center"><div class="command-top"><span class="command-brand">NOAH / PERFORMANCE COMMAND CENTER</span><span>Connected Growth View</span></div><div class="command-body"><div class="command-main"><div class="signal-row"><div class="signal-card"><small>Media</small><b>Spend & Acquisition</b><span>Channel visibility</span></div><div class="signal-card"><small>Commerce</small><b>Revenue & Conversion</b><span>Outcome visibility</span></div><div class="signal-card"><small>Partners</small><b>Activity & Attribution</b><span>Distribution visibility</span></div></div><div class="chart"><span class="chart-label">Performance signals across the growth system</span><svg viewBox="0 0 800 220" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#168cff"/><stop offset="1" stop-color="#25d1c9"/></linearGradient></defs><path d="M0 170 C100 165,130 125,210 140 S340 72,430 102 S555 50,650 78 S735 42,800 55" fill="none" stroke="url(#g1)" stroke-width="4"/><path d="M0 194 C100 175,150 185,220 160 S340 130,420 148 S545 105,650 120 S740 95,800 98" fill="none" stroke="#41617a" stroke-width="2" opacity=".9"/></svg></div><div class="chart-legend"><span>Growth performance</span><span>Optimization signal</span></div></div><aside class="command-side"><h4>Intelligence Layer</h4><div class="insight-list"><div class="insight"><small>Measure</small><b>Bring media, partner, commerce, and revenue signals into a clearer view.</b></div><div class="insight"><small>Understand</small><b>Identify patterns, attribution relationships, and performance movement.</b></div><div class="insight"><small>Optimize</small><b>Use what the system learns to guide the next activation.</b></div></div><div class="measure-flow"><span>Measure</span><i></i><span>Understand</span><i></i><span>Optimize</span></div></aside></div></div>
  </div>
</section>
<section class="why" id="why">
  <div class="section-wrap why-inner reveal"><div class="why-layout"><div class="why-sticky"><div class="section-kicker">Why NOAH</div><h2 class="section-title">Designed to Work<br>as One.</h2><p class="section-copy">NOAH is differentiated by the connections between capabilities—not simply the capabilities themselves.</p></div><div><div class="why-rows"><article class="why-row"><span class="num">01</span><h3>Shared Commercial Objective</h3><p>Media, partnerships, commerce, and intelligence operating as one ecosystem.</p></article><article class="why-row"><span class="num">02</span><h3>Connected Handoffs</h3><p>Programs designed around measurable commercial outcomes and continuous optimization.</p></article><article class="why-row"><span class="num">03</span><h3>Partner + Owned Distribution</h3><p>NOAH-owned commerce destinations complement external partner and media reach.</p></article><article class="why-row"><span class="num">04</span><h3>Intelligence in the Loop</h3><p>A flexible operating model designed to connect growth opportunities across channels and markets.</p></article><article class="why-row"><span class="num">05</span><h3>Flexible Activation</h3><p>Performance signals help determine what to scale, adjust, and activate next.</p></article></div><div class="trust-strip"><span>Partner Vetting</span><span>Traffic Quality</span><span>Fraud Prevention</span><span>Brand Safety</span><span>Ongoing Monitoring</span></div></div></div></div>
</section>
<section class="final-cta" id="contact"><div class="final-inner reveal"><div class="final-kicker">Start the Conversation</div><h2>Start With the Growth Outcome.</h2><p>Tell us what you want to improve. NOAH can connect the right capability, network path, or intelligence layer around that objective.</p><div class="final-actions"><a class="btn cta" href="contact.html">Talk to Our Growth Team →</a><a class="btn final-secondary" href="contact.html#partner-inquiry">Partner With NOAH →</a></div></div></section>
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" aria-label="NOAH Digital home"><img src="assets/noah-lockup.png" alt="NOAH Digital"></a>
        <p>Global Performance Commerce — connecting customer acquisition, partner distribution, owned commerce, and intelligence through one Connected Growth System.</p>
        <a class="footer-domain" href="https://noahdigital.io/" target="_blank" rel="noopener">noahdigital.io ↗</a>
      </div>
      <div class="footer-col"><h4>Solutions</h4><a href="solutions.html#media">Performance Media</a><a href="solutions.html#partnerships">Performance Partnerships</a><a href="solutions.html#commerce">Owned Commerce</a><a href="intelligence.html">NOAH Intelligence</a></div>
      <div class="footer-col"><h4>Company</h4><a href="network.html">Our Network</a><a href="why.html">Why NOAH</a><a href="contact.html">Contact</a></div>
      <div class="footer-col"><h4>Properties</h4><a href="https://www.dealscanvas.com/" target="_blank" rel="noopener">DealsCanvas ↗</a><a href="https://www.catchthedeal.ai/" target="_blank" rel="noopener">CatchTheDeal.ai ↗</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 NOAH Digital. All rights reserved.</span><a href="https://noahdigital.io/" target="_blank" rel="noopener">noahdigital.io</a></div>
  </div>
</footer>`);

/* Homepage CTA routing. */
const noahHeroCtas=document.querySelectorAll('.hero-actions a');
if(noahHeroCtas[0])noahHeroCtas[0].setAttribute('href','contact.html');
if(noahHeroCtas[1])noahHeroCtas[1].setAttribute('href','contact.html#partner-inquiry');

/* Final homepage messaging: overview first, deeper pages own the detail. */
const setHTML=(selector,html)=>{const el=document.querySelector(selector);if(el)el.innerHTML=html};
const setText=(selector,text)=>{const el=document.querySelector(selector);if(el)el.textContent=text};
const setTexts=(selector,texts)=>{document.querySelectorAll(selector).forEach((el,i)=>{if(texts[i]!==undefined)el.textContent=texts[i]})};
const setHref=(selector,href)=>{const el=document.querySelector(selector);if(el)el.setAttribute('href',href)};

setText('.hero .lede','NOAH is a Global Performance Commerce company connecting customer acquisition, partner distribution, owned commerce, and intelligence through one Connected Growth System.');

setHTML('.solutions .section-title','Four Capabilities.<br>One Connected Growth System.');
setText('.solutions .section-copy','Use each capability where it adds value—or connect them so acquisition, distribution, commerce, and learning can reinforce one another.');
setTexts('.solutions .capability-row p',[
  'Create and capture demand through performance-led media.',
  'Expand distribution through publishers, creators, affiliates, and strategic partners.',
  'Create direct commerce pathways for high-intent discovery and action.',
  'Connect performance signals so teams can learn what should happen next.'
]);
setHref('.solutions-foot .text-link','solutions.html');

setHTML('.growth-v2 .section-title','Acquire. Expand. Convert.<br>Learn. Improve.');
setText('.growth-v2 .section-copy','The Connected Growth System follows one clear journey from demand creation to learning—so what happens at one stage can strengthen the next.');
setTexts('.growth-v2-step h3',['Acquire','Expand','Convert','Learn']);
setTexts('.growth-v2-step p',[
  'Create and capture demand through performance-led media.',
  'Extend reach through partner audiences, channels, and relationships.',
  'Move high-intent consumers toward commerce and conversion.',
  'Connect the signals behind performance and use them to inform the next move.'
]);
setText('.growth-v2-cycle strong','One connected growth cycle.');
setText('.growth-v2-cycle small','Learning feeds the next activation so the system can keep improving.');
setHTML('.growth-v2-cycle-path','<span>ACQUIRE</span><i></i><span>EXPAND</span><i></i><span>CONVERT</span><i></i><span>LEARN</span><i></i><span>IMPROVE</span>');

setHTML('.audiences .section-title','Built for Brands.<br>Open to Partners.');
setText('.audiences .section-copy','Brands use NOAH to create more paths to customer growth. Partners participate by bringing relevant audience, content, influence, commerce, and distribution capabilities into the ecosystem.');
setHTML('.brand-world h3','More Paths to<br>Customer Growth.');
setText('.brand-world p','Use the Connected Growth System to acquire customers, extend distribution, create commerce pathways, and improve decisions.');
setHTML('.partner-world h3','Turn Reach and Influence<br>Into Opportunity.');
setText('.partner-world p','Bring audience, content, commerce, or distribution capabilities into relevant brand and campaign opportunities.');
const audienceLinks=[...document.querySelectorAll('.audience-link')];
if(audienceLinks[0])audienceLinks[0].setAttribute('href','contact.html');
if(audienceLinks[1])audienceLinks[1].setAttribute('href','contact.html#partner-inquiry');

setHTML('.network .section-title','Partner Reach. Owned Commerce.<br>One Distribution Layer.');
setText('.network .section-copy','NOAH combines external partner reach with owned commerce destinations so brands can extend distribution beyond paid media and create additional paths toward shopping intent.');
setText('.partner-network h3','Extend Distribution Beyond Paid Media.');
setText('.partner-network p','Use publishers, creators, affiliates, content partners, and strategic relationships to reach relevant audiences in more contexts.');
const propertyCopy=[...document.querySelectorAll('.property-copy')];
if(propertyCopy[0]){const p=propertyCopy[0].querySelector('p');if(p)p.textContent='A NOAH-owned destination for fashion, beauty, lifestyle discovery, offers, and price comparison.';}
if(propertyCopy[1]){const p=propertyCopy[1].querySelector('p');if(p)p.textContent='A NOAH-owned destination focused on coupons, cash back, daily deals, and timely shopping opportunities.';}

setHTML('.intelligence .section-title','Turn Performance Signals<br>Into the Next Move.');
setText('.intelligence .section-copy','NOAH Intelligence connects media, partner, commerce, and commercial outcome signals so teams can move from activity to a clearer next decision.');
setTexts('.intelligence .insight b',[
  'Connect the signals that matter across the growth journey.',
  'Understand what changed and what contributed.',
  'Use that context to inform the next decision.'
]);
setHref('.intelligence .text-link','intelligence.html');

setHTML('.why .section-title','Designed to Work<br>as One.');
setText('.why .section-copy','NOAH is differentiated by the connections between capabilities—not simply the capabilities themselves.');
const whyRows=[...document.querySelectorAll('.why-row')];
const whyHeads=['Shared Commercial Objective','Connected Handoffs','Partner + Owned Distribution','Intelligence in the Loop','Flexible Activation'];
const whyCopy=[
  'Acquisition, distribution, commerce, and learning align around the same growth objective.',
  'What one stage learns can strengthen what happens next.',
  'External partner reach combines with NOAH-owned commerce pathways.',
  'Performance signals stay connected to operating decisions across the system.',
  'Start with the capability you need and connect more when it adds value.'
];
whyRows.forEach((row,i)=>{const h=row.querySelector('h3');const p=row.querySelector('p');if(h&&whyHeads[i])h.textContent=whyHeads[i];if(p&&whyCopy[i])p.textContent=whyCopy[i];});

setText('.final-cta h2','Start With the Growth Outcome.');
setText('.final-cta p','Tell us what you want to improve. NOAH can connect the right capability, network path, or intelligence layer around that objective.');
const finalCtas=[...document.querySelectorAll('.final-actions a')];
if(finalCtas[0])finalCtas[0].setAttribute('href','contact.html');
if(finalCtas[1])finalCtas[1].setAttribute('href','contact.html#partner-inquiry');

/* Keep the footer aligned with the final site architecture. */
document.querySelectorAll('.site-footer a').forEach(a=>{
  const t=a.textContent.trim();
  if(t==='Performance Media'||t==='Performance Partnerships')a.href='solutions.html';
  if(t==='Owned Commerce Network')a.href='solutions.html#commerce';
  if(t==='NOAH Intelligence')a.href='intelligence.html';
  if(t==='Our Network')a.href='network.html';
  if(t==='Why NOAH')a.href='why.html';
  if(t==='Contact')a.href='contact.html';
});
