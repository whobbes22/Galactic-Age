export default class AgeCalculator{
  constructor(name,age){
    this.name = name;
    this.age = age;
    this.calculations ={};
  }

  // constructor(earthYears){
  //   this.earth = earthYears;
  //   this.mercury = Math.round(earthYears /.24 * 100) / 100;
  //   this.venus = Math.round(earthYears / .62 * 100) / 100;
  //   this.mars = Math.round(earthYears / 1.88 * 100) / 100;
  //   this.jupiter = Math.round(earthYears / 11.86 * 100) / 100;
  // }
}