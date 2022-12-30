import { useContext } from 'react';
import { UserLoginContext } from './userLoginContext';

export const Login = (setUserId: any) => {
    const theme = useContext(UserLoginContext);
    return (
        <div>
            <div>
                請輸入你的暱稱
                <input type="text" />
                <button type="button">Click Me!</button>
            </div>
        </div>
    )
}