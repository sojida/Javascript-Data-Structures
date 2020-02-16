const dequePalindrome = require('../Exercises/DequePalindrome');

test('Deque Palindrome', () => {
    expect(dequePalindrome('madam')).toEqual(true)
    expect(dequePalindrome('Sammy')).toEqual(false)
    expect(dequePalindrome('Dad')).toEqual(true)
    expect(dequePalindrome('Racecar')).toEqual(true)
})

