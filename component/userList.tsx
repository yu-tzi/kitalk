import { ReactNode, useContext, useEffect, useState } from 'react';
import { UserLoginContext } from './userLoginContext';
import io from 'Socket.IO-client'
let socket

export const UserList = () => {
    const [userList, setUserList] = useState({ name: '' })
    useEffect(() => {
        fetch('/api/conntectToSocket').then(() => {
            socket = io()
            socket.on('connect', () => {
                console.log('connected')
            })
        })
    }, [])
    const userId = useContext(UserLoginContext)
    return (
        <>
            <div>{`You are ${userId.name}`}</div>
            <div></div>
        </>
    )
}