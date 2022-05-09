const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const isProduction = process.env.NODE_ENV == 'production';

const filename = (ext) => isProduction? `[name].[contenthash].${ext}`: `[name].${ext}`



const config = {
    entry: ['./src/script.js', './src/style.scss'], 
    //devtool: isProduction? false : 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext][query]',
      filename: `./${filename('js')}`,
    },
    devServer: {
      historyApiFallback: true,
      static: {
          directory: path.join(__dirname, 'dist'),
      },
      open: true,
      hot: true,
      compress: true,
      port: 8000,
      client: {
      overlay: {
        warnings: false
      }
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: isProduction,
      inject: 'body',
      filename: 'index.html',
      
    }),
    new MiniCssExtractPlugin({
      filename: `./${filename('css')}`,
    }),
    ],
    module: {
      rules: [
        { test: /\.(html)$/, use: ['html-loader'] },
        {
          test: /\.(s[ac]|c)ss$/i, 
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }, 
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: isProduction ? 'asset' : 'asset/resource', 
          generator: {
            filename: 'img/[hash][ext][query]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]'
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/, 
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, 
            },
          },
        },
      ],
    }
    

}

  
module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
    } else {
        config.mode = 'development';
    }
    return config;
};
