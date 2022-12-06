// Toggle Mobile Menu
const open_menu = document.querySelector('.open-menu');
const close_menu = document.querySelector('.close-menu');
const mainnav = document.querySelector('.main-nav');

open_menu.addEventListener('click', toggleMenu);
close_menu.addEventListener('click', toggleMenu);


function toggleMenu () {
  mainnav.classList.toggle('is-active');
}


//ARTICLE BUTTONS
function readArticleOne(){
  const firstArticleButton = '../html/20221120-how-to-write-a-poem.html';
  window.open(firstArticleButton);
}

function readArticleTwo(){
  const articleTwoButton = '../html/20221126-event.html';
  window.open(articleTwoButton);
}

function readArticleThree(){
  const articleThreeButton = '../html/20221129-writing-tips.html';
  window.open(articleThreeButton);
}

function readArticleFour(){
  const articleFourButton = 'index.html';
  window.open(articleFourButton);
}

function readEventOne(){
  const eventOneButton = '../html/20221201-december-challenge.html';
  window.open(eventOneButton);
}

function readEventTwo(){
  const eventTwoButton = '../html/20221203-qa-staff.html';
  window.open(eventTwoButton);
}


const firstArticleBtn = document.getElementById('articleOne');
const secondArticleBtn = document.getElementById('articleTwo');
const thirdArticleBtn = document.getElementById('articleThree');
const fourthArticleBtn = document.getElementById('articleFour');

const eventOneBtn = document.getElementById('eventOne');
const eventTwoBtn = document.getElementById('eventTwo');

firstArticleBtn.addEventListener('click', readArticleOne);
secondArticleBtn.addEventListener('click', readArticleTwo);
thirdArticleBtn.addEventListener('click', readArticleThree);
fourthArticleBtn.addEventListener('click', readArticleFour);

eventOneBtn.addEventListener('click', readEventOne);
eventTwoBtn.addEventListener('click', readEventTwo);




// Footer Social Media Buttons
const facebookBtn = document.getElementById('facebook');
const twitterBtn = document.getElementById('twitter');
const instaBtn = document.getElementById('insta');

function facebookShare(){
  const facebookUrl = 'https://facebook.com';
  window.open(facebookUrl, '_blank');
}

function tweetShare(){
  const twitterUrl = 'https://twitter.com/';
  window.open(twitterUrl, '_blank');
}

function instaShare(){
  const instaUrl = 'https://instagram.com';
  window.open(instaUrl, '_blank');
}

facebookBtn.addEventListener('click', facebookShare);
twitterBtn.addEventListener('click', tweetShare);
instaBtn.addEventListener('click', instaShare);

