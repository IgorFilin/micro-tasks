import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import { Body } from './components/Body/Body';


function App() {
    return (
        <>
            <Header title={'My header'}/>
            <Body titleForBody={'My body'}/>
        </>
    )
}

export default App;
