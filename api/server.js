
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('combined'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'inventory-api' });
});

app.get('/', (_req, res) => {
  res.json({ ok: true, service: 'inventory-api', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`[startup] inventory-api listening on http://localhost:${PORT}`);
});
