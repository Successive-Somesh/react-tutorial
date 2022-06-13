export const appChildCode = `
// App.js
import React from 'react';
import Child from "@components/Child";
class App extends React.Component {
    render() {
        return (<Child />);
    }
}
export default App;
`;

export const appChildCodeWithClass = `
// App.css


// App.js
import React from 'react';
import Child from "@components/Child";
class App extends React.Component {
    render() {
        return (<Child className='demo'/>);
    }
}
export default App;
`;

export const appChildWithPropsCode = `
// App.js
import React from 'react';
import Child from "@components/Child";
class App extends React.Component {
    render() {
        return (<Child someData="some data" moreData="more data"/>);
    }
}
export default App;
`;

//export default appChildCode;