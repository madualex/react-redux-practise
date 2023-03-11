import React from 'react'
import { useSelector } from 'react-redux';


const Profile = () => {
    const user = useSelector((state) => state.user.value);
    const theme = useSelector((state) => state.theme.value);

    return (
        <div style={{ color: theme }}>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email} </p>
        </div>
    )
}

export default Profile;

// The useSelector hook in redux is imported and used anytime you wish to access a global state and use it within a component. It takes in a parameter called state which is then used to specify the particular state you are targeting and its value. This is why it is crucial that when creating reducers in redux using the createSlice function, you specify the name of the particular state you're creating as well as its value.

// I think the reason why the useDispacth and useSelector hook is used separately in this example application is because the action that changes the state are both in separate components. They would have been used in same component if the action that updates a state as well as the state is in thesame component but would also be needed somewhere.