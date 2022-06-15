import { Card, CardContent } from '@mui/material';
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function codeInCard(code) {
    return (
        <Card variant="outlined" className='gapBottom'>
            <CardContent>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {code}
                </SyntaxHighlighter>
            </CardContent>
        </Card>
    );
}
export default codeInCard;