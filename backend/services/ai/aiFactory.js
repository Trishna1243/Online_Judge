const GeminiProvider = require("./providers/geminiProvider");

const getAIProvider = () => {

    return new GeminiProvider();

};

module.exports = {

    getAIProvider

};