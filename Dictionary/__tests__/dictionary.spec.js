const Dictionary = require('../Dictionary');

test('Dictionary', () => {
    const dictionary = new Dictionary();

    dictionary.add('one', 'two');
    expect(dictionary.count).toEqual(1);

    dictionary.add('file', 2);
    expect(dictionary.count).toEqual(2);

    const one = dictionary.find('one');
    expect(one).toEqual('two');

    dictionary.add('corona', 'virus');
    expect(dictionary.count).toEqual(3);

    const allDictionaryData = dictionary.showAll();
    expect(allDictionaryData).toEqual([{'one': 'two'},{ 'file': 2 },{'corona': 'virus'}])

    dictionary.delete('corona');
    expect(dictionary.count).toEqual(2);

    dictionary.clear();
    expect(dictionary.count).toEqual(0);
});
