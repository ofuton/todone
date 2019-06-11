const path = require('path');

const src = path.resolve(__dirname, 'src', 'js');
const dist = path.resolve(__dirname, 'dist', 'js');

config = {
    entry: {
        content: path.join(src, 'content'),
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },

    output: {
        path: dist,
        filename: '[name].js'
    },

    resolve: {
        extensions: [ '.js', '.ts' ],
        modules: [src, 'node_modules']
    }
};

module.exports = config
