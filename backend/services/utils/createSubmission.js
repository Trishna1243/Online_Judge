const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function createSubmission() {

    const submissionId = crypto.randomUUID();

    const submissionPath = path.join(
        __dirname,
        "../../temp",
        submissionId
    );

    fs.mkdirSync(submissionPath, { recursive: true });

    return {
        submissionId,
        submissionPath
    };

}

module.exports = {
    createSubmission
};