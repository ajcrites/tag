// Graciously acquired from https://gist.github.com/TJkrusinski/9507961
module.exports = function (grunt) {
    grunt.initConfig({
        concurrent: {
            dev: {
                tasks: ["supervisor", "watch"],
                options: {
                    logConcurrentOutput: true
                },
            },
        },

        watch: {
            browserify: {
                files: ["public/js/**/*.js"],
                tasks: ["browserify:dev"],
            },
        },

        browserify: {
            dev: {
                files: {
                    "public/dist/bundle.js": "public/js/main.js"
                },
            },
        },

        supervisor: {
            dev: {
                script: "server.js",
                options: {
                    watch: ["server.js", "app/**/*.js"]
                },
            },
        },
    });

    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-supervisor");

    grunt.registerTask("default", ["concurrent"]);
};
