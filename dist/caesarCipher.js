export { caesarCipher };

function caesarCipher(arg, offset) {
  function normalizedOffset(letter) {
    var lower, upper;
    if (letter.charCodeAt(0) > 90) {
      lower = 97;
      upper = 123;
    } else {
      lower = 65;
      upper = 91;
    }

    let newOffset = letter.charCodeAt(0) + offset;
    return newOffset >= upper
      ? newOffset - Math.floor((newOffset - lower) / 26) * 26
      : newOffset;
  }

  return arg
    .split("")
    .map((e) => {
      if (e.match(/[a-z]/i)) {
        return String.fromCharCode(normalizedOffset(e));
      } else {
        return e;
      }
    })
    .join("");
}
