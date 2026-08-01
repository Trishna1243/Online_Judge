const { exec } = require("child_process");

function runDocker({
    image,
    submissionPath,
    compileCommand,
    runCommand,
    timeout = 2000
}) {

    return new Promise((resolve, reject) => {

        const windowsPath = submissionPath.replace(/\\/g, "/");

        const command =
`docker run --rm \
--network none \
--memory="256m" \
--cpus="1" \
-v "${windowsPath}:/workspace" \
-w /workspace \
${image} \
bash -c "${compileCommand} && ${runCommand}"`;

        exec(
            command,
            {
                timeout
            },
            (error, stdout, stderr) => {

                if (error) {

                    return reject({

                        stdout,
                        stderr,
                        error

                    });

                }

                resolve({

                    stdout,
                    stderr

                });

            }

        );

    });

}

module.exports = {

    runDocker

};