const express = require('express');

app = express();
app.use(
    express.static(__dirname + "/dist")
);
var port = 19375;
var hostname = '::';

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, hostname, () => {
    console.log(`Server running on ${hostname}:${port}`);
});
