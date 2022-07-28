import { caps } from "./caps.js";

test("Works with normal strings", () => {
  expect(caps("d")).toBe("D");
  expect(caps("hello")).toBe("Hello");
  expect(caps("pancake")).toBe("Pancake");
});

test("Works with sentences", () => {
  expect(caps("hello shield!")).toBe("Hello shield!");
  expect(
    caps("hello shield, this is an even longer sentence, let's hope it works!")
  ).toBe("Hello shield, this is an even longer sentence, let's hope it works!");
});

test("Works with numbers", () => {
  expect(caps(3)).toBe(3);
  expect(caps(72727)).toBe(72727);
});

test("Works with strings starts with symbols", () => {
  expect(caps("!!")).toBe("!!");
  expect(caps("??")).toBe("??");
  expect(caps("**")).toBe("**");
});

test("Works with invalid input", () => {
  expect(caps()).toBe();
  expect(caps("")).toBe("");
});
