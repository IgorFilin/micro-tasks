import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Body} from './components/Body/Body';
import {NewComponents} from "./components/NewComponents";
import {Button} from './components/Button/Button';


function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    const button1Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const stupidButton = () => {
        console.log('Im stupid button')
    }

    let [numb,setNumb] = useState(1)


    const onclickHandler = () => {
        ++numb
        setNumb(numb)
        console.log(numb)
    }
const onclickHandlerNull = () => {
        numb = 1
     setNumb(numb)
}

    return (
        <div>
            <Header title={'My header'}/>
            <Body titleForBody={'My body'}/>
            <NewComponents topCars={topCars} students={students}/>
            <Button name={'MyButtonComponent1'} callBack={() => button1Foo('igor')}/>
            <Button name={'MyButtonComponent2'} callBack={() => button2Foo('ivan')}/>
            <Button name={'Stupid button'} callBack={stupidButton}/>
            <div className={'number'}>{numb}</div>
            <div className={'count'}>
                <button onClick={onclickHandler}>Counter</button>
                <button onClick={onclickHandlerNull}>0</button>
            </div>

        </div>
    )
}

export default App;
