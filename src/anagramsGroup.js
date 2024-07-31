function anagramsGroup(list) {
    const anagrams = {};

    list.forEach(eachWord => {
        const key = eachWord.split('').sort().join('');
        if (!anagrams[key]) {
            anagrams[key] = [];
        }
        anagrams[key].push(eachWord);
    });

    const tranformObjectIntoArray = Object.values(anagrams);

    const result = tranformObjectIntoArray.map(group => (group.length > 1 ? group : group[0]));

    return result;
}