import { List, ListItem } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function TestingPage(){
    return(
        <div>
        <div className="instruction">Testing in React</div>

<h3>Introduction to Testing</h3> 

<p>The @testing-library family of packages helps you test UI components in a user-centric way.</p>

<p>React Testing Library is a testing utility tool that's built to test the actual DOM tree rendered by React on the browser. The goal of the library is to help you write tests that resemble how a user would use your application. This can give you more confidence that your application works as intended when a real user does use it.
The library does this by providing utility methods that will query the DOM in the same way a user would. For example, a user would find a button to 'Save' their work by its text, so the library provides you with the getByText() method. You're going to learn more about the library's methods for testing later.</p>
<h3>Setting up the Testing Environment</h3>
<p>A React application created with Create React App (or CRA) already includes both React Testing Library and Jest by default. So all you need to do is write your test code.
If you want to use React Testing Library outside of a CRA application, then you need to install both React Testing Library and Jest manually with NPM:</p>
<SyntaxHighlighter language="javascript" style={docco}>
npm install --save-dev @testing-library/react jest
</SyntaxHighlighter>
<p>
You need to install Jest because React Testing Library only provides methods to help you write the test scripts. So you still need a JavaScript test framework to run the test code.
You can also use other test frameworks like Mocha or Jasmine, </p>

<p>To run the test cases just run the following command</p>

<SyntaxHighlighter language="javascript" style={docco}>
npm run test
</SyntaxHighlighter>


<p>To see the code coverage in your testing run the following</p>
<SyntaxHighlighter language="javascript" style={docco}>
{`npm run test --  --coverage`}
</SyntaxHighlighter>


<p>
Another way for coverage :  You can also visit in package.json file and change the 
</p> 

<SyntaxHighlighter language="javascript" style={docco}>
{`"test": "react-scripts test --coverage",`}
</SyntaxHighlighter>
<p> 
to
</p>

<SyntaxHighlighter language="javascript" style={docco}>
{`"test": "react-scripts test --coverage",`}
</SyntaxHighlighter> 

 
 

<h3>Handson with Testing</h3>

<p>Let us create a simple react app react-test-demo as</p>

<SyntaxHighlighter language="javascript" style={docco}>
{`
npx create-react-app react-test-demo

cd react-test-demo
`}
</SyntaxHighlighter>




<p>You can find a App.test.js file already present in your folder created by CRA</p>

<p>To execute this file run the following in terminal window for same folder</p>

<SyntaxHighlighter language="javascript" style={docco}>
{`
npm run test
`}
</SyntaxHighlighter>

<p>
Observe the output on the terminal.

All test cases will be passed as it is a fresh project created by CRA and a sample test file that gives you a start point for testing your app.

Now you can open the App.test.js and see the code as:
</p>
<SyntaxHighlighter language="javascript" style={docco}>

{`
// file : src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
 render(<App />);
 const linkElement = screen.getByText(/learn react/i);
 expect(linkElement).toBeInTheDocument();
});
`}
</SyntaxHighlighter>

<stron>Points to take from here :</stron>
<List>
<ListItem>Render the Component</ListItem>
<ListItem>Select the element for testing purpose</ListItem>
<ListItem>Interact with selected element as per your testing scenario</ListItem>
<ListItem>Check the Assertion result</ListItem>
</List>

<p>Now remove the default content in App.js and App.test.js to start filling your own code.</p>

<p>Let us create a component folder in our src folder and create a __test__ folder also in src.</p>

<p>Add a Header component in the component folder as:</p>

<SyntaxHighlighter language="javscript" style={docco}>
{ `   
// file : src/components/Header.js

const Header = ({brandname}) => {
   return (
       <div>
           {
           brandname &&
                <p data-testid="brand">{brandname}</p>
           }
           <h1>Main Heading</h1>
           <h2>Sub Heading</h2>
           <h3>Sub title</h3>
       </div>
   )
}
export default Header;
`}
</SyntaxHighlighter>
<p>Now create a test file for this Header component as:</p>
<SyntaxHighlighter language="javscript" style={docco}>
    {
        `
// file : src/__test__/Header.js

import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Testing',()=>{
   it('Header Without Props', () => {
       render(<Header />);
       const elements = screen.getAllByRole("heading");
       expect(elements.length).toBe(3);
     });

     it('Header With Props', () => {
       render(<Header brandname="abc" />);  const elements = screen.getByText("abc");
       expect(elements).toHaveTextContent("abc");
       const paragraph = screen.getByTestId("brand");
       expect(paragraph).toBeVisible()
     });

});
`}
</SyntaxHighlighter>

<p>
Now call this Header component in your App component as :</p>
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// file : src/App.js

import './App.css';
import Header from './components/Header';

function App() {
 return (
   <div>
     <Header />
   </div>
 );
}

export default App;
`}
</SyntaxHighlighter>
<p>
Modify the App.test.js as
</p>
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// file : src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
 render(<App />);
 const linkElement = screen.getByText(/main heading/i);
 expect(linkElement).toBeInTheDocument();
});
`}
</SyntaxHighlighter>
 

<p>Now when the files are saved test runner will automatically run all the test files (*.test.js or *.spec.js) and you can see the following result on console.</p>


<p>
In case you can not see this output, read the error messages on console and debug.
</p>
<p>
Now let us examine the code structure for writing test cases
</p>

<SyntaxHighlighter language="javascript" style={docco}>
    {`
// structure 1

test("testing scenario description', () => {
// part 1 : render
// part 2 : selection of any element
// part 3 : assertion
})
`}
</SyntaxHighlighter>

<p>You can also use it() method instead of the test() method. Both are the same in working.</p>
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// structure 2

it("testing scenario description', () => {
// part 1 : render
// part 2 : selection of any element
// part 3 : assertion
})
`}
</SyntaxHighlighter>

<p>
Use describe() method to group your test scenarios 
</p>
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// structure 3

describe("Main scenario",()=>{

test("sub scenario', () => {
// part 1 : render
// part 2 : selection of any element
// part 3 : assertion
})

test("sub scenario', () => {
// part 1 : render
// part 2 : selection of any element
// part 3 : assertion
})
}
`}
</SyntaxHighlighter>



<h3>Queries : Elements Selection</h3>

<p>Queries are the methods that the Testing Library gives you to find elements on the page. There are several types of queries ("get", "find", "query"); the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. </p>

<p>After selecting an element, you can use the Events API or user-event to fire events and simulate user interactions with the page, or use Jest and jest-dom to make assertions about the element.</p>

<p>There are Testing Library helper methods that work with queries. As elements appear and disappear in response to actions, Async APIs like waitFor or findBy queries can be used to await the changes in the DOM. To find only elements that are children of a specific element, you can use within. If necessary, there are also a few options you can configure, like the timeout for retries and the default testID attribute.</p>

<h3>Types of Queries</h3>
<h5>Single Elements</h5>
getBy...: Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found (use getAllBy instead if more than one element is expected).

queryBy...: Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use queryAllBy instead if this is OK).

findBy...: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element, use findAllBy.

Multiple Elements
getAllBy...: Returns an array of all matching nodes for a query, and throws an error if no elements match.

queryAllBy...: Returns an array of all matching nodes for a query, and return an empty array ([]) if no elements match.

findAllBy...: Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 1000ms.
findBy methods are a combination of getBy* queries and waitFor. They accept the waitFor options as the last argument (i.e. await screen.findByText('text', queryOptions, waitForOptions))

Testing Use Case
Let us have an app that renders a list of items and has a form element that allows users to add items to the list on the same page.

App component renders AddItem and ListItem components where ListItem display Item components. 
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// App.js

import React, { useState } from 'react'
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
 const [items, setItems] = useState([]);

 return (
   <div>
     <Header />
     <AddItem items={items} setItems={setItems}/>
     <ListItem items={items} />
   </div>
 );
}

export default React.memo(App);
`}
</SyntaxHighlighter>

Explanation : App component has initially an empty list of items as its state. App passes this items array to AddItem and ListItem components. App also passes down the setItems behavior to AddItem so that it can update the parent’s state. 

The code for AddItem component is as follows:
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// src/components/AddItem.js

import React, { useState, useRef } from 'react';
import {v4} from 'uuid';
function AddItem({items, setItems}) {
   const [item, setItem] = useState({});
   const inputElement = useRef(null);

   const addItem = ()=>{
       const name = inputElement.current.value;
       if(!name) return;
       console.log("Add Item Clicked");
       const updatedItems = [
           ...items,
           {
               id : v4(),
               name:name,
               desc:"some desc",
               status: true
           }
       ];
       setItems(updatedItems);
       setItem({});
       inputElement.current.value = "";
       console.log("Field Cleared");
   }

   return (
       <div>
           <input type="text" name="item" placeholder="enter item name" value={item.name} ref={inputElement}/>
           <button role="add-button" name="add" onClick={addItem}>Add Item</button>
       </div>
   );
}

export default AddItem;
`}
</SyntaxHighlighter>

Explanation : AddItem receives the item list and a function to update the list. AddItem has an input element and a button to add an item to the list.

The code for ListItem is as follows:
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// src/components/ListItem.js

import Item from "./Item";
const ListItem = (props) => {

   return (
       <div>
           {props.items.map((item, index) => {
               return <Item key={item.id} item={item} role="list" data-testid={'list' + index} />
           }
           )}
       </div>);
}
export default ListItem;
`}
</SyntaxHighlighter>

Explanation: ListItem is just a container component to display a list of items. List item also receives item list from App component as props and further it iterates over it to display Item component.

The code for Item component is as follows:
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// src/components/Item.js

const Item = ({item})=>{

   return (
       <div>
           <p>Some data</p>
           <p>{item.name}</p>
           <p>{item.desc}</p>
           <p>{item.status}</p>
       </div>
   );
}

export default Item;
`}
</SyntaxHighlighter>


 App is also rendering a Header component that has nothing to do with the change in item list.
Code for Header component is as follows:
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// src/components/Header.js

import React,{ useEffect } from "react";
const Header = ({brandname}) => {
   useEffect(()=>{
       console.log("Header Loaded");
   });

   return (
       <div>
           {
           brandname &&
                <p data-testid="brand">{brandname}</p>
           }
           <h1>Main Heading</h1>
           <h2>Sub Heading</h2>
           <h3>Sub title</h3>
       </div>
   )
}
export default Header;
`}
</SyntaxHighlighter>

Test Scenario 1: Header component unit testing

Let us write a test case to ensure that the Header component renders properly with and without props..

Create a folder as __tests__ in src folder and add a Header.test.js file that will be identified by the test runner as a test code to run whenever there is a change in source code.

The code for Header.test.js is as follows:
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// src/__tests__/Header.test.js

import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Testing',()=>{
   it('Header Without Props', () => {
       render(<Header />);
       const elements = screen.getAllByRole("heading");
       expect(elements.length).toBe(3);
     });

     it('Header With Props', () => {
       render(<Header brandname="abc" />);  const elements = screen.getByText("abc")
       expect(elements).toHaveTextContent("abc")
       const paragraph = screen.getByTestId("brand")
       expect(paragraph).toBeVisible()
     })

})
`}
</SyntaxHighlighter>

Explanation : In this code you can find two it blocks for testing the Header component with and without props. The approach is clear in testing that is mentioned earlier as 
Render the Header component.
Select Heading Elements
As an assertion count of heading elements in Header component should be 3 or props passed to Header component should display the values as Text on UI.

Now run the tests and see the result and explore it.

Test Scenario 2 : Adding and Display of Item Integration Testing

Now we need to consider that whenever an item is added using the AddItem component it should be displayed in the ListItem component. Create another file in the __tests__ folder as AddItem.test.js
<SyntaxHighlighter language="javascript" style={docco}>
    {`
// src/__tests__/AddItem.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddItem from '../components/AddItem';
import App from './../App';

describe('Item Testing',()=>{
   it('Input field initial value is OK', () => {
       render(<AddItem />);
       const inputElement = screen.getByPlaceholderText(/enter item name/i);
       const listItems = screen.queryAllByRole("list");
       expect(listItems.length).toBe(0);
      
      
     });

     it('Input field accepting value is OK', () => {
       render(<AddItem />);
       const inputElement = screen.getByPlaceholderText(/enter item name/i);
       fireEvent.change(inputElement, {target:{value:"abcd"}});
       expect(inputElement.value).toBe("abcd");
      
     });
  
     it('ListItems getting added is OK', () => {
       render(<App />);
       const inputElement = screen.getByPlaceholderText(/enter item name/i);
       const button = screen.getByRole("add-button");
       //console.log(button);

       fireEvent.change(inputElement, {target:{value:"abcd"}});
       userEvent.click(button);

       fireEvent.change(inputElement, {target:{value:"xyz"}});
       userEvent.click(button);

       fireEvent.change(inputElement, {target:{value:"qwerty"}});
       userEvent.click(button);

       const listItems =  screen.queryAllByText("some desc");
       expect(listItems.length).toBeGreaterThan(2);
     });
})
`}
</SyntaxHighlighter>

<p>
Explanation : For mocking the typing of characters in input field and clicking the button, testing library provides the concept of fireEvent and userEvent to simulate the user interactions.

userEvent internally uses fireEvent. Here for example purposes both are used.

Now run the test and see the result and analyze.

Github Link for the source of this codebase is :

https://github.com/Successive-Somesh/react-test-sample
</p>

        </div>
    );
}
export default TestingPage;