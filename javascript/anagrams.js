/*

  Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

*/
const isAnagram = (s1, s2) => {
  const map = new Map()
  const words = s1.concat(s2)

  Array.from(words)
    .forEach(word => map.set(word, map.get(word) ? map.get(word) + 1 : 1))

  for (const [key, val] of map) {
    if (val % 2 !== 0) {
      return false
    }
  }

  return true
}

const anagrams = (word, words) => words.filter(_word => isAnagram(word, _word))

console.log(anagrams('abc', ['abc', 'abcd', 'ddddd']))
