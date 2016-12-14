const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const contactRoutes = require("./routes/contact");
const app = express();

//view engine
app.set('view engine', 'ejs');

//midlleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'))
app.use(routes);
app.use(contactRoutes);

app.listen(3000, () =>{
    console.log("Server listening on port 3000");
});