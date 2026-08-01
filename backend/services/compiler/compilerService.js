const { runCpp } = require("../runners/cppRunner");
const { runC } = require("../runners/cRunner");
const { runPython } = require("../runners/pythonRunner");
const { runJava } = require("../runners/javaRunner");
const { runJavaScript } = require("../runners/javascriptRunner");

async function executeCode(language, code, input) {

    console.log("=================================");
    console.log("Language Received:", language);
    console.log("=================================");

    switch (language) {

        case "cpp":
            return await runCpp(code, input);

        case "c":
            return await runC(code, input);

        case "python":
            return await runPython(code, input);

        case "java":
            return await runJava(code, input);

        case "javascript":
            return await runJavaScript(code, input);

        default:
            throw new Error("Unsupported Language");
    }
}

module.exports = {
    executeCode
};