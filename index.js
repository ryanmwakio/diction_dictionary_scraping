//Task to achieve
// 1) Scrap a webpage
// 2) Identify the words in the page
// 3) return the count for each word in the web page

const axios = require("axios");
const cheerio = require("cheerio");

function scrapePage(url) {
  axios.get(url).then((res) => {
    const $ = cheerio.load(res.data); //cheerio uses jquery

    let wordCount = {};

    let pageContent = $("body").text().split(" ");

    //store word as key and count as value then return
    for (let i = 0; i < pageContent.length; i++) {
      if (!wordCount[pageContent[i]]) {
        wordCount[pageContent[i]] = 1; //if the word doesn't exist then add it to the object and set count as 1
      } else {
        wordCount[pageContent[i]] += 1; // else add the count of the word
      }
    }

    console.log(wordCount);
    return wordCount;
  });
}

scrapePage(
  "https://pesapal.freshteam.com/jobs/-z8xM8RCgTx7/junior-developer?ft_source=LinkedIn_1000080706&ft_medium=Job%20Boards_1000074720"
);
