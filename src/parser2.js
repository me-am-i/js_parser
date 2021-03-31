const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const scriptSelector = 'script';
const styleSelector = {
  selector: 'link',
  type: 'stylesheet',
};

module.exports = async (url) => {
  const dom = await JSDOM.fromURL(url);
  const scriptList = [...dom.window.document.querySelectorAll(scriptSelector)];
  const scriptLinks = scriptList.filter((item) => item.src && !item.src.includes('data:text', 0)).map((item) => item.src);

  const styleList = [...dom.window.document.querySelectorAll(styleSelector.selector)];
  const styleLinks = styleList.filter((item) => (item.rel === styleSelector.type)).map((item) => item.href);

  await dom.window.close();
  return [...scriptLinks, ...styleLinks];
};
