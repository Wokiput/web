const curtain = document.getElementById('curtain');
curtain.addEventListener('click', () => {
  curtain.classList.add('open');
});
const lampImg = document.querySelector('.lamp-img');
const switchImg = document.getElementById('switch');
const light = document.querySelector('.light');
const show = document.querySelector('.show');
let lightOn = false;
function toggleLight() {
  lightOn = !lightOn;
  light.classList.toggle('on', lightOn);
  show.classList.toggle('visible', lightOn);
}
lampImg.addEventListener('click', toggleLight);
switchImg.addEventListener('mousedown', () => {
  switchImg.classList.add('down');
});
switchImg.addEventListener('mouseup', () => {
  switchImg.classList.remove('down');
  toggleLight();
});
const rabbit = document.querySelector('.rabbit');
const bird = document.querySelector('.bird');
let isRabbitVisible = true;
const rabbitOffscreenY = 150;
const birdOffscreenY = 180;
[rabbit, bird].forEach(el => {
  el.addEventListener('click', () => {
    if (isRabbitVisible) {
      rabbit.style.transform = `translate(-50%, ${rabbitOffscreenY}px)`;
      setTimeout(() => {
        rabbit.style.opacity = 0;
        rabbit.style.transform = 'translate(-50%, 0)';
        bird.style.opacity = 1;
        bird.style.transform = `translate(-50%, ${birdOffscreenY}px)`;
        setTimeout(() => {
          bird.style.transform = 'translate(-50%, 0)';
        }, 20);
        isRabbitVisible = false;
      }, 500);
    } else {
      bird.style.transform = `translate(-50%, ${birdOffscreenY}px)`;
      setTimeout(() => {
        bird.style.opacity = 0;
        bird.style.transform = 'translate(-50%, 0)';
        rabbit.style.opacity = 1;
        rabbit.style.transform = `translate(-50%, ${rabbitOffscreenY}px)`;
        setTimeout(() => {
          rabbit.style.transform = 'translate(-50%, 0)';
        }, 20);
        isRabbitVisible = true;
      }, 500);
    }
  });
});
