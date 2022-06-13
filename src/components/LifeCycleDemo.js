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