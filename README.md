# grunt-generatehtml

> A plug-in used to compile templates with supporting JSON into static HTML files.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-generatehtml --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-generatehtml');
```

## The "generatehtml" task

### Overview
In your project's Gruntfile, add a section named `generatehtml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  generatehtml: {
    files: [
		{src: 'template/index.handlebars', json: 'support/index.json', dest: 'dist/index.html'}
	]
  },
})
```

### Options

### Usage Examples
This example demonstrates how to take a Handlebars template, a supporting JSON file to generate a file to a given target.

```js
grunt.initConfig({
  generatehtml: {
    files: [
		{src: 'template/index.handlebars', json: 'support/index.json', dest: 'dist/index.html'}
	]
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
