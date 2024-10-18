# Matrix Effect Animation

A web-based Matrix effect animation that mimics the iconic green cascading code from the Matrix movie. The animation features random characters falling down the screen, with occasional red words appearing. The effect can be toggled on and off using a keyboard shortcut and adapts to window resizing.

You can view the live demo [here](https://ralphdp.github.io/Matrix-Code-Wall-Effect/).

## Features

- **Keyboard Trigger**: Start the Matrix effect by pressing `Shift + Ctrl + M`.
- **Click to Stop**: Stop the effect by clicking anywhere on the screen.
- **Random Green Characters**: The effect displays random green letters and symbols.
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
- The animation is stopped when the user clicks on the canvas.
- Page scrolling is disabled while the animation runs and is restored when it stops.

## License

This project is licensed under the MIT License.
