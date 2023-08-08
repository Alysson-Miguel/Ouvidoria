const express = require("express");
const app = express();
const cors = require('cors')
const userRoutes = require('./routes');


// Add the express.json() middleware
app.use(express.json());
app.use(cors());
app.use(userRoutes);


app.listen(8080, () => {
    console.log("FUNCIONA");
});