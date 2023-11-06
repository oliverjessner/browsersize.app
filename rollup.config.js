import terser from '@rollup/plugin-terser';
import htmlTemplate from 'rollup-plugin-generate-html-template';

const staging = {
    file: './public/dist/bundle.js',
    format: 'iife',
    plugins: [
        htmlTemplate({
            template: './public/html/home_template.html',
            target: './public/staging.html',
        }),
    ],
};
const production = {
    file: './public/dist/bundle.min.js',
    format: 'iife',
    plugins: [
        terser(),
        htmlTemplate({
            template: './public/html/home_template.html',
            target: './public/index.html',
        }),
    ],
};

export default {
    input: './public/src/logic.js',
    output: [staging, production],
};
