import React from 'react'
import Form from './Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Next1 from './component/Next1'
import Next2 from './component/Next2'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Form />} />
         <Route path='/next1' element={<Next1 /> } />
         <Route path='/next2' element={<Next2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App