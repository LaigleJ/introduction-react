import './index.css'
import { Header } from './component/containers/header/Header'
import { Footer } from './component/containers/footer/Footer'
import { FirstName } from './component/containers/firstName/FirstName'
import { LastName } from './component/containers/lastName/LastName'
import { Hobbies } from './component/containers/hobbies/Hobbies'

function App() {
  const user = {
    firstName: "Laigle",
    lastName: "Jérémy",
    hobbies: ["HTML", "CSS", "React", "Javascript"]
  }
  return (
    <>
    <Header />
      <FirstName>{user.firstName}</FirstName>
      <LastName>{user.lastName}</LastName>
      <Hobbies hobbies={user.hobbies} />
    <Footer />
    </>
  )
}

export default App
