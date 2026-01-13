import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Hero/>
   <Events/>
   <Footer/>
   </>
  )
}

export default App
