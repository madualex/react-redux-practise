import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useSelector } from 'react-redux';

const Login = () => {
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch();

    return (
        <div>
            <button
                style={{color: theme}}
                onClick={() => {
                    dispatch(login(
                        { name: "Alex", age: 30, email: "techwithalex1@gmail.com" }
                    ))
                }}>Login</button>
            <button
                style={{ color: theme }}
                onClick={() => {
                    dispatch(logout())
                }}>Logout</button>
        </div>
    )
}

export default Login;

// So, i want to create a login button inside this login component so that when I click the button, the details from this component will be transfered to the profile component.

// First, this talks about changing the state of an application (the profile component in this case) which is where a state updating/changing library like the useState comes in.

// Although, I can think of passing this data from the login comp to the profile comp as a prop, but react does not allow sibling to sibling data flow. Data can only be passed downwards like a tree. So, the best alternative especially in a situation with so many components will be to create a single source of state where global data can be accessed by any component needing such data to change/update its state.

// This is where redux comes in. But note that, for components where the state is only needed within that component, the normal useState hook can be used since the state in this case is local to that component and will not be used elsewhere or in any component that is a sibling to it.

// The useDispatch hook in redux is imported into any component that wish to perform an action on a global state that is being accessed by the useSelector hook.

// Also import the action itself (login). I think the reason why the useDispacth and useSelector hook is used separately in this example application is because the action that changes a state are both in separate components