import React from 'react';
class FormSampleWithData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[], 
            formData: {name: '', age: '', address: ''}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let keys = Object.keys(this.state.formData);
        keys.forEach(e => { return console.log(this.state.formData[e]) });
        let temp = this.state.formData;
        console.log(temp);
        this.setState({data:[...this.state.data, temp]});
        this.setState({formData:{}})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{padding:20}}>
                    <label>Name: </label> 
                    <input type="text" value={this.state.form.name} name="name" onChange={(e) =>{ this.state.formData.name = e.value;this.setState(this.state.formData)}} />
                </div>
                <div style={{padding:20}}>
                    <label>Age: </label>
                    <input type="text" value={this.state.age} name="age" onChange={(e) => { this.state.formData.age = e.value;this.setState(this.state.formData)}} />
                </div>
                <div style={{padding:20}}>
                    <label>Address: </label>
                    <input type="text" value={this.state.address} name="address" onChange={(e) => { this.state.formData.address = e.value;this.setState(this.state.formData)}} />
                </div>
                <div style={{padding:20}}>
                    <input type="submit" value="Submit" />
                </div>

                <ul>
                    {
                        this.state.data.length>0 && this.state.data.map(e=><li>{e.name} , {e.age} , {e.address}</li>)
                    }
                </ul>
            </form>
        );
    }
}

export default FormSampleWithData;