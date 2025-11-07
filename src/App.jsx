import Pizza from './Pizza'
import React from 'react'

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Footer() {
  return React.createElement('footer', null, 'We are currently open!')
}
export default function App() {
  return (
    <div>
      <Header />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Footer />
    </div>
  )
}
