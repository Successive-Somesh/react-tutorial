import { Card, CardContent, Divider, Grid } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import LifeCycleDemo from '@components/LifeCycleDemo';
import { lifecycleDemoCode, lifecycleCode } from "../codesamples/LifeCyclePageCode";

function LifeCyclePage(){
    return (
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
    );
}

export default LifeCyclePage;