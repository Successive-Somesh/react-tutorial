export const childCode = `
// Child.js

import React from 'react';
class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>This is a child component</h2>
        );
    }
}
export default Child;
`;

export const childCodeWithClass = `
// Child.js

import React from 'react';
class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.className || ''}>
                <h2>This is a child component</h2>
            </div>
        );
    }
}
export default Child;
`;
export const childCodeWithProps =`
// Child.js

import React from 'react';
class Child extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <>
                <p>{this.props.someData}</p>
                <p>{this.props.moreData}</p>
            </>
    }
}

export default Child;
`;

export const childWithPropsOrNullDisplay =`
// Child.js

import React from 'react';
class Child extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <>
                <p>{this.props.someData || ''}</p>
                <p>{this.props.moreData || ''}</p>
            </>
    }
}

export default Child;
`;
