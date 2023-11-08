import { minify } from 'html-minifier';
import fs from 'fs';

(async () => {
    const outputHtmlFile = './public/index.html';
    const html = await fs.promises.readFile(outputHtmlFile, 'utf-8');
    const minifiedHtml = minify(html, {
        collapseWhitespace: true,
        removeComments: true,
    });
    await fs.promises.writeFile(outputHtmlFile, minifiedHtml, 'utf-8');
})();
