const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8001;

http.createServer(app).listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
