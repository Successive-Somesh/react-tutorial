import { List, ListItem } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

function VirtualDOMIntroPage() {
    return (
        <>
            <h3>DOM</h3>
            <p>
                DOM stands for ‘Document Object Model’. It is a structured representation of the HTML elements that are present in a webpage or web-app.
                DOM represents the entire UI of the application.</p>

            <p>The DOM is represented as a tree data structure. It contains a node for each UI element present in the web document. It is very useful as it allows web developers to modify content through JavaScript, also it being in structured format helps a lot as we can choose specific targets and all the code becomes much easier to work with.</p>

            <h3>Updating DOM</h3>
            <p>JavaScript makes use of ‘getElementById()’ or ‘getElementByClass()’ method to modify the content of DOM. Every time there is a change in the state of your application, the DOM gets updated to reflect that change in the UI.
                Though doing things like this is not a problem and it works fine, consider a case where we have a DOM that contains nodes in a large number, and also all these web elements have different styling and attributes.</p>

            <p>As DOM is represented as a tree itself, updating the tree here is not a costly operation indeed we have a lot of algorithms on trees to make the updates fast. What’s proving to be costly is every time the DOM gets updated, the updated element and its children have to be rendered again to update the UI of our page. Like this, each time there is a component update, the DOM needs to be updated and the UI components have to be re-rendered.</p>

            <h3>Example Code :- </h3>
            <SyntaxHighlighter language="javascript">
// Simple getElementById() method
                document.getElementById('some-id').innerValue = 'updated value';
            </SyntaxHighlighter>

            <p>When writing the above code in the console or in the JavaScript file, these things happen: </p>

            <List>
                <ListItem>The browser parses the HTML to find the node with this id.</ListItem>
                <ListItem>It removes the child element of this specific element.</ListItem>
                <ListItem>Updates the element(DOM) with the ‘updated value’.</ListItem>
                <ListItem>Recalculates the CSS for the parent and child nodes.</ListItem>
                <ListItem>Update the layout.</ListItem>
                <ListItem>Finally, traverse the tree and paint it on the screen(browser) display.</ListItem>
            </List>

            <p>So as we know now that updating the DOM not only involves changing the content, it has a lot more attached to it. Also recalculating the CSS and changing the layouts involves complex algorithms, and they do affect the performance. So React has a different approach to dealing with this, as it makes use of Virtual DOM.</p>
            <h3>Virtual DOM</h3>
            <List>
                <ListItem>It is a JS object.</ListItem>
                <ListItem>Lightweight representation of Real DOM.</ListItem>
                <ListItem>For every object that exists in real DOM, there is an object for that in React virtual DOM.</ListItem>
                <ListItem>A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.</ListItem>
                <ListItem>Manipulating the DOM is slow. But manipulating virtual DOM is much faster because nothing gets drawn on the screen. We can think of manipulating virtual DOM as editing a blueprint.</ListItem>
            </List>

            <h3>How does Virtual DOM work?</h3>

            <List>
                <ListItem>Whenever there is a change in the react JSX element, the entire virtual DOM gets updated.</ListItem>
                <ListItem>The virtual DOM gets updated to what it looked like before you updated it. React figures out which objects have changed.</ListItem>
                <ListItem>The changed objects, and the changed objects only, get updated on the Real DOM.</ListItem>
                <ListItem>Changes on the real DOM cause the screen to change.</ListItem>
            </List>

            <h3>How Virtual DOM actually make things faster</h3>

<p>When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and makes a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.</p>
<h3>How Virtual DOM helps React</h3>
<List>
<ListItem>In react, everything is treated as a component be it a functional component or class component. A component can contain a state. </ListItem>
<ListItem>Each time we change something in our JSX file or whenever the state of any component is changed, react updates its Virtual DOM tree. Though it may sound that it is ineffective, the cost is not very significant as updating the virtual DOM doesn’t take much time. </ListItem>
<ListItem>React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM.</ListItem>
<ListItem>Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed.</ListItem> 
<ListItem>This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. </ListItem>
<ListItem>Once React finds out what exactly has changed then it updates those objects only, on real DOM. </ListItem>
<ListItem>React uses something called batch updates to update the real DOM. It just means that the changes to the real DOM are sent in batches instead of sending any update for a single change in the state of a component.</ListItem> 
<ListItem>Re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM receives batch updates to re-render the UI. This entire process of transforming changes to the real DOM is called Reconciliation.</ListItem>
</List>
        </>
    )

}
export default VirtualDOMIntroPage;