import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

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
    <Container className="d-flex flex-wrap justify-content-center">
      {Array.isArray(noticias) && noticias.slice(1, 5).map((noticia, index) => (
        <Card key={index} className="m-4" style={{ width: "100%", maxWidth: "300px" }}>
          <a href={noticia.link} target={noticia.link} rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            {noticia.image_url && (
              <Image src={noticia.image_url} fluid />
            )}
          </a>
            <Card.Body>
              {noticia.title && <Card.Title className="mb-3">{noticia.title}</Card.Title>}
              {noticia.source_name && <Card.Text className="text-muted text-end">{noticia.source_name}</Card.Text>}
            </Card.Body>
          
        </Card>
      ))}
    </Container>
  );
}
