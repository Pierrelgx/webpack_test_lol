// Webpack utilise ce module Node.js pour travailler avec les dossiers.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Ceci est la configuration principale de ton projet.
// Ici, tu peux écrire les différentes options que tu souhaites, et dire à Webpack quoi faire.
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "index.html"),
          filename: "index.html"
      })],
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
      }),
      
  
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: "[name].[ext]",
                outputPath: "images",
            }
          },
        ],
      },
      {
        test:/\.css$/i,
        use: ["MiniCssExtractPlugin.loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: [
          // notre loader Babel de tout à l'heure...
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // On le met en tout premier, afin qu'il soit exécuté en dernier,
            // une fois que tous les changements souhaités sont appliqués à notre CSS.
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  

  mode: 'development',
};