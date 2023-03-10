import Head from 'next/head'
import { Login } from '../component/login'
import { useState } from 'react';
import { UserLoginContext } from '../component/userLoginContext';
import { UserList } from '../component/userList';
import { Chatroom } from '../component/chatRoom';

export default function Home() {
  const [userId, setUserId] = useState<{ name: string, uuid: string }>({ name: '', uuid: '' })
  return (
    <>
      <Head>
        <title>KiTalk - 去聊聊</title>
        <meta name="description" content="realtime 1 to 1 chatroom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLoginContext.Provider value={userId}>
        {!userId.name && <Login setUserId={setUserId} />}
        {userId.name && <UserList/>}
        {userId.name && <Chatroom/>}
      </UserLoginContext.Provider>
    </>
  )
}
