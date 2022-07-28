export { caps };

const caps = (arg) =>
  typeof arg !== "string" || !arg
    ? arg
    : arg[0].toUpperCase() + arg.substring(1);
