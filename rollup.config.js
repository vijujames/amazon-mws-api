import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';

// rollup.config.js
export default {
  entry: 'lib/mws.js',
  format: 'cjs',
  dest: 'dist/index.js', // equivalent to --output
  sourceMap: true,
  external: ['querystring', 'crypto', 'xml2js', 'request', 'tls'],
  plugins: [
    // resolve(),
    babel({
      exclude: 'node_modules/**/*',
    }),
  ],
};
