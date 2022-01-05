# Diction & dictionary scrapping

```bash
git clone https://github.com/ryanmwakio/diction_dictionary_scraping.git
```

Navigate into the project:<br/>
\*NB: make sure you have node installed if you haven't [node installation](https://nodejs.org/en/download/ "installation instructions")

```bash
npm install
```

This is a command line app so run the command below with the url of the page to scrape

```bash
npm start "your_url"
```

The app return all words from the page and the count of each word. The english words are separated from non english and the english words are logged to your terminal.

---

<span>The folder structure</span><br>

```
DICTION_DICTIONARY_SCRAPING
+----   node_modules
│----   README.md
│----   index.js (main file all code resides)
│----   .gitignore

```

---

The `code`

```javascript
//The main function that does the processing
scrapePage(url);
```

```javascript
//The function checks if the word is in the English dictionary of words
function check_if_word_exists(word) {
  return words.check(word);
}
```

```javascript
//Loop through filtering the words and sorting them from all the content from the page
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
```

```javascript
//we the return the word instance of every word and its count and the english words
console.log(englishWords);
return [wordCount, englishWords];

//You can also access the non-english words incase ever needed(they are in a list)
nonEnglishWords;
```

---

### Tasks:

- [x] create a program
- [x] receives a web page
- [x] return words and the count
- [x] separate english and non-english
- [x] compare english and non english
