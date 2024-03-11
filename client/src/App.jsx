import './App.css'
import{ BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Pages/Home'
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Profile from "./Pages/Profile"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } exact/>
        <Route path='/signin' element={ <SignIn/> } exact />
        <Route path='/signup' element={ <SignUp/> } exact />
        <Route path='/profile' element={ <Profile/> } exact/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
