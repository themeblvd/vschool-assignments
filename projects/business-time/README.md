# Business Times

@TODO

## NPM Packages

Below is a list of the dependencies in my `package.json` with brief explanations of why I'm using them.

* `webpack`
* `webpack-cli` - Needed for interacting with Webpack via command line.
* `babel-core` - JavaScript compiler to backwards-compat for ES6 stuff.
* `babel-loader` - Use babel with Webpack.
* `babel-preset-env` - Lets me specify the browsers I want to have backwards-compat for, with Babel.
* `html-webpack-plugin` - Generate site's static html files.
* `html-loader` - Include HTML partials within `html-webpack-plugin` template.
* `css-loader` - Get Sass from a `.scss` filed included via `require()` in JavaScript file.
* `node-sass` - Sass compiling in Node.
* `sass-loader` - Utilize `node-sass` on Webpack's extracted CSS from `css-loader`.
* `mini-css-extract-plugin` - Add compiled CSS into its own file.
* `copy-webpack-plugin` - Copy a manually made list of all url() included files from Sass. Needed because getting image url paths to resolve properly in HTML files from `html-webpack-plugin` plugin messes up url() include paths from `css-loader`.
