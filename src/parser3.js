const jsdom = require("jsdom");
const { JSDOM } = jsdom;


async function getData(url, selector) {
        const dom = await JSDOM.fromURL(url);
        const data = await new Promise((res,rej)=>{
            const element = dom.window.document.querySelectorAll(selector)[0].url
            if (element) {
                res(element);
            }
            else {
                rej("Timed out");

            }
        });
        dom.window.close();


    return data;

}



const url = "https://github.com/";
const selector = "script";

let bb = async () => await getData(url, selector);

module.exports = bb();

//==========

export default async function saveData(data) {
    const { code } = data;
    const fileName = `${code}.json`;
    const savePath = path.join(__dirname, '..', 'data', fileName);

    return new Promise((resolve, reject) => {
        fs.writeFile(savePath, JSON.stringify(data, null, 4), err => {
            if (err) {
                return reject(err);
            }

            console.log(chalk.blue('File was saved successfully: ') + chalk.blue.bold(fileName) + '\n');

            resolve();
        });
    });
}