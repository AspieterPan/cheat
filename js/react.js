import React, { useState, useEffect, createContext, useContext } from "react";
import PropTypes from "prop-types";

// Basic Class Component
class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

// Functional Component
function FunctionalComponent() {
  return <div>Hello World</div>;
}

// Using useState Hook for state management in functional components
function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Using useEffect Hook for side effects in functional components
function EffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Component with props and prop types
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

// Handling events in functional components
function EventHandlingComponent() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}

// Conditional rendering in components
function ConditionalRenderingComponent(props) {
  if (props.shouldRender) {
    return <div>Hello World</div>;
  } else {
    return <div>Goodbye World</div>;
  }
}

// Rendering lists and using keys
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

// Using Fragments to group a list of children without adding extra nodes to the DOM
function Columns() {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
}

// Using Context API to pass data through the component tree without having to pass props down manually at every level
const ThemeContext = createContext("light");

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button theme={theme}>I am styled by theme context!</button>;
}

export default MyComponent; // Exporting the main component
