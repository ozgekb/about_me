'use strict';
var correctAnswer = 0;
var numOfQuestion = 0;
var greeting = confirm ('Welcome to my website,before we start, we need to play gueesing name!\nGuess what! who will you try to gettig know:)');
var questionPrompt = (' ');
console.log(greeting);
alert('You should take this quiz! Come on :(');
if(greeting === true){
  alert('let\'s go');
} else {
  alert('You should take this quiz! Come on :(');
}

var A1 = prompt('Do you think I like jazz music ?');
console.log(A1);
function question1(A1){
  numOfQuestion++;
  if(A1.toUpperCase() == 'Y' || A1.toUpperCase() == 'YES'){
    alert('You are right, if you have played gamble, you might have been millionare');
    correctAnswer++;
  }
  else{
    alert('You are wrong! If you have played gamble, you could have lose all of your money :)');
  }
  return A1;
}
question1(A1);

var A2 = prompt('Do you think I like cats?');
function question2(A2){
  numOfQuestion++;
  console.log(A2);
  if( A2.toUpperCase() == 'Y' || A1.toUpperCase() == 'YES'){
    alert('No way! I think dogs are cuter then cats.');
  } else{
    alert('Yep! You are getting know me.');
    correctAnswer++;
  }
  return A2;
}
question2(A2);

var A3 = prompt ('Let\'s gets more serious questions.\n Do you think I am self-learner?');
function question3(A3){
  numOfQuestion++;
  console.log(A3);
  if (A3.toUpperCase() == 'Y' || A3.toUpperCase() == 'YES'){
    alert('You are going well, keep going!');
    correctAnswer++;
  } else{
    alert('Of couse I am self learner, but sometimes I could need little help :)');
  }
  return A3;
}
question3(A3);

var A4 = prompt('Do you think I am always honest?');
function question4(A4){
  numOfQuestion++;
  console.log('A4: ' + A4);
  if(A4.toUpperCase() == 'Y' || A4.toUpperCase() == 'YES'){
    alert('Thank you for thinking that I am honest! :)');
    correctAnswer++;
  }
  else { alert('I think your not honest now,otherwise you would say Yes:)');
  }
  return A4;
}
question4(A4);

var A5 = prompt('Do you think would I lie for my company?');
function question5(A5){
  numOfQuestion++;
  console.log(A5);
  if (A5.toUpperCase() == 'N' || A5.toUpperCase() == 'NO'){
    alert('Correct! I would never lie for my company.');
    correctAnswer++;
  }
  else {
    alert('Wrong.If I am an honest person (as noted in question 4) you should know I would not lie for my company!');
  }
  return A5;
}
question5(A5);

//-----------------------------adding questions six and seven----------------------------------------------------------------------------------------------------
var A6 = prompt('How many hours can I walk?');
function question6(A6){
  numOfQuestion++;
  if(isNaN(A6)){
    alert('You should enter number!');
    A6 = prompt('How many hours can I walk?');
  }
  if (A6 == 5) {
    alert('Your answer is correct! Let\'s go to the next question');
    correctAnswer++;
  } else {
    var counter = 0;
    while(counter < 3){
      if(A6 < 2){
        alert('Your guess is too low');
        console.log('A6 ' + A6);
        counter++;
      }else if (2 <= A6 && A6 < 5) {
        alert('You are getting close but your guess is still too low.');
        console.log('A6 ' + A6);
        counter++;
      }else if(A6 > 5) {
        alert('Your guess is too high. ');
        console.log('A6 ' + A6);
        counter++;
      }
      else {
        alert('Your answer is correct! Let\'s go to the next question');
        break;
      }
      A6 = prompt('How many hours can I walk?');
    }
  }
  return A6;
}
question6(A6);

var A7 = prompt('Which countries I have been to?');
function question7(A7) {
  numOfQuestion++;
  var myArray = ['ITALY','RUSSIA','UK','US','TURKEY'];
  var arrayContents = myArray.join(', ');
  var counter = 0;
  if(myArray.includes(A7.toUpperCase())) {
    alert('countries that I have been to:  ' + arrayContents + '                          Your guess is corect!');
    correctAnswer++;
  }else{
    while(counter < 5){
      if(!myArray.includes(A7.toUpperCase())) {
        A7 = prompt('That country isn\'t right, guess again!');
        counter++;
      }else{
        break;
      }
    }
    alert('countries that I have been to: ' + arrayContents + '                          Your guess is corect! Let\'s get next question.');
  }
  return A7;
}
question7(A7);
alert('You have answered ' + correctAnswer + ' questions correctly out of ' + numOfQuestion + ' questions.');
alert('Congrats! You have completed the game. You can check out the website to know me more.');
