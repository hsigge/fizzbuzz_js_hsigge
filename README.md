# FizzBuzz js weekend challenge - week 2

In this challenge, we are revisiting the fizzbuzz kata, but in JS! We are also bringing back the training wheel testing package to write tests to our code. As the final part of the challenge, you need to deploy your website using GitHub pages.

### Learning Objectives: 

[X] Ability to explain concepts

[X] Practice JS

[ ] Combine both feature and unit test and understand their difference

[ ] Read and understand documentation

[ ] Debug and find errors

### What we are expecting to see in your implementation: 

[ ] A deployed website with some styling

[ ] All test are going green

[X] Good and readable commits messages commits made after every test going green or when you have added implementation code

[X] Usage of branches

[ ] A PR towards your own master branch

[ ] Answers to the questions in the README - *Please find the questions and answers in a separate section below*

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Initiate npm with the npm init command in your terminal to create a package.json file. 

We'll be using the e2e training wheels for testing our code. This provides a minimal test enviroment setup and a set of convinient helpers to be used in acceptance (end-2-end) tests. Install the training wheels by following the instructions on https://www.npmjs.com/package/e2e_training_wheels. 

### Installing

Instructions

1. Fork this repository
2. Clone your fork to your computer
3. Install dependencies yarn install
4. Run the tests yarn test
5. Add your implementation of the FizzBuzz to src/FizzBuzz.js to get all tests to pass
Once you're done with the challenge, commit your work and submit a pull request against the upstream repository.

<!---
## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```
--->

## Deployment

Deploy your index.html on your GitHub pages, by enabling this feature from the "settings" tab of your repository on GitHub.com. 

## Built With

* Language: Javascript (ES2015)
* Testing: Mocha & Chai
* [e2e training wheels](https://www.npmjs.com/package/e2e_training_wheels) - Acceptance test environment

## Authors

* **Hanna Sigge** - [HSigge](https://github.com/hsigge)

## Acknowledgments

* Craft Academy boot camp coaches and students of the August 2018 cohort

## Questions &amp; Answers
### Question 1
Please explain what the following lines of code do

```
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
### Answer 1
We're using Node in this project. Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.  

Node provides the fs library to handle file-system related operations. For example to read the content of a file. 

If we look at the above example, we see the 'let' statement that sets a new variable named 'fizzBuzz'. 

In this, the fs.readFileSync function allows Node to read the file './src/js/fizz-buzz.js' in a synchronous, or blockng, manner, i.e. one after another (as opposed to fs.readFile that reads the file asynchronously). 

Next, we have a function 'eval'. The eval() function evaluates or executes a string as a Javascript expression. So what we're doing here is we're setting a variable "fizzBuzz" that is evaluating if the fizz-buzz.js file together with the nexports file is equal to our numbr testing function FizzBuzz. In our case, the eval() will return a true/false answer. 

#### Sources: 
* [Wikipedia](https://en.wikipedia.org/wiki/Node.js)
* [Code Maven](https://code-maven.com/reading-a-file-with-nodejs)
* [Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
* [Humanwhocodes.com](https://humanwhocodes.com/blog/2013/06/25/eval-isnt-evil-just-misunderstood/)

---
### Question 2
Please explain why we are placing the
```
let fizzBuzz = new FizzBuzz
```
outside the it block?

### Answer 2
To make this variable available to other functions outside of that block. A variable declared within a block of code is a local scope, and as such not available outside of the block in which they are declared. 
---
### Question 3
Please explain the difference between using === and == in JS?

### Answer 3
== checks if two variables are equal in value, whereas === checks if they are equal in all aspects (value and type)
---
### Question 4
Please explain why we are moving (number % 5 === 0) to the top?

### Answer 4
The division by 5 needs to happen before the division of 3 for the FizzBuzz game to return the correct output. As JavaScripts executes code in order, we need to move the function that divides by 5 up so it is above the function that divides by 3. 
---
### Question 5
Please explain the difference between feature and unit test

### Answer 5
A unit test is a "pass/fail" test of the functionality of a block of code and if the resulting output is as expected. A feature test is testing the useability of a certain feature in a larger context - i.e. there can be many functions and interdependencies with e.g. databases or web services in a feature test. 
---
### Question 6
Please explain what expectations in the context of testing are
### Answer 6
When testing, we write a specific test to simulate one function or method at a time. We also specify what we expect to see if the test performs correctly.  In other words, the Expectation is that when we test, we get the result we were expecting from a test given the input we've written into the test. 
---
### Question 7
Please write a line to line explanation of what is happening in this code
```
#1  <script src="src/js/fizz-buzz.js"></script>
#2     <script>
#3         document.addEventListener('DOMContentLoaded', () => {
#4             let button = document.getElementById('button')
#5             let displayDiv = document.getElementById('display_answer')
#6             button.addEventListener('click', () =>{
#7                let value = document.getElementById('value').value
#8                 let fizzBuzz = new FizzBuzz
#9                 let result = fizzBuzz.check(value)
#10                displayDiv.innerHTML = result;
#11            })
#12        })
#13    </script>
````

### Answer 7
#1  Calling on the js code in external file fizz-buzz.js to execute on the page
#2  Opening script tag internal to the document
#3  "Add event listener" - a Document Object Model (DOM) - processes the function specified only when HTLM file has been loaded (disregarding images and CSS)
#4  sets a 'button' variable to the the object with the id 'button'
#5  sets a  'displayDiv' variable to the object with the id 'display_answer'
#6  adds an event listener to the button class that executes the function below when the button is clicked
#7  sets the variable value to the object with the id value 
#8  sets a new instance (variable fizzBuzz= of the FizzBuzz function defined in fizz-buzz.js
#9 defines a new variable that checks the value of this instance 
#10  displays the result on the web page
#11 
#12
#13 Closing local script tag
````

#### Sources: 
* []()
<!---
### Question 
Please 

### Answer 


#### Sources: 
* []()
--->