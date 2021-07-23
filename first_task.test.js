
const getWordCounterReduce = require("./first_task")

describe("object", () => {
    it('mixed case text', () => {
        let result = {
            "red" : 1,
            "green" : 1,
            "blue" : 2,
        };
        expect(getWordCounterReduce("Blue green blue, red")).toStrictEqual(result);
    });

    it('lower case text', () => {
        let result = {
             "red" : 2,
            "green" : 1,
            "blue" : 1,
        };
        expect(getWordCounterReduce("red green blue red")).toStrictEqual(result);
    });
});
