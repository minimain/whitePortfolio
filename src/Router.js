import React from 'react'
import Main from './routes/Main'
import Nav from './component/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './component/Navigation'
import Katalk from 'routes/Katalk'
import Net from 'routes/Net'
import Kosdaq from 'routes/Kosdaq'
import Cj from 'routes/Cj'
import Samsung from 'routes/Samsung'
import Exs from 'routes/Exs'

function RouterApp() {
  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/navigation' element={<Navigation/>}/>
      <Route path='/katalk' element={<Katalk/>}/>
      <Route path='/net' element={<Net/>}/>
      <Route path='/kosdaq' element={<Kosdaq/>}/>
      <Route path='/cj' element={<Cj/>}/>
      <Route path='/samsung' element={<Samsung/>}/>
      <Route path='/exs' element={<Exs/>}/>
    </Routes>

  </BrowserRouter>
  )
}

export default RouterApp