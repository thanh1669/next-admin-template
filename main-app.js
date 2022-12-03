// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

function createServer() {
    const handle = app.getRequestHandler();
    const server = express();

    server.get('*', (req, res) => {
        handle(req, res);
    });

    server.use((error, req, res, next) => {
        // res.redirect(REDIRECT_URL);
        res.json({ message: error.message });
    });

    return server;
}

const server = createServer(app);

exports.app = app;
exports.server = server;