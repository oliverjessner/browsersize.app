import { serveStatic } from 'hono/bun';
import { Hono } from 'hono';

const app = new Hono();

// two routes producting and staging
// / /staging
// add npm scripts / bun scripts
// https://www.npmjs.com/package/rollup-plugin-generate-html-template
// BONUS: HTML for production minifien

app.use('/*', serveStatic({ root: './public/' }));
app.get('*', serveStatic({ path: './public/404.html' }));

export default app;
