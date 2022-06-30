import React from 'react';
import classes from './ButtonInputa.module.css'

type ButtonInputaTypeProps = {
    name:string
    callback:()=> void
}

function ButtonInputa (props:ButtonInputaTypeProps){

    const onClickInputHandler = () => {
          props.callback()
    }

    return (
        <div className={classes.button}>
      <button onClick={onClickInputHandler}>{props.name}</button>
        </div>
    );
}

export default ButtonInputa;