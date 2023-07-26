// Explain the code snippet below:

describe('My First Test', () => {
  //We will be describing what kind of test we will do; in this instance, it's our first test.
  it('Does not do much!', () => {
    //it or test while checking to see if this aspect of the application behaves as expected.
    expect(true).to.equal(true); //Here we expect the value to be "true",  the .to.equal will check if the value of expect is equal to the value that it holds in this case, "true" If it is, the test will pass. If not, the test will not pass.
  });
});

// Make sure to define the following aspects of the code above:
// Describe
// It
// Expect
// .to.equal
