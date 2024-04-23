import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

export function NotiSecundaria() {
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

  return (
    <Container>
      {Array.isArray(noticias) && noticias.slice(1, 5).map((noticia, index) => (
        <Card key={index} className="m-4" style={{ width: "20rem" }}>
          <Card.Body className="d-flex">
            <div style={{ flex: 1 }}>
              {noticia.image_url && <Card.Img src={noticia.image_url} />}
            </div>
            <div style={{ flex: 2 }}>
              {noticia.title && <Card.Title className="m-2">{noticia.title}</Card.Title>}
              {noticia.source_name && <Card.Text className="text-muted text-end">{noticia.source_name}</Card.Text>}
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
