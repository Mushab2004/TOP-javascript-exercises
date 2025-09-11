const palindromes = function (str) {
    // Normalize: lowercase and remove non-alphanumeric chars
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if cleaned string is the same reversed
    return cleaned === cleaned.split('').reverse().join('');
  };
  
  // Do not edit below this line
  module.exports = palindromes;
  