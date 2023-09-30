import React from "react";
import "./contactos.css";

const personajes = [
  {
    nombre: "Marie Curie",
    apodo: "Pionera de la Radiactividad",
    imagen_url:
      "https://c8.alamy.com/compes/2hn4m58/marie-curie-personaje-de-dibujos-animados-sobre-fondo-blanco-ilustracion-2hn4m58.jpg",
    ocupacion: "Física y Química",
    nacionalidad: "Polaca",
    fecha_nacimiento: "7 de noviembre de 1867",
    wikipedia_url: "https://es.wikipedia.org/wiki/Marie_Curie",
  },
  {
    nombre: "Rosalind Franklin",
    apodo: "La Dama del ADN",
    imagen_url:
      "https://i.pinimg.com/550x/2c/9c/72/2c9c72b38f1e10e870ba9f802cff20e1.jpg",
    ocupacion: "Biofísica y Cristalografía de rayos X",
    nacionalidad: "Británica",
    fecha_nacimiento: "25 de julio de 1920",
    wikipedia_url: "https://es.wikipedia.org/wiki/Rosalind_Franklin",
  },
  {
    nombre: "Jane Goodall",
    apodo: "La Dama de los Chimpancés",
    imagen_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWtIy_u6kDfTTsypMlY23_3LOZV9V2ZnaZpv9wWfSjEoA9xhYcERhTuJ4bXfBEyDH-Dc&usqp=CAU",
    ocupacion: "Primatóloga y Etóloga",
    nacionalidad: "Británica",
    fecha_nacimiento: "3 de abril de 1934",
    wikipedia_url: "https://es.wikipedia.org/wiki/Jane_Goodall",
  },
  {
    nombre: "Barbara McClintock",
    apodo: "La Maestra de los Genes Saltarines",
    imagen_url:
      "https://i.pinimg.com/1200x/59/57/70/5957704144582ae90d7bfe9a05ce17f8.jpg",
    ocupacion: "Genetista",
    nacionalidad: "Estadounidense",
    fecha_nacimiento: "16 de junio de 1902",
    wikipedia_url: "https://es.wikipedia.org/wiki/Barbara_McClintock",
  },
  {
    nombre: "Ada Lovelace",
    apodo: "Primera Programadora",
    imagen_url:
      "https://historia.nationalgeographic.com.es/medio/2020/11/25/ada-lovelace-portrait_b0909676_550x789.jpg",
    ocupacion: "Matemática y Escritora",
    nacionalidad: "Británica",
    fecha_nacimiento: "10 de diciembre de 1815",
    wikipedia_url: "https://es.wikipedia.org/wiki/Ada_Lovelace",
  },
  {
    nombre: "Emmy Noether",
    apodo: "Madre de la Matemática Moderna",
    imagen_url:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Noether.jpg",
    ocupacion: "Matemática",
    nacionalidad: "Alemana",
    fecha_nacimiento: "23 de marzo de 1882",
    wikipedia_url: "https://es.wikipedia.org/wiki/Emmy_Noether",
  },
  {
    nombre: "Chien-Shiung Wu",
    apodo: "La Reina de la Física Experimental",
    imagen_url:
      "https://www.womeninexploration.org/wp-content/uploads/2021/03/1912_ChienShiungWu.jpg",
    ocupacion: "Física Experimental",
    nacionalidad: "China",
    fecha_nacimiento: "29 de mayo de 1912",
    wikipedia_url: "https://es.wikipedia.org/wiki/Chien-Shiung_Wu",
  },
];

export default function ContactosView() {
  return (
    <div className="contenedor">
      {personajes.map((personaje) => (
        <div className="tarjeta-personaje">
          <div classsName="lado-izquierdo">
            <img className="personaje-imagen" src={personaje.imagen_url} />
          </div>

          <div classsName="lado-derecho">
            <p className="personaje-nombre"> {personaje.nombre} </p>

            <div className="contenedor-fecha-nacionalidad">
              <p className="personaje-nacionalidad">
                {" "}
                {personaje.nacionalidad}{" "}
              </p>
              <p className="personaje-fecha"> {personaje.fecha_nacimiento} </p>
            </div>

            <p className="personaje-apodo"> {personaje.apodo} </p>
            <p className="personaje-ocupacion"> {personaje.ocupacion} </p>

            <a href={personaje.wikipedia_url} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
