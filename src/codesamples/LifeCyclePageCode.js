export const lifecycleDemoCode = `
import React from "react";
import LifeCycle from '@components/LifeCycle';

class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "a",
            unmount: false,
        }
    }

    render() {
        return (<div className='demo'>
            <p>Key : {this.state.key}</p>
            <p>Unmount : {this.state.unmount ?' true ':' false '}</p>
            {
                !this.state.unmount && <LifeCycle somedata={this.state.key} />
            }
            {<div>
                <button onClick={() => this.setState({ key: this.state.key=='a'? 'b':'a' })}>Update State of App Component</button>
                <button onClick={() => this.setState({ unmount: !this.state.unmount })}>
                {this.state.unmount?'Mount Lifecycle Component':'Unmount Lifecycle Component'}    
                </button>
            </div>
            }
        </div>);
    }
}

export default LifeCycleDemo;
`;

export const lifecycleCode = `
import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.count = 1;
        this.state = {someKey: "some value"} 
        console.log("Constructor",new Date().toLocaleTimeString());
    }

    
    componentDidMount() {
        console.log("Component Did Mount");
        this.setState({someKey:"Value Changed"});
    }

    shouldComponentUpdate() {
        console.log("should component update",new Date().toLocaleTimeString());
        return true;
    }

    componentDidUpdate() {
        console.log("Component Did Update",new Date().toLocaleTimeString());
    }


    componentWillUnmount() {
        console.log("Component Will Unmount",new Date().toLocaleTimeString());
    }

    render() {
        console.log("Render");
        return <p>LifeCycle Component. Open Browser console to see messages</p>
    }
}

export default LifeCycle;
`;