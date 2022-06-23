import classes from './NewComponents.module.css'
import {Button} from "./Button/Button";
import {FilterSpeedCars} from "../App";

type NewComponentsTypeProps = {
    topCars: Array<Car>
    students: Array<Student>
    ClickChangeSpeedCars:(speedCars:FilterSpeedCars)=> void
}


type Car = {
    manufacturer: String
    model: String
    speed:string
}

type Student = {
    id: number
    name: string
    age: number
}


export let NewComponents = (props: NewComponentsTypeProps) => {
    return <div>
        <ul>
            {props.students.map((el, index) => {
                return <li key={index}>{el.name}:{el.age} </li>
            })}
        </ul>
        <table className={classes.carsTable}>
            <thead>
            <tr>
                <th colSpan={3}>Table cars</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((el, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        <Button name={'Speed 200'} callBack={() => props.ClickChangeSpeedCars('200')}/>
        <Button name={'Speed 100'} callBack={() => props.ClickChangeSpeedCars('100')}/>
        <Button name={'All Speed'} callBack={() => props.ClickChangeSpeedCars('All')}/>
    </div>
}