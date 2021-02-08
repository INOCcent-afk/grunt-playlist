const sass = require("node-sass");

module.exports = function (grunt) {
  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // pass in options to plugins, references to files etc
    concat: {
      js: {
        src: ["js/*.js"],
        dest: "dist/scripts.js",
      },
      css: {
        src: ["css/reset.css", "css/bootstrap.css", "css/styles.css"],
        dest: "dist/scripts.css",
      },
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: false,
      },
      dist: {
        files: [
          {
            src: "css/sass/styles.scss",
            dest: "css/styles.css",
          },
        ],
      },
    },

    uglify: {
      build: {
        files: [{
            src: "dist/scripts.js",
            dest: "dist/scripts.js"
        }],
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Register Tasks
};
