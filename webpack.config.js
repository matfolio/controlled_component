var config = {
   entry: './app.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   watch:true,
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react'],
               plugins:['transform-object-rest-spread']
            }
         }
      ]
   }
}

module.exports = config;