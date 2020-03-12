const {
  BinarySearch

} = require('./array-binary-search.js');



describe('BinarySearch', () => {
  it('returns the index of the arrays element that is equal to the search key, or -1 if the element does not exist', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const searchKey = 3;

    expect(BinarySearch(sortedArray, searchKey)).toEqual(3);
      
      })
    });

