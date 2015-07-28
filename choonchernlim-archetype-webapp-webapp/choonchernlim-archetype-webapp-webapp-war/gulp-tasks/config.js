/**
 * Configuration for Gulp tasks.
 *
 * @type {{browserify: {entryFile: string, srcDir: string, outputDir: string}}}
 */

module.exports = {
    browserify : {
        entryFile : 'main.js',
        srcDir    : './src/main/webapp/resources/app/',
        outputDir : './src/main/webapp/resources/build/'
    }
};