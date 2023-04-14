import Calculator from "../src/calculator.js";

describe('Calculator', () =>{

  test("should verify calculator object", () {
    const ageCalc = new AgeCalculator(13);
    expect(ageCalc).toEqual({earth: 13,mercury:54.16,venus: 20.96,mars: 6.91,jupiter:1.09});
  })

});