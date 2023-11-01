import Game from './components/Game/Game'
import Index from './components/Index/Index'
import './css/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      

      <Router>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/game' element={<Game />}/>
        </Routes>

      </Router>
    </>
  )
}

export default App
