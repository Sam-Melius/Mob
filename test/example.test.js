// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('concat two strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ('string 1, string 2');
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = concat(string1 + string2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

function concat(string1, string2);


