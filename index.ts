import { serveStatic } from 'hono/bun';
import { Hono } from 'hono';

const app = new Hono();
const [, , isStaging] = process.argv;

app.use('/*', serveStatic({ root: './public/' }));

if (isStaging === '--staging') {
    app.use('/staging', serveStatic({ path: './public/staging.html' }));
}

app.get('*', serveStatic({ path: './public/html/404.html' }));

export default app;
