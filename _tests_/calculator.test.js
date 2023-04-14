import AgeCalculator from "../src/calculator.js";

describe('Calculator', () =>{

  test("should verify calculator object", () => {
    const ageCalc = new AgeCalculator("joe",514);
    expect(ageCalc).toEqual({name:"joe",age:514,calculations: {}});
  })

  test("calculate years passing based on inputted earth years", () => {
    const ageCalc = new AgeCalculator("joe",56);
    ageCalc.YearsPassed(43);
    expect(ageCalc.calculations).toEqual({earth: 13,mercury:54.17,venus: 20.97,mars: 6.91,jupiter:1.1});
  })

});