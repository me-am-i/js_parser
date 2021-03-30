const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// JSDOM.fromURL("https://github.com/").then(dom => {
//     //console.log(dom.window.document.querySelectorAll("script")[21].src);
//     console.log(dom.window.document.querySelectorAll("link")[5].rel);
// });

async function getData(url, selector) {
    const dom = await JSDOM.fromURL(url);
    const data = await new Promise((res, rej)=>{
            const element = dom.window.document.querySelectorAll(selector)[0];

      });
    dom.window.close();

    return data;
}

const url = "https://github.com/";
const selector = "script";

const result = Promise.resolve(getData(url, selector)) //.then(result => console.log(result));

console.log(result)



//const a = 1;
module.exports = result;