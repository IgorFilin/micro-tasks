import classes from "./FullInput.module.css";
import {ChangeEvent, useState} from "react";

;

type FullInputTypeProps = {
    MessageAddClick: (title: string) => void
}

function FullInput(props: FullInputTypeProps) {
    let [title, setTitle] = useState('')

    let onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)


      }

    const onClickButtonHandler = () => {
        props.MessageAddClick(title)
        setTitle('')
      }

    return (
        <div className={classes.inputBtn}>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>Add Message</button>
        </div>
    )
}

export default FullInput