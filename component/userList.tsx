import { ReactNode, useContext, useEffect, useState } from 'react';
import { UserLoginContext } from './userLoginContext';

export const UserList = () => {
    const [userList, setUserList] = useState({ name: '' })
    useEffect(() => {
    }, [])
    const userId = useContext(UserLoginContext)
    return (
        <>
            <div>{`You are ${userId.name}`}</div>
            <div></div>
        </>
    )
}