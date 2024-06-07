import React from "react";
import './BadScreen.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BadScreen = ({ puntos, listaComidas }) => {
  const categorias = {};
  listaComidas.forEach((comida) => {
    categorias[comida.categoria] = categorias[comida.categoria]
      ? categorias[comida.categoria] + 1
      : 1;
  });

  const coloresCategorias = {
    "Verduras y frutas": "#4CAF50",
    Carnes: "#FF0000",
    Cereales: "#FFD700",
    "Grasas saludables": "#8B4513",
  };

  const backgroundColors = Object.keys(categorias).map(
    (categoria) => coloresCategorias[categoria]
  );

  const data = {
    labels: Object.keys(categorias),
    datasets: [
      {
        data: Object.values(categorias),
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    animation: {
      duration: 2000,
      easing: 'easeOutBounce',
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 16,
            family: 'Comic Neue, sans-serif',
            weight: 'bold',
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#f5f5f5',
        titleFont: {
          size: 16,
          family: 'Comic Neue, sans-serif',
          weight: 'bold',
        },
        bodyFont: {
          size: 14,
          family: 'Comic Neue, sans-serif',
        },
        bodyColor: '#000',
        titleColor: '#000',
        borderColor: '#00796b',
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="main">
      <div className="top">
        <h1 className="animated-text">
          <img className="ups-image" src="src/assets/2.png" alt="intenta otra vez" />
        </h1>
      </div>
      <div className="display">
        <div className="right">
          <h2>Tu plato</h2>
          <div style={{ width: '300px', height: '300px' }}>
            <Doughnut
              data={data}
              options={options}
              className="grafica"
            />
          </div>
        </div>
        <div className="left">
          <img src="src/assets/villano.webp" alt="Villano" className="imagen-villano"/>
        </div>
      </div>
    </div>
  );
};

export default BadScreen;
