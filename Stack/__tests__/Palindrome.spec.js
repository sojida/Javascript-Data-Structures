const Palindrome = require('../Exercises/Palindrome');

test('Palindrome', () => {
    expect(Palindrome('Racecar')).toEqual(true);
    expect(Palindrome('Hello')).toEqual(false);
    expect(Palindrome('Madam')).toEqual(true);
});
