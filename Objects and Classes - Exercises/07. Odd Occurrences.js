function oddOccurences(input) {
    let wordsNum = {};    
    input.split(' ').forEach(word => (wordsNum[word.toLowerCase()]) ? wordsNum[word.toLowerCase()] += 1 : wordsNum[word.toLowerCase()] = 1);
    // Filtering objects is done in three steps:
    // 1. Convert the object into nested lists, using Object.entries(obj) [[a1, a2], [b1, b2]...[an, bn]], where a1, b1, bn are the object keys and a2, b2, bn are the values
    // 2. Filter the data, using filter()
    // 3. Convert the filtered list, using Object.fromEntries()
    let filteredData = Object.fromEntries(Object.entries(wordsNum).filter(([key, value]) => value % 2 !== 0));
    console.log(Object.keys(filteredData).join(' '));
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');