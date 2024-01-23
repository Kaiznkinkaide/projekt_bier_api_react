
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AlleBiere from './pages/allebiere/AllebBiere'
import Home from './pages/home/Home'
import BierDetails from './components/bierdetails/BierDetails'

function App() {


  return (
    <>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/allebiere' element={<AlleBiere/>}/>
<Route path='/allebiere/:id' element={<BierDetails/>}/>
</Routes>
<div className="sticky" ><Link to='/'><button className='stickyBtn'>🍻</button></Link></div>
    </>
  )
}

export default App
