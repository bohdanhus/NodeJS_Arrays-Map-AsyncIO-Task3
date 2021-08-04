function getWordCounterReduce(testText) {
  let words = testText.toLowerCase().replace(/[.,\s]/g, ' ').split(' ').filter(String);
  console.log(words);
    return words.reduce((prev, next) => {
      //console.log('before',prev)
      prev[next] = (prev[next] + 1) || 1;
      //console.log('after',prev)
      return prev;
    }, {});
  }

module.exports = getWordCounterReduce;
