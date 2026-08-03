import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (_, argv) => ({
  entry: './src/index.tsx',

  output: {
    path: resolve(__dirname, 'build'),
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
