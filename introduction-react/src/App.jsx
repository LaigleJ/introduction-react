import './index.css'
import { Header } from './component/containers/header/Header'
import { Footer } from './component/containers/footer/Footer'
import { User } from './component/containers/users/user'

function App() {
  const user = {
    firstName: "Laigle",
    lastName: "Jérémy",
    hobbies: ["HTML", "CSS", "React", "Javascript"]
  }
  return (
    <>
    <Header />
    <User utilisateur={user} />
    <Footer />
    </>
  )
}

export default App
