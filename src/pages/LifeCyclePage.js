import { Card, CardContent, Divider, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import LifeCycleDemo from '@components/LifeCycleDemo';
import { lifecycleDemoCode, lifecycleCode } from "../codesamples/LifeCyclePageCode";
import ReactLifeCyclePic from '@images/ReactLifeCyclePic.png';

function LifeCyclePage() {
    return (<>
        <Card variant="outlined" className='gapBottom'>
            <CardContent>
                <h2>Lifecycle of a Component</h2>
                <div>
                    Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
                    The three phases are: <strong>Mounting</strong>, <strong>Updating</strong>, and <strong>Unmounting</strong>.
                    <img src={ReactLifeCyclePic} />
                </div>
                <div>
                The methods used in each of the phase are as follows : 

<Typography>
    <p><strong>Phase 1: Mounting</strong></p>
    React has four built-in methods that gets called, in this order, when mounting a component:

<div className='instruction'>
    <p>constructor()</p>
    <p>getDerivedStateFromProps()</p>
    <p>render()</p>
    <p>componentDidMount()</p>
</div>
The render() method is required and will always be called, the others are optional and will be called if you define them.
<p><strong>Phase 2 : Updating</strong></p>

A component is updated whenever there is a change in the component's state or props.
React has five built-in methods that gets called, in this order, when a component is updated:
<div className='instruction'>
<p>getDerivedStateFromProps()</p>
<p>shouldComponentUpdate()</p>
<p>render()</p>
<p>getSnapshotBeforeUpdate()</p>
<p>componentDidUpdate()</p>
</div>
The render() method is required and will always be called, the others are optional and will be called if you define them.
<p><strong>Phase 3 : Unmounting</strong></p>
The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
React has only one built-in method that gets called when a component is unmounted:
<div className='instruction'>
<p>componentWillUnmount()</p>
</div>
</Typography>

                </div>
            </CardContent>
        </Card>
        <Card variant="outlined" className='gapBottom'>
            <CardContent>
                {
                    // Basic Child Component
                }
                <h2>{'Lifecycle Demo Component'}</h2>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {lifecycleDemoCode}
                </SyntaxHighlighter>

                <h2>{'Lifecycle Component'}</h2>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {lifecycleCode}
                </SyntaxHighlighter>

                <h2>{'Output'}</h2>
                <div>
                    <Divider ></Divider>
                    <div className='demo'>
                        {<LifeCycleDemo />}
                    </div>
                    <Divider ></Divider>
                </div>
            </CardContent>
        </Card>
    </>
    );
}

export default LifeCyclePage;