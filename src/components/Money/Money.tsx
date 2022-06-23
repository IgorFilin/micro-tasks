import {useState} from "react";
import {Button} from "../Button/Button";
import {FilterMoneyButton} from "../../App";



type MoneyTypeProps = {
    allMoney: Array<OneMoney>
    onClickHandlerMoney: (name:FilterMoneyButton) => void
}
type OneMoney = {
    banknots: string
    value: number
    number: string
}

export let Money = (props: MoneyTypeProps) => {


    return (
        <div style={{textAlign: "center"}}>
            <ul>
                {props.allMoney.map((el, index) => (<li key={index}>{el.banknots} : {el.value} : {el.number}</li>))}
            </ul>
            <div style={{marginLeft: "30px"}}><Button name={'All'} callBack={() => {
                props.onClickHandlerMoney('All')
            }}/>
                <Button name={'RUBLS'} callBack={() => {
                    props.onClickHandlerMoney('RUBLS')
                }}/>
                <Button name={'Dollars'} callBack={() => {
                    props.onClickHandlerMoney('Dollars')
                }}/></div>

        </div>)
}

