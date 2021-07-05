let mytables = document.querySelectorAll('td');
let mybutton = document.getElementById('matchingdays');
let firstDate = document.getElementById('calendar');
let secondDate = document.getElementById('calendar1');


let match = function days(){

toClear();

  let myFirstDate = new Date(firstDate.value);
  let mySecondDate = new Date(secondDate.value);

  let firstOpt = myFirstDate.getDay();
  let secondOpt = mySecondDate.getDay();

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
