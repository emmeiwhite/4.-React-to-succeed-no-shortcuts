import { createRoot } from 'react-dom/client'
import App from './App'

// Creating root where all our application lives
const root = createRoot(document.querySelector('#root'))

root.render(<App />)
