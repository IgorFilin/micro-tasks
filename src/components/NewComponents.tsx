import classes from './NewComponents.module.css'
import {Button} from "./Button/Button";

type NewComponentsTypeProps = {
    topCars: Array<Car>
    students: Array<Student>
}


type Car = {
    manufacturer: String
    model: String
    speed:number
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
        <Button name={'Speed 200'} callBack={}/>
        <Button name={'Speed 100'} callBack={}/>
        <Button name={'All Speed'} callBack={}/>
    </div>
}