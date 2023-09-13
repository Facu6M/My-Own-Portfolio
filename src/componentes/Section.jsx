import React from 'react'
import styles from "../styles/Section.css"

const Section = () => {
  return (
    <>
<h5 id="skills">Skills:</h5>
    <aside>
<div>
  <h2>HTML</h2>
  <p>2 Years of experience</p>
</div>

<div>
  <h2>CSS</h2>
  <p>2 Years of experience</p>
</div>

<div>
  <h2>Sass</h2>
  <p>2 Years of experience</p>
</div>

<div>
  <h2>Bootstrap</h2>
  <p>2 Years of experience</p>
</div>

<div>
  <h2>JavaScript</h2>
  <p>2 Years of experience</p>
</div>

<div>
  <h2>React, VITE</h2>
  <p>2 Years of experience</p>
</div>

    <div>
  <h2>Node.js</h2>
  <p>2 Years of experience</p>
</div>


<div>
  <h2>Python</h2>
  <p>2 Years of experience</p>
</div>


<div>
  <h2>Flask</h2>
  <p>2 Years of experience</p>
</div>

<div>
  <h2>MySQL</h2>
  <p>2 Years of experience</p>
</div>

     <div>
  <h2>PostgreSQL</h2>
  <p>2 Years of experience</p>
</div>

<div>
  <h2>Postman</h2>
  <p>2 Years of experience</p>
</div>


  </aside>

<section id="curriculum" className="curriculum">
    <div className="contenido-seccion">
        <h2>CV</h2>
        <div className="fila">
            <div className="col izquierda">
                <h3>Education</h3>
                <div className="item izq">
                    <h4>senior technician in programming</h4>
                    <span className="casa">Tec Lab</span>
                    <span className="fecha">2023 - 2024</span>
                    <p>Higher technical degree in programming in which I learned many things from web development to databases</p>                    <div className="conectori">
                        <div className="circuloi"></div>
                    </div>
                </div>
                <div className="item izq">
                    <h4>secondary degree</h4>
                    <span className="casa">Colegio Modelo Marmol</span>
                    <span className="fecha">2015-2020</span>
                    <p>Secondary degree in economics</p>                    <div className="conectori">
                        <div className="circuloi"></div>
                    </div>
                </div>
            </div>

            <div className="col derecha">
                <h3>Work Experience</h3>
                <div className="item der">
                    <h4>Front-END Developer</h4>
                    <span className="casa">Freelancer</span>
                    <span className="fecha">2022 - 2023</span>
                    <p>I worked as a freelancer for 1 year in which I did many jobs from static pages, to e-commerce pages with product search carts, etc. I also worked on some full stack in which I did the backend part </p> <div className="conectord">                        <div className="circulod"></div>
                    </div>
                </div>
                <div className="item der">
                    <h4>Full Stack Developer</h4>
                    <span className="casa">Colegio CEAR</span>
                    <span className="fecha">Agosto 2023 - Octubre 2023</span>
                    <p>I made an app in which students can see their notes and teachers can edit and add notes, it is full stack since I was working on the front-end part with react and the back-end part with python and the base of data I used was postgreSQL</p>                    <div className="conectord">
                        <div className="circulod"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Section