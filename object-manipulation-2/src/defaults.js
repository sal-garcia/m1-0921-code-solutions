/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!Object.keys(target).includes(key)) {
      target[key] = source[key];
    }
  }
}
