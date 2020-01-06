module.exports = function (grunt) {
    // configration
    grunt.initConfig({
        shell: {
            gitHub: {
                command: ['git add .', 'git commit -m "update code"', 'git push '].join('&&')
            },
            heroku: {
                command: ['git add .', 'git commit -m "update code"', 'git push '].join('&&')
            }
        }
    })

    //load plugins
    grunt.loadNpmTasks("grunt-shell");


    // deploy to github 
    grunt.registerTask("deployGit", ["shell:gitHub"]);

    // deploy to heroku
    grunt.registerTask("deployGit", ["shell:heroku"]);

}