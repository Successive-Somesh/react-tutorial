import React from 'react';
class ChildWithElements extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ChildWithElements;