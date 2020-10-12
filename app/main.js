import Alligator from "./models/Alligator.js"
import Cat from "./models/Cat.js"
import Dog from "./models/Dog.js"
import Elephant from "./models/Elephant.js"
import Hippo from "./models/Hippo.js"
import Jaguar from "./models/Jaguar.js"
import Lion from "./models/Lion.js"
import Monkey from "./models/Monkey.js"
import Penguin from './models/Penguin.js'
import Rabbit from "./models/Rabbit.js"
import Rhino from "./models/Rhino.js"
import Zoo from "./models/Zoo.js"

let pen = new Penguin("Pen", "blue", "male", 10)
let ally = new Alligator('Ally', 'green', "female", 150)
let pocket = new Cat('Pocket', 'grey', 'female', 4)
let fenix = new Dog('Fenix', 'brown', 'male', 50)
let hip = new Hippo('Hippo', 'grey', 'male', 2000)
let rab = new Rabbit('Rab', 'black', 'female', 5)
let monk = new Monkey('Monk', 'brown', 'female', 15)
let ryan = new Rhino('Ryan', 'grey', 'female', 1750)
let elly = new Elephant('Elly', 'grey', 'male', 2500)
let puma = new Jaguar('Puma', 'black', 'female', 200)
let simba = new Lion('Simba', 'orange', 'male', 350)
let darla = new Lion('Darla', 'orange', 'female', 400)
console.log(puma)
let smallAnimals = [pen, pocket, rab, monk,]
let mediumAnimals = [ally, fenix, puma, simba, darla]
let bigAnimals = [hip, ryan, elly]
let newCats = [new Cat('Kitty', 'white', 'female', 2), new Cat('Cleo', 'black', 'female', 8)]



let zoo = new Zoo()
zoo.addSmallAnimals(smallAnimals)
zoo.addMediumAnimals(mediumAnimals)
zoo.addBigAnimals(bigAnimals)
zoo.addSmallAnimals(newCats)




function drawSmallAnimals() {
  let template = ""
  zoo.smallAnimals.forEach(animal => template += /*html*/`
  <div class="col-4 my-2 text-center">
  <div class="border-dark shadow-lg my-1 w-75 rounded">
  <h1>Small Animal</h1>
  <h2>${animal.name}</h2>
  <h3>${animal.color}</h3>
  <h3>${animal.gender}</h3>
  <h3>${animal.weight} lbs</h3>
  </div>
  </div>
  `)
  document.querySelector("#small-animals").innerHTML = template
}

function drawMediumAnimals() {
  let template = ""
  zoo.mediumAnimals.forEach(animal => template += /*html*/`
  <div class="col-4 my-2 text-center">
  <div class="border-dark shadow-lg my-1 w-75 rounded">
  <h1>Medium Animal</h1>
    <h2>${animal.name}</h2>
    <h3>${animal.color}</h3>
    <h3>${animal.gender}</h3>
    <h3>${animal.weight} lbs</h3>
  </div>
  </div>
  `)
  document.querySelector("#medium-animals").innerHTML = template
}

function drawBigAnimals() {
  let template = ""
  zoo.bigAnimals.forEach(animal => template += /*html*/`
  <div class="col-4 my-2 text-center">
  <div class="border-dark shadow-lg my-1 w-75 rounded">
  <h1>Big Animal</h1>
    <h2>${animal.name}</h2>
    <h3>${animal.color}</h3>
    <h3>${animal.gender}</h3>
    <h3>${animal.weight} lbs</h3>
  </div>
  </div>
  `)
  document.querySelector("#big-animals").innerHTML = template
}

drawSmallAnimals()
drawMediumAnimals()
drawBigAnimals()