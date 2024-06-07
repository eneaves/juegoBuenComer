import "./App.css";
import React, { useState } from "react";
import GoodScreen from "./components/GoodScreen";
import BadScreen from "./components/BadScreen";
import comidaData from "./components/data";

function App() {
  const [comidaSeleccionada, setComidaSeleccionada] = useState(null);
  const [listaComidas, setListaComidas] = useState([]);
  const [puntos, setPuntos] = useState(0);
  const [screen, setScreen] = useState(null);

  const handleFood = (nombreComida) => {
    const comidaSeleccionada = comidaData.find(
      (comida) => comida.nombre === nombreComida
    );
    setComidaSeleccionada(comidaSeleccionada);
    setPuntos(puntos + comidaSeleccionada.puntos);
  };

  const addtoList = () => {
    if (comidaSeleccionada) {
      setListaComidas([...listaComidas, comidaSeleccionada]);
    }
  };

  const handleScreen = () => {
    let verdurasYFrutasCount = 0;
    let cerealesCount = 0;
    let grasasSaludablesCount = 0;
    let carnesCount = 0;

    listaComidas.forEach((comida) => {
      switch (comida.categoria) {
        case "Verduras y frutas":
          verdurasYFrutasCount++;
          break;
        case "Cereales":
          cerealesCount++;
          break;
        case "Grasas saludables":
          grasasSaludablesCount++;
          break;
        case "Carnes":
          carnesCount++;
          break;
        default:
          break;
      }
    });

    if (
      verdurasYFrutasCount >= 2 &&
      cerealesCount >= 1 &&
      grasasSaludablesCount >= 1 &&
      carnesCount >= 1
    ) {
      setScreen("good");
    } else {
      setScreen("bad");
    }
  };

  return (
    <div className="main-container">
      {screen === null && (
        <>
          <div className="left-container">
            <div className="mascota-container">
              <img
                src="src/assets/pNsinfondo.png"
                alt="mascota"
                id="mascota"
              />
            </div>
          </div>
          <div className="center-container">
            <h1>Menu</h1>
            <div className="menu-container">
              <div className="menu">
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Ensalada")}
                  >
                    <div className="foto-comida-container">
                      <img
                        src="src/assets/ensalada.png"
                        alt="ensalada"
                        id="foto-comida"
                      />
                    </div>
                    Ensalada
                  </button>
                </div>
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Arroz")}
                  >
                    <img
                      src="src/assets/arroz.png"
                      alt="arroz"
                      id="foto-comida"
                    />
                    arroz
                  </button>
                </div>
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Pollo")}
                  >
                    <img
                      src="src/assets/pollo.png"
                      alt="pollo"
                      id="foto-comida"
                    />
                    pollo
                  </button>
                </div>
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Helado")}
                  >
                    <img
                      src="src/assets/helado.png"
                      alt="helado"
                      id="foto-comida"
                    />
                    helado
                  </button>
                </div>
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Agua de Jamaica")}
                  >
                    <img
                      src="src/assets/jamaica.png"
                      alt="jamaica"
                      id="foto-comida"
                    />
                    agua de jamaica
                  </button>
                </div>
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Brocoli")}
                  >
                    <img
                      src="src/assets/brocoli.png"
                      alt="brocoli"
                      id="foto-comida"
                    />
                    Brocoli
                  </button>
                </div>
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Calabaza")}
                  >
                    <img
                      src="src/assets/calabaza.png"
                      alt="calabaza"
                      id="foto-comida"
                    />
                    Calabaza
                  </button>
                </div>
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Arroz integral")}
                  >
                    <img
                      src="src/assets/arroz-integral.png"
                      alt="arroz integral"
                      id="foto-comida"
                    />
                    Arroz integral
                  </button>
                </div>
                <div className="comida-container">
                  <button
                    className="comida"
                    onClick={() => handleFood("Nueces")}
                  >
                    <img
                      src="src/assets/nueces.png"
                      alt="nueces"
                      id="foto-comida"
                    />
                    Nueces
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="selection-container">
              {comidaSeleccionada && (
                <div className="selection">
                  <h2>{comidaSeleccionada.nombre}</h2>
                  <img
                    src={comidaSeleccionada.imagen}
                    alt={comidaSeleccionada.nombre}
                    id="comida-seleccionada-foto"
                  />
                  <p>{comidaSeleccionada.categoria}</p>
                </div>
              )}
            </div>
            <div className="botton-container">
              <button className="button-selection" onClick={addtoList}>
                Seleccionar
              </button>
            </div>
            <div className="lista-container">
              <h2>Plato</h2>
              <div className="lista-scrollable">
                <ul>
                  {listaComidas.map((comida, index) => (
                    <li key={index}>{comida.nombre}</li>
                  ))}
                </ul>
              </div>
              <div className="finish-order">
                <button
                  className="button-selection"
                  onClick={handleScreen}
                >
                  Finalizar orden
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {screen === "good" && (
        <GoodScreen puntos={puntos} listaComidas={listaComidas} />
      )}
      {screen === "bad" && (
        <BadScreen puntos={puntos} listaComidas={listaComidas} />
      )}
    </div>
  );
}

export default App;
