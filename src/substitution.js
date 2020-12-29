
// this function is the main function that gets called and calls the other functions.
function substitution(input, alphabet, encode = true) {
    if (alphabet.length != 26) { return false }
    if (duplicatesPresent(alphabet)) { return false }
    input = input.toLowerCase()

    let result = ""
    let alph = createAlphObject(alphabet)

    if (encode) { result = encodeFunc(input, alph) }
    else { result = decodeFunc(input, alph) }

    return result
}

// this function encodes the input with the corresponding alphabet
function encodeFunc(input, alphabet) {
    let values = Object.values(alphabet)
    let keys = Object.keys(alphabet)
    let result = ""
  
    for(let i = 0; i < input.length; i++) {
      if (!input[i].match(/[a-z]/)) { result += input[i] }
      keys.forEach((key, index) => {
        if(input[i] === key) {result += values[index]}
      })
    }
    return result
  }

// this function decodes the input with the corresponging alphabet
function decodeFunc(input, alphabet) {
    let values = Object.values(alphabet)
    let keys = Object.keys(alphabet)
    let result = ""
  
    for(let i=0; i < input.length; i++) {
      if (!input[i].match(/[a-z]/)) { result += input[i] }
      values.forEach((value, index) => {
        if(input[i] === value) {result += keys[index]}
      })
    }
    return result
  }

// this function creates an object with the given alphabet and the normal alphabet
function createAlphObject(alphabet) {
    let result = {}
    let normalAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < alphabet.length; i++) {
        result[normalAlph[i]] = alphabet[i]
    }
    return result
}


// this function checks for any duplicate letters in the given alphabet
function duplicatesPresent(alphabet) {
  let letters = []

  for (let i = 0; i < alphabet.length; i++) {
    letters.push(alphabet[i])
  }
  letters.sort((letterA, letterB) => (letterA < letterB? -1:1))
  for(let i = 0; i < letters.length; i++) {
    if(letters[i] === letters[i + 1]) {return true}
  }
  return false
}

module.exports = substitution;