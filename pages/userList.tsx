import { useContext } from 'react';
import { UserLoginContext } from './userLoginContext';

export const UserList = () => {
    const userId = useContext(UserLoginContext)
    return (
        <>
            <div>{`You are ${userId.name}`}</div>
            <div>All user : </div>
        </>
    )
}