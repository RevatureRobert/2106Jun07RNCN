const input = require('readline-sync');


const getAnswer = (question) => {
    return input.question(question)
}

const addMore = () => {
    return input.keyInYNStrict('Want to add more info?\n')
}

module.exports = {
    getAnswer,
    addMore
}