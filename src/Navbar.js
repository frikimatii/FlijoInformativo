import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import img_logo from "./img/Logo-flugoinformativotitulo.png";
import "./navbar.css";

function TemperaturaActual() {
  const [temperatura, setTemperatura] = useState(null);
  const [clima, setClima] = useState(null);

  const obtenerDatosClima = async () => {
    try {
      const apiKey = "6b193cd0eef8349f39312a45ee0b28ab";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=${apiKey}&units=metric`;
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      setTemperatura(datos.main.temp.toFixed(1)); // Redondea la temperatura a un decimal
      setClima(datos.weather[0].description);
    } catch (error) {
      console.error("Error al obtener datos del clima:", error);
    }
  };

  useEffect(() => {
    obtenerDatosClima();
  }, []);

  const obtenerClaseColor = () => {
    if (temperatura >= 30) {
      return "text-danger";
    } else if (temperatura >= 14 && temperatura < 30) {
      return "text-white";
    } else {
      return "text-primary";
    }
  };

  return (
    <div className="temperatura-actual fs-4 text-center">
      {temperatura && clima && (
        <>
          <FontAwesomeIcon
            icon={faTemperatureHalf}
            className={obtenerClaseColor()}
          />
          <strong className="fw-bold m-1">{temperatura}°C</strong>
        </>
      )}
    </div>
  );
}

export function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-nav ">
      <Container fluid className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#" className="text-center mt-3">
          <img
            src={img_logo}
            className="d-inline-block align-top img-logo"
            alt="Fluido Informativo"
          />
        </Navbar.Brand>
        <TemperaturaActual />
      </Container>
    </Navbar>
  );
}
