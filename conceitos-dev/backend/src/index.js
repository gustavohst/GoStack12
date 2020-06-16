const express = require('express');

const app = express();

//ROTE
app.get('/', (request, response) => {
   return response.json({
      message: 'Hello go Gustavo'
   });
}); 

app.listen(3333, () => {
   console.log('backend started');
}); //Porta