import React from 'react';
import ChildWrapper1 from './ChildWrapper1';
class ChildWrapper2 extends React.Component{
    constructor(props){
        super(props);
        console.log(this);

    }
    render(){
        return(
            <ChildWrapper1>
            <div style={{backgroundColor:'#ccc',border:'solid 1px #000'}}>
                {this.props.children}
            </div>
            </ChildWrapper1>
        )
    }
}

export default ChildWrapper2;