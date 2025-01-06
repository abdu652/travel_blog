import { useState } from 'react'
import Header from './components/Header/Header'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home.jsx'
import Diaries from './components/Pages/Diaries.jsx'
import Auth from './components/Pages/Auth.jsx'
import Add from './components/Pages/Add.jsx'
import Profile from './components/Pages/Profile.jsx'
import UpdateDiaries from './components/Diaries/UpdateDiaries.jsx'
function App() {
  
  return (
    <div>
      <header>
      <Header />
      </header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diaries" element={<Diaries />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/posts/:id" element={<UpdateDiaries />} />
      </Routes>
    </div>
  )
}

export default App
