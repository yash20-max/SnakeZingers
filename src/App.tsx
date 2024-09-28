
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Pages/Home'

import TopBar from './components/Shared/TopBar'
import SnakeGame from './components/Game/SnakeGame'

function App() {

  return (
    <div className=''>
    <BrowserRouter>
    <div className='w-full flex items-center justify-center flex-col'>
<TopBar/>
</div>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/snake' element={<SnakeGame/>}/>
 
    </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App
