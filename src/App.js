import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries(props) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, [])
  return (
    <div>
      <h2><code>Countries</code></h2>
      {
        countries.map(country => <Country name={country.name.common} capital={country.capital} flag={country.flags.png}></Country>)
      }
    </div>
  )
}

const Country = props => {
  return (
    <div className="country">
      <div style={{ width: "100%"}}>
      <h2>Country Name: {props.name}</h2>
      <h4>Capital: {props.capital}</h4>
      </div>
      <div style={{width: "100%"}}>
      <img src={props.flag} alt="flag" />
      </div>
    </div>
  )
}

export default App;
