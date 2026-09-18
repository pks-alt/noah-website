

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

const growthVisual=document.querySelector('.growth-v2-visual');
const growthSteps=[...document.querySelectorAll('.growth-v2-step')];
function activateGrowth(stage){
  if(!growthVisual) return;
  growthVisual.dataset.growthActive=stage;
  growthSteps.forEach(step=>step.classList.toggle('is-active',step.dataset.growthStage===stage));
}
growthSteps.forEach(step=>{
  step.addEventListener('mouseenter',()=>activateGrowth(step.dataset.growthStage));
  step.addEventListener('focus',()=>activateGrowth(step.dataset.growthStage));
  step.addEventListener('click',()=>activateGrowth(step.dataset.growthStage));
});
