/*

  Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

*/

const firstNonRepeatingLetter = s => {
  const map = new Map()

  s.forEach(w => map.set(w.toLowerCase(), map.get(w) ? map.get(w) + 1 : 1))

  for (const [key, val] of map) {
    if (val === 1) {
      return key
    }
  }

  return null
}
