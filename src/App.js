import React, { useState } from 'react';
import './App.css';
import Top from './Top';
import Left from './Left';
import Right from './Right';
import Middle from './Middle';


function App() {
  
  return (


    <div >
      <div className='top'><Top/> </div>
      <div  className='row'>
        <div className='left col-3'><Left/></div>
        <div className='center col-6 '><Middle/></div>
        <div className='right col-3'><Right/></div>
      </div>

    </div>

  );
}

export default App;
