function myWordIsMyBond(sentence) {

    var myWords = sentence.split(" ");
  
    var longestWord = "";
    var shortestWord = "";
    var shortestWordLength = myWords[0].length;
    var longestWordLength = 1
    
  
    for (var i = 0; i < myWords.length; i++) {
  
      var wordLength = myWords[i].length;
      var word = myWords[i];
      if (wordLength > longestWordLength) {
        longestWord = word;
        longestWordLength = wordLength;
      }
  
      if (wordLength <= shortestWordLength) {
        shortestWord = word;
        shortestWordLength = wordLength;
      }
    }
  
    return `Longest word is ${longestWord}: [${longestWordLength} characters] and shortest word is ${shortestWord}: [${shortestWordLength} characters]`;
  }
  
  console.log(myWordIsMyBond("We drink your milkshare"));
  