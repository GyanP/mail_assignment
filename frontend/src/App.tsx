import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ApplicationList, ApplyForm } from './pages';
import { ToastContainer } from 'react-toastify';
import { MainLayout } from './layouts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />} >
          <Route path='/' Component={ApplyForm} />
          <Route path='/list' Component={ApplicationList} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
