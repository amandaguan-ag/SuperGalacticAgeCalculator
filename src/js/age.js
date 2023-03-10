export default class Age {
  constructor(age) {
    this.age = age;
  }

  getMercuryAge() {
    return Math.floor(this.age / 0.24);
  }

  getVenusAge() {}
}
