const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

const judgeVegetable = function (vegetables, metric) {
  let bestVeggie = vegetables[0];

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > bestVeggie[metric]) {
      bestVeggie = vegetables[i];
    }
  }
  return bestVeggie.submitter;
};
console.log(judgeVegetable(vegetables, metric));

/*const judgeVegetable = function (vegetables, metric) {
 
  
  if(metric==="redness"){
    let bestSubmitter=0;
    let bestRedness=0;
    for(let i=0; i<vegetables.length;i++){
      if(vegetables[i].redness>bestRedness){
        bestRedness=vegetables[i].redness;
        bestSubmitter= i;
      } 
    } 
    return vegetables[bestSubmitter].submitter;
  }
  
  if(metric==="plumpness"){
    let bestSubmitter=0;
    let bestPlumpness=0;
    for(let i=0; i<vegetables.length;i++){
      if(vegetables[i].plumpness>bestPlumpness){
        bestPlumpness=vegetables[i].plumpness;
        bestSubmitter= i;
      } 
    } 
    return vegetables[bestSubmitter].submitter;
  }
    
};*/
