import { terser } from "rollup-plugin-terser"
/**
 * Rollup configuration
 */
export default {
  input: 'src/Game.js',
  plugins: [
    terser({
      mangle: false
    })
  ],
  output: {
    file: 'dist/game.js',
    format: 'esm'
  }
};
