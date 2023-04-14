import AgeCalculator from "../src/calculator.js";

describe('Calculator', () =>{

  test("should verify calculator object", () => {
    const ageCalc = new AgeCalculator("joe",514);
    expect(ageCalc).toEqual({name:"joe",age:514,calculations: {}});
  })

  test("calculate years passing based on inputted earth years", () => {
    const ageCalc = new AgeCalculator("joe",56);
    ageCalc.yearsPassed(43);
    expect(ageCalc.calculations).toEqual({earth: 13,mercury:54.17,venus: 20.97,mars: 6.91,jupiter:1.1}); 
  })

  test("calculate years yet to have been passed", () => {
    const ageCalc = new AgeCalculator("joe",56)
    ageCalc.futureYears(61);
    expect(ageCalc.calculations).toEqual({earth: 5,mercury:20.83,venus: 8.06,mars: 2.65,jupiter:0.42}); 
  })

});