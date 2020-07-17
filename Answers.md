1. What problem does the context API help solve?

It could be seen as essentially a lighter version or Redux. It is another way of managing state which helps us avoid  what is called "prop drilling" which is passing props from grandparent, to parent, to child, to grandchild etc.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information sent back to your store based on an action or event on a webpage. A reducer is a function that determines what changes on the application. And a store is the state of all the data for the page. The store is known as a singel source of truth because it stores all the data that the page needs to it is where all the props get data and where reducers and actions send data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is like the Redux Store. It is accessable from everywhere and used everywhere. Component state is state managed at the component level, so it isn't as easily accessed from component to component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is middleware that allows us to call actions that return functions instead of objects. It gives that function the ability to use the stores dispatch method.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux because all though it was hard to understand at first, it makes a lot more sense that passing allof my data through props. Even though we still pass things through props a bit, Redux just makes it easier to understand all of your data overall.