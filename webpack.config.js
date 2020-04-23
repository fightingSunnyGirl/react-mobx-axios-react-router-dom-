module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader",
          { loader: 'css-loader', options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
    ],
    resolve: { extensions: ["*", ".js", ".jsx"] },
    devServer: {
      // contentBase: path.join(__dirname, "public/"),
      // port: 8081,
      // publicPath: "http://localhost:8081/dist/",
      // hotOnly: true,
      // compress: true,
      proxy: {
        '/api': {
          target: "http://master.laqu.com",
          pathRewrite: { "^/api": "" }
        }
      }
    },
    watchOptions: {
      ignored: /node_modules/
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  }
}