import React from 'react';
class ChildWithStateAndProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = { someData: this.props.someData, moreData: this.props.moreData };
        console.log("props : ", props);
        console.log("state : ", this.state);
        this.changeProps = this.changeProps.bind(this);
        this.changeState = this.changeState.bind(this);

    }

    changeProps(){
        console.log(this.props);
    }
    changeState(){
        console.log("changeState invoked");
        this.changeStateValue();
    }

    changeStateValue(){
        if(this.state.someData ==="new Value"){
            this.setState({someData:"old Value"}, function(){
                console.log(this.state);
            });
        }else{
            this.setState({someData:"new Value"}, function(){
                console.log(this.state);
            });
        }
    }
    render() {
        return <>
            <h2>Props Data</h2>
            <p>{this.props.someData}</p>
            <p>{this.props.moreData}</p>
            <h2>State Data</h2>
            <p>{this.state.someData}</p>
            <p>{this.state.moreData}</p>

            <p><button onClick={this.changeProps}>Change Props</button></p>
            <p><button onClick={this.changeState}>Change State</button></p>
            
        </>
    }
}

export default ChildWithStateAndProps;