const { urlencoded } = require("express");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})