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
    const fecha = fechaCompleta.substring(0, 10); // Corta desde el índice 7 al 16
    return fecha;
  };

  return (
    <CardGroup className="m-4">
      {Array.isArray(noticias) && noticias.slice(6, 10).map((noticia, index) => (
        <Card key={index} className="h-100">
          {noticia.image_url &&
            <Card.Img variant="top" src={noticia.image_url} className="card-img-top" />
          }
          <Card.Body className="d-flex flex-column">
            {noticia.title &&
              <Card.Title>{noticia.title}</Card.Title>
            }
            {noticia.source_name &&
              <Card.Text className="text-muted flex-grow-1">{noticia.source_name}</Card.Text>
            }
            {noticia.pubDate &&
              <Card.Footer>
                <small className="text-muted">{obtenerFecha(noticia.pubDate)}</small>
              </Card.Footer>
            }
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
}
