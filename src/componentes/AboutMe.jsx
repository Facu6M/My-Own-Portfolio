import React from 'react'
import styles from "../styles/AboutMe.css"
import Perfil from "../img/fotomia.jpg"
// import CurriculumVitae from "../assets/CurriculumVitae.pdf"

const Main = () => {
  return (
<>
<section id="inicio" className="inicio">
    <div className="contenido-banner">
        <div className="contenedor-img">
             <img src={Perfil} />
        </div>
        <h1>FACUNDO MELITA</h1>
        <h2>Full Stack Programmer - Web development expert</h2>
        <div className="redes">
            <a href="#"><i className="fa-brands fa-github"> </i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
</section>
<section id="sobremi" className="sobremi">
    <div className="contenido-seccion">
        <h2>About Me</h2>
        <p><span>Hi , Im Facundo Melita.  </span>
        I am 21 years old, I am from Argentina and I am a Full-Stack programmer. I started programming in 2022 and from there I try to always be up to date with the latest technologies and give my best in each of my projects.         </p>

        <div className="fila">
            <div className="col">
                <h3>Personal Information</h3>
                <ul>
                    <li>
                        <strong>Phone</strong>
                        +54 1151451631
                    </li>
                    <li>
                        <strong>E-mail</strong>
                        facu6p@gmail.com
                    </li>
                </ul>
            </div>


        </div>
        {/* <button><a href={CurriculumVitae} download>
            Descargar CV </a><i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
        </button> */}
    </div>
</section>
</>
  )
}

export default Main