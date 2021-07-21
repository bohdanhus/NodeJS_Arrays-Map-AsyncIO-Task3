let string = 'today I am learning a new method, This method is called reduce, Reduce is very good method. I Like that. I am.'


let arr = string.toLowerCase().replace(/[.,\s]/g, ' ').split(' ').filter(String);

function getWordCounterReduce() {
    return arr.reduce((prev, next) => {
      prev[next] = (prev[next] + 1) || 1;
      return prev;
    }, {});
  }

console.log(getWordCounterReduce(arr))