export const code1 = `
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`;

export const code2 = `
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
`;

export const code3 =`
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`;

export const code4 =`
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`;

export const code5 = `
import React from 'react';
import ReactDOM from 'react-dom/client';
    
const myElement = (
    <div>
    <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`;

export const code6 = `
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = (
    <>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`;

export const code7 =`
import React from 'react';
import ReactDOM from 'react-dom/client';
 
const myElement = <input type="text" />;
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`;   

export const code8 = `
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = <h1 className="myclass">Hello World</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
`;

export const code9 = `   
import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 5;
let text = "Goodbye";
if (x < 10) {
    text = "Hello";
}

const myElement = <h1>{text}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
`;

   export const code10 = `
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   
   const x = 5;
   
   const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
   
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(myElement);
   `; 