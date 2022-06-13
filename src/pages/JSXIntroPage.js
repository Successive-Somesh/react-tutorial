import { Card, CardContent, Divider, Typography } from '@mui/material';
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { code1, code2, code3, code4, code5, code6, code7, code8, code9, code10 } from '@codes/JSXIntroCode';



function JSXIntroPage() {
    return (
        <>
            <Card variant="outlined" className='gapBottom'>
                <CardContent>
                    <h2>Introduction to JSX</h2>
                    <ul>
                        <li>JSX stands for Javascript XML.</li>
                        <li>JSX allows us to write HTML in javascript code.</li>
                        <li>It easily converts HTML tags into React Element.</li>
                        <li>JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.</li>
                        <li>JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.</li>
                        <li>It prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.</li>
                    </ul>





                    <h3>Example 1: Following is a simple JSX example.</h3>

                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code1}
                    </SyntaxHighlighter>
                    <Divider></Divider>

                    <h3>Example 2 : Following is an example of creating React Elements without using JSX.</h3>

                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code2}
                    </SyntaxHighlighter>

                    <Divider></Divider>

                    <p>
                        As it can be seen in the first example, JSX allows us to write HTML directly within the JavaScript code.
                        Expressions in JSX
                        With JSX, we can write expressions inside curly braces { }.
                    </p>

                    Example Code :-


                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code3}
                    </SyntaxHighlighter>


                    Inserting a Large Block of HTML

                    To write HTML on multiple lines, put the HTML inside parentheses:

                    Example Code :-

                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code4}
                    </SyntaxHighlighter>

                    <Divider></Divider>

                    <p>One Top Level Element
                    JSX tags may contain children also.
                    In order to do so, the HTML code must be wrapped in ONE top level element.
                    So if you like to write two paragraphs, you must put them inside a parent element, like a div element.
                    JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
                    </p>

                    <h3>Example Code :-</h3>


                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code5}
                    </SyntaxHighlighter>

                    Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

                    A fragment looks like an empty HTML tag: <></>.

                    <h3>Example Code :-</h3>

                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code6}
                    </SyntaxHighlighter>

                    Elements Must be Closed

                    JSX follows XML rules, and therefore HTML elements must be properly closed.
                    JSX will throw an error if the HTML is not properly closed.

                    Example Code:-

                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code7}
                    </SyntaxHighlighter>


                    Attribute class = className
                    The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

                    That's why we use attribute className instead.

                    JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

                    Example Code :-

                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code8}
                    </SyntaxHighlighter>



                    Conditions - if statements
                    React supports if statements, but not inside JSX.

                    To be able to use conditional statements in JSX, we need to put the if statements outside of the JSX, or we could use a ternary expression instead.

                    <h3>Example Code:- (Without ternary expression)</h3>


                    {<SyntaxHighlighter language="javascript" style={docco}>
                        {code9}
                    </SyntaxHighlighter>}

                    <h3>Example Code:- (with ternary expression)</h3>


                    {
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {code10}
                        </SyntaxHighlighter>
                    }
                </CardContent>
            </Card>

        </>
    );
}
export default JSXIntroPage;