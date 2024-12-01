import MainLayout from './Components/MainLayout/MainLayout'
import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import './App.css'
import OneProductPage from './Pages/OneProduct/OneProductPage'

function App() {
  

  return (
    <>
    
    <Router>
    
      
      <Routes>
        <Route path="/" element={<MainLayout/>}></Route>
        <Route path="/product/:id" element={<OneProductPage/>}></Route>
        
      </Routes>
   
    </Router>
  
     
    </>
  )
}

export default App
