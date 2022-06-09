import { Divider } from '@mui/material';
import ReactDOMServer from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Child from "@components/Child";
import ChildWithProps from '@components/ChildWithProps';
import ChildWithStateAndProps from '@components/ChildWithStateAndProps';
import reactChildCode from '@codes/ChildCode';
import appChildCode from '@codes/appChildCode';
import reactChildWithPropsCode from '@codes/ChildWithPropsCode';


function RenderChilds(props) {
    return (
        <>
            <h1 className="demo">Rendering Child Components</h1>

            <p>You can create components i.e. Child and use it in your App component or in any component you want</p>
            <h2>Child Component</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {reactChildCode}
            </SyntaxHighlighter>

            <h2>Calling from App Component</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {appChildCode}
            </SyntaxHighlighter>

            <h2>Output</h2>
            <div>
                <Divider ></Divider>
                <div className='demo'>
                    <Child />
                </div>
                <Divider ></Divider>
            </div>

            <h2>Calling Child Component with props</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {reactChildWithPropsCode}
            </SyntaxHighlighter>
            <h2>Output</h2>
            <div className='demo'>
                <ChildWithProps someData="some data" moreData="more data" />
            </div>
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