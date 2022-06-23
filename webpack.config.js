module.exports = {
   resolve: {
      fallback: {
        util: require.resolve("util/"),
        path: require.resolve("path-browserify"),
        buffer: require.resolve("buffer/"),
        crypto: require.resolve("crypto-browserify"),
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        os: require.resolve("os-browserify/browser"),
        vm: require.resolve("vm-browserify"),
        stream: require.resolve("stream-browserify"),
        constants: require.resolve("constants-browserify"),
        assert: require.resolve("assert/"),
      },
    },

 };