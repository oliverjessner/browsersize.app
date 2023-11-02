import { serveStatic } from 'hono/bun';
import { Hono } from 'hono';

const app = new Hono();

// build a way to have a staging and production environment
// / for production & /staging for staging
// rollup for bundling and generating HTML files
// example https://www.npmjs.com/package/rollup-plugin-generate-html-template

app.use('/*', serveStatic({ root: './public/' }));
app.get('*', serveStatic({ path: './public/404.html' }));

export default app;
