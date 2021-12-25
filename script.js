'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// inserting element
/*const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it!</button>';
const header = document.querySelector('.header');
header.append(message);
//deleting element 
document.querySelector(".btn--close-cookie").addEventListener('click',function(){
  message.remove();
}); */

// implementing smooth scrolling

btnScrollTo.addEventListener('click',function(){
  section1.scrollIntoView({behavior : 'smooth'});
})

// page navigation
   // 1- add event listener to common parent element
   // 2- determine what element originated the event

document.querySelector(".nav__links").addEventListener('click',function(e){
  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains("nav__link")){
     const id = e.target.getAttribute("href");
     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});



