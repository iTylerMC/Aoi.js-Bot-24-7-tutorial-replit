const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('<h1>El bot sigue encendido :D</h1>');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor Listo.');
    });
    return true;
}
