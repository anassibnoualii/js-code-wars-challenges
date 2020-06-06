
const execute = (s) => {
    const hiddenCharachter = '#'
    const lengthMinusFour = maskedPartLength(s, 4)
    //We can use slice instead of substr -> s.slice(-4)
    //Also replace with regex instead of repeat -> s.slice(0,-4).replace(/./g, '#')
    return lengthMinusFour <= 0 ? s : hiddenCharachter.repeat(lengthMinusFour).concat(s.substr(lengthMinusFour))

}

const maskedPartLength = (s, number) => {
    return s.length - number 
}

module.exports = {
    execute
}