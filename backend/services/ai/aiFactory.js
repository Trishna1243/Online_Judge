const GroqProvider = require("./providers/groqProvider");


const getAIProvider = () => {

    return new GroqProvider();

};


module.exports = {

    getAIProvider

};