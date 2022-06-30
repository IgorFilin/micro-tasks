import React, {ChangeEvent} from 'react';
import classes from './Input.module.css'


type InputTypeProps = {
    setTitle:(event:string)=>void
    title:string
}


function Input (props:InputTypeProps) {

    const onChangeInputHandler =(event: ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)

    }


    return (
        <div className={classes.input}>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
}

export default Input;