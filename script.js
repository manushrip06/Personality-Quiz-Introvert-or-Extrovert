/*Add your JavaScript here*/

var introvertScore=0;
var extrovertScore=0;
var questionCount=0;
var q1a1= document.getElementById("q1a1");
var q1a2= document.getElementById("q1a2");
var q2a1= document.getElementById("q2a1");
var q2a2= document.getElementById("q2a2");
var q3a1= document.getElementById("q3a1");
var q3a2= document.getElementById("q3a2");
var q4a1= document.getElementById("q4a1");
var q4a2= document.getElementById("q4a2");
var q5a1= document.getElementById("q5a1");
var q5a2= document.getElementById("q5a2");
var result= document.getElementById("result");
var restart = document.getElementById("restart");
var showresult = document.getElementById("Show Result");
q1a1.addEventListener("click",introvert);
q1a2.addEventListener("click",extrovert);
q2a1.addEventListener("click",extrovert);
q2a2.addEventListener("click",introvert);
q3a1.addEventListener("click",extrovert);
q3a2.addEventListener("click",introvert);
q4a1.addEventListener("click",introvert);
q4a2.addEventListener("click",extrovert);
q5a1.addEventListener("click",extrovert);
q5a2.addEventListener("click",introvert);
q1a1.addEventListener("click",Q1A1);
q1a2.addEventListener("click",Q1A2);
q2a1.addEventListener("click",Q2A1);
q2a2.addEventListener("click",Q2A2);
q3a1.addEventListener("click",Q3A1);
q3a2.addEventListener("click",Q3A2);
q4a1.addEventListener("click",Q4A1);
q4a2.addEventListener("click",Q4A2);
q5a1.addEventListener("click",Q5A1);
q5a2.addEventListener("click",Q5A2);
restart.addEventListener("click",startover);



function introvert(){
introvertScore=introvertScore+1;
  questionCount=questionCount+1;
  if (questionCount == 5){
    showresult.addEventListener("click", updateResult); 
  }
  
  
}

function extrovert(){
  extrovertScore=extrovertScore+1;
  questionCount=questionCount+1;
  if (questionCount == 5){
    showresult.addEventListener("click", updateResult);
  }
  
  
}

function updateResult(){
  if(introvertScore>=3){
     console.log("You are a introvert");
    result.innerHTML="You Are A introvert!";
  }
  else if (extrovertScore>=3){
     console.log("You are a extrovert person");
    result.innerHTML="You Are A extrovert!";
    
  }
}

function startover(){
questionCount=0;
introvertScore=0;
extrovertScore=0;
result.innerHTML="Your Result Is... "
   document.getElementById("q1a1").disabled=false; 
     document.getElementById("q1a2").disabled=false; 
     document.getElementById("q2a1").disabled=false; 
     document.getElementById("q2a2").disabled=false; 
     document.getElementById("q3a1").disabled=false; 
     document.getElementById("q3a2").disabled=false; 
     document.getElementById("q4a1").disabled=false; 
     document.getElementById("q4a2").disabled=false; 
     document.getElementById("q5a1").disabled=false; 
     document.getElementById("q5a2").disabled=false; 
}

function Q1A1(){
 document.getElementById("q1a2").disabled=true; 
}
function Q1A2(){
  document.getElementById("q1a1").disabled=true;
  
}

function Q2A1(){
   document.getElementById("q2a2").disabled=true;
  
  
}
function Q2A2(){

   document.getElementById("q2a1").disabled=true;
  
}

function Q3A1(){
   document.getElementById("q3a2").disabled=true;
  
}

function Q3A2(){
   document.getElementById("q3a1").disabled=true;
  
}

function Q4A1(){
   document.getElementById("q4a2").disabled=true;
  
}

function Q4A2(){
 document.getElementById("q4a1").disabled=true;
  
}

function Q5A1(){
   document.getElementById("q5a2").disabled=true;
}

function Q5A2(){
   document.getElementById("q5a1").disabled=true;
}