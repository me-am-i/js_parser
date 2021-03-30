const express = require("express");
const array1 = require("./src/parser2.js");
//const array1 = require("./index.js");
//const double = require("./double.js");
//const validUrl = require('url');
const cors = require('cors');


const app = express();
app.use(cors());
const aaa = async (url) => {
    const result = await array1(url);
    console.log(111);
    console.log(result)
    return result;
}

// app.use(async function(request, response, next) {
//     try {
//     await aaa();
//         next();
//     } catch (error) {
//         next(error);
//     }
// });
//aaa().then(console.log);

//const url = "https://github.com/";
// (async function (){
//     await console.log( array1());})();
app.get("/",  async function(req, res){

    console.log(req.query.url);
    const url = req.query.url;

    // const myURL = new URL(url);
    // console.log(myURL)
    // if (myURL) {
    //     const bbb = await aaa(myURL);
    //     res.send(bbb);
    // }
    // else {
    //     return res.status(400).send(`${url} is not a valid url`);
    // }
   // res.send(req.query.url)

    try {
        const myURL = new URL(url);
        const bbb = await aaa(myURL);
        if (bbb.length) { res.send(bbb);}
        else {
            res.send('error')   //bbb);
        }
    } catch (error) {
        res.send('invalid');
      //  console.log(myURL);
      //   console.log(error);
      //   console.log(`${Date().toString()}: ${error.options.uri} is not a valid url`);
      //   return res.status(400).send(`${error.options.uri} is not a valid url`);
    }


    // if (validUrl.is_web_uri(url)){
    //     console.log('Looks like an URI');
    //
    //     const bbb = await aaa(url);
    //     res.send(bbb);
    // } else {
    //     console.log('Not a URI');
    //     res.send("Error");
    // }





   // response.send(double(2).toString());
});


app.listen(3000, () => console.log(`Started...`));