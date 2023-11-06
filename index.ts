import { serveStatic } from 'hono/bun';
import { Hono } from 'hono';

const app = new Hono();
const [, , isStaging] = process.argv;

// BONUS: HTML for production minifien!!!!

app.use('/*', serveStatic({ root: './public/' }));

if (isStaging === '--staging') {
    app.use('/staging', serveStatic({ path: './public/staging.html' }));
}

app.get('*', serveStatic({ path: './public/404.html' }));

export default app;
