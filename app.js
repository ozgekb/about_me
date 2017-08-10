'use strict';
var correctAnswer = 0;
var numOfQuestion = 0;
var greeting = confirm ('Welcome to my website,before we start, we need to play gueesing name!\nGuess what! who will you try to gettig know:)');
console.log(greeting);
if(greeting === true){
  alert('let\'s go');
}
else{
  alert('you should take this quiz! Come on :(');
}
var A1 = prompt('Do you think I like jazz music ?');
console.log(A1);
numOfQuestion++;
if( A1.toUpperCase() == 'Y'){
  alert('You are right, if you have played gamble, you might have been millionare');
  correctAnswer++;
}
else{
  alert('You are wrong! If you have played gamble, you could have lose all of your money :)');
}

var A2 = prompt('Do you think I like cats?');
numOfQuestion++;
console.log(A2);
if( A2.toUpperCase() == 'Y'){
  alert('No way! I think dogs are cuter then cats.');
} else{
  alert('Yep! You are getting know me.');
  correctAnswer++;
}

var A3 = prompt ('Let\'s gets more serious questions.\n Do you think I am self-learner?');
numOfQuestion++;
console.log(A3);
if (A3.toUpperCase() == 'Y'){
  alert('You are going well, keep going!');
  correctAnswer++;
} else{
  alert('Of couse I am self learner, but sometimes I could need little help :)');
}

var A4 = prompt('Do you think I am always honest?');
numOfQuestion++;
console.log(A4);
if(A4.toUpperCase == 'Y'){
  alert('It always help to be honest, you should try sometime :)');
  correctAnswer++;
}
else { alert('I think your not honest now,otherwise you would say Yes:)');
}

var A5 = prompt('Do you think would I lie for my company?');
numOfQuestion++;
console.log(A5);
if (A5.toUpperCase == 'Y'){
  alert('I think your previous answer also yes, you did well.');
  correctAnswer++;
}
else {
  alert('It\'s about about honesty if your previous answer yes, this one also should have yes.');
}
alert('Congrats! You answered all questions about me. when you complete the game you will know more\nNow we will contunue with general questions!');
//-----------------------------next six question----------------------------------------------------------------------------------------------------
var A6 = prompt('How many hours can I walk?');
numOfQuestion++;
if(isNaN(A6)){
  alert('You should enter number!');
  var A6 = prompt('How many hours can I walk?');
}
if (A6 == 5) {
  alert('Your answer is correct lets get\'s next question');
  correctAnswer++;
} else {
  var counter = 0;
  while(counter < 4){
    if(A6 < 2){
      counter++;
      alert('Your guess is too low');
      A6 = prompt('How many hours can I walk?');
    }else if (2 < A6 && A6 < 4) {
      counter++;
      alert('You are about to find out. You need to increase number');
      A6 = prompt('How many hours can I walk?');
    }else {
      counter++;
      alert('Your guess is too high');
      A6 = prompt('How many hours can I walk?');
    }
  }
}
var A7 = prompt('Which countries I have been to?.Please enter your answer with lower case.');
numOfQuestion++;
var myArray = ['ITALY','RUSSIA','UK','US','TURKEY'];
var counter = 0;
if(myArray.includes(A7.toUpperCase())) {
  alert('countries that I have been to:    ' + myArray + '                          Your guess is corect! Let\'s get next question.');
  correctAnswer++;
}else{
  while(counter < 3){
    if(!myArray.includes(A7.toUpperCase())) {
      A7 = prompt('guess again!');
      counter++;
    }else{
      break;
    }
    alert('countries that I have been to:' + myArray + '                          Your guess is corect! Let\'s get next question.');
  }
}
alert('You have ' + correctAnswer + 'out of' + numOfQuestion + 'questions.');
