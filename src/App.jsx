// import React from 'react'
import './App.css'
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"
import Interests from "./components/Interests"
// import AppCss from "./App.css?inline"

function App() {

  return (
    <main className="main--business-card">
      <div>
          <Info />
          <About />
          <Interests />
          <Footer />
      </div>  
</main>
  )
}

export default App
