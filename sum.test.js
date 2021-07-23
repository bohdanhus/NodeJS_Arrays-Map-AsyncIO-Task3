function sum (a) {
 return a.reduce((prev,next) => {
   return prev + next;
 }, 0);
};


// return words.reduce((prev, next) => {
//     //console.log('before',prev)
//     prev[next] = (prev[next] + 1) || 1;
//     //console.log('after',prev)
//     return prev;
//   }, {});

describe("object", () => {
    it('calculate sum ', () => {      
        expect(sum([])).toStrictEqual(0);
        expect(sum([1])).toStrictEqual(1);
        expect(sum([1,2])).toStrictEqual(3);
        expect(sum([1,2,3,4,5])).toStrictEqual(15)
        });
});
