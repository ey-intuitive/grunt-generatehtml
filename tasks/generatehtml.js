/*
 * grunt-ic-templates
 * 
 *
 * Copyright (c) 2013 Intuitive Company
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    var Handlebars = require('handlebars');

    grunt.registerMultiTask('generatehtml', 'Your task description goes here.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            punctuation: '.',
            separator: ', '
        });

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            var src = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                }
                else {
                    return true;
                }
            }).map(function (filepath) {
                    // Read file source.
                    return grunt.file.read(filepath);
                }).join(grunt.util.normalizelf(options.separator));

            // Handle options.
            src += options.punctuation;

            var template = Handlebars.compile(src);

            if (!grunt.file.exists(f.json)) {
                grunt.log.warn('JSON file "' + f.json + '" not found.');
            }

            var json = JSON.parse(grunt.file.read(f.json));

            // Write the destination file.
            grunt.file.write(f.dest, template(json));

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
