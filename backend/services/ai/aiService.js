const { getAIProvider } = require("./aiFactory");

const generateHint = async (problem, code) => {

    const provider = getAIProvider();

    return await provider.generateHint(

        problem,

        code

    );

};

const reviewCode = async (problem, code) => {

    const provider = getAIProvider();

    return await provider.reviewCode(

        problem,

        code

    );

};

module.exports = {

    generateHint,

    reviewCode

};