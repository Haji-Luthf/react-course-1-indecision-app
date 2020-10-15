// Path is built-in module 
// This function is preferred over String concatenation so that it’s platform independent. 
const path = require('path');

// The module.exports property will hold an object which will contain configuration details for the Webpack.
// This property is used to expose this object to other files.

// module.exports explanation:
// entry - specifying entry point of our application
// output - specifying where to generate the final bundled file
// path - To join absolute path to the local path of public folder.
// loader - Webpack will compile the JSX into regular javascript code (ES6 to ES5) using the technique of loader.
// A loader lets you customize the behavior of Webpack when it loads a given file.
// babel-loader - Webpack plugin which enables Webpack to run babel for a given type of files
// /\.js$/ - // Regular expression for all files ending with .js
// style-loader - for inline styles
// sass-loader - to convert scss to css which the browser understands
// Source maps are useful not only to debug errors but also to get code information if something is printed successfully to the console
// cheap-module-eval-source-map - This will help Developers in debugging. Mentions the line number of actual file instead of bundle.js (compiled code of ES5)
// devServer - comes with features like speeding up the process of loading changes to the screen, auto refresh of webpack config changes.
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
    {
        test: /\.s?css$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};