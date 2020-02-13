const RecursionSimulation = require('../Exercises/RecursionSimulation');

test('Recursion Simulation', () => {
    expect(RecursionSimulation(5)).toEqual(120);
    expect(RecursionSimulation(4)).toEqual(24);
    expect(RecursionSimulation(3)).toEqual(6);
})
