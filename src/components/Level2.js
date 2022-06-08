import React from 'react';
class Level2 extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {data:[]}
        this.increaseLevel2 = this.increaseLevel2.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {data:props.data};
       /*  if(state.data !== props.data){
            console.log("IF - derived state");
            return {data:props.data};
        }
        console.log("Else - derived state");    
        return {data:state.data}; */    
    }
    shouldComponentUpdate(props, state) {
        if (this.props.showChanges === "no")
            return false;
        return true;
    }

    increaseLevel2() {
        const temp = this.state.data.map(e => e + 3);
        console.log("temp",temp);
        this.setState({ data: temp }, function(){
            console.log(this.state.data);
        });
    }

    render() {
        console.log("rendered Level2");
        console.log("Level 2 State",this.state, "Level 2 Props",this.props);
        return <div>
            <ul>
                {this.state.data.map((e, index) => <li key={index}>{e}</li>)}
            </ul>
            <button onClick={this.increaseLevel2}>Increase at Level 2</button>
        </div>
    }
}

export default Level2;