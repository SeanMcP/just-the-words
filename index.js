var STRING = "string";

module.exports = function(
  string,
  safeCharacters,
  overrideDefaultSafeCharacters
) {
  if (typeof string !== STRING) {
    throw new TypeError(
      "Expected 'string' but received '" + typeof string + "'"
    );
  }
  var safe = "'’-";
  if (safeCharacters && typeof safeCharacters === STRING) {
    if (Boolean(overrideDefaultSafeCharacters)) {
      safe = safeCharacters;
    } else {
      safe += safeCharacters;
    }
  }
  return string
    .match(/[^\s]+/g) // Strip white-spaces
    .reduce(function(accumulator, item) {
      if (!item.match(/^[\W]+$/g)) {
        // Is it just non-characters?
        var regexString = "[^\\w" + safe + "]";
        var regex = new RegExp(regexString, "g");
        accumulator.push(item.replace(regex, ""));
        // accumulator.push(item.replace(/[^\w'-]/g, ""));
      }
      return accumulator;
    }, []);
};
