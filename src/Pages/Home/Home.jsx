import React from "react";
import { Header } from "../../Components/Layouts/Header/Header";
import { Main } from "../../Components/Layouts/Main/Main";
import { Cards } from "../../Components/UI/Cards/Cards";
import "./Home.css";
import imageGenetica2 from "/genetica2.png";
import imageGenteica3 from "/genetica3.png";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <section className="section-Introduction">
          <h2>Análisis y discusión de artículos científicos sobre genética</h2>
          <h1>Richar Anderson Bermudez</h1>
          <h3>Análisis de artículos científicos sobre genética</h3>
        </section>
        <section className="section-description">
          <div>
            <p>
              Este trabajo analiza cuatro artículos científicos que abordan
              diferentes aspectos relacionados con la genética: el estudio del
              síndrome de Down, la variabilidad genética del bagre rayado, la
              estructura genética de capibaras y la diversidad genética en la
              soya. A través de este proyecto se busca comprender cómo la
              genética influye en diversos contextos biológicos y sociales, así
              como desarrollar habilidades de análisis crítico y síntesis de
              información científica.
            </p>
          </div>
          <div>
            <img src={imageGenetica2} alt="" />
          </div>
        </section>
        <section className="section-object">
          <div>
            <h2>Objetivo general:</h2>
            <p>
              Analizar y discutir artículos científicos relacionados con la
              genética para comprender su relevancia en el contexto biológico y
              social, desarrollando habilidades críticas y colaborativas.
            </p>
          </div>
          <div>
            <h2>Objetivos específicos:</h2>
            <div className="box-object-cards">
              <Cards styles="cards-object">
                <p>
                  Examinar las metodologías empleadas en los artículos
                  científicos seleccionados.
                </p>
              </Cards>
              <Cards styles="cards-object">
                <p>
                  Identificar las principales conclusiones y su impacto en la
                  investigación genética.
                </p>
              </Cards>
              <Cards styles="cards-object">
                <p>
                  Crear una plataforma digital que permita compartir los
                  resultados del análisis de manera organizada y accesible.
                </p>
              </Cards>
            </div>
          </div>
        </section>
        <section className="section-justification">
          <div>
            <img src={imageGenteica3} alt="" />
          </div>
          <div>
            <p>
              Este proyecto es relevante porque la genética desempeña un papel
              crucial en el entendimiento de la biodiversidad, las enfermedades
              genéticas y la mejora de cultivos. Los artículos analizados
              proporcionan ejemplos concretos de cómo las investigaciones
              genéticas contribuyen al conocimiento en diferentes áreas. Además,
              el desarrollo de esta página web fomenta la integración de
              herramientas tecnológicas en la difusión de conocimiento
              científico.
            </p>
          </div>
        </section>
        <section className="section-matrices">
          <div>
            <Cards styles="cards-matrices">
              <p>
                Conclusión del artículo 1: La genética desempeña un papel
                crucial en la comprensión del síndrome de Down, destacando la
                relación entre la trisomía del cromosoma 21 y las
                características asociadas al retraso mental.
              </p>
            </Cards>
            <Cards styles="cards-matrices">
              <p>
                Conclusión del artículo 3: La estructura genética de los
                capibaras en los Llanos Orientales destaca cómo factores
                ambientales influyen en la diversidad genética de poblaciones
                animales.
              </p>
            </Cards>
          </div>
          <div>
            <Cards styles="cards-matrices">
              <p>
                Conclusión general: Este análisis demuestra la amplitud y la
                relevancia de los estudios genéticos en la biodiversidad, la
                salud y la agricultura, subrayando la importancia de la
                investigación en genética aplicada.
              </p>
            </Cards>
          </div>
          <div>
            <Cards styles="cards-matrices">
              <p>
                Conclusión del artículo 2: La variabilidad genética del bagre
                rayado revela diferencias significativas entre las poblaciones
                de los ríos Magdalena y Amazonas, subrayando la importancia de
                la conservación de especies.
              </p>
            </Cards>
            <Cards styles="cards-matrices">
              <p>
                Conclusión del artículo 4: El análisis morfológico y genético de
                la soya resalta la importancia de la diversidad genética en la
                mejora de cultivos agrícolas.
              </p>
            </Cards>
          </div>
        </section>
        <section className="section-articles">
          <h2>ARTICULOS</h2>
          <div>
            <a href="/SINDROME-DE-DOWN.pdf" download>
              SINDROME DE DOWN
              <button>Descargar PDF</button>
            </a>
            <a href="/VARIABILIDAD-DEL-BAGRE-RAYADO.pdf" download>
            VARIABILIDAD DEL BAGRE RAYADO
              <button>Descargar PDF</button>
            </a>
          </div>
        </section>
        <footer className="section-contacme">
            
              <h2>Contactame</h2>
              <p>ejemplo@gmail.com</p>
            
        </footer>
      </Main>
    </>
  );
};
