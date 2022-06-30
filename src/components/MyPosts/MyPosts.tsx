import React, {useState} from "react";
import classes from './MyPosts.module.css'
import FullInput from "../FullInput/FullInput";
import Input from "../Input/Input";
import ButtonInputa from "../ButtonInputa/ButtonInputa";

export type StateMessagesType = Array<StateMessagType>
export type StateMessagType = {
    message: string
}

type PropsTypeValue = {
    value: boolean
}

function MyPosts(props: PropsTypeValue) {

    let [message, setMessage] = useState<Array<StateMessagType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    let [message2, setMessage2] = useState<Array<StateMessagType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const messages = message.map((el, index) => {
        return <div className={classes.message} key={index}>{el.message}</div>
    })
    const messages2 = message2.map((el, index) => {
        return <div className={classes.message} key={index}>{el.message}</div>
    })

    const MessageAddClick = (title: string) => {

        let NewMessage = [{message: title}, ...message]
        setMessage(NewMessage)
    }

    let [title, setTitle] = useState('')

    const addPost = () => {
        let newPosts = [{message: title}, ...message2]
        setMessage2(newPosts)
        setTitle('')
    }


    return (
        <div className={classes.content}>
            {props.value && <div><FullInput MessageAddClick={MessageAddClick}/>
                <div className={classes.messages}>
                    {messages}
                </div>
            </div>}
            {props.value && <div>
                <Input title={title} setTitle={setTitle}/>
                <ButtonInputa name={'Add Post'} callback={addPost}/>
                {messages2}
            </div>}

        </div>

    )

}

export default MyPosts