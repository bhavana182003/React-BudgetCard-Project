import React from 'react';
import UserDisplay from './UserDisplay';
import { UserProvider } from './UserContext';
const App =()=> {
    return (
        <UserProvider>
        <div>
        <h1> User Example</h1>
        <UserDisplay/>
        </div>
        </UserProvider>
    );
};
export default App