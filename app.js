const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const uri = "mongodb+srv://Eugene:24Kmagic@student.vjnh9.mongodb.net/topessayinc?retryWrites=true&w=majority";

app.use(cors("*"));

mongoose.connect(uri)
    .then(r => {
        console.log("database connected sucessfuly");
        app.listen(3000, () => {
            console.log("app listening in port 3000");
        })
    })


app.use("/order", require("./routes/order"));
app.use("/register", require("./routes/register"));
app.use((req, res) => {
    res.send(`
<h1> Error code 404</h1>
page not found!
`)
});