const path = require("path");


const DOCKER_CONFIG = {

    DEFAULT_TIMEOUT: 40000,


    MEMORY_LIMIT: "256m",


    CPU_LIMIT: "1",


    WORKSPACE_CONTAINER_PATH: "/workspace",


    TEMP_DIRECTORY: path.join(
        process.cwd(),
        "temp"
    ),


    DISABLE_NETWORK: true,


    READ_ONLY_ROOT_FILESYSTEM: false,


    AUTO_REMOVE_CONTAINER: true

};


module.exports = DOCKER_CONFIG;