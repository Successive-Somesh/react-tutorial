const childWithPropsCode =`
import React from 'react';
class ChildWithProps extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return <>
                <p>{this.props.someData}</p>
                <p>{this.props.moreData}</p>
            </>
    }
}

export default ChildWithProps;
`;
export default childWithPropsCode;