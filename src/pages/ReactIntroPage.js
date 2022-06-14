import { List, ListItem } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code1 = `
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>Thanks for giving your time to learn React</h2>
            </div>
        );
    }
}
export default App;
`;

const code2 = `
import React, {Component} from "react"; 
class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>Thanks for giving your time to learn React</h2>
            </div>
        );
    }
}
export default App;
`;

const code3 = `
function App(){
    return (
            <div>Hello World</div>
    );
}
export default App;
`;

const code4 = `
const App = ()=> {
    return <div>Hello World</div>
}
export default App
`;
const code5 = `
const App = ()=>  <div>Hello World</div>
export default App
`;

function ReactIntroPage() {
    return (
        <>
            <h3>Introduction to Components</h3>
            <p>A Component is considered as the core building blocks of a React application. It makes the task of building UIs much easier. Each component exists in the same space, but they work independently from one another and merge all in a parent component, which will be the final UI of your application.
                Every React component have their own structure, methods as well as APIs. They can be reusable as per your need. For better understanding, consider the entire UI as a tree. Here, the root is the starting component, and each of the other pieces becomes branches, which are further divided into sub-branches.</p>


            <p>There are two types of components in React as listed below</p>
            <List>
                <ListItem>Class Components</ListItem>
                <ListItem>Functional Components</ListItem>
            </List>
            <h3>Class Components</h3>
            <p>
                Components in react can be created by extending React. Component class. It helps derived components gain access to the existing methods in React. Components that control the transition of various lifecycle methods for the component.
            </p>
            <h3>Example 1: Following is a simple class component in react to say hello world</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
                {code1}
            </SyntaxHighlighter>
            <h3>Example 2 : Following is a simple class component in react to say hello world</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
                {code2}
            </SyntaxHighlighter>
            <h3>Functional Components</h3>

            <p>React also provides a way of creating components by writing it as a function.</p>
            <SyntaxHighlighter language="javascript" style={docco}>
                {code3}
            </SyntaxHighlighter>

            <p>You can also create React components by creating an arrow function as well</p>
            <SyntaxHighlighter language="javascript" style={docco}>
                {code4}
            </SyntaxHighlighter>

            <p>You can also omit the curly braces and return keyword to write your code as :</p>
            <SyntaxHighlighter language="javascript" style={docco}>
                {code5}
            </SyntaxHighlighter>
        </>
    );
}
export default ReactIntroPage;