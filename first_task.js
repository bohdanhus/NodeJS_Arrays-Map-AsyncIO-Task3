
function getWordCounterReduce(testText) {
  let string = 'today I am learning a new method, This method is called reduce.'
  let arr = string.toLowerCase().replace(/[.,\s]/g, ' ').split(' ').filter(String);
    return arr.reduce((prev, next) => {
      prev[next] = (prev[next] + 1) || 1;
      return prev;
    }, {});
  }
//console.log(getWordCounterReduce())
module.exports = getWordCounterReduce;