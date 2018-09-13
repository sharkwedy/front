const express = require('express');

const path = require('path');

const app = express();
// Settings
app.set('port', process.env.PORT || 4200);

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
