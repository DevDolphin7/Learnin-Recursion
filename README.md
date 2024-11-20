# Learn Recursion

**_This app is designed to help you learn recursion, by visualising the execution context diagram of a recursive function in an interactive way!_**

# Getting Started

Steps to get yourself up and running:

- Clone the repo to your local machine
- `npm install`
- `npm run dev`

This should launch an app in your browser of choice, looking like the screenshots below.

# Screen Shots

![Home Screen - contains 2 buttons to select difficulty of the example and an area to explain the kata][home-screen]

![Main Screen - shows the code being evaluated, the call stack, and a demonstration of a recursive execution context diagram][main-screen]

# How It Works

When launched, the home screen will appear in your browser of choice. Currently, you will only be able to select the default example, a simple recursive function called `run` that takes an integer as an argument representing the number of kilometers to run. The funtion tells you every time it completes a km until finally it says _"I've finished"_. Select the `Go` button in the bottom right to move to the main screen.

The main screen shows the function on the top left with the call stack underneath. An Execution Context Diagram is on the right. At the bottom, forward and back buttons allow you to walk through the recursive example, _step by step_. A dialog box just above the buttons tells you what is new in the current step.

Click through the example and see recursion in action! I hope you find this visualisation helpful :)

# Technologies

List of technologies used:

- React
- JavaScript

[home-screen]: ./Plan/images/Home%20Screen%20Plan.png
[main-screen]: ./Plan/images/Main%20Screen%20Plan.png
