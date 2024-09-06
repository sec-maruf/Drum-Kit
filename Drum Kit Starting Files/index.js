// Loop through all elements with the class 'drum'
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // Add a click event listener to each drum button
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      
      // Call makeSound function and pass the innerHTML of the clicked button as a parameter
      makeSound(this.innerHTML);
      
      // Call buttonAnimation function and pass the innerHTML of the clicked button as a parameter
      buttonAnimation(this.innerHTML);
  });
}

// Add an event listener for any key press on the document
document.addEventListener("keydown", function(event) {
  
  // Call makeSound function and pass the key that was pressed as a parameter
  makeSound(event.key);
  
  // Call buttonAnimation function and pass the key that was pressed as a parameter
  buttonAnimation(event.key);
});

// Function to play a sound based on the key or button pressed
function makeSound(key) {
  // Switch statement to determine which sound to play based on the key pressed
  switch(key) {
      case "w":
          // Play crash sound when 'w' is pressed
          new Audio('sounds/crash.mp3').play();
          break;
      
      case "a":
          // Play kick-bass sound when 'a' is pressed
          new Audio('sounds/kick-bass.mp3').play();
          break;
      
      case "s":
          // Play snare sound when 's' is pressed
          new Audio('sounds/snare.mp3').play();
          break;
      
      case "d":
          // Play tom-1 sound when 'd' is pressed
          new Audio('sounds/tom-1.mp3').play();
          break;
      
      case "j":
          // Play tom-2 sound when 'j' is pressed
          new Audio('sounds/tom-2.mp3').play();
          break;

      case "k":
          // Play tom-3 sound when 'k' is pressed
          new Audio('sounds/tom-3.mp3').play();
          break;

      case "l":
          // Play tom-4 sound when 'l' is pressed
          new Audio('sounds/tom-4.mp3').play();
          break;

      default:
          // Alert the user if they press an invalid key
          alert("You are not selecting a valid key on the keyboard");
  }
}

// Function to add and remove animation on button press or key press
function buttonAnimation(currentKey) {
  // Select the element corresponding to the pressed key
  var activeKey = document.querySelector("." + currentKey);
  
  // Add the 'pressed' class to the button for animation
  activeKey.classList.add("pressed");
  
  // Remove the 'pressed' class after 100 milliseconds to end the animation
  setTimeout(function() {
      activeKey.classList.remove("pressed");
  }, 100);
}
