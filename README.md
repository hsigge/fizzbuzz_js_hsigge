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
In your README to the best of your knowledge please explain what the following lines of code do

```
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
### Answer 1
We're using Node in this project. Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.  

Node provides the fs library to handle file-system related operations. For example to read the content of a file. 

If we look at the above example, we see the 'let' statement that sets a new variable named 'fizzBuzz'. 

The fs.readFileSync function allows Node to read the file './src/js/fizz-buzz.js' in a synchronous, or blockng, manner, i.e. one after another (as opposed to fs.readFile that reads the file asynchronously). 

Next, we have a function 'eval'. The eval() function evaluates or executes a string as a Javascript expression. So what we're doing here is evaluating if our variable fizzbuzz (the fizz-buzz.js file) together with the nexports file is equal to our *(not sure what this is)* FizzBuzz. In our case, the eval() will return a true/false answer. 

#### Sources: 
* [Wikipedia](https://en.wikipedia.org/wiki/Node.js)
* [Code Maven](https://code-maven.com/reading-a-file-with-nodejs)
* [Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
* [Humanwhocodes.com](https://humanwhocodes.com/blog/2013/06/25/eval-isnt-evil-just-misunderstood/)


<!---
### Question 1

### Answer 1

#### Sources: 
* []()
--->