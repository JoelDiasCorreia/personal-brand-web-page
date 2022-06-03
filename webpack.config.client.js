const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    name: 'client',
    entry: {
        client: path.resolve(__dirname, 'client/App.tsx'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname + '/dist/static'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.client.json',
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new CopyPlugin({
            patterns: [{ context: 'client', from: 'assets', to: 'assets' }],
        }),
        new MiniCssExtractPlugin()
    ],
}
