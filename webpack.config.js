const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i, // Regular expression to match image extensions
        use: "file-loader", // Loader to handle image files
        options: {
          name: "[path][name].[ext]", // Output filename format for images
        },
      },
    ],
  },
};
