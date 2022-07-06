---
layout: project
title: Wordle Solver
permalink: /projects/wordle-solver
id: wordle-solver
force-width: 48
---

Most likely you've heard of the game Wordle. This little web app is a small replication of Wordle, designed to be auto-solved. It works just like a regular Wordle, though I didn't spend too much time on things like adding a keyboard for mobile users, or animations. The main focus of this project was not actually create a Wordle solving algorithm, but rather to get a breif introduction to React.Js. The algorithm itself, although decent, can definitely be improved. Right now all it does is filter through words that match the criteria that we've discovered through guessing so far, then picks a random word from that list. Below is the majority of the selection code.

```js
//Remove all of the correct letters
for (const n in correctLetters) {
  const correctLetter = correctLetters[n];
  if (correctLetter)
    wordList = wordList.filter(w => w[n] === correctLetter);
}

//Remove all of the invalid letters
for (const wrongLetter of wrongLetters)
  wordList = wordList.filter(w => !w.includes(wrongLetter));

//Check all of the letters we know
for (const knownLetter of knownLetters) {

  //Make sure the letters we know aren't in any of the wrong places
  for (const wrongLetterPlace of wrongLetterPlaces[knownLetter]) {
    wordList = wordList.filter(w => w.includes(knownLetter) && w[wrongLetterPlace] !== knownLetter);
  }
}

//Make a guess
const guess = randomItem(wordList);
await app.insertWord(guess);
```
<br>
Some ways to improve it would be adding scores to letters, so that words with more vowels would be prioritized, as would words with common letters. It currently has a success rate of about 85-90%. The reasoning for this is the sheer size of the word list. There are almost 16,000 words in the list of five letter words, whereas the [official word list](https://github.com/tabatkins/wordle-list) contains about 13,000. There can be a lot of ambiguity between words. For instance take this example take this failed solution:

{% assign img-alt = "Failed wordle solution" %}
{% assign img-path = "/images/projects/wordle-solver/ambiguity.png" %}
{% assign img-width = 40 %}
{% include project-image.html %}

Since there are so many words that fit the criteria HA_ES, there was no good way of guessing that the word would've been HAZES. Even improving the algorithm to favor more common words would not have been helpful much, since Z isn't a very common letter, so the solver would've been even less inclined to pick the correct word. The success rate of the algorithm goes up significantly as the size of the words increases. In my testing 100% of 7 letter words were solved successfully. Using the offial word list would also increase the success rate of the algorithm.

The project was also helpful in introducing me to React. I wanted something small enough to easily work with, I didn't want to go right off the bat and create a whole website using React, though I would like to create a website at some point. I came up with this idea after following along with the [basic React tic-tac-toe tutorial](https://reactjs.org/tutorial/tutorial.html), and I figured Wordle could be made with React. I didn't however just want to create a copy of the game, so I decided to make it auto solve.

You can access the application [here](/demos/wordle-solver), currently built for 5-letter words. If you would like to view the source code, or build the project for more letter words you can view the source on [GitHub](https://github.com/ArkinSolomon/wordle-solver). The word list I used can be found [here](https://github.com/dwyl/english-words).