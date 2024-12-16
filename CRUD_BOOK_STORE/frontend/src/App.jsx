
import './App.css'
import Navbar from './components/Navbar'
import Books from './pages/Books'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddBooks from './pages/AddBooks'
import Footer from './components/Footer'

function App() {
 
  return (
      <Router>
        <Navbar />
        <Routes>

          <Route/>
          <Route/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/addBooks" element={<AddBooks/>}/>
        </Routes>

       <Footer/>
      </Router>
  )
}

export default App
