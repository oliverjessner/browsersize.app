import terser from '@rollup/plugin-terser';

export default {
    input: './public/src/logic.js',
    output: [
        {
            file: './public/dist/bundle.js',
            format: 'iife',
        },
        {
            file: './public/dist/bundle.min.js',
            format: 'iife',
            plugins: [terser()],
        },

    ],
};
