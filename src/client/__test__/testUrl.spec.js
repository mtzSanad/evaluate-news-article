import { checkForName } from '../js/checkURL'

describe("URL tests", () => {
    //Test  fail case
    test('Validating URL Fail', () => {
        expect(checkForName('hppp://localhost:8080')).toBe(false);
    });

    //Test success case
    test('Validating URL Sucess', () => {
        expect(checkForName('https://www.nytimes.com/2021/11/13/insider/dixie-fire-weather-3-d.html')).toBe(true);
    });
})