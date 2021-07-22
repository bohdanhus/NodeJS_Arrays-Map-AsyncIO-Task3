
const getWordCounterReduce = require("./first_task")

let testText = "today I am learning a new method, This method is called reduce.";

describe("object", () => {
    it(`${testText}`, () => {
        let result = {
            "a" : 1,
            "am" : 1,
            "called" : 1,
            "i" : 1,
            "is" : 1,
            "learning" : 1,
            "method" : 2,
            "new": 1,
            "reduce" : 1,
            "this" : 1,
            "today" : 1,
        };
        expect(getWordCounterReduce(testText)).toStrictEqual(result);
    });
});
