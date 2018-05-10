const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/entry.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './entry.js'
    },
    plugins: [
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
         * @TODO Explain
         */
        new CopyWebpackPlugin([
            {from: 'src/html/index.html', to: 'index.html'}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed' // compressed, expanded
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
                            name: '[name].[ext]',
                            publicPath: '../img'
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
                            name: '[name].[ext]',
                            publicPath: '../svg'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/font',
                            name: '[name].[ext]',
                            publicPath: '../font'
                        }
                    }
                ]
            }
        ]
    }
};
