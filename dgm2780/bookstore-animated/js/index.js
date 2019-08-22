// Custom JS here
const stepsBox = document.querySelector(".stepsBox");
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const mobileCard = document.querySelector(".mobileCard");

stepsBox.addEventListener("mouseover", function() {
  TweenMax.to(step1, 1, { y: 20 });
  TweenMax.to(step2, 2, { y: 20 });
  TweenMax.to(step3, 3, { y: 20 });
});

mobileCard.addEventListener("click", function() {
  TweenLite.to(mobileCard, 1.5, { x: -20, ease: Elastic.easeOut }).to(
    mobileCard,
    1.5,
    { x: 20, ease: Elastic.easeOut }
  );
});
