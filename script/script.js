const button = document.getElementById('button-mark');
const number = document.getElementById('number-notifications');
const point = document.querySelectorAll('.point');

button.addEventListener('click', function(){
  number.innerHTML = "0";
  
  for (let i = 0; i < point.length; i++) {
    point[i].style.visibility = 'hidden';
  }
})