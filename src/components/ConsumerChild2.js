import React, { Fragment } from 'react';
import UserContext, { UserConsumer } from '../context/UserContext';
class ConsumerChild2 extends React.Component {

    render() {
        return (
            <Fragment>
                <UserConsumer>
                    {(props) => {
                        return (<>
                            <div>{props.name}</div>
                            <div>{props.org}</div>
                        </>);
                    }
                    }
                </UserConsumer>
            </Fragment>
        )
    }
}

export default ConsumerChild2;