function fizz_buzz() {};

fizz_buzz.prototype.do_fizz = function(number) {
  if (number % 15 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  }else {
    return number;
  }

};
