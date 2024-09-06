# Drum Kit 🥁

This is a simple web-based drum kit that lets you play different drum sounds by clicking the buttons or pressing specific keys on your keyboard. The project is created using HTML, CSS, and JavaScript.

## Features

- **Click to Play**: Click on the buttons labeled with `w`, `a`, `s`, `d`, `j`, `k`, or `l` to play corresponding drum sounds.
- **Key Press Support**: You can also press the `w`, `a`, `s`, `d`, `j`, `k`, or `l` keys on your keyboard to play the same sounds.
- **Button Animation**: Each button flashes when clicked or when the corresponding key is pressed.

## Files

### 1. `index.html`
This file contains the structure of the web page. It includes buttons for each drum sound, a title, and a footer. The buttons are styled using CSS and labeled with drum keys.

### 2. `styles.css`
The stylesheet for the drum kit, defining the appearance of the buttons, title, and overall layout.

### 3. `index.js`
The main JavaScript file that handles:
- Event listeners for both mouse clicks on the drum buttons and keyboard presses.
- The playing of corresponding sounds based on the button or key pressed.
- A button animation effect that highlights the button for a brief moment when it's activated.

## How It Works

1. The buttons with the class `.drum` are looped through, and click event listeners are added to trigger a function when clicked. The innerHTML of the clicked button determines which sound is played.
2. An event listener is also added to the document to listen for keypresses. Based on the key pressed, the correct sound is played and the corresponding button is animated.
3. The `makeSound()` function plays different audio files depending on the key or button pressed.
4. The `buttonAnimation()` function adds a CSS class to the button for 100 milliseconds to give a visual indication of the button press.
