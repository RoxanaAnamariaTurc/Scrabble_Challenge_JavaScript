### Project Objectives

This project's aim is to test the understanding of javascript fundamentals by creating a scrabble game.


### Technologies Used

* Javascript


### Project Approach

* To start with I was given a list of letters and their corresponding score and based on this I had to write a program to calculate the total score of the word typed
* I started by copying all the letters and their corresponding scores in a text file inside my project's forlder
* I then created a Scrabble class that had a readFile() function, a constructor() and a score() function
* The readFile() function would read the letters and their scores from the text file from the same folder as the project
* The constructor() would take a word as parameter and set the class field word to the word from the paramether and if the word is null would set the value to empty string if not would take the word and with the 
JS buildin function toUpperCase would change the word to uppercase
* The next step the score field of the Scrabble class would be set in the constructor to a new Map() and than with the readFile() function would take each element from the text file , use split build-in function and set the 
pair of key value that would help calculate the score
* In the score() function , I have a result variable that is initiated to zero to start with and then with the help of a for loop I iterate through the word and check the 
score based on each letter and add this to the result and when the loop is completed the final result is returned.


### Getting Started

To get the project work on your machine follow the next steps:

* Fork and clone this repository to your local machine
* npm install to install depedencies
* npm test to have all the tests passing

### Project Review

I found this project helpful to put a good base for my Javascript knowledge


### Potential Next Steps for the Project

* Attend the extensive criteria for the Scrabble game


