class BaseProvider {

    async generateHint(problem, code) {

        throw new Error("generateHint() not implemented");

    }

    async reviewCode(problem, code) {

        throw new Error("reviewCode() not implemented");

    }

}

module.exports = BaseProvider;