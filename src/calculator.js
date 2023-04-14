export default class AgeCalculator{
  constructor(name,age){
    this.name = name;
    this.age = age;
    this.calculations = {};
  }

  yearsPassed(years){
    const earthYears = this.age - years;
    this.calculations.earth = earthYears;
    this.calculations.mercury = Math.round(earthYears /.24 * 100) / 100;
    this.calculations.venus = Math.round(earthYears / .62 * 100) / 100;
    this.calculations.mars = Math.round(earthYears / 1.88 * 100) / 100;
    this.calculations.jupiter = Math.round(earthYears / 11.86 * 100) / 100;
  }

  futureYears(years){
    this.yearsPassed(this.age -(years-this.age));
  }
  CalculateMayFlyAge(){
    this.calculations.mayFlyAge = 60 / 5 * 24  * 365 * this.age;
  }
}