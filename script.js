// Accessing slider buttons
const slideOne = document.getElementById('button1');
const slideTwo = document.getElementById('button2');

// jQuery toggle function for the event listener
const slides = () => {
  $('#tanya-pic').toggle(1000);
  $('#tanya-quote').toggle();
  $('#tanya-title').toggle();
  $('#john-pic').toggle(1000);
  $('#john-quote').toggle();
  $('#john-title').toggle();
}

// Executes the event listener and calling the function
slideTwo.addEventListener('click', slides);
slideOne.addEventListener('click', slides);