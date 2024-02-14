import "../scss/style.scss";

document.addEventListener('DOMContentLoaded', (event) => {

document.querySelector("#app").innerHTML = `
    <nav>
    <div class='row'>
    <div class='col'>
    <div class='logo'>c_space</div>
    </div>
      <div class='col'>
          <div class='element first'>WHO WE ARE</div>
          <div class='hidden special'>
          <div class='rows'>About C Space</div>
          <div class='rows'>Our people</div>
          <div class='rows'>FBC</div>
          </div>
        </div>
        <div class='col'>
          <div class='element second'>WHAT WE DO</div>
        </div>
        <div class='col'>
          <div class='element third'>OUR THINKING</div>
        </div>
        <div class='col'>
         <div class='element fourth'>THE BETTER WHY</div>
        </div>
        <div class='col'>
         <div class='element'>JOIN OUR TEAM</div>
        </div>
        <div class='col'>
         <button class='btn btn-danger moreOrange'>GET IN TOUCH</button>
        </div>
        </div>
    </nav>
    <section class='hero'>
    <div class='container'>
      <h1>Stronger Relationships.</h1>
      <h1>Stronger Businesses.</h1>
      <p>We help you discover your audiences, reveal mutual value, co-create the future and drive impact with empathy</p>
      <button class='btn btn-danger moreOrange'>SHOW ME HOW</button>
    </div>
    <div>
    <a href ='#winnerSection'><svg class='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></a>
    </div>
    </section>
    <section class='container' id='winnerSection'>
    <div class='winners'>
      <p> INSIGHTS THAT WIN </p>
      <h2>Announcing the 2023 Better Why award winners!</h2>
      <p>The annual Better Why Awards recognize insights leaders and customer advocates who are making a real impact and driving our industry forward. Check out the winning stories across the four award categories and join us in celebrating the game changing work of our peers.<p>
      <button class='btn btn-danger moreOrange'>MEET THE WINNERS</button>
      </div>
    </section>
    <section class='relationship'>
    <div class='container'>
    <h3>We’re relationship experts who help businesses thrive in the relationship economy.</h3>
    <p>In today’s environment, brands need to learn to give, as much as they seek to get. Thriving brands invest in their most valuable relationships, strategically, intentionally and confidently.</p>
    <button class='btn btn-danger moreOrange'>WHAT IS THE RELATIONSHIP ECONOMY?</button>
    </div>
    </section>
`;

const firstElement = document.querySelector('.first');
const specialElement = document.querySelector('.special');


firstElement.addEventListener('mouseenter', function() {
  specialElement.classList.toggle('hidden')
})
// firstElement.addEventListener('mouseleave', function() {
//   specialElement.classList.toggle('hidden');
// })

});