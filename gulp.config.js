/**
 * global configuration object
 * to centralize the configuration in one place
 */

module.exports = {
    index: 'index.html',
    root: './',
    core: 'app/core/',
    build: 'build/app/',
    libs: 'bower_components/',
    images: 'content/images/*.*',
    icons: 'content/icons/*',
    jsfiles: [
        'app/**/*.module.js',
        'app/**/*.js'
    ],
    cssfiles: [
        'content/*.css'
    ],
    htmlfiles: [
        'app/**/*.html'
    ],
    bowerjson: './bower.json'
};
