import React from 'react';

class Child extends React.Component {
    constructor(abc) {
        super(abc);
        console.log(this);
    }
    render() {
        return (
            <div className={this.props.className || ''}>
                <h2>This is a child component</h2>
            </div>
        );
    }
}

/* function Child(props){
    return <h2>This is a child component: {props.someData}</h2>;   
} */
//const Child = (props) => <h2>This is a child component: {props.someData}</h2>

/* const Child = (props) => {
    return <h2>This is a child component: {props.someData}</h2>;
} */

export default Child;