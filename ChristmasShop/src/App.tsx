import MainLayout from './Components/MainLayout/MainLayout'
import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    
    <Router>
    
      
      <Routes>
        <Route path="/home" element={<MainLayout/>}></Route>
        
      </Routes>
   
    </Router>
  
     
    </>
  )
}

export default App
