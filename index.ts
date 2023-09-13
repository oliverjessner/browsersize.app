import { serveStatic } from 'hono/bun';
import { Hono } from 'hono';

const app = new Hono();

app.use('/*', serveStatic({ root: './public/' }));
app.get('*', serveStatic({ path: './public/404.html' }));

export default app;
