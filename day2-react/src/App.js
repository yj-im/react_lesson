import React from 'react';
import CalculateV2 from './component/CalculateV2';
import CalculateRef from './component/CalculateRef';
import './App.css'
import CounterRef from './component/CounterRef';
import InputState from './component/InputState';
import PageMove from './component/PageMove';


function App() {
    return (
        <div className='App'>
            <CalculateV2/>
            <CalculateRef/>      
            <hr/>
            <CounterRef/>  
            <hr/>
            <InputState/>
            <hr/>
        <PageMove/>
        <hr/>
     
            </div>
    );
}

export default App