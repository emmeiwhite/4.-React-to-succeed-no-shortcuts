import ProfileCard from './components/challenges/ProfileCard'
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

const skills = [
  { skillName: 'HTML', color: '#E34C26', level: 3 },
  { skillName: 'CSS', color: '#264de4', level: 2 },
  { skillName: 'JavaScript', color: '#f7df1e', level: 3 },
  { skillName: 'Node.js', color: '#68a063', level: 2 }
]

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />

      {/* --- Challenges --- */}

      <ProfileCard
        img="spinaci.jpg"
        name="John Sh."
        about="Tutor, Full Stack Web Developer. Life goes on. Never quit! Put a lot of efforts"
        skills={skills}
      />
    </div>
  )
}
