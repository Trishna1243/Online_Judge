const LANGUAGE_CONFIG = {

    cpp: {

        image: "online_judge_cpp",

        sourceFileName: "code.cpp",

        compileCommand: "g++ code.cpp -O2 -std=c++17 -o code",

        runCommand: "./code < input.txt"

    },

    c: {

        image: "online_judge_c",

        sourceFileName: "code.c",

        compileCommand: "gcc code.c -O2 -o code",

        runCommand: "./code < input.txt"

    },

    python: {

        image: "online_judge_python",

        sourceFileName: "code.py",

        compileCommand: "true",

        runCommand: "python3 code.py < input.txt"

    },

    javascript: {

        image: "online_judge_javascript",

        sourceFileName: "code.js",

        compileCommand: "true",

        runCommand: "node code.js < input.txt"

    },

    java: {

        image: "online_judge_java",

        sourceFileName: "Main.java",

        compileCommand: "javac Main.java",

        runCommand: "java Main < input.txt"

    }

};

module.exports = LANGUAGE_CONFIG;