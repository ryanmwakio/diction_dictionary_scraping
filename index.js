//Task to achieve
// 1) Scrap a webpage
// 2) Identify the words in the page
// 3) return the count for each word in the web page

const axios = require("axios");
const cheerio = require("cheerio");
const chalk = require("chalk");
var checkWord = require("check-if-word"),
  words = checkWord("en");

function scrapePage(url) {
  axios.get(url).then((res) => {
    const $ = cheerio.load(res.data); //cheerio uses jquery

    let wordCount = {};
    let englishWords = [];
    let nonEnglishWords = [];

    let pageContent = $("body").text().split(" ");

    function check_if_word_exists(word) {
      return words.check(word);
    }

    //store word as key and count as value then return
    for (let i = 0; i < pageContent.length; i++) {
      if (!wordCount[pageContent[i]]) {
        wordCount[pageContent[i]] = 1; //if the word doesn't exist then add it to the object and set count as 1
        if (check_if_word_exists(pageContent[i])) {
          englishWords.push(pageContent[i]);
        } else {
          nonEnglishWords.push(pageContent[i]);
        }
      } else {
        wordCount[pageContent[i]] += 1; // else add the count of the word
        if (check_if_word_exists(pageContent[i])) {
          englishWords.push(pageContent[i]);
        } else {
          nonEnglishWords.push(pageContent[i]);
        }
      }
    }

    console.log(englishWords);
    return wordCount;
  });
}

let url = process.argv[2];

if (!url) {
  console.log(
    chalk.red.italic.bgBlackBright(
      `sorry you must pass the url as the third item in the command e.g ${chalk.black.underline.bgWhite(
        "npm start http://mypage.com"
      )}`
    )
  );
} else {
  scrapePage(url);
}
