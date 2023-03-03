// Polyfill for reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback, initialValue) {
      let accumulator = initialValue === undefined ? undefined : initialValue;
      for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
          accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
          accumulator = this[i];
        }
      }
      return accumulator;
    };
  }
  
  // Polyfill for map
  if (!Array.prototype.map) {
    Array.prototype.map = function(callback) {
      let result = [];
      for (let i = 0; i < this.length; i++) {
        result.push(callback.call(undefined, this[i], i, this));
      }
      return result;
    };
  }
  
  // Polyfill for filter
  if (!Array.prototype.filter) {
    Array.prototype.filter = function(callback) {
      let result = [];
      for (let i = 0; i < this.length; i++) {
        if (callback.call(undefined, this[i], i, this)) {
          result.push(this[i]);
        }
      }
      return result;
    };
  }
  