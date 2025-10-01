/* ==========================================
   EMPRESARIO 2025 - UNIFIED JAVASCRIPT
   ========================================== */

// INTRO ANIMATION
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

    // Countdown Timer
    const targetDate = new Date("2025-10-11T00:00:00").getTime();

    function getTimeSegmentElements(segmentElement) {
      const segmentDisplay = segmentElement.querySelector('.segment-display');
      return {
        segmentDisplayTop: segmentDisplay.querySelector('.segment-display__top'),
        segmentDisplayBottom: segmentDisplay.querySelector('.segment-display__bottom'),
        segmentOverlay: segmentDisplay.querySelector('.segment-overlay'),
        segmentOverlayTop: segmentDisplay.querySelector('.segment-overlay__top'),
        segmentOverlayBottom: segmentDisplay.querySelector('.segment-overlay__bottom'),
      };
    }

    function updateSegmentValues(displayElement, overlayElement, value) {
      displayElement.textContent = value;
      overlayElement.textContent = value;
    }

    function updateTimeSegment(segmentElement, timeValue) {
      const seg = getTimeSegmentElements(segmentElement);
      const currentValue = parseInt(seg.segmentDisplayTop.textContent, 10) || 0;
      
      if (currentValue === timeValue) return;

      seg.segmentOverlay.classList.add('flip');
      updateSegmentValues(seg.segmentDisplayTop, seg.segmentOverlayBottom, timeValue);
      updateSegmentValues(seg.segmentDisplayBottom, seg.segmentOverlayTop, currentValue);

      function finishAnimation() {
        seg.segmentOverlay.classList.remove('flip');
        updateSegmentValues(seg.segmentDisplayBottom, seg.segmentOverlayTop, timeValue);
        this.removeEventListener('animationend', finishAnimation);
      }
      seg.segmentOverlay.addEventListener('animationend', finishAnimation);
    }

    function updateTimeSection(sectionID, timeValue) {
      const firstNumber = Math.floor(timeValue / 10) || 0;
      const secondNumber = timeValue % 10 || 0;
      const sectionElement = document.getElementById(sectionID);
      const timeSegments = sectionElement.querySelectorAll('.time-segment');

      updateTimeSegment(timeSegments[0], firstNumber);
      updateTimeSegment(timeSegments[1], secondNumber);
    }

    function getTimeRemaining(targetDateTime) {
      const nowTime = Date.now();
      const complete = nowTime >= targetDateTime;
      if (complete) return { complete, seconds: 0, minutes: 0, hours: 0, days: 0 };

      const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
      const days = Math.floor(secondsRemaining / (60 * 60 * 24));
      const hours = Math.floor((secondsRemaining % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((secondsRemaining % (60 * 60)) / 60);
      const seconds = secondsRemaining % 60;

      return { complete, seconds, minutes, hours, days };
    }

    function updateAllSegments() {
      const t = getTimeRemaining(targetDate);
      updateTimeSection('days', t.days);
      updateTimeSection('hours', t.hours);
      updateTimeSection('minutes', t.minutes);
      updateTimeSection('seconds', t.seconds);
      return t.complete;
    }

    const countdownTimer = setInterval(() => {
      if (updateAllSegments()) clearInterval(countdownTimer);
    }, 1000);

    updateAllSegments();