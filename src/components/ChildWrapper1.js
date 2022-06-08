import React from 'react';
class ChildWrapper1 extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div style={{backgroundColor:'#ccc',border:'solid 1px #000'}}>
                {this.props.children}
            </div>
        )
    }
}

export default ChildWrapper1;