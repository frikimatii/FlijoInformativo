import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

export function NoticiaPrincipal() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const cargarNoticias = async () => {
      try {
        const url =
          "https://newsdata.io/api/1/news?apikey=pub_4197125ab61a1e17b360239b79233dc4aa0bc&q=noticias&country=ar&language=es";
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setNoticiaPrincipal(datos.results[0]); // Solo la primera noticia
        console.log(datos);
      } catch (error) {
        console.log(error);
      }
    };
    cargarNoticias();
  }, []);

  return (
    <>
      {noticiaPrincipal && (
        <Container fluid>
          <Card className="bg-dark text-white m-2">
            <Card.Img src={noticiaPrincipal.image_url} alt="Fluido_Informatico" />
            <Card.ImgOverlay>
              <Card.Title>{noticiaPrincipal.title}</Card.Title>
              <Card.Text>{noticiaPrincipal.description}</Card.Text>
              <Card.Text>Fecha: {noticiaPrincipal.pubDate}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Container>
      )}
    </>
  );
}
