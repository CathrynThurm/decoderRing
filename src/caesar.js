const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


function caesar(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25) {return false}

    input = input.toLowerCase()
    let result = ""

    if(encode) {result = encodeFunc(input, shift)}
    else{ result = decodeFunc(input, shift)}


    return result
}

function encodeFunc(input, shift) {
    let result = ""
    let amountLeft =0
    let newShift = 0

    for(let i = 0; i < input.length; i++) {
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

function decodeFunc(input, shift) {
    let result =""

    for(let i = 0; i < input.length; i++) {
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