import React from 'react';
import './App.css';
import HomePage    from './pages/Home';
import AboutPage   from './pages/About';
import ContactPage from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import UserPage from './pages/User';
import Dashboard from './pages/Dashboard';
import Profile  from './pages/Profile';
import Settings from './pages/settings';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>This is the base route, Welcome</h1>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/user/:name' element={<UserPage />} />
        <Route path='/Dashboard/:name' element={<Dashboard />}>
          <Route path='Settings' element={<Settings />} />
          <Route path='Profile' element={<Profile/>} />
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;

