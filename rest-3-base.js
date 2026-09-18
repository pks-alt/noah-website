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
