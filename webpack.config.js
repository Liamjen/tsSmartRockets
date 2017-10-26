module.exports = {
    entry: './sketch.ts',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: "ts-loader"
        }
      ]
    },
    resolve: {
      extensions: [ ".ts", ".js" ]
    },
    output: {
      filename: 'bundle.js',
    }
  };