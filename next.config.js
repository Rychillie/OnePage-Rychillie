module.exports = {
  images: {
    imageSizes: [160, 192],
    domains: ["rychillie.net", "2021.rychillie.net"],
    loader: "default",
    // path: 'https://localhost:3000/',
  },
};

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
