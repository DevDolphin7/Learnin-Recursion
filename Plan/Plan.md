# What Do I Want?

**I want an interactive Execution Context Diagram where students can scroll through the steps of a recursion example**

# Initial Thoughts

- React front end that has a "ExecutionContextDiagram" component that can be recursively invoked?
- Props used to pass through each step
- Links to searching for files in a directory & sub-directories - actual useful application of recursion
- Intro screen showing the folder structure then an object representation of it:

```JavaScript
// root
    // Folder1
        // Notes.txt
    // Folder2
        // Folder3
            // ExampleCode.js
        // ExamPreparation.txt
        // ExamResults.pdf
    // Objectives.txt

[ // root
    ["Notes.txt"], // Folder 1
    [ // Folder2
        ["ExampleCode.js"], // Folder3
        "ExamPreparation.txt",
        "ExamResults.pdf"
    ],
    "Objectives.txt"
]
```

This should be made clear, then users are shown a rescursive solution

```JavaScript
function listFiles(input, output) {
  if (input.length === 0) {
    return;
  }

  if (typeof input[0] === "string") {
    output.push(input[0]);
  } else {
    listFiles(input[0], output);
  }

  input.shift();
  listFiles(input, output);
}
```

Users are then shown an Execution Context Diagram, where they can click forward or back through each step of the exectution context diagram while the recursion is solved.

Cool ideas:

- Can modify the number of calls - would break above a defined call stack limit
- Can see where abouts "in the process" you are - have some high level overview showing as well
- Expansible - can evaluate any code given (maybe fixed number of lines?) and just show the execution context diagram

# Research

[Top 7 diagrams as code tools for software architecture](1):

- Software architecture tools can be categorized into three groups, modelling tools, diagrams as code and diagramming tools.
- Diagrams as code tools are suited for long-term documentation as they can be checked into source control with version history.  
  ^ Gemini states the following points regarding different aspects of software architecture tools:
- Modeling: Creating blueprints of software systems
- Diagramming: Visualizing how a system will interact with other parts
- Analyzing: Providing insights into a system's architecture
- Prototyping: Turning abstract ideas into tangible software solutions
- Collaboration: Working with others on the architecture

[10 Free Context Diagram Templates](https://clickup.com/blog/context-diagram-templates/)

- This is a useful resource but only provides static diagrams, they are not interactive

[Free AI Diagram Generator](https://venngage.com/ai-tools/diagram-generator)

- Provided the input given in [What Do I Want](#what-do-i-want) section, output can be found in the [Appendices](#appendices)
- Output description: A static 4 quadrant graph with text discussing interactive diagrams for recursion

[Context diagram software](https://www.lucidchart.com/pages/examples/context-diagram-software)

- This offerening from Lucidchart allows users to create a static visualisation of data flows between systems.
- Lucidchart's ethos is that visualisation allows for better communication & understanding - I would agree with this.
- Claims to have automated diagrams - this appears to be templates you can work from essentially.

[How Recursion works with the Call Stack in JavaScript](https://www.youtube.com/watch?v=D71LzJBdaKw)

- A little confusing script
- Visualisation of code in VS Code
- Walks through an example of a simple function that console.logs(), focusing on the call stack

[Best Javascript Recursion Explanation on YouTube](https://www.youtube.com/watch?v=LteNqj4DFD8)

- Online REPL browser used to visualise the code

[What Is Recursion - In Depth](https://www.youtube.com/watch?v=6oDQaB2one8)

- Uses VS Code and the bowser to visualise the code
- Simplified language & most views of the videos I've seen! (157k)

## Research Conclusion

There's lot's of tools for software architecture design and development but nothing that currently allows a user to interactively explore an execution context diagram.

The project "why" - I find visualisation helps me learn, it may help others as well.

- _Who_: Target audience is students at Northcoders

- _What_: A broswer based execution context diagram that students can click through the steps of a recursion example

- _Where_: Locally-hosted repo (npm start)

- _When_: Before next Vel 1-2-1!

- _Why_: I find visualisation helps me learn, it may help others as well. Initial feedback from other mentors positive.

# Plan Visualisation

![Home Screen - contains 2 buttons to select difficulty of the example and an area to explain the kata][home-screen]

![Main Screen - shows the code being evaluated, the call stack, and a demonstration of a recursive execution context diagram][main-screen]

# Appendices

Output from asking the Free AI Diagram Generator:

![A static 4 quadrant graph with text discussing interactive diagrams for recursion][diagram-output]

[diagram-output]: ./images/Free-AI-Diagram-Generator.png
[home-screen]: ./images/Home%20Screen%20Plan.png
[main-screen]: ./images/Main%20Screen%20Plan.png
