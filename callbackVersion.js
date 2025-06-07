function useEnergy(prob) {
        const result = Math.floor(Math.random() * 100);
        return (result > prob);
}
/* 
mowYard	A function that will take in a person's name and a callback function. When the chore is complete, log "PERSON'S NAME mowed the yard." to the console.
 */

function mowYard(callback, name) {
    setTimeout(() => {console.log(`${name} mowed the lawn`); callback () }, 2000);
}

/* weedEat	A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished using the weed eater." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after mowing the yard." to the console. */

function weedEat (callback, name) {
   const outcome = useEnergy(10);
    setTimeout(() => {
        if (outcome === true) { console.log (`${name} finished using the weed eater`); callback()} 
        else { console.log(`${name} fell asleep after mowing the yard`)};}, 1500)}

// trimHedges	A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished trimming the hedges." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after weed eating the yard." to the console.

function trimHedges(callback, name) {
    const outcome = useEnergy(20);
    setTimeout (()=> { 
        if (outcome===true) {console.log ( `${name} finished trimming the hedges`);callback()}
        else { console.log (`${name} fell asleep after trimming the hedges`)}; }, 2000)
    ;
}
// collectWood	A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished collecting wood." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after trimming the hedges." to the console. 
function collectWood(callback, name) {
    const outcome = useEnergy(30);
    setTimeout (()=>{ 
        if (outcome===true){console.log ( `${name} finished collecting wood`); callback()} 
        else { console.log (`${name} fell asleep after trimming the hedges.`)} }, 2500);
}

// waterGarden	A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished watering the garden." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after collecting wood." to the console.

function waterGarden (callback, name) {
    const outcome =useEnergy(40);
    setTimeout (()=> {
        if(outcome=== true){console.log(`${name} finished watering the garden`); callback();} 
        else { console.log ( `${name} fell asleep after watering the garden`)}}, 500)
}


// doSummerChores	A function that will take in a person's name as an argument. This method will call the mowYard function, essentially wrapping your "callback hell." If all the chores are completed successfully, the function should log "PERSON'S NAME finished all their chores!"

function doSummerChores(name) {
    mowYard(() => {weedEat(() => { trimHedges(() => { collectWood(() => { waterGarden(() => { console.log(`${name} finished all their chores!`); }, name);}, name); }, name); }, name); }, name);
}
// I used Chatgpt to help me write the final summerChore function as I was confused as to why there needed to be arrow functions invoking each function. 


let name = "billy";
doSummerChores(name);
