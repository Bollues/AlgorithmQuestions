/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (!digits) return []
  const mapping = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  }
  let combinations = []
  let combination = []
  

  var backTrack = function(index) {
      if (index == digits.length) {
          console.log(combination)
          combinations.push(combination.join(''))
      } else {
          digit = digits[index]
          for (letter of mapping[digit]) {
              combination.push(letter)
              backTrack(index + 1)
              combination.pop()
          }
      }

  }

  backTrack(0)

  return combinations
};