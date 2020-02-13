const BaseConverter = require('../Exercises/BaseConverter');

test('Base Converter', () => {
    expect(BaseConverter(18, 2)).toEqual(10010);
    expect(BaseConverter(18, 3)).toEqual(200);
    expect(BaseConverter(18, 4)).toEqual(102);
    expect(BaseConverter(18, 5)).toEqual(33);
    expect(BaseConverter(18, 6)).toEqual(30);
    expect(BaseConverter(18, 7)).toEqual(24);
    expect(BaseConverter(18, 8)).toEqual(22);
    expect(BaseConverter(18, 9)).toEqual(20);
});
