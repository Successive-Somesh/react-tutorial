import { Card, CardContent, Divider, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import LifeCycleDemo from '@components/LifeCycleDemo';
import { lifecycleDemoCode, lifecycleCode } from "../codesamples/LifeCyclePageCode";
import ReactLifeCyclePic from '@images/ReactLifeCyclePic.png';
import codeInCard from '../utils/CodeInCard';
function LifeCyclePage() {
    return (<>
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
                <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
                <p><strong>Phase 2 : Updating</strong></p>

                <p>A component is updated whenever there is a change in the component's state or props.<br />
                    React has five built-in methods that gets called, in this order, when a component is updated:</p>
                <div className='instruction'>
                    <p>getDerivedStateFromProps()</p>
                    <p>shouldComponentUpdate()</p>
                    <p>render()</p>
                    <p>getSnapshotBeforeUpdate()</p>
                    <p>componentDidUpdate()</p>
                </div>
                <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
                <p><strong>Phase 3 : Unmounting</strong></p>
                <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
                    React has only one built-in method that gets called when a component is unmounted:</p>
                <div className='instruction'>
                    <p>componentWillUnmount()</p>
                </div>
            </Typography>

        </div>
        <h2>{'Lifecycle Demo Component'}</h2>
        {codeInCard(lifecycleDemoCode)}

        <h2>{'Lifecycle Component'}</h2>
        {codeInCard(lifecycleCode)}
        <h2>{'Output'}</h2>
        <div>
            <Divider ></Divider>
            <div className='demo'>
                {<LifeCycleDemo />}
            </div>
            <Divider ></Divider>
        </div>
        <>
            <h3>Control re-rendering of the component</h3>
            <p>As there is a lifecycle method should Component Update that returns a boolean value. So if you override this method and return false then it will not re-render the component</p>

            {
                codeInCard(`
shouldComponentUpdate(nextProps, nextState) {

return this.state.stateName != nextState.stateName;

}`)
            }


            <p>You can now override this method with your scenario for re-rendering of the component.</p>
            <h3>Error Handling lifecycle methods</h3>

            <p>These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.</p>


            {
                codeInCard(`
static getDerivedStateFromError(error)
`)
            }
            {
                codeInCard(`    
componentDidCatch(error, info)
`)
            }

            <p>These functions will be explored in detail ahead in the topic of Error Boundaries.</p>

        </>

    </>
    );
}

export default LifeCyclePage;