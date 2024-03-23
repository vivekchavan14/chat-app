
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <div className='p-4 h-screen items-center justify-center '>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
        </Routes>
        
    </div>
  )
}

export default App
