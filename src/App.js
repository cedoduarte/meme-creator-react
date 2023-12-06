import html2canvas from 'html2canvas';
import './App.css';
import { useState } from "react";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");
  const onChangeLinea1 = (evento) => {
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = (evento) => {
    setLinea2(evento.target.value);
  }
  const onChangeImagen = (evento) => {
    setImagen(evento.target.value);
  }
  const onClickExportar = (evento) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let memeImage = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = memeImage;
      link.click();
    });
  }
  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">
          Casa en llamas
        </option>
        <option value="futurama">
          Futurama
        </option>
        <option value="history">
          History Channel
        </option>
        <option value="matrix">
          Matrix
        </option>
        <option value="philosoraptor">
          Philosoraptor
        </option>
        <option value="smart">
          Smart Guy
        </option>
      </select><br/>

      <input 
        onChange={onChangeLinea1} 
        type="text" 
        placeholder="Línea 1"/><br/>
      <input 
        onChange={onChangeLinea2} 
        type="text" 
        placeholder="Línea 2"/><br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div id="meme">
        <span className="linea1">{linea1}</span><br/>
        <span className="linea2">{linea2}</span>
        <img className="imagen" src={`/img/${imagen}.jpg`}/>
      </div>
    </div>
  );
}

export default App;
