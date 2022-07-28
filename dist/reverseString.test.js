import { reverseString } from "./reverseString.js";

test("Works with normal strings", () => {
  expect(reverseString("d")).toBe("d");
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("pancake")).toBe("ekacnap");
});

test("Works with sentences", () => {
  expect(reverseString("hello shield!")).toBe("!dleihs olleh");
  expect(reverseString("hello shield, let's hope it works!")).toBe(
    "!skrow ti epoh s'tel ,dleihs olleh"
  );
});

test("Works with numbers", () => {
  expect(reverseString(3)).toBe(
    "Hey i asked for strings... this is not a string."
  );
  expect(reverseString(72727)).toBe(
    "Hey i asked for strings... this is not a string."
  );
});

test("Works with strings starts with symbols", () => {
  expect(reverseString("!!")).toBe("!!");
  expect(reverseString("??")).toBe("??");
  expect(reverseString("**")).toBe("**");
});

test("Works with invalid input", () => {
  expect(reverseString()).toBe(
    "Hey i asked for strings... this is not a string."
  );
  expect(reverseString("")).toBe("");
});
