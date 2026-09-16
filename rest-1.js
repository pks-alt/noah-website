document.body.insertAdjacentHTML('beforeend',`<section class="solutions" id="solutions">
  <div class="section-wrap solutions-inner reveal">
    <div class="solutions-head">
      <div>
        <div class="section-kicker">Solutions</div>
        <h2 class="section-title">One Growth System.<br>Multiple Ways to Perform.</h2>
      </div>
      <p class="section-copy">NOAH brings performance media, partnerships, commerce, and intelligence together in one connected growth model—helping brands acquire customers, expand distribution, convert demand, and optimize what comes next.</p>
    </div>

    <div class="solutions-experience">
      <div class="solutions-visual" data-active="all" aria-label="NOAH connected growth system visualization">
        <div class="visual-topbar">
          <div><span class="visual-dot"></span><b>NOAH / CONNECTED GROWTH SYSTEM</b></div>
          <span class="visual-mode">SYSTEM VIEW</span>
        </div>

        <div class="visual-gridlines" aria-hidden="true"></div>
        <div class="visual-flow-line flow-a" aria-hidden="true"></div>
        <div class="visual-flow-line flow-b" aria-hidden="true"></div>
        <div class="visual-flow-line flow-c" aria-hidden="true"></div>

        <div class="system-core">
          <span>NOAH</span>
          <strong>Growth<br>Engine</strong>
          <small>Connected by intelligence</small>
        </div>

        <div class="system-module module-media" data-module="media">
          <div class="module-head"><span>01</span><b>Performance Media</b></div>
          <div class="media-chart" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <div class="module-meta"><span>Search</span><span>Social</span><span>Display</span></div>
        </div>

        <div class="system-module module-partners" data-module="partners">
          <div class="module-head"><span>02</span><b>Partnerships</b></div>
          <div class="partner-map" aria-hidden="true">
            <i class="p1"></i><i class="p2"></i><i class="p3"></i><i class="p4"></i><i class="p5"></i>
            <em class="l1"></em><em class="l2"></em><em class="l3"></em><em class="l4"></em>
          </div>
          <div class="module-meta"><span>Publishers</span><span>Creators</span><span>Affiliates</span></div>
        </div>

        <div class="system-module module-commerce" data-module="commerce">
          <div class="module-head"><span>03</span><b>Owned Commerce</b></div>
          <div class="commerce-ui" aria-hidden="true">
            <div class="commerce-image"></div>
            <div class="commerce-copy"><i></i><i></i><i></i></div>
            <div class="commerce-badge">HIGH INTENT</div>
          </div>
          <div class="module-meta"><span>Discovery</span><span>Offers</span><span>Conversion</span></div>
        </div>

        <div class="system-module module-intelligence" data-module="intelligence">
          <div class="module-head"><span>04</span><b>NOAH Intelligence</b></div>
          <div class="intel-kpis">
            <div><small>REVENUE</small><strong>↗</strong></div>
            <div><small>ROAS</small><strong>↗</strong></div>
            <div><small>CVR</small><strong>↗</strong></div>
          </div>
          <div class="intel-spark" aria-hidden="true"><i></i></div>
        </div>

        <div class="system-status"><span class="status-pulse"></span> Media → Partners → Commerce → Intelligence → Smarter activation</div>
      </div>

      <div class="solutions-capabilities" role="list" aria-label="NOAH solution capabilities">
        <article class="capability-row is-active" data-target="media" tabindex="0" role="listitem">
          <div class="capability-num">01</div>
          <div><h3>Performance Media</h3><p>Acquire customers through performance-led media across channels and markets.</p></div>
          <span class="capability-arrow">↗</span>
        </article>
        <article class="capability-row" data-target="partners" tabindex="0" role="listitem">
          <div class="capability-num">02</div>
          <div><h3>Performance Partnerships</h3><p>Scale through publishers, creators, affiliates, and strategic distribution partners.</p></div>
          <span class="capability-arrow">↗</span>
        </article>
        <article class="capability-row" data-target="commerce" tabindex="0" role="listitem">
          <div class="capability-num">03</div>
          <div><h3>Owned Commerce Network</h3><p>Reach high-intent consumers through NOAH-owned commerce destinations and activation opportunities.</p></div>
          <span class="capability-arrow">↗</span>
        </article>
        <article class="capability-row" data-target="intelligence" tabindex="0" role="listitem">
          <div class="capability-num">04</div>
          <div><h3>NOAH Intelligence</h3><p>Connect spend, revenue, conversions, attribution, and partner performance into a clearer view.</p></div>
          <span class="capability-arrow">↗</span>
        </article>
      </div>
    </div>

    <div class="solutions-foot">
      <div class="optimization-line"><span class="optimization-mark">↻</span><div><b>Continuous Optimization</b><small>Intelligence continuously informs what to scale, adjust, and activate next.</small></div></div>
      <a class="text-link" href="#growth">Explore NOAH Solutions <span>→</span></a>
    </div>
  </div>
</section>
<section class="growth" id="growth">
  <div class="section-wrap growth-inner reveal">
    <div class="growth-head"><div class="section-kicker">How NOAH Works</div><h2 class="section-title">Growth Works Better<br>When Everything Connects.</h2><p class="section-copy">Media, partnerships, commerce, and performance data are often managed separately. NOAH connects them around one objective: turning demand into measurable growth.</p></div>
    <div class="growth-flow">
      <article class="growth-step"><div class="step-node">01</div><h3>Acquire</h3><p>Create demand through performance-led media and audience activation.</p><span class="micro">Demand Creation</span></article>
      <article class="growth-step"><div class="step-node">02</div><h3>Activate</h3><p>Extend reach through publishers, creators, affiliates, and strategic partners.</p><span class="micro">Distribution</span></article>
      <article class="growth-step"><div class="step-node">03</div><h3>Convert</h3><p>Connect high-intent consumers with commerce opportunities and NOAH-owned destinations.</p><span class="micro">Commerce</span></article>
      <article class="growth-step"><div class="step-node">04</div><h3>Optimize</h3><p>Use performance intelligence to understand what is working and improve what happens next.</p><span class="micro">Intelligence</span></article>
    </div>
    <div class="growth-cycle"><div class="cycle-mark">↻</div><div><strong>A continuous growth cycle—not a one-time funnel.</strong><small>Performance signals flow back into the system so the next activation can be smarter than the last.</small></div><div class="cycle-path">Demand → Distribution → Commerce → Intelligence</div></div>
  </div>
</section>`);

const solutionVisual=document.querySelector('.solutions-visual');
const capabilityRows=[...document.querySelectorAll('.capability-row')];
function activateSolution(target){
  if(!solutionVisual) return;
  solutionVisual.dataset.active=target;
  capabilityRows.forEach(row=>row.classList.toggle('is-active',row.dataset.target===target));
}
capabilityRows.forEach(row=>{
  row.addEventListener('mouseenter',()=>activateSolution(row.dataset.target));
  row.addEventListener('focus',()=>activateSolution(row.dataset.target));
  row.addEventListener('click',()=>activateSolution(row.dataset.target));
});
