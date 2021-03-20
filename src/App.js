import './App.css';
import React, {useState} from 'react';
import Today from './Today';
const api = {
  Key : "cef91e4b4e25c5549123580319fe27f3",
  base : "http://api.openweather.org/data/2.5/"
}

function App() {
  const [query,setQuery] = useState(" ");
  const [weather,setWeather]= useState({});

const search = evt =>{
  if(evt.key === "Enter"){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res=> res.json()) 
    .then(result => {
      setWeather(result);
      setQuery(" ");
      console.log(weather);
      });
  }

  return (
    <div className={(typeof weather.main !="undefined") 
    ? ((weather.main.temp >20)
    ? 'App warm' 
    : 'App') 
    :'App'}>
      <main>
       <div className="search-box">
            <input
            type = "text"
            className="search-bar"
            placeholder="Search..."
            onChange= { e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            /> 
      </div>
      {(typeof weather.main !="undefined") ? (
      <div className="myapp">
        <div className="location-box">{weather.name},{weather.sys.contry}</div>
        <div className="date"><Today/></div>
        <div className="weather-box">{Math.round(weather.main.temp)}°c</div>
      </div>
        ) : (" ")}
        </main>
    </div>
  );
}
export default App;
