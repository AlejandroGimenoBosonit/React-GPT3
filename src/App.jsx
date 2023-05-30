
import './App.css';

// containers
import { Blog, Features, Footer, Header, Possibillity, WhatGPT3 } from './containers';
// components
import { Brand, CTA, NavbarComponent } from './components';

function App() {

  return (
    <div className="App">
      <div className="gradient__bg">
        <NavbarComponent />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibillity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
