const express = require("express");
const getLinks = require("./src/parser2.js");
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", async function(req, res){

    const url = req.query.url;

    try {
        const myURL = new URL(url);
        const links = await getLinks(myURL);
        if (links.length) {
            res.send(links);
        }
        else {
            res.send('error');
        }
    } catch (error) {
        res.send('invalid');
    }

});

app.listen(3000, () => console.log(`Started...`));