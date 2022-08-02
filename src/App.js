import React from 'react'
import { CTA, Navbar, Brand} from './components';
import { Footer, Blog, Possibility, Features, Header, WhatGPT3} from './containers';
import './App.css'; //for general styling;

//creating components...
const App = () => {
  return (
    <div className='App'>
        <h1>Let's code...</h1>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

    </div>
  )
}

export default App