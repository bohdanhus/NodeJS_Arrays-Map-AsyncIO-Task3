let array = ['hours','apple', 'orange', 'apple', 'orange', 'apple', 'hours', 'days', 'hours'];

function getWordCounterReduce() {
    return array.reduce((prev, next) => {
      prev[next] = (prev[next] + 1) || 1;
      return prev;
    }, {});
  }
console.log(getWordCounterReduce(array)); 

