import { Card, CardContent, Divider, Grid } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Child from "@components/Child";
import ChildWithProps from '@components/ChildWithProps';
import ChildWithStateAndProps from '@components/ChildWithStateAndProps';
import { appChildCode, appChildWithPropsCode, appChildCodeWithClass } from '@codes/appChildCode';
import { childCode, childCodeWithProps, childCodeWithClass, childCodeWithPropsOrDisplayNull } from '@codes/ChildCode';
import codeInCard from '../utils/CodeInCard';

function RenderChildCase(props) {
    return (
        <>
            <h2>{props.mainHeading}</h2>
            {codeInCard(props.code1)}

            <h2>{props.appCallingHeading}</h2>
            {codeInCard(props.appCode1)}

            <h2>{props.outputHeading}</h2>
            <div>
                <Divider ></Divider>
                <div className='demo'>
                    {<props.outputComponent />}
                </div>
                <Divider ></Divider>
            </div>
        </>
    )
}

function RenderChilds(props) {
    return (
        <>
            <h1 className="demo">Rendering Child Components</h1>
            <p>You can create components i.e. Child and use it in your App component or in any component you want</p>

            {
                <RenderChildCase
                    mainHeading='Child Component'
                    code1={childCode}
                    appCallingHeading="Calling from App Component"
                    appCode1={appChildCode}
                    outputHeading="Output"
                    outputComponent={Child} />
            }
            {
                <RenderChildCase
                    mainHeading='Child Component with className'
                    code1={childCodeWithClass}
                    appCallingHeading='Calling from App Component'
                    appCode1={appChildCodeWithClass}
                    outputHeading="Output"
                    outputComponent={Child} />
            }


            <>
                <h2>Child Component with props</h2>
                {codeInCard(childCodeWithProps)}

                <h2>Calling from App Component</h2>
                {codeInCard(appChildWithPropsCode)}
                <h2>Output</h2>
                <div className='demo'>
                    <ChildWithProps someData="some data" moreData="more data" />
                </div>
                <Divider ></Divider>

            </>
            <>

                <h2>Calling Child Component with props and state</h2>
                {codeInCard(appChildWithPropsCode)}
                <h2>Output</h2>
                <ChildWithStateAndProps someData="some data" moreData="more data" />
                <Divider ></Divider>

            </>


        </>
    );
}

export default RenderChilds;