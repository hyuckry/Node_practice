const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url);

    if(req.url ==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Hello World');
    }else if(req.url ==='/users'){
        const users = [
            {name: 'Alice'},
            {name: 'Beck'}
        ]
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(users));
    }
})

server.listen(port,hostname,()=>{
    console.log('Start server');
})