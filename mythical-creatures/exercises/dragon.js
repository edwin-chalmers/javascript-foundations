function createDragon(name, rider, temperment) {
  return {
    name,
    rider,
    temperment
  } 
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
  dragon.timesEaten += 1;
  dragon.hungry = true;
  return dragon
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}