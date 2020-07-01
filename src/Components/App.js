import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Specialities from './Pages/Specialities'
import Courses from './Pages/Courses'
import Teachers from './Pages/Teachers'
import Protected from './Routes/Protected'
import Course from './Pages/Course'
import Fragment from './Pages/Fragment'
import Speciality from './Pages/Speciality'
import Public from './Routes/Public'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Header from './Organisms/Header'
const App = () =>(
  <Router>
  <Header />
    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/especialidades" exact component={Specialities} />
      <Protected path="/especialidades/id" exact component={Speciality} />
      <Protected path="/cursos" exact component={Courses} />
      <Protected path="/cursos/id" exact component={Course} />
      <Protected path="/profesores" exact component={Teachers} />
      <Protected path="/clases" exact component={Fragment} />

      <Public path="/login" exact component={Login} />
      <Public path="/registro" exact component={Register}  />
     

    </Switch>
  </Router>
)
export default App