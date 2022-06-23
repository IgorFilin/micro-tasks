import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Body} from './components/Body/Body';
import {NewComponents} from "./components/NewComponents";
import {Button} from './components/Button/Button';
import {Money} from "./components/Money/Money";


type CounterType = number
export type FilterMoneyButton = 'All' | 'RUBLS' | 'Dollars'
export type FilterSpeedCars = '200' | '100' | 'All'
function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs', speed: '200'},
        {manufacturer: 'Mercedes', model: 'e63s', speed: '100'},
        {manufacturer: 'Audi', model: 'rs6', speed: '200'}
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
    const allMoney = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]


    const [ChangeMoney, SetChangeMoney] = useState(allMoney)
    const [filter, setFilter] = useState<FilterMoneyButton>('All')

    let filterMoney = ChangeMoney

    if (filter === 'RUBLS') {
        filterMoney = ChangeMoney.filter(el => el.banknots === 'RUBLS')

    }
    if (filter === 'Dollars') {
        filterMoney = ChangeMoney.filter(el => el.banknots === 'Dollars')

    }
    let onClickHandlerMoney = (name: FilterMoneyButton) => {
        setFilter(name)

    }
    const button1Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const stupidButton = () => {
        console.log('Im stupid button')
    }

    let [numb, setNumb] = useState<CounterType>(1)


    const onclickHandler = () => {
        ++numb
        setNumb(numb)
        console.log(numb)
    }
    const onclickHandlerNull = () => {
        numb = 1
        setNumb(numb)
    }
    let [AllCars, SetAllCars] = useState(topCars)
    let [filterCars, setFilterCars] = useState('All')

    let filteredCars = AllCars
    if (filterCars === '200'){
        filteredCars = AllCars.filter(el => el.speed === '200')
    }
    if (filterCars === '100'){
        filteredCars = AllCars.filter(el => el.speed === '100')
    }
let ClickChangeSpeedCars = (speedCars:FilterSpeedCars) => setFilterCars(speedCars)

    return (
        <div>
            <Header title={'My header'}/>
            <Body titleForBody={'My body'}/>
            <NewComponents topCars={filteredCars} students={students} ClickChangeSpeedCars={ClickChangeSpeedCars}/>
            <Button name={'MyButtonComponent1'} callBack={() => button1Foo('igor')}/>
            <Button name={'MyButtonComponent2'} callBack={() => button2Foo('ivan')}/>
            <Button name={'Stupid button'} callBack={stupidButton}/>
            <div className={'number'}>{numb}</div>
            <div className={'count'}>
                <button onClick={onclickHandler}>Counter</button>
                <button onClick={onclickHandlerNull}>0</button>
            </div>
            <Money allMoney={filterMoney} onClickHandlerMoney={onClickHandlerMoney}/>
        </div>
    )
}

export default App;
