module.exports = function (grunt) {
    // configration
    grunt.initConfig({
        shell: {
            gitHub: {
                command: ['git add .', 'git commit -m "update code"', 'git push origin master'].join('&&')
            }
        }
    })

    //load plugins
    grunt.loadNpmTasks("grunt-shell");


    // deploy 
    grunt.registerTask("deploy", ["shell"])

}