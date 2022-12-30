import { useState } from "react"


export const Login = (props: { setUserId: Function }) => {
    const { setUserId } = props;
    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    const validateInput = (e: any) => {
        if (e.target.value.length < 5) {
            setInput(e.target.value)
            setError('')
        } else {
            setError('string is toooo long')
        }
    }
    const sendInput = (e: any) => {
        e.preventDefault()
        setUserId({ name: input, uuid: 'uuid' })
    }
    return (
        <div>
            <div>
                請輸入你的暱稱
                <input type="text" onChange={(e) => { validateInput(e) }} />
                <button type="button" onClick={(e) => { sendInput(e) }} disabled={error ? true : false}>Click Me!</button>
                <div>{error}</div>
            </div>
        </div>
    )
}