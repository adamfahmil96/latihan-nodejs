const express = require('express'); // memanggil library express
const bodyParser = require('body-parser');  // memanggil library body-parser
const app = express();  // fungsi secara global untuk memanggil express


// parse application/JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server started on port`);
});