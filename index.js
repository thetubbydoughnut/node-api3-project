// require your server and launch it
const server = require('./api/server')

const port = 8000;

server.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`)
})