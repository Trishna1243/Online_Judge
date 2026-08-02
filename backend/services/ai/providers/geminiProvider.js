const BaseProvider = require("./baseProvider");

class GeminiProvider extends BaseProvider {

    async generateHint(problem, code) {

        return {

            hint:
                "Gemini integration will generate a Socratic hint here."

        };

    }

    async reviewCode(problem, code) {

        return {

            review: [

                "Gemini integration will review this code."

            ]

        };

    }

}

module.exports = GeminiProvider;