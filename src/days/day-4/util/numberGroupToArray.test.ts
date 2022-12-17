import numberGroupToArray from "./numberGroupToArray";

test('numbers to an array', () => {
    expect(numberGroupToArray('1-5')).toEqual([1, 2, 3, 4, 5])
    expect(numberGroupToArray('2-3')).toEqual([2, 3])
    expect(numberGroupToArray('2-2')).toEqual([2])
    expect(numberGroupToArray('12-14')).toEqual([12, 13, 14])
})