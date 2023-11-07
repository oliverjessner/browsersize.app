import terser from '@rollup/plugin-terser';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import { minify } from 'html-minifier';
import fs from 'fs'; // import 'fs' module to read and write files

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
    ],
};

export default {
    input: './public/src/logic.js',
    output: [staging, production],
};

// minify the HTML file separately
(async () => {
    const outputHtmlFile = './public/index.html';
    const html = await fs.promises.readFile(outputHtmlFile, 'utf-8');
    const minifiedHtml = minify(html, {
        collapseWhitespace: true,
        removeComments: true,
    });
    await fs.promises.writeFile(outputHtmlFile, minifiedHtml, 'utf-8');
})();