const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const siteMode = 'development'; // 'production' to minify JS and CSS

const siteTitle = 'Business Time';

const sitePages = [
    {
        slug: 'index',
        title: 'Home',
        template: 'template.html'
    },
    {
        slug: 'about',
        title: 'About Us',
        template: 'template.html'
    },
    {
        slug: 'portfolio',
        title: 'Portfolio',
        template: 'template.html'
    },
    {
        slug: 'story',
        title: 'Our Story',
        template: 'template.html'
    },
    {
        slug: 'terms',
        title: 'Terms',
        template: 'template.html'
    }
];

/*
 * Build HTML files.
 *
 * Data for pages is managed with the sitePages
 * object above, to loop through and utilize
 * HtmlWebpackPlugin().
 *
 * This array then gets merged with any other
 * plugins passed into the webpack build.
 */
var htmlFiles = [];

for ( let i = 0; i < sitePages.length; i++ ) {
    htmlFiles.push(
        new HtmlWebpackPlugin({
            filename: `${sitePages[i].slug}.html`,
            title: `${siteTitle} - ${sitePages[i].title}`,
            template: `./src/html/${sitePages[i].template}`,
            name: sitePages[i].title,
            page: sitePages[i].slug,
            sitePages: sitePages
        })
    )
}

/*
 * Configure Webpack.
 */
module.exports = {
    mode: siteMode,
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/main.js'
    },
    plugins: htmlFiles.concat([
        /*
         * Move compiled .scss to an actual .css file in the
         * final build.
         *
         * Oddly, this is not default behavior. Without this,
         * Webpack will include the CSS in <style> tags directly
         * in the website's head.
         */
        new MiniCssExtractPlugin({
            filename: './assets/css/[name].css'
        }),
        /*
         * Manually list all url() includes from .scss.
         *
         * When we're using HtmlWebpackPlugin, handling the
         * images URLs to resolve properly messes up how
         * `css-loader` resolves images.
         *
         * So in the `css-loader` loader below, we've disabled
         * url() includes, so that we can manually copy them
         * from here.
         */
        new CopyWebpackPlugin([
            {from: 'src/img/info-bg.jpg', to: 'assets/img/info-bg.jpg'},
            {from: 'src/img/quote-bg.jpg', to: 'assets/img/quote-bg.jpg'},
            {from: 'src/img/video-bg.jpg', to: 'assets/img/video-bg.jpg'},
            {from: 'src/font/muli-bold.ttf', to: 'assets/font/muli-bold.ttf'},
            {from: 'src/font/muli-light-italic.ttf', to: 'assets/font/muli-light-italic.ttf'},
            {from: 'src/font/muli-light.ttf', to: 'assets/font/muli-light.ttf'},
            {from: 'src/font/playfair-display-black.ttf', to: 'assets/font/playfair-display-black.ttf'},
            {from: 'src/font/playfair-display-regular.ttf', to: 'assets/font/playfair-display-regular.ttf'},
            {from: 'src/font/libre-baskerville-italic.ttf', to: 'assets/font/libre-baskerville-italic.ttf'}
        ])
    ]),
    // devtool: 'source-map', // Generating .map, but couldn't get them to actually work?
    module: {
        rules: [
            {
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false // url() includes disabled, see CopyWebpackPlugin() comments above.
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: siteMode === 'production' ? 'compressed' : 'expanded'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/img',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/svg',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
