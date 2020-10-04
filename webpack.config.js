const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"production",
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      }),
      new MiniCssExtractPlugin({
          filename: "style.css"
        })
    ],
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                 "sass-loader"
              ],
          },
          { 
            test: /\.(woff|woff2|eot|ttf)$/,
            exclude: /node_modules/,
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              outputPath: 'fonts/'
            } 
          },
          { test: /\.(png|svg|jpg|gif)$/,
            use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                name: "[name].[ext]",
                outputPath: "images/",
                publicPath: "images/"
              } 
            }
            ]
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
              attributes: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'data-src',
                    type: 'src',
                  },
                ]
            }
          }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          }
        ]
      },
};