import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'out/src/index.js',
    output: [
        {
            file: 'web/bundle.js',
            format: 'iife',
        },
        {
            file: 'web/bundle.min.js',
            format: 'iife',
            plugins: [terser()],
        },
    ],
    plugins: [commonjs()],
};
