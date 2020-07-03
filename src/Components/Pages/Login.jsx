import React from 'react'
import Axios from 'axios'
import notie from 'notie'

const MostrarMensaje = () => {
   notie.alert({ type: 'error', text: 'Ingrese su usuario correctamente' })


}

const authentication = e => {
   e.preventDefault()
   const form = e.target

   const data = {
      "email": form.email.value,
      "password": form.password.value
   }
   Axios.post('https://api-edteam.alejogs4.now.sh/login', data)
      .then(res => {
         localStorage.setItem('token', res.data.token)
         window.location = "/"
      })
      .catch(error => {
         MostrarMensaje()
      })
}
const Login = () =>

   (
      <div className="ed-grid">
         <div className="l-block"></div>
         <div className="m-to-center m-60 lg-30">
            <h1 className="center">Iniciar Sesión</h1>
            <form onSubmit={authentication.bind()}>
               <div className="form__item">
                  <label htmlFor="email">
                     Correo Electronico
                       <input type="email" name="email" id="email" placeholder="Correo" required />
                  </label>
               </div>
               <div className="form__item">
                  <label htmlFor="password">
                     Contraseña
                       <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" required />
                  </label>
               </div>
               <div className="form__item">
                  <input type="submit" className="button full" value="Iniciar Sesion" />
               </div>
            </form>
         </div>
      </div>
   )


export default Login
