import { calculator } from "./calculator.js";

describe("basic functions", () => {
  test("add", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(0, 2)).toBe(2);
    expect(calculator.add(2, 0)).toBe(2);
    expect(calculator.add(80, 255)).toBe(335);
  });

  test("subtract", () => {
    expect(calculator.subtract(1, 2)).toBe(1 - 2);
    expect(calculator.subtract(0, 2)).toBe(0 - 2);
    expect(calculator.subtract(2, 0)).toBe(2 - 0);
    expect(calculator.subtract(80, 255)).toBe(80 - 255);
  });

  test("divide", () => {
    expect(calculator.divide(1, 2)).toBe(1 / 2);
    expect(calculator.divide(0, 2)).toBe(0 / 2);
    expect(calculator.divide(2, 0)).toBe(2 / 0);
    expect(calculator.divide(80, 255)).toBe(80 / 255);
  });

  test("multiply", () => {
    expect(calculator.multiply(1, 2)).toBe(1 * 2);
    expect(calculator.multiply(0, 2)).toBe(0 * 2);
    expect(calculator.multiply(2, 0)).toBe(2 * 0);
    expect(calculator.multiply(80, 255)).toBe(80 * 255);
  });
});

describe("deal with string input", () => {
  expect(calculator.add(1, "dog")).toBe(NaN);
  expect(calculator.subtract("1", "dog")).toBe(NaN);
  expect(calculator.divide("1", "dog")).toBe(NaN);
  expect(calculator.multiply("1", "dog")).toBe(NaN);
});

describe("deal with no input", () => {
  expect(calculator.add("dog")).toBe(NaN);
  expect(calculator.subtract("dog")).toBe(NaN);
  expect(calculator.divide("dog")).toBe(NaN);
  expect(calculator.multiply("dog")).toBe(NaN);
});
