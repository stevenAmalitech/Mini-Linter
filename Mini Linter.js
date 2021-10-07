let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

const storyWords = story.split(" ");

const betterWords = storyWords.filter(
  (word) => !unnecessaryWords.includes(word)
);

const countOverusedWords = {};

betterWords.forEach((word) => {
  if (overusedWords.includes(word))
    if (countOverusedWords[word]) countOverusedWords[word]++;
    else countOverusedWords[word] = 1;
});

let countOfSentences = 0;

storyWords.forEach((word) => {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    countOfSentences++;
  }
});

console.log(`There are ${countOfSentences} sentences\n`);

console.log(`There are ${storyWords.length} words\n`);

for (const [word, count] of Object.entries(countOverusedWords))
  console.log(`'${word}' was used ${count} times\n`);

console.log(betterWords.join(" "));

function mostOccuringWord() {
  const wordCount = {};

  betterWords.forEach((word) => {
    if (wordCount[word]) wordCount[word]++;
    else wordCount[word] = 1;
  });

  const max = Object.entries(wordCount).sort((a, b) => b[1] - a[1])[0];

  console.log(
    `'${max[0]}' occured ${max[1]} times. The most in this sentence\n`
  );
}

mostOccuringWord();

function removeWordEveryOtherTime() {
  const countOverusedWords = {};

  let trimmedSentence = betterWords.filter((word) => {
    if (overusedWords.includes(word))
      if (countOverusedWords[word]) {
        countOverusedWords[word]++;
        if (countOverusedWords[word] % 2 === 0) return false;
      } else countOverusedWords[word] = 1;
    return true;
  });

  console.log(trimmedSentence.join(" "));
}

removeWordEveryOtherTime();

function replaceOverusedWords() {
  const replacements = ["extra", "closely", "surprisingly"];

  const fixedString = betterWords
    .map((word) => {
      if (overusedWords.includes(word))
        return replacements[overusedWords.indexOf(word)];
      return word;
    })
    .join(" ");

  console.log(fixedString);
}

replaceOverusedWords();
