const {flatten2, flatten2, flatten3} = require('./index');

const base = [[1,2,[3]],4];
const expected = [1,2,3,4];

test('flatten1 works as expected', () => {
    expect(flatten1(base)).toEqual(expected);
});
test('flatten2 works as expected', () => {
    expect(flatten2(base)).toEqual(expected);
});
test('flatten3 works as expected', () => {
    expect(flatten3(base)).toEqual(expected);
});
