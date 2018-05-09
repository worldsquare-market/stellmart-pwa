const path = require('path');

module.exports = {
    mode: 'development',
    entry: {"bundle": './Client/app.tsx' },
    node: {
        fs: 'empty'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        publicPath:'wwwroot/dist/',
        filename: '[name].js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.css'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            // Not necessary unless you consume a module using `createClass`
            'create-react-class': 'preact-compat/lib/create-react-class'
        }
    },
    module: {
        rules: [
            {
                // Include ts, tsx, and js files.
                test: /\.(tsx?)|(js)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "typings-for-css-modules-loader?modules=true&namedExport=true"
                ]
            }
        ]
    }
}