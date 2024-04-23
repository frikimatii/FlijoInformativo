import React from "react";
import ReactDOM from "react-dom/client";
import ContainerExample from "./ContenedorPrincipal.js";
import {ResponsiveExample} from "./NoticiasPrincipal.js";
import {NoticiaTerceras} from "./NociasTerceras.js";
import {Footer} from "./Footer_.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
      <ContainerExample />
      <ResponsiveExample />
      <NoticiaTerceras />
      <Footer />

  </>
);
