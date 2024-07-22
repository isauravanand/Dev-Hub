import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login/Login'
import Signup from "./pages/Signup/signup"
import Home from "./pages/Home/Home"
import Batches from "./pages/Batches/batches"
import Mern from './pages/Explore/Mern'
import Frontend from './pages/Explore/frontend'
import Backend from './pages/Explore/backend'
import Dsa from "./pages/Explore/dsa"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/batches' element={<Batches/>}/>
      <Route path='/mern' element={<Mern/>}/>
      <Route path='/frontend' element={<Frontend/>}></Route>
      <Route path='/backend' element={<Backend/>}></Route>
      <Route path='/dsa' element={<Dsa/>}></Route>
 
    </Routes>
  </BrowserRouter >
  )
}
export default App
