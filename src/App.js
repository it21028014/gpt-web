import React from 'react'
import { Article, Brand, CTA, Navbar } from './components'
import { Footer, Blog, Possibility, Feature, WhatGPT3, Header } from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <Feature />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
