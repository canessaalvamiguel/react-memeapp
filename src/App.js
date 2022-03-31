import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import html2canvas from "html2canvas";

function App() {

  const [line1, setline1] = useState('');
  const [line2, setline2] = useState('');
  const [image, setImage] = useState('futurama');

  const onChangeLine1 = function (event){
      setline1(event.target.value);
  }

  const onChangeLine2 = function (event){
      setline2(event.target.value);
  }

  const onChangeImage = function (event){
      setImage(event.target.value);
  }

  const onClickExport = function (event){
      html2canvas(document.querySelector("#meme")).then(canvas => {
          var img = canvas.toDataURL("image/png");
          var link = document.createElement('a');
          link.download = 'meme.png';
          link.href = img;
          link.click();
      });
  }

  return (
    <div className="App">

        <select onChange={onChangeImage}>
            <option value="fire">House on fire</option>
            <option value="futurama">Futurama</option>
            <option value="history">History Channel</option>
            <option value="matrix">Matrix</option>
            <option value="philosoraptor">Philosoraptor</option>
            <option value="smart">Smart guy</option>
        </select> <br/>

        <input onChange={onChangeLine1} type="text" placeholder="Top line"/> <br/>
        <input onChange={onChangeLine2} type="text" placeholder="Botton line"/> <br/>
        <button onClick={onClickExport}>Export</button>

        <div className="meme" id="meme">
            <span>{line1}</span><br/>
            <span>{line2}</span>
            <img src={"/img/"+image+".jpg"}/>
        </div>

    </div>
  );
}

export default App;
