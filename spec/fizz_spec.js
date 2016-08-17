describe("fizz_buzz", function() {
  var subject

  it("#retuns number if no conditions are met", function() {
    expect(subject.fizz_buzz(1)).toEqual(1);
  });

  it("#returns 'fizz' if number is divisible by 3", function() {
    expect(subject.fizz_buzz(6)).toEqual('Fizz');
  });

  it("#returns 'buzz' if number is divisible by 5", function() {
    expect(subject.fizz_buzz(10)).toEqual('Buzz');
  });

  it("#returns 'fizz buzz' if number is divisible by 15", function() {
    expect(subject.fizz_buzz(30)).toEqual('FizzBuzz');
  });

});
