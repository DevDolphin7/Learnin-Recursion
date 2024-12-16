# New Approach

## Why?

React essentially doesn't appear to like recurive rendering of components.

**_What exactly doesn't it like?_**

- It will render the component recursively
- It **will not** let you pass any information between component calls...? _is this because it will only render the latest invocation of the component?_ **_If this is true, there is basically no recursive rendering in React_**
- It **will not** let you reassign variables as they all get assigned as const (including props)
- It **will not** let you update a state value while another component is rendering / in the process of updating state

# Ideas for new approach

- Define where the level changes in a util function and make an object that will render everything in 1 invocation
- Make threads and envVars an object with level as the key. If level === 1, do a for loop to get all of the information
- Don't recursively call execution context diagram, call it with a map in main pane?
- Find each step where the level changes and conditionally render the step before the changes
