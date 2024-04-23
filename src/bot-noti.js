import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

export function NoticiaPrincipal() {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState(null);

  useEffect(() => {
    const cargarNoticias = async () => {
      try {
        const url =
          "https://newsdata.io/api/1/news?apikey=pub_4197125ab61a1e17b360239b79233dc4aa0bc&q=noticias&country=ar&language=es";
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        if (Array.isArray(datos.results) && datos.results.length > 0) {
          // Establecer la primera noticia como noticia principal
          setNoticiaPrincipal(datos.results[0]);
        }
      } catch (error) {
        console.log(error);
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
    <>
      {noticiaPrincipal && (
        <Container fluid>
          <Card className="bg-dark text-white m-2">
            {/* Utiliza un operador ternario para verificar si la imagen es nula */}
            <Card.Img src={noticiaPrincipal.image_url ? noticiaPrincipal.image_url : noticiaPrincipal.source_icon} alt="Fluido_Informatico" />
            <Card.Body>
              <Card.Title>{noticiaPrincipal.title}</Card.Title>
              <Card.Text>{noticiaPrincipal.description}</Card.Text>
              <Card.Text>{obtenerFecha(noticiaPrincipal.pubDate)}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
}
