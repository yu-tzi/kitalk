import { ReactNode, useContext, useEffect, useState } from 'react';
import { UserLoginContext } from './userLoginContext';
// @ts-ignore: Unreachable code error
const { io } = require("socket.io-client");
let socket

export const UserList = () => {
    const [userList, setUserList] = useState({ name: '' })
    useEffect(() => {
        fetch('/api/conntectToSocket').then(() => {
            //socket = io('https://kitalk.vercel.app/socket.io/', { path: '' });
            //socket = io('https://kitalk.vercel.app/socket.io/', { path: '/' });
            //socket = io('https://kitalk.vercel.app/index/', { path: '/socket.io/' });
            socket = io('https://kitalk.vercel.app//', { path: 'socket.io/' });
            socket.on('connect', () => {
                console.log('connected')
            })
            socket.emit("hello", userId.name);
            socket.on("hello", (arg: any) => {
                console.log(arg); 
            });
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