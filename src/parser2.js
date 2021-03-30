const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// const saveData = async (url) => {
//     const dom = await JSDOM.fromURL(url);
//     const element = await dom.window.document.querySelector(selector).src;
//   //  dom.window.close();
//   //  console.log(element)
//     return element;
// }

const scriptSelector = "script";
const styleSelector = {
    selector: "link",
    type: "stylesheet"
};

//saveData();
//console.log(saveData())
module.exports = async (url) => {

    const dom = await JSDOM.fromURL(url);
    const scriptList = [...dom.window.document.querySelectorAll(scriptSelector)];
    //const scriptArr = Array.from(scriptList);
    const scriptLinks = scriptList.filter(item => item.src && !item.src.includes("data:text", 0)).map(item => item.src);

    const styleList = [...dom.window.document.querySelectorAll(styleSelector.selector)];
    //const styleArr = Array.from(styleList);
    const styleLinks = styleList.filter(item => (item.rel === styleSelector.type)).map(item => item.href);

    await dom.window.close();
  //   console.log(styleLinks);
   // return 33;
    return [...scriptLinks, ...styleLinks];
    //a
}