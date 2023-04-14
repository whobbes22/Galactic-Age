import AgeCalculator from "../src/calculator.js";

describe('Calculator', () =>{

  test("should verify calculator object", () => {
    const ageCalc = new AgeCalculator("joe",514);
    expect(ageCalc).toEqual({name:"joe",age:514,calculations: {}});
  })

  test("calculate years passing based on inputted earth years", () => {
    const ageCalc = new AgeCalculator("joe",56);
    ageCalc.yearsPassed(43);
    expect(ageCalc.calculations).toEqual({earth: 13,mercury:54.17,venus: 20.97,mars: 6.91,jupiter:1.1,pluto:.05}); 
  })

  test("calculate years yet to have been passed", () => {
    const ageCalc = new AgeCalculator("joe",56);
    ageCalc.futureYears(61);
    expect(ageCalc.calculations).toEqual({earth: 5,mercury:20.83,venus: 8.06,mars: 2.66,jupiter:0.42,pluto: .02}); 
  })

  test("calculate mayfly years",() => {
    const ageCalc = new AgeCalculator("joe",56);
    ageCalc.calculateMayFlyAge();
    expect(ageCalc.calculations.mayFlyAge).toEqual(5886720);
  })

  test("compare may fly age to the suns age", () => {
    const ageCalc = new AgeCalculator("joe",56);
    ageCalc.calculateRatioOfMayFlyAgeToSun();
    expect(ageCalc.calculations.mayFlyAgeRatioToSun).toEqual(782);
  })

  test("planets in dog years choose an age and will convert to dog years in each planet",() => {
    const ageCalc = new AgeCalculator("joe",56);
    ageCalc.calculateDogYears(100);
    expect(ageCalc.calculations).toEqual({earth: 14.29,mercury:59.52,venus: 23.04,mars: 7.60,jupiter:1.20})

  })

});