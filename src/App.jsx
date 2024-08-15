import { useState } from 'react'
import Home from './Pages/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
       <Outlet></Outlet>
    </>
  )
}

export default App;
