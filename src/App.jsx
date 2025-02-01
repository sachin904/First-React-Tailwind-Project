
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Age } from './components/Age'

import { Headers } from './components/header'
import { Otp } from './components/Otp'

import { Start } from './components/start'




function App() {
  
  return<div>
    <BrowserRouter>
       <Routes>
           <Route path='/project/' element={<Layout/>}>
           <Route index element={<Start />} /> 
              <Route path='/project/age-Verification' element={<Age/>}> </Route>
              <Route path='/project/Email-verification'element={<Start/>}></Route>
              <Route path='/project/otp-verification' element={<Otp/>}></Route>
              <Route path="*" element={<ErrorPage/>}></Route>
           </Route>
       </Routes>
    </BrowserRouter>
  </div>
  
}

function ErrorPage(){
  return <div className='bg-white h-2xl w-4xl'>sorry page not found</div>
}
function Layout(){
    return <div className='bg-blue-700 h-screen flex justify-center m-[auto] '>
      <div>
      <div className=" flex justify-center my-20">
      <Headers></Headers>
      </div>
  
      <Outlet/>
          </div>
    </div>
}

export default App
