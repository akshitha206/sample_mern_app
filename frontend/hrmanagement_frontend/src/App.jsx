
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/login'

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/adminlogin" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App
