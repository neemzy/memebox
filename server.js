var express = require('express'),
    app = express(),

    folder = 'dist',
    port = 3000;

app.use(express.static(folder));

app.listen(port, function() {
  console.log('Serving ' + folder + ' folder on port ' + port);
});
