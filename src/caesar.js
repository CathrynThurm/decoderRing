// This creates an array of the alphabet to be referenced in several different functions
const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// this is the main function that calls all other functions
function caesar(input, shift, encode = true) {
    
    // exits the function if the shift input is too high, too low, or not present
    if(!shift || shift < -25 || shift > 25) {return false}
    
    // This converts all letters in input into lowercase letters
    input = input.toLowerCase()
    let result = ""
    
    // calls either encodeFunc or decodeFunc based on the encode param
    if(encode) {result = encodeFunc(input, shift)}
    else{ result = decodeFunc(input, shift)}


    return result
}

// This function gets called when the encode param in caesar is true
// This function encodes the input param
function encodeFunc(input, shift) {
    let result = ""
    let amountLeft =0
    let newShift = 0

    for(let i = 0; i < input.length; i++) {
        // checks if any letter in input is a space or special character
        if(!input[i].match(/[a-z]/)){ result += input[i]}

        for(let j = 0; j < alph.length; j++) {
            if(input[i] == alph[j]) {
                if(alph[j + shift]) {result += alph[j + shift]}
                else if (shift > 0){
                    amountLeft = (alph.length -1) - j
                    newShift = shift - amountLeft
                    
                    result += alph[newShift -1]
                }
                else if(shift < 0) {
                    amountLeft = shift + j
                    result += alph[25 + amountLeft +1]
                }
            }
        }
    }
    return result
}

// This function gets called when the encode param in caesar is false
// This function decodes the input param
function decodeFunc(input, shift) {
    let result =""

    for(let i = 0; i < input.length; i++) {
        // checks if any letter in input is a space or special character
        if(!input[i].match(/[a-z]/)){ result += input[i]}

        for(let j = 0; j < alph.length; j++) {
            if(input[i] == alph[j]) {
                if(alph[j-shift]) {result += alph[j-shift]}
                else if (shift > 0){
                    let amountLeft = shift - j -1
                    result += alph[25 - amountLeft]
                }
                else if(shift < 0) {
                    amountLeft = (alph.length -1) - j
                    newShift = shift - amountLeft
                    result += alph[newShift +1]
                }
            }
        }
    }
    return result
}

module.exports = caesar;
