/** @type {import('next').NextConfig} */
require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|svg|eot|otf|ttf|woff|woff2|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    publicPath: './',
                    outputPath: 'static/',
                    name: '[name][hash].[ext]',
                },
            },
        });

        config.plugins.push(
            new Dotenv({
                path: path.join(__dirname, '.env'),
                // systemvars: true,
                ignoreStub: true
            }),
        );

        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }),
        );

        // if (process.env.NODE_ENV === 'development') {
        //     config.devtool = true;
        // }

        return config;
    }
};

module.exports = nextConfig;
