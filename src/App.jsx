import Pizza from './Pizza'

function Header() {
  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>
    </header>
  )
}

function Footer() {
  const hour = new Date().getHours()

  const openHour = 10
  const closeHour = 20

  const isOpen = hour >= openHour && hour < closeHour
  return (
    <footer className="footer">
      We are currently <strong>{isOpen ? 'Open' : 'Closed'} </strong>
    </footer>
  )
  // return React.createElement('footer', null, 'We are currently open!')
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza
        image="funghi.jpg"
        name="Funghi ki Tungi"
        desc="es mai bada hai maza. Jab khawo aik baar, dil chahe baar bar"
      />
      <Pizza
        image="margherita.jpg"
        name="Marghe ki Murgi"
        desc="Ya marghe ki murgi hai, aesa pehlai nahi khaya hoga"
      />
    </div>
  )
}
export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}
