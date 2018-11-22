//var deg = Math.random();
let angle = 0;
let direction;
const star = document.querySelector('.p');

function setProperty(position, translate) {
    star.style.setProperty('--side', position +'px');
    star.style.setProperty('--translate', translate +'px');
  }
  console.log(star.style);
  function changeAngle() {
    let leftOrRight = Math.random() * (500 - 0) + 0;
    let translate = Math.random() * (1000 - 800) + 800;
      angle = 45;
      direction = 'particleAnimationLeft';
      setProperty(leftOrRight, translate);
  
  }
  setInterval(changeAngle, 8000);
  