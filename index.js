
const express = require('express');

const app = express();

app.get('/', function(request, response) {
  response.send('Hello Node.js World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/index.html');
    res.send()
});

app.get('/', (req, res) => {
    res.render('index', {});
  });




app.get('/info/:id', (req, res) => {
    const id = req.params.id;
  
    res.send(`info with the id: ${id}`);
  });

  app.get('/info', (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    const phoneNumber = req.query.phonenumber;
    const age = req.query.age;
    
    res.send(`We got the following values from the query string: ${name}, ${age}, ${email} & ${phoneNumber}`);
  });