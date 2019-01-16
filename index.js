describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });
 
    // tests continue...
  
    function addFive(someNumber) {
  //everything I want my function to do I put inside these curly braces
  //in this example, lets say I want my function, addFive, to add 5 to any number I pass in (someNumber), but only IF the number is greater than zero
  let result
  if (someNumber > 0) {
    result = someNumber + 5;
  }
  //at the end, if I want my function to return something, I need to state it:
  return result
}
 
//once our function is declared, we can call addFive, passing in values as arguments
//in the example test early, scuberGreetingForFeet(199) calls the function with 199 as the argument
 
addFive(10);
//returns 15
addFive(20);
//returns 25
addFive(-5);
//returns undefined
addFive(addFive(5));
//returns 15!! In this case, the return value of addFive(5), 10, is passed in as the argument to the outer addFive, returning 15
  });
});
