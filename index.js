const express = require('express')
const app = express()
const port = 5000
require('dotenv').config()

// getting-started.js
const mongoose = require('mongoose');



async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use("/", (req, res) => {
        res.send("Book store running")
    })
}

main().then(() => console.log("MG DB connet")).catch(err => console.log(err));



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})