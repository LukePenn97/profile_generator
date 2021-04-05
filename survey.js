const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile1 = {
  myName: "",
  activity: "",
  listenTo: "",
  favMeal: "",
  favFood: "",
  sport: "",
  superpower: "",
};

const questions1 = {
  myName: 'What\'s your name? Nicknames are also acceptable :)  ',
  activity: "What's an activity you like doing?  ",
  listenTo: "What do you listen to while doing that?  ",
  favMeal: "Which meal is your favourite (eg: dinner, brunch, etc.)  ",
  favFood: "What's your favourite thing to eat for that meal?  ",
  sport: "Which sport is your absolute favourite?  ",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at!  ",
};

const keys = Object.keys(questions1);
let index = 0;

const recursiveAsyncReadLine = function(index,profile,questions) {
  rl.question(questions[keys[index]], function(answer) {
    profile[keys[index]] = answer;
    if (index >= keys.length - 1){
      console.log(profile);
      return rl.close();
    }
    index++;
    recursiveAsyncReadLine(index,profile,questions); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(index,profile1,questions1)



