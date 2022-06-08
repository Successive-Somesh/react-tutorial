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