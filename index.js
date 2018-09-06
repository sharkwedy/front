const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
app.set('port', process.env.PORT || 4200);

app.use('/', function(req,res) {

res.sendFile(path.join('/src/index.html'));

});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
