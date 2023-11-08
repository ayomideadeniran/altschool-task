function compareAndReplace() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    const output1 = document.getElementById("second-output");

    const words1 = input1.split(" ");
    const words2 = input2.split(" ");
    const duplicateWords = new Set();
    let totalWordsScanned = 0;
    let matchedWords = 0;
    let totalCharactersScrambled = 0;

    for (const word of words1) {
        if (words2.includes(word)) {
            duplicateWords.add(word);
            matchedWords++;
        }
        totalWordsScanned++;
    }

    const selectElement = document.getElementById("mySelect");
    const selectedValue = selectElement.value;

    let result1 = input1;
    let result2 = input2;

    for (const duplicateWord of duplicateWords) {
        const regex = new RegExp(`\\b${duplicateWord}\\b`, 'g');
        result1 = result1.replace(regex, selectedValue);
        result2 = result2.replace(regex, selectedValue);
        totalCharactersScrambled += (selectedValue.length - duplicateWord.length) * (result1.split(duplicateWord).length - 1);
    }

    const stats = `Words Scanned: ${totalWordsScanned}', Matched Words: ${matchedWords}, Characters Scrambled: ${totalCharactersScrambled}`;
    output.textContent = `${result1}`;
    output1.textContent = `${stats}`;

    clearInputs()
}


function clearInputs() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}
