import React, { Fragment } from 'react';
import UserContext from '../context/UserContext';
class ConsumerChild1 extends React.Component {
    static contextType = UserContext
    constructor(props) {
        super(props);
        console.log(this);
        console.log(this.contextType);
    }

    componentDidMount() {
        const user = this.context;
        console.log(user);
    }

    render() {
        const user = this.context;
        console.log(user);
        return (
            <Fragment>
                <div>{user.name}</div>
                <div>{this.context.name}</div>
                <div>{this.context.org}</div>
            </Fragment>
        )
    }
}

export default ConsumerChild1;