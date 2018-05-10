# CSS Zen Garden

@TODO

## NPM Packages

* `webpack`
* `webpack-cli` - Needed for interacting with Webpack via command line.
* `css-loader` - Get Sass from a `.scss` filed included via `require()` in JavaScript file.
* `node-sass` - Sass compiling in Node.
* `sass-loader` - Utilize `node-sass` on Webpack's extracted CSS from `css-loader`.
* `autoprefixer` - Adds backwards compatibility for CSS.
* `postcss-loader` - A version of `postcss` for Webpack; `postcss` uses `autoprefixer`.
* `mini-css-extract-plugin` - Add compiled CSS into its own file.
* `file-loader` - Process images in stream, coming from Sass `url()` includes.
* `copy-webpack-plugin` - Copies any files not directly in Webpack's stream, like the site's `index.html` file.
* `browser-sync` - Runs the local server to display website.
