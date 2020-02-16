const DanceProgram = require('../Exercises/Dancers');

test('Dance Program', () => {
    const {maleDancers, femaleDancers} = DanceProgram('File.txt');
    expect(maleDancers.count).toEqual(1)
    expect(femaleDancers.count).toEqual(0)
})
