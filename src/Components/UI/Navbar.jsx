import React from 'react'

export const Navbar = ({styles}) => {
  return (
    <nav className={styles}>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Descripción</a></li>
            <li><a href="/contact">Obetivos</a></li>
            <li><a href="/products">Justificación</a></li>
            <li><a href="/blog">Matrices</a></li>
            <li><a href="/faq">Conclusiones</a></li>
        </ul>
    </nav>
  )
}
