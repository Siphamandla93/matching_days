var mytables = document.querySelectorAll('td');
var mybutton = document.getElementById('matchingdays');
var firstDate = document.getElementById('calendar');
var secondDate = document.getElementById('calendar1');


var match = function days(){

toClear();

  var myFirstDate = new Date(firstDate.value);
  var mySecondDate = new Date(secondDate.value);

  var firstOpt = myFirstDate.getDay();
  var secondOpt = mySecondDate.getDay();

  console.log(myFirstDate);

  if(firstOpt === secondOpt){

    mytables[firstOpt].className = 'paintDay';


  }


else{
mytables[firstOpt].className = 'paintfirst';
mytables[secondOpt].className = 'paintsecond';

}
};

function toClear(){
  for (var i = 0; i < mytables.length; i++) {
    mytables[i].classList.remove('paintDay')
    mytables[i].classList.remove('paintfirst')
    mytables[i].classList.remove('paintsecond')
  }
};



 //addevent Listener to the button to behave the process.

mybutton.addEventListener('click', match);
