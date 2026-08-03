import { resolve as _resolve, dirname as __dirname, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export default (_, argv) => ({
  entry: './src/index.tsx',

  output: {
    path: _resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },

  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(woff|woff2|ttf|otf)$/i, type: "asset/resource", generator: { filename: "fonts/[name][ext]"} },
    ],
  },

  mode: argv.mode || 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: 'public',
        globOptions: {
          ignore: ['**/index.html'],
        },
      },
    ],
  }),
  ],

  devServer: {
    static: { directory: join(__dirname, 'public') },
    allowedHosts: 'all',
    historyApiFallback: true,
  },
});
