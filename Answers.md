# Answers

1.  What is React JS and what problems does it try and solve?

It's a Javascript library that is public source and created/maintained by Facebook. Facebook wanted to have a framework that could react to all this new data from users without having to make all these queries to the DOM that would slow down their servers and be far less organized so they created a virtual DOM and react can manipulate that.

1.  What does it mean to _think_ in react?

When you look at a design concept or UI problem you want to be able to break things down into class components and functional components. You should be asking what needs to hold state and do I need to abstract this component so that each component does its own thing?

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component holds state and passes down props to its children. A functional component should do something very specific, for instance a navbar, that accepts props but does not hold state.

1.  Describe state.

State is data that is held by the component. Typically state is supplied by the User of the app.

1.  Describe props.

Props allow you to customize attributes of a component. For instance, when we have an anchor tag (<a></a>) we expect it to be able to do something, so we add the "href" attribute. This is like a prop. When we pass a prop we are telling a component to create an object that contains certain attributes/data.
