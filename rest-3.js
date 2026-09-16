document.body.insertAdjacentHTML('beforeend',`<section class="intelligence" id="intelligence">
  <div class="section-wrap intelligence-inner reveal">
    <div class="intelligence-head"><div><div class="section-kicker">NOAH Intelligence</div><h2 class="section-title">See Performance Clearly.<br>Act on It Faster.</h2></div><div><p class="section-copy">NOAH Intelligence connects the signals that matter across media, partnerships, commerce, and revenue—giving teams a clearer view of what is driving growth and where to optimize next.</p><a class="text-link intelligence-copy" href="#contact">Explore NOAH Intelligence <span>→</span></a></div></div>
    <div class="command-center"><div class="command-top"><span class="command-brand">NOAH / PERFORMANCE COMMAND CENTER</span><span>Connected Growth View</span></div><div class="command-body"><div class="command-main"><div class="signal-row"><div class="signal-card"><small>Media</small><b>Spend & Acquisition</b><span>Channel visibility</span></div><div class="signal-card"><small>Commerce</small><b>Revenue & Conversion</b><span>Outcome visibility</span></div><div class="signal-card"><small>Partners</small><b>Activity & Attribution</b><span>Distribution visibility</span></div></div><div class="chart"><span class="chart-label">Performance signals across the growth ecosystem</span><svg viewBox="0 0 800 220" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#168cff"/><stop offset="1" stop-color="#25d1c9"/></linearGradient></defs><path d="M0 170 C100 165,130 125,210 140 S340 72,430 102 S555 50,650 78 S735 42,800 55" fill="none" stroke="url(#g1)" stroke-width="4"/><path d="M0 194 C100 175,150 185,220 160 S340 130,420 148 S545 105,650 120 S740 95,800 98" fill="none" stroke="#41617a" stroke-width="2" opacity=".9"/></svg></div><div class="chart-legend"><span>Growth performance</span><span>Optimization signal</span></div></div><aside class="command-side"><h4>Intelligence Layer</h4><div class="insight-list"><div class="insight"><small>Measure</small><b>Bring media, partner, commerce, and revenue signals into a clearer view.</b></div><div class="insight"><small>Understand</small><b>Identify patterns, attribution relationships, and performance movement.</b></div><div class="insight"><small>Optimize</small><b>Use what the system learns to guide the next activation.</b></div></div><div class="measure-flow"><span>Measure</span><i></i><span>Understand</span><i></i><span>Optimize</span></div></aside></div></div>
  </div>
</section>
<section class="why" id="why">
  <div class="section-wrap why-inner reveal"><div class="why-layout"><div class="why-sticky"><div class="section-kicker">Why NOAH</div><h2 class="section-title">A More Connected<br>Way to Grow.</h2><p class="section-copy">NOAH brings together capabilities that are often managed separately so growth can be activated and optimized more cohesively.</p></div><div><div class="why-rows"><article class="why-row"><span class="num">01</span><h3>Connected Growth Model</h3><p>Media, partnerships, commerce, and intelligence operating as one ecosystem.</p></article><article class="why-row"><span class="num">02</span><h3>Performance Accountability</h3><p>Programs designed around measurable commercial outcomes and continuous optimization.</p></article><article class="why-row"><span class="num">03</span><h3>Owned Distribution</h3><p>NOAH-owned commerce destinations complement external partner and media reach.</p></article><article class="why-row"><span class="num">04</span><h3>Global Activation</h3><p>A flexible operating model designed to connect growth opportunities across channels and markets.</p></article><article class="why-row"><span class="num">05</span><h3>Data-Led Optimization</h3><p>Performance signals help determine what to scale, adjust, and activate next.</p></article></div><div class="trust-strip"><span>Partner Vetting</span><span>Traffic Quality</span><span>Fraud Prevention</span><span>Brand Safety</span><span>Ongoing Monitoring</span></div></div></div></div>
</section>
<section class="final-cta" id="contact"><div class="final-inner reveal"><div class="final-kicker">Start the Conversation</div><h2>Let’s Build What Growth Looks Like Next.</h2><p>Whether you’re looking to acquire customers, expand distribution, activate new partners, or understand performance more clearly, NOAH brings the pieces together around measurable growth.</p><div class="final-actions"><a class="btn cta" href="#">Talk to Our Growth Team →</a><a class="btn final-secondary" href="#">Partner With NOAH →</a></div></div></section>
<footer class="site-footer"><div class="footer-inner"><div class="footer-grid"><div class="footer-brand"><div class="footer-wordmark">NOAH <span>DIGITAL</span></div><p>Global Performance Commerce — connecting media, partnerships, commerce, and intelligence around measurable growth.</p></div><div class="footer-col"><h5>Solutions</h5><a href="#solutions">Performance Media</a><a href="#solutions">Performance Partnerships</a><a href="#network">Owned Commerce Network</a><a href="#intelligence">NOAH Intelligence</a></div><div class="footer-col"><h5>NOAH</h5><a href="#network">Our Network</a><a href="#why">Why NOAH</a><a href="#contact">Contact</a><a href="#">Careers</a></div><div class="footer-col"><h5>Properties</h5><a href="https://www.dealscanvas.com/" target="_blank" rel="noopener">DealsCanvas ↗</a><a href="https://www.catchthedeal.ai/" target="_blank" rel="noopener">CatchTheDeal.ai ↗</a></div><div class="footer-col"><h5>Connect</h5><a href="#">LinkedIn</a><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div></div><div class="footer-bottom"><span>© 2026 NOAH Digital. All rights reserved.</span><span>Global Performance Commerce</span></div></div></footer>`);

/* Final art-direction stylesheet is intentionally loaded last so it only refines the approved page. */
const noahPolish=document.createElement('link');
noahPolish.rel='stylesheet';
noahPolish.href='polish.css';
document.head.appendChild(noahPolish);

/* Make the approved navigation labels functional without changing their visual design. */
const noahNav=[...document.querySelectorAll('.nav a')];
const noahNavTargets={0:'#solutions',1:'#network',4:'#intelligence',5:'#why'};
Object.entries(noahNavTargets).forEach(([index,target])=>{if(noahNav[Number(index)])noahNav[Number(index)].setAttribute('href',target)});
const noahHeaderCta=document.querySelector('.header-cta');
if(noahHeaderCta)noahHeaderCta.setAttribute('href','#contact');
const noahHeroCtas=document.querySelectorAll('.hero-actions a');
if(noahHeroCtas[0])noahHeroCtas[0].setAttribute('href','#contact');
if(noahHeroCtas[1])noahHeroCtas[1].setAttribute('href','#audiences');

/* Lightweight mobile navigation using the existing approved menu icon. */
const noahMenu=document.querySelector('.menu');
if(noahMenu){
  noahMenu.setAttribute('role','button');
  noahMenu.setAttribute('tabindex','0');
  noahMenu.setAttribute('aria-label','Open navigation');
  noahMenu.setAttribute('aria-expanded','false');
  const toggleNoahMenu=()=>{
    const open=document.body.classList.toggle('noah-menu-open');
    noahMenu.setAttribute('aria-expanded',String(open));
    noahMenu.textContent=open?'×':'☰';
  };
  noahMenu.addEventListener('click',toggleNoahMenu);
  noahMenu.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleNoahMenu();}});
  noahNav.forEach(link=>link.addEventListener('click',()=>{document.body.classList.remove('noah-menu-open');noahMenu.setAttribute('aria-expanded','false');noahMenu.textContent='☰';}));
}
