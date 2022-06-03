const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    name: 'server',
    entry: {
        server: path.resolve(__dirname, 'server/server.ts'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', cssFilename: "dist/static/client.css"
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: "/client/components",
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.server.json',
                },
            },
            {
                test: /\.css?$/,
                exclude: "/client",
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ context: 'server', from: 'views', to: 'views' }],
        }),
        new MiniCssExtractPlugin()
    ],
}
