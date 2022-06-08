import React from 'react'

const UpdatableUserContext = React.createContext(true)

class UpdatableUserProvider extends React.Component {
    state = {
        user: {
            name: "Somesh",
            org: "ST"
        }
    }

    updateUser(newuser) {
        this.setState(newuser);
    }
    render() {
        return (
            <UpdatableUserContext.Provider value={{user:this.state.user,updateUser:this.updateUser }}>
                {props.children}
            </UpdatableUserContext.Provider>
        );
    }
}


export default UpdatableUserContext;
export { UpdatableUserProvider }
export const UpdatableUserConsumer = UpdatableUserContext.Consumer