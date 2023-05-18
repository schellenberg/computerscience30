# Movie Review Sentiment Analysis

## Overview

Sentiment Analysis is a Big Data problem which seeks to determine the general attitude of a writer given some text they have written. For instance, we would like to have a program that could look at the text “The film was a breath of fresh air” and realize that it was a positive statement while “It made me want to poke out my eye balls” is negative.

One algorithm that we can use for this is to assign a numeric value to any given word based on how positive or negative that word is and then score the statement based on the values of the words. But, how do we come up with our word scores in the first place?

That’s the problem that we’ll solve in this assignment. You are going to search through a file containing movie reviews from the Rotten Tomatoes website which have both a numeric score as well as text. You’ll use this to learn which words are positive and which are negative. 

Take a look at the data file (called movieReviews.txt) in this project. Note that each review starts with a number 0 through 4 with the following meaning:

- 0 : negative
- 1 : somewhat negative
- 2 : neutral
- 3 : somewhat positive
- 4 : positive

## Your Task

To start, hit Go Live and check out the web UI. When the user enters a phrase, you will calculate the average sentiment for all the words in the phrase. 

Your job will be to fill in the learnWordScores() and runAnalysis() functions. The movieReviews.txt file has already been opened for you, and each line is stored as a string in an array called reviewData. You may want to open the console and check out what reviewData[0] looks like to get a sense of what's going on here.

### learnWordScores()

To complete the learnWordScores() function, you should use a for loop to look at each of the elements in the reviewData array and:

- store the sentiment value (1-4) as an integer
- iterate through all the words in the string -- you may want to look up the [.split function]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split))
- for each word, check if the word is in the wordScores Map()
    - if the word is not in the Map, add it as a new key. To keep track of the average, you might want to store an object that contains the number of times the word has been seen, the total sum of all the sentiment scores, and then the average sentiment score (can be calculated from the other two variables)
    - if the word is already in the Map, add one to the number of times the word has been seen, add the sentiment score to the total sum, and then recalculate the average sentiment score for the word

### runAnalysis()

To complete the learnWordScores() function, you should:

- use a for loop to look at each of the words in the wordsToLookup array
- if the word shows up in your wordScores map:
    - get the sentiment value associated with the word, and add it to a total sentiment variable
    - add one to a counter variable (to keep track of how many relevevant words you've seen)
- at the end of the loop, use the variables above to calculate the average sentiment score for the phrase