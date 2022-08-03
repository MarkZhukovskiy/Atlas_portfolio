const path = require('path')
const htmlWebpack = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");



 
module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: './index.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        // изображения
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        // шрифты и SVG
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
        // подключение стилей
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },

    ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
              { from: "src/img", to: "img" },
            ],
          }),
        new htmlWebpack({
            template: './src/html/index.html',
            filename: 'index.html',
            inject: true,
            minify: true,
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 9000,
            server: { baseDir: ['./dist'] }
        }),
        new FileIncludeWebpackPlugin(
            {
              source: './src/html'
            }
        )
    ]
}