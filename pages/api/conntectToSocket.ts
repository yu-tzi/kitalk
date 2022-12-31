import type { NextApiRequest, NextApiResponse } from 'next'
import { Server } from "socket.io";

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: any
) {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io
    }

    res.socket.server.io.on("connection", (socket) => {
        socket.on("hello", (arg) => {
            console.log(arg); 
            socket.broadcast.emit("hello", `${arg} 12345`);
        });
    });
    res.end()
}
