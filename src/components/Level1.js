import React, { Fragment } from 'react';
import Level2 from './Level2';
class Level1 extends React.Component{
    constructor(){
        super();
        this.state = {
                        data:[1,2,3,4]
                     };
        this.increaseData = this.increaseData.bind(this);
    }

    increaseData(){
        const temp = this.state.data.map((e)=>e+1);
        console.log(temp);
        this.setState({data:temp});
    }
    render(){
        return(
            <Fragment>
                <h1>Level 1</h1>
                <Level2 data={this.state.data} showChanges="no"/>
                <Level2 data={this.state.data} />
                {/* <Level2 data={this.state.data} showChanges="no"/>
                <Level2 data={this.state.data} />
                <Level2 data={this.state.data} /> */}

                <button onClick={this.increaseData}>Increase Data from level 1</button>
            </Fragment>
        ); 
    }
}

export default Level1;