import React from 'react'
import Axios from 'axios'
const authentication = e=>{
   e.preventDefault()
   const form = e.target
  
   const data = {
      "email":form.email.value,
      "name":form.fullname.value,
      "password":form.password.value
   }
   Axios.post(`https://api-edteam.alejogs4.now.sh/signup`,data)
   .then(()=> {
      alert("Usuario creado")
      window.location="/login"
   })
   .catch(()=>alert("error al crear usuario"))
  }
const Register = () => 

     (
        <div className="ed-grid">
        <div className="l-block"></div>
           <div className="m-to-center m-60 lg-30">
           <h1 className="center">Iniciar Sesión</h1>
              <form onSubmit={authentication.bind()}>
                 <div className="form__item">
                    <label htmlFor="email">
                    Correo Electronico
                       <input type="email" name="email" id="email" placeholder="Correo" required/>
                    </label>
                 </div>
                 <div className="form__item">
                    <label htmlFor="fullname">
                    Nombre completo
                       <input type="text" name="fullname" id="fullname" placeholder="Ingrese tu nombre" required />
                    </label>
                 </div>
                 <div className="form__item">
                    <label htmlFor="password">
                    Contraseña
                       <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" required/>
                    </label>
                 </div>
                 <div className="form__item">
                    <input type="submit" className="button full" value="Iniciar Sesion"/>
                 </div>
              </form>
           </div>
        </div>
    )


export default Register
