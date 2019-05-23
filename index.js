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
  var safeUnderscore = false;
  var safe = "'’-";
  if (safeCharacters && typeof safeCharacters === STRING) {
    if (safeCharacters.includes("_")) {
      safeUnderscore = true;
      safeCharacters = safeCharacters.replace(/_/g, "");
    }
    if (Boolean(overrideDefaultSafeCharacters)) {
      safe = safeCharacters;
    } else {
      safe += safeCharacters;
    }
  }
  return (
    string
      // Remove double+ hyphens
      .replace(/(-+[-])/g, " ")
      // Split at new lines, tabs, white spaces
      .match(/[^\s]+/g)
      .reduce(function(accumulator, item) {
        // Checks for alphanumeric characters
        if (!item.match(/^[\W]+$/g)) {
          // Filters out puncuations (except safe)
          var regexString = "[^\\w" + safe + "]";
          if (!safeUnderscore) {
            regexString += "|_";
          }
          var regex = new RegExp(regexString, "g");
          accumulator.push(item.replace(regex, ""));
        }
        return accumulator;
      }, [])
  );
};
