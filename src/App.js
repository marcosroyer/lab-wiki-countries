import './App.css';
import Navbar from './components/Navbar';
import countries from './countries.json'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {

  const [allCountries, setCountries] = useState(countries)

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList allCountries={allCountries}/>
          <Routes>
            <Route path="/countries/:countryID" element={ <CountryDetails allCountries={allCountries} />} />
          </Routes>
        </div>
      </div>


    </div>
  );
}

export default App;
