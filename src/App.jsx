import { useState } from 'react'
import Home from './Pages/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='page-wrapper'>
       <Outlet></Outlet>
    </div>
  )
}

export default App;
