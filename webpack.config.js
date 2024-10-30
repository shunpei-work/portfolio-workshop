const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',  // 出力されるファイル名
              outputPath: 'images',          // 出力先フォルダ
            },
          },
        ],
      },
      {
        test:/\.css$/i,
        use:['style-loader','css-loader'],
      }
    ],  
  },
  resolve: {
    extensions: ['.js','.ts','.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true,
    open: true,
  },
  /* plugins: [  
    new BundleAnalyzerPlugin({
      // オプション設定（必要に応じて）
      analyzerMode: 'static', // 'server'、'static'、または 'disabled'を選択
      reportFilename: 'bundle-report.html', // 出力されるレポートファイル名
      openAnalyzer: true, // ビルド後にレポートをブラウザで開くか
    }),
  ], */
  performance: {
    hints: false, // 警告を無視
  },
}