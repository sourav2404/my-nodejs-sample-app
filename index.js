const express = require("express");
const cors = require('cors');

const app = express()
const port = 8080

let c = { greeting : 'Hey!'};
let d;

d=c;
c.greeting = 'Hello';
console.log(d.greeting);

app.use(cors())
app.use(express.json())

app.use('/hello', function (req, res) {res.send("ABLE TO ACCESS NODE.JS APPLICATION")});

app.listen(port, () => console.log(`BOX-CLIENT-SERVICE APPs listening on port ${port}!`));