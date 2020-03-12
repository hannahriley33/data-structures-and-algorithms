const {
  map,
} = require('./array-map.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('applies function to each element in the array', () => {
      expect(map([1, 2, 3], (num) => num * 4)).toEqual([4, 8, 12]);

    });
  });
});
