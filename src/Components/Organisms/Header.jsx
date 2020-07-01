import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => 
     (
        <header className="main-header">
       
                <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-cols-4 lg-cols-1 s-cross-center">
                    <NavLink to="/">
                    <img src="https://ed.team/static/images/logo-premium.svg" alt="EDlogo" className="main-logo"/>
                    </NavLink>
                </div>
                <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
                    <nav className="main-menu">
                        <ul>
                            <li><NavLink to="/">Inicio</NavLink></li>
                            <li><NavLink to="/especialidades">Especialidades</NavLink></li>
                            <li><NavLink to="/cursos">Cursos</NavLink></li>
                            <li><NavLink to="/profesores">Profesores</NavLink></li>
                        </ul>
                    </nav>
                </div>
                </div>
            
        </header>
    )


export default Header
