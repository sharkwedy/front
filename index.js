const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 4200);

app.use('/', function(req,res) {

res.render('/src/index.html');

});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
