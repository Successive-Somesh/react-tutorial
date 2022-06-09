import { Divider } from '@mui/material';
import ReactDOMServer from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Child from "./Child";
import ChildWithProps from './ChildWithProps';
import ChildWithStateAndProps from './ChildWithStateAndProps';

const reactChildCode = `
// Child.js
import React from 'react';
class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.className || ''}>
                <h2>This is a child component</h2>
            </div>
        );
    }
}
export default Child;`;

const appChildCode = `
// App.js

`;

function RenderChilds(props) {
    return (
        <>
            <h1>Rendering Child Components</h1>
            <p>You can create components i.e. Child and use it in your App component or in any component you want</p>
            <h2>Calling Child Component</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {reactChildCode}
            </SyntaxHighlighter>
            <h2>Output</h2>
            <div style={docco}>
                <Divider ></Divider>
                <Child />
                <Divider ></Divider>
            </div>

            <h2>Calling Child Component with props</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {reactChildCode}
            </SyntaxHighlighter>
            <h2>Output</h2>
            <ChildWithProps someData="some data" moreData="more data" />
            <Divider ></Divider>

            <h2>Calling Child Component with props and state</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {reactChildCode}
            </SyntaxHighlighter>
            <h2>Output</h2>
            <ChildWithStateAndProps someData="some data" moreData="more data" />
            <Divider ></Divider>


        </>
    );
}

export default RenderChilds;