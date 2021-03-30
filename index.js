const urls = require("./src/parser2.js");

// const scrape = async (options) => {
//     return await request(options);
// };

//let url;
//const url = "https://github.com/";
console.log(1)
//console.log(url)
// const text = async () => await ;
//
// console.log(text.toUpperCase);
const someHandler = async (url) => {
    const result = await urls(url);
    console.log(11111111)
    return result;
}


module.exports = async (url) => await someHandler(url);


//someHandler().then(console.log);
//.then((arr) => {
//     for (let element of arr) {
//         if (element.src) console.log(element.src);
//     }
//  });
//.then((x) => console.log(x));

//
// const response = async () => await axios('https://quote-garden.herokuapp.com/api/v2/quotes/');
// console.log(response());
//
// return;


/*
async function main() {
    var value = await Promise.resolve('Hey there');
    console.log('inside: ' + value);
    return value;
}

var text = await main();
console.log('outside: ' + text);
return;




const fetch1 = require('node-fetch');

// const response = await fetch1('https://github.com/');
// const body = await response.text();
//
// console.log(body);
//
// return;
async function main() {

    const response = await fetch1('https://github.com/');
    const body = await response.text();

    // var value = await Promise.resolve('Hey there');
    // console.log('inside: ' + value);
    return body;
}

try {
    var text = await main();
    console.log(text);
} catch (e) {
    // Deal with the fact the chain failed
}





return;
exit;



var needle = require('needle');

var URL = 'http://www.ferra.ru/ru/techlife/news/';

// get(URL, function(err, res, data){
//     if (err) throw err;
//     console.log(data);
//     console.log(res.statusCode);
//     res.pipe(process.stdout);
// });


const retrieveExchangeData = () => {
    needle.get('URL', (error, response) => {
        const body = response && response.body;

        // if (!error && body && response.statusCode === 200) {
        //     body.result.forEach((exchange) => {
        //         exchangeLookup[exchange.symbol] = exchange.name;
        //     });
        //
        //     setInterval(() => {
        //         retrieveMarketData();
        //     }, options.app.pollInterval);
        //
        //     return retrieveMarketData();
        // }
        return body;


    });
}

console.log(retrieveExchangeData);


// const fetch = require('node-fetch');
// const cheerio = require ('cheerio');
//
// const processJob = async () => {
//     //const fetch = require('node-fetch');
//
//     const response = await fetch('https://github.com/');
//     const body = await response.text();
//     const $ = await cheerio.load(body);
//     console.log($('script', body));
// }
// processJob();


// fetch('https://github.com/').then(res=>res.text()).then(text=>console.log(text));
//     const body = await response.text();
// } catch (error) {
//     console.log(error);
// }


//console.log(text); */