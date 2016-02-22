module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/app.js',
                dest: 'js/app.min.js'
            }
        },

        watch: {
            scripts: {
                files: ['js/app.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            } 
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'temp/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'temp/build/'
                }]
            }
        },

        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'css/main.min.css': ['css/main.css']
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin']);

};