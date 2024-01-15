function convertToRoman(num) {
  // Define the symbols for Roman numerals
  const romanSymbols = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  // Initialize an empty string to store the Roman numeral representation
  let result = '';

  // Iterate through the symbols
  for (const { value, symbol } of romanSymbols) {
    // Repeat the symbol while the value is less than or equal to the number
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Examples
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
