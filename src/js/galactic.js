export default class Galactic {
  constructor(earth, mercury, venus, mars, jupiter) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }
  getAge(age) {
    if (this.earth) {
      return age;
    } else if (this.mercury) {
      return Math.floor(age / 0.24);
    }
  }
}
