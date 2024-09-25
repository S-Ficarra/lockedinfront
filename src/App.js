import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import './App.css'
import Profile from './components/profile/profile';
import FAQs from './components/faqs/faqs';
import Claim from './components/claim/claim';
import Card from './components/card/card';
import Settings from './components/settings/settings';
import Booking from './components/book/booking';


export const BASE_URL = 'http://localhost:3000'

function App() {

  return (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/faqs' element={<FAQs/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/claim' element={<Claim/>}/>
      <Route path='/booking' element={<Booking/>}/>


    </Routes>
  </BrowserRouter>

  )
}

export default App;
