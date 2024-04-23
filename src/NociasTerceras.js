import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export function NoticiaTerceras() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const cargarNoticias = async () => {
      try {
        const url =
          "https://newsdata.io/api/1/news?apikey=pub_4197125ab61a1e17b360239b79233dc4aa0bc&q=noticias&country=ar&language=es";
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        if (Array.isArray(datos.results)) {
          setNoticias(datos.results);
        } else {
          console.error("La respuesta de la API no es un array de noticias:", datos);
        }
      } catch (error) {
        console.error("Error al cargar noticias:", error);
      }
    };
    cargarNoticias();
  }, []);

  const obtenerFecha = (fechaCompleta) => {
    // Cortar la cadena para obtener solo la fecha
    const fecha = fechaCompleta.substring(0, 10); // Corta desde el índice 0 al 10
    return fecha;
  };

  return (
    <CardGroup className="m-4">
      {Array.isArray(noticias) && noticias.slice(6, 10).map((noticia, index) => (
        <Card key={index} className="mb-3">
          <a href={noticia.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            {(noticia.image_url || noticia.source_icon) &&
              <Card.Img 
                variant="top" 
                src={noticia.image_url ? noticia.image_url : noticia.source_icon} 
                className="card-img-top" 
                style={{ objectFit: 'cover', maxHeight: '200px' }} // Ajusta el tamaño de la imagen
              />
            }
          </a>
          <Card.Body>
            {noticia.title &&
              <Card.Title>{noticia.title}</Card.Title>
            }
            {noticia.source_name &&
              <Card.Text className="text-muted mb-2">{noticia.source_name}</Card.Text>
            }
          </Card.Body>
          {noticia.pubDate &&
            <Card.Footer className='text-center'>
              <small className="text-muted">{obtenerFecha(noticia.pubDate)}</small>
            </Card.Footer>
          }
        </Card>
      ))}
    </CardGroup>
  );
}
