# Learnin' Recursion

_This app is designed to help you learn recursion, by visualising the execution context diagram of a recursive function in an interactive way!_

# Getting Started

The repo requires [Git](https://git-scm.com/), [NodeJs](https://nodejs.org/) and [npm](https://www.npmjs.com/) to be installed in order to get started.

Steps to get yourself up and running from a command line interface:

- `git clone https://github.com/DevDolphin7/Learnin-Recursion.git`
- `cd Learnin-Recursion`
- `npm install`
- `npm run dev`

This should launch an app in your browser of choice, looking like the images below.

# Images

![Home Screen containes a list of katas to choose from][home-screen]

![Kata Screen shows the code being evaluated, the call stack, and a demonstration of a recursive execution context diagram][kata-screen]

# How It Works

When launched, the home screen will appear in your browser of choice. When you hover over a kata, it will show you a _preview of the code_ that will be analysed 🔍 Click on the link to go to the kata page.

The kata page shows the function on the top left with the call stack underneath. An Execution Context Diagram is on the right. At the bottom, forward and back buttons allow you to walk through the recursive example, _step by step_ 🪜 A dialog box next to the buttons tells you what is new in the current step.

Click through the examples and see recursion in action! I hope you find this visualisation helpful! 🚀

# Add Your Own Example

If you want to add your own examples, you will need to:

- Make a `.json` file in the same format as the examples provided
- Save an image of the code you want to analyse
- Modify `App.jsx` to:
  - `import` the new files (if stored locally)
  - Add the new kata to the katas array in the same format as the examples provided

# Technologies

- Vite React
- React Router DOM
- JavaScript
- HTML
- CSS

# Acknowledgements

Inspiration for the project and branding was provided by [Northcoders](https://northcoders.com/).

The font is stored locally and was provided by [Online Web Fonts](http://www.onlinewebfonts.com/).

[home-screen]: ./Plan/images/Home-Screen.png
[kata-screen]: ./Plan/images/Kata-Screen.png
