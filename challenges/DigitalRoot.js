const execute = (digit) => {
    const result = createArrayFromDigit(digit).reduce((a, b) => { return a + b }, 0)
    return result < 10 ? result : execute(result)

}

const createArrayFromDigit = (s) => {
    return Array.from(String(s), Number)
}


module.exports = { execute }