const PezDispenser = require('../Exercises/PezDispenser');

test('PezDispenser', () => {
    const pez = new PezDispenser();

    pez.removeColour('yellow');
    expect(pez.ballsStore.every(item => item.colour !== 'yellow')).toEqual(true);
})

