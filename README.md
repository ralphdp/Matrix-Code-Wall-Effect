# Matrix Effect Animation

A web-based Matrix effect animation that mimics the iconic green cascading code from the Matrix movie. The animation features random characters falling down the screen, with occasional red words appearing. The effect can be toggled on and off using a keyboard shortcut and adapts to window resizing.

## Features

- **Keyboard Trigger**: Start the Matrix effect by pressing `Shift + Ctrl + M`.
- **Click to Stop**: Stop the effect by clicking anywhere on the screen.
- **Random Green Characters**: The effect displays random green letters and symbols.
- **Red Words**: Occasionally, red words like "control", "shift", and "M" appear.
- **Dynamic Window Sizing**: The canvas automatically resizes to fill the screen, even when the window is resized.
- **Page Scrolling Control**: Scrolling is disabled while the Matrix effect is active.

## Instructions

1. Clone or download this repository.
2. Open the `index.html` file in a web browser.
3. Press `Shift + Ctrl + M` to start the Matrix effect.
4. Click anywhere on the screen to stop the effect.
5. Resize the window, and the canvas will adjust to fit the new dimensions.

## Files

- **index.html**: The main HTML file that sets up the canvas and instructions.
- **matrix.js**: The JavaScript code responsible for the Matrix effect animation and handling user interactions.

## How It Works

- The canvas is initially hidden and only displayed when triggered by the `Shift + Ctrl + M` key combination.
- When activated, random characters from a defined pool of letters and symbols are drawn in cascading columns across the screen.
- Words like "control", "shift", and "M" occasionally appear in red, adding a unique twist to the animation.
- The animation is stopped when the user clicks on the canvas.
- Page scrolling is disabled while the animation runs and is restored when it stops.

## Customization

- **Font Size**: You can adjust the font size of the characters by modifying the `fontSize` variable in `matrix.js`.
- **Character Pool**: The pool of characters used in the animation is stored in the `letters` variable, and the pool of words is stored in the `words` array. You can easily modify these to change the content.
- **Effect Speed**: Adjust the speed of the effect by changing the interval in `setInterval(draw, 33)` to a higher or lower number. A lower number speeds up the effect, while a higher number slows it down.

## Future Improvements

- Add an option to toggle word display with a key press (e.g., pressing "T" could turn the red word display on or off).
- Implement more complex patterns for word appearance or other effects.
- Allow users to customize the colors, font, or text content dynamically through a UI.

## License

This project is licensed under the MIT License.
