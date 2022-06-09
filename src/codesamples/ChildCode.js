const reactChildCode = `
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
export default reactChildCode;