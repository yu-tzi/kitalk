import Head from 'next/head'
import { Login } from './login'
import { useState } from 'react';
import { UserLoginContext } from './userLoginContext';

export default function Home() {
  const [userId, setUserId] = useState(null)
  return (
    <>
      <Head>
        <title>KiTalk - 去聊聊</title>
        <meta name="description" content="realtime 1 to 1 chatroom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLoginContext.Provider value={userId}>
        {!userId && <Login setUserId={setUserId} />}
        {userId && userId.name}
      </UserLoginContext.Provider>
    </>
  )
}
