import React from 'react'
// import Nav  from "./components/Nav";
import Hommy from "./components/Hommy"
import {Routes, Route} from 'react-router-dom'
// import BrowserRouter from "react-router-dom" 




const App = () => {
  return (
    <>
<Routes>
    <Route path='/' element={<Hommy/>}/>
  </Routes>
    </>
  )
}

export default App
