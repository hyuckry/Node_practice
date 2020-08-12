// Core Modules
// http => Launch a server, send requests
// https => Launch a SSL server
// fs => 

const fs = require('fs');

var name  = 'Paul'
const person = {
    name: 'Paul',
    age: 29,
    greet:function () {    // greet()
        console.log('Hi I am ' + this.name)
        fs.writeFileSync('notes.txt','Hi I am ' + this.name)
    }
}

console.log(person);
person.greet();
const summarizeUser = function(userName,userAge,userHobby){

};

const http = require('http');
http.createServer((req,res) => {
    console.log(req);
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('</html>');
    res.end();

}).listen(3000);