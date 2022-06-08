import React from 'react';
class FormSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', age: '', address: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        let keys = Object.keys(this.state);
        keys.forEach(e => { console.log(this.state[e]) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{padding:20}}>
                    <label>Name: </label> 
                    <input type="text" value={this.state.name} name="name" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div style={{padding:20}}>
                    <label>Age: </label>
                    <input type="text" value={this.state.age} name="age" onChange={(e) => this.setState({ age: e.target.value })} />
                </div>
                <div style={{padding:20}}>
                    <label>Address: </label>
                    <input type="text" value={this.state.address} name="address" onChange={(e) => this.setState({ address: e.target.value })} />
                </div>
                <div style={{padding:20}}>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default FormSample;