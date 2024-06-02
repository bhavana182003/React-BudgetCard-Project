import React,{createContext,useContext} from 'react';
const UserContext = createContext();
export const useUser = ()=> useContext(UserContext);
export const UserProvider = ({children})=> {
    const user = { name :'uni', prof:'learner'};// const theme ='red green & blue'
    return(
        <UserContext.Provider value ={user}>
        {children}
        </UserContext.Provider>
    );
}