var readLineSync=require("readline-sync");

var name=readLineSync.question("What is your name ?");



console.log("Welcome "+name+"!"+" Let us see how well do you know Arpita Verma.");

var score=0;

var questions=[
  {
  question:"Where do I live? ",
  options:["gkp","ddn","noida"],
  answer:0
  },
  {
    question:"Where do I work? ",
    options:["gkp","ddn","noida"],
    answer:2 
  }
]

function play(question,options,answer){
  var optionString="";
  
  options.forEach((option,index)=>{
    optionString+=`\n${index}.${option}`
  })
  var userAnswer=readLineSync.question(`${questions} ${optionString}\n Enter the option number `);
  if(userAnswer===answer.toString()){
    console.log("You are Right!");
    score++;
  }
  else{
    console.log("You are Wrong!");
  }

  }

for(var i=0;i<questions.length;i++){
var currentQuestion=questions[i];
play(currentQuestion.question,currentQuestion.options,currentQuestion.answer);
}

console.log("YAY!! You scored "+score);
