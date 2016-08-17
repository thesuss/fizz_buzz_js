describe("fizz_buzz", function() {

  var subject

  beforeEach(function() {
      subject = new fizz_buzz();
  });

  it("#retuns number if no conditions are met", function() {
    expect(subject.do_fizz(1)).toEqual(1);
  });

  it("#returns 'fizz' if number is divisible by 3", function() {
    expect(subject.do_fizz(6)).toEqual('Fizz');
  });

  it("#returns 'buzz' if number is divisible by 5", function() {
    expect(subject.do_fizz(10)).toEqual('Buzz');
  });

  it("#returns 'fizz buzz' if number is divisible by 15", function() {
    expect(subject.do_fizz(30)).toEqual('FizzBuzz');
  });

});
