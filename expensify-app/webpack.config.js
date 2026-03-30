// entry -> output
const path = require('path');

module.exports = {
   entry: './src/app.js', //property
   output:{
    path:path.join(__dirname,'public'),
    filename:'bundle.js'
   },
    module: {
    rules: [{
        loader: 'babel-loader',    
        test: /\.js$/,             // apply to all .js files
        exclude: /node_modules/    // skip node_modules
    },{
        test:/\.scss$/,
        use:[
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }]
   },
   devtool: 'eval-cheap-module-source-map',
   mode: 'development',
   devServer: {
    static: path.join(__dirname, 'public'),
   }
};