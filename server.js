require('dotenv').config();
const { app, server } = require('./main-app');
const { PORT } = process.env;

(async () => {
    await app.prepare();
    await server.listen(PORT);
    console.log(`> Ready on http://localhost:${PORT}`);
})();
