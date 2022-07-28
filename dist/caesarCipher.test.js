import { caesarCipher } from "./caesarCipher.js";

describe("basic function", () => {
  test("working with words", () => {
    expect(caesarCipher("hello", 5)).toBe("mjqqt");
    expect(caesarCipher("pancake", 3)).toBe("sdqfdnh");
  });
  test("working with capitalized words", () => {
    expect(caesarCipher("Hello", 5)).toBe("Mjqqt");
    expect(caesarCipher("Pancake", 3)).toBe("Sdqfdnh");
  });
  test("should loop from the start if possible", () => {
    expect(caesarCipher("zebra lovers", 5)).toBe("ejgwf qtajwx");
    expect(caesarCipher("Wilbur Soot", 7)).toBe("Dpsiby Zvva");
  });
  test("working with sentences", () => {
    expect(caesarCipher("hello pancakes", 5)).toBe("mjqqt ufshfpjx");
    expect(caesarCipher("the source is that i made it the fuck up", 5)).toBe(
      "ymj xtzwhj nx ymfy n rfij ny ymj kzhp zu"
    );
  });
  test("working with punctuation", () => {
    expect(caesarCipher("hello!", 5)).toBe("mjqqt!");
    expect(caesarCipher("pancake?", 5)).toBe("ufshfpj?");
  });
  test("working with bigger numbers", () => {
    expect(caesarCipher("hello", 54)).toBe("jgnnq");
    expect(caesarCipher("pancake", 288)).toBe("rcpecmg");
  });
});
