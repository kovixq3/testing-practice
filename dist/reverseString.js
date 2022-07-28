export function reverseString(arg) {
  if (typeof arg !== "string")
    return "Hey i asked for strings... this is not a string.";
  return arg.split("").reverse().join("");
}
