export default class Age {
  constructor(age) {
    this.age = age;
  }

  getMercuryAge() {
    return Math.floor(this.age / 0.24);
  }

  getVenusAge() {
    return Math.floor(this.age / 0.62);
  }

  getMarsAge() {
    return Math.floor(this.age / 1.88);
  }

  getJupiterAge() {
    return Math.floor(this.age / 11.86);
  }

  getYearsSinceBirthday(pastBirthday) {
    const earthYearsPassed = this.age - pastBirthday;
    return {
      earthYears: Math.floor(earthYearsPassed),
      mercuryYears: (earthYearsPassed / 0.24).toFixed(2),
      venusYears: (earthYearsPassed / 0.62).toFixed(2),
      marsYears: (earthYearsPassed / 1.88).toFixed(2),
      jupiterYears: (earthYearsPassed / 11.86).toFixed(2),
    };
  }
  getYearsUntilBirthday(untilBirthday) {
    const earthYearsUntil = untilBirthday - this.age;
    return {
      earthYears: Math.floor(earthYearsUntil),
      mercuryYears: (earthYearsUntil / 0.24).toFixed(2),
      venusYears: (earthYearsUntil / 0.62).toFixed(2),
      marsYears: (earthYearsUntil / 1.88).toFixed(2),
      jupiterYears: (earthYearsUntil / 11.86).toFixed(2),
    };
  }
}
