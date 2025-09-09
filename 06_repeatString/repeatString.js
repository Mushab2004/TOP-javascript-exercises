const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'; // handle negative numbers
  
    let result = ''; // start with an empty string
  
    for (let i = 0; i < num; i++) {
      result += string; // append the string on each loop
    }
  
    return result;
  };
  
  // Do not edit below this line
  module.exports = repeatString;
  