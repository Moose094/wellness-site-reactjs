import React from 'react'
import {Footer, Blog,Header} from './containers';
import {Brand, WellnessForAll, Navbar} from './components';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WellnessForAll />
      <Blog />
      <Footer />
    </div>
  )
}

export default App