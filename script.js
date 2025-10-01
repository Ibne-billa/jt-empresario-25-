let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro-logo');
let logoSpan = document.querySelectorAll('.intro-text');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active')
                    span.classList.add('fade');

                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
        

    })

})

//Clock
var countDownDate = new Date("Oct 9, 2025 23:59:59").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = 
    `<button class="time-unit">${days}d</button> ` +
    `<button class="time-unit">${hours}h</button> ` +
    `<button class="time-unit">${minutes}m</button> ` +
    `<button class="time-unit">${seconds}s</button> `;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "<button class='time-unit'>Registration closed</button>";
  }
}, 1000);

//slider
const slider = document.querySelector('.image-slider');

slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running';
});
document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.fade-text');
    text.classList.add('visible'); // Add class to trigger fade-in effect
});

