const isCharANumber = c => (c >= '0' && c <= '9')

const toUnderscore = str => {
  let newStr = ''

  if (isCharANumber(str)) {
    return String(str)
  }
  
  for (let i = 0; str[i]; ++i) {
    if (str[i] === str[i].toUpperCase() && i !== 0 && !isCharANumber(str[i])) {
      newStr += '_'
    }
    console.log(str[i])
    newStr += str[i].toLowerCase()
  }

  return newStr
}