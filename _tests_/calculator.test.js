import AgeCalculator from "../src/calculator.js";

describe('Calculator', () =>{

  test("should verify calculator object", () => {
    const ageCalc = new AgeCalculator(13);
    expect(ageCalc).toEqual({earth: 13,mercury:54.17,venus: 20.97,mars: 6.91,jupiter:1.1  });
  })

});