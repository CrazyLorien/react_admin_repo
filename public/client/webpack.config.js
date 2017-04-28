const NODE_ENV = process.env.NODE_ENV || 'development',
    webpack = require('webpack'),
    path = require('path');


module.exports = {
    context: path.join(__dirname, "./"),
    entry: [
        "./main.jsx"
    ],
    output: {
        path: path.join(__dirname, "../javascript"),
        filename: "bundle.js"
    },
    devtool: '#inline-source-map',
    debug: true,
    module: {
        preLoaders: [],
        loaders: [
            // {
            //     test: /\.jsx?$/,
            //     // we are using `eslint-loader` explicitly since
            //     // we have ESLint module installed. This way we
            //     // can be certain that it uses the right loader
            //     loader: 'eslint-loader',
            //     include: path.join(__dirname, "./node_modules"),
            // },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: path.join(__dirname, "./"),
                presets: ["es2015", "react"]
            },
            {
                test: /\.css$/,
                use: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg?g|gif|svg|ttf|eot|woff|woff2)$/,
                loaders: [
                    'file?name=[path][name].[ext]?[hash]',
                ]
            }
        ]
    },
    resolve: {
        modulesDirectories: ['client', 'node_modules', './client/node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(), // не пересобирать js если возникли ошибки
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}