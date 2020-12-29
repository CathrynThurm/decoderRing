const grid =
{
  '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
  '12': 'f', '22': 'g', '32': 'h', '42': ['i', 'j'], '52': 'k',
  '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
  '14': 'q', '24': 'r', '34': 's', '44': 't', '54': "u",
  '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z'
}
const values = Object.values(grid)
const keys = Object.keys(grid)

// main function that calls the encode and decode funcs
function polybius(input, encode = true) {
  input = input.toLowerCase()
  let result = ''

  //calls encode function if it is letters
  if (encode) { result = encodeFunc(input) }
  // calls decode function if its is numbers
  else { result = decodeFunc(input) }
  return result
}

// encode func
function encodeFunc(input) {
  result = ""

  for (let i = 0; i < input.length; i++) {
    if (!input[i].match(/[a-z]/)) { result += input[i] }
    values.forEach((value, index) => {
      if (input[i] === value[0] || input[i] === value[1]) { result += keys[index] }
    })
  }
  return result
}

// deconde func

function decodeFunc(input) {
  let newVar = ""
  result = ""
  let even = isEven(input)
  if (!even) { return false }

  for (let i = 0; i < input.length; i++) {
    if (!input[i].indexOf(' ')) { result += input[i] }
    else {
      newVar = input[i] + input[i + 1]
      i++
      if (newVar == 42) { result += "(i/j)" }
      keys.forEach((key, index) => {
          if (newVar === key && newVar != 42) { result += values[index] }
      })
    }
  }
  return result
}

function isEven(input) {
  let sum = 0


  for (let i = 0; i < input.length; i++) {
    if (input[i] != " ") { sum += 1 }
  }
  if (sum % 2 != 0) { return false }
  else { return true }

}

module.exports = polybius;