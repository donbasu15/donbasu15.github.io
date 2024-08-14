import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectPage from './Pages/ProjectPage';
import NotFound from './Pages/NotFound';
const AppRouter = ()=>{
    return(
        <Router basename="/portfolio">
          <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/projects" element={<ProjectPage/>} />
               <Route path="*" element={<NotFound/>} />
           </Routes>
        </Router>
    )
}

export default AppRouter;