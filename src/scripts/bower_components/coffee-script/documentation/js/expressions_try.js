// Generated by CoffeeScript 1.8.0
var error;

alert((function() {
  try {
    return nonexistent / void 0;
  } catch (_error) {
    error = _error;
    return "And the error is ... " + error;
  }
})());