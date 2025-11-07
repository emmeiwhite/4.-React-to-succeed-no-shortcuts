import Pizza from './Pizza'

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Footer() {
  const hour = new Date().getHours()

  const openHour = 10
  const closeHour = 20

  const isOpen = hour >= openHour && hour < closeHour
  return (
    <footer>
      We are currently <strong>{isOpen ? 'Open' : 'Closed'} </strong>
    </footer>
  )
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
