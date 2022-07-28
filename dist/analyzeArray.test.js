import { analyzeArray } from "./analyzeArray.js";

test("basic functions", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  expect(analyzeArray([])).toEqual({
    average: 0,
    min: Infinity,
    max: -Infinity,
    length: 0,
  });
});
