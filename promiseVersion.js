function useEnergy(prob) {
        const result = Math.floor(Math.random() * 100);
        return (result > prob);
}
let name = "billy";


function mowYard(name) { 

    return new Promise ((resolve,reject) => { 
    setTimeout(() => 
    {resolve(`${name} mowed the lawn`)}, 2000)})}

function weedEat (name) {
   return new Promise ((resolve,reject)=> {
    const outcome = useEnergy(10);
    setTimeout(() => {
        if (outcome === true) { resolve (`${name} finished using the weed eater`)} 
        else { reject(`${name} fell asleep after mowing the yard`)};}, 1500)}
    )}

function trimHedges(name) {
    return new Promise ((resolve,reject)=> {
        const outcome = useEnergy(20);
        setTimeout (()=> { 
        if (outcome===true) {resolve(`${name} finished trimming the hedges`)}
        else {reject(`${name} fell asleep after trimming the hedges`)};}, 2000)
    ;})}

function collectWood(name) {
    return new Promise ((resolve,reject) => {const outcome = useEnergy(30);
    setTimeout (()=>{ 
        if (outcome===true){resolve ( `${name} finished collecting wood`)} 
        else { reject(`${name} fell asleep after trimming the hedges.`)}}, 2500);})
}

function waterGarden (name) {
    return new Promise ((resolve,reject)=> {
    const outcome =useEnergy(40);
    setTimeout (()=> {
        if(outcome=== true){resolve(`${name} finished watering the garden`)} 
        else { reject ( `${name} fell asleep after watering the garden`)}}, 500)
})}

mowYard(name)
  .then(value => {
    console.log(value);
    return weedEat(name);
  })
  .then(value => {
    console.log(value);
    return trimHedges(name);
  })
  .then(value => {
    console.log(value);
    return collectWood(name);
  })
  .then(value => {
    console.log(value);
    return waterGarden(name);
  })
  .then(() => {
    console.log(`${name} finished all their chores!`);
  })
  .catch(error => {
    console.log(error); 
  });
