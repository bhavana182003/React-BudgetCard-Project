import React from 'react';
import { useUser } from "./UserContext";
const UserDisplay =()=>{  
    const user = useUser();
    return<p>
        Welcome,{user.name}!</p>;//current theme:{theme}
};
    export default UserDisplay;
