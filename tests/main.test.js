const polybius = require("../src/polybius")
const caesar = require("../src/caesar")
const substitution = require("../src/substitution")
const expect = require("chai").expect

describe("caesar", () => {
    it("Returns false if the shift input is not present", () => {
        const actual = caesar("thinkful")
        expect(actual).to.be.false
    })
    it("Returns false if the shift input is equal to 0.", () => {
        const actual = caesar("thinkful", 0)
        expect(actual).to.be.false
    })
    it("Returns false if the shift input is less than -25.", () => {
        const actual = caesar("thinkful", -33)
        expect(actual).to.be.false
    })
    it("Should return false if the shift input is greater than 25.", () => {
        const actual = caesar("thinkful", 33)
        expect(actual).to.be.false
    })
    it("Capital letters should be ignored", () => {
        const actual = caesar("Thinkful", 3)
        const expected = 'wklqnixo'
        expect(actual).to.equal(expected)
    })
    it("Returns the inputted statement with the letters shifted by the shift input amount.", () => {
        const actual = caesar("thinkful", -3)
        const expected = 'qefkhcri'
        expect(actual).to.equal(expected)
    })
    it("When encoding, loop through the alphabet and wrap around to the front of the alphabet", () => {
        const actual = caesar("z", 1)
        const expected = 'a'
        expect(actual).to.equal(expected)
    })
    it("When encoding, loops through the alphabet and wraps around to the end of the alphabet.", () => {
        const actual = caesar("Zebra Magazine", -1)
        const expected = 'ydaqz lzfzyhmd'
        expect(actual).to.equal(expected)
    })
    it("When decoding, loop through the alphabet and wrap around to either the front or the back of the alphabet.", () => {
        const actual = caesar('ydaqz lzfzyhmd', -1, false)
        const expected = "zebra magazine"
        expect(actual).to.equal(expected)
    })
    it("Should leave spaces where they are, as well as all non-alphabetic symbols.", () => {
        const actual = caesar("This is a secret message!", 8)
        const expected = 'bpqa qa i amkzmb umaaiom!'
        expect(actual).to.equal(expected)
    })
    it("Decodes the message if the encode param is false.", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        const expected = "this is a secret message!"
        expect(actual).to.eql(expected)
    })
})

describe("polybius", () => {
    it("Should convert the inputted message to their corresponding grid number.", () => {
        const actual = polybius("thinkful")
        const expected = '4432423352125413'
        expect(actual).to.equal(expected)
    })
    it("It maintains spaces in the message before and after encoding or decoding.", () => {
        const actual = polybius("Hello world")
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
    it("Decodes the inputted message if the encode var is false.", () => {
        const actual = polybius("3251131343 2543241341", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("Represents both I and J when 42 is decoded.", () => {
        const actual = polybius("4432423352125413", false)
        const expected = "th(i/j)nkful"
        expect(actual).to.equal(expected)
    })
    it("Represents 42 when i or j is encoded.", () => {
        const actual = polybius("i j")
        const expected = "42 42"
        expect(actual).to.eql(expected)
    })

    it("Should return a string as an output.", () => {
        const actual = polybius("Hello world")
        expect(actual).to.be.a('string')
    })
    it("Should return false when decoding if the number of characters in the input string (excluding) spaces is odd.", () => {
        const actual = polybius("3235 567", false)
        expect(actual).to.be.false
    })
    it("Ignores captial letters.", () => {
      const actual = polybius("HELLO World")
      const expected = '3251131343 2543241341'
      expect(actual).to.equal(expected)
    })
})

describe("substitution", () => {
    it("Should return false if the inputted alphabet is not exactly 26 letters long.", () => {
        const actual = substitution("Hello", "asdfgkh")
        expect(actual).to.be.false 
    })
    it("All characters of the inputted alphabet must be unique.", () => {
        const actual = substitution("hello", "abcabcabcabcabcabcabcabcyz")
        expect(actual).to.be.false 
    })
    it("Should encode the inputted message based on the alphabet given.", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    })
    it("Should decode the inputted message based on the alphabet given.", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = 'thinkful'
        expect(actual).to.equal(expected)
    })
    it("Capital letters should be ignored.", () => {
        const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.eql(expected)
    })
    it("Spaces should be maintained throughout", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)
    })
})