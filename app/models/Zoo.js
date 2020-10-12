class Zoo {
  addSmallAnimals(smallAnimalsArr) {
    this.smallAnimals.push(...smallAnimalsArr)
  }

  addMediumAnimals(mediumAnimalsArr) {
    this.mediumAnimals.push(...mediumAnimalsArr)
  }

  addBigAnimals(bigAnimalsArr) {
    this.bigAnimals.push(...bigAnimalsArr)
  }


  constructor() {
    this.smallAnimals = []
    this.mediumAnimals = []
    this.bigAnimals = []
  }
}
export default Zoo;