import Pizza from './Pizza'
import React from 'react'

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Footer() {
  return <footer>{new Date().toLocaleTimeString()} We are currently open</footer>
  // return React.createElement('footer', null, 'We are currently open!')
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  )
}
export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}
