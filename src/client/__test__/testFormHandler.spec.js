import "babel-polyfill";

const { handleSubmit } = require('..');

describe("Form Handler tests", () => {
    test('Check function exist', () => {
        expect(handleSubmit).toBeDefined()
    });
})


