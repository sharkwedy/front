const express = require('express');

const path = require('path');

const app = express();
// Settings
app.set('port', process.env.PORT || 4200);

app.use(express.static('/'));

app.get('/src/main.ts', function(req,res) {

res.sendFile(path.join('/'));
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
