const fs = require("fs");

function cleanupSubmission(submissionPath) {

    setTimeout(() => {

        try {

            if (fs.existsSync(submissionPath)) {

                fs.rmSync(submissionPath, {
                    recursive: true,
                    force: true
                });

                console.log("Deleted:", submissionPath);

            }

        } catch (error) {

            console.error("Cleanup Error:", error.message);

        }

    }, 500);

}

module.exports = {
    cleanupSubmission
};