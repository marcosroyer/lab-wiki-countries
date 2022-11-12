import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'

function CountryDetails({allCountries}){

    const { countryID } = useParams()

    function getCountry(pais){
        return allCountries.find( (country) =>{
            return country.alpha3Code === pais
        }) 
    }

    const countrySelected = getCountry(countryID)



    return (
        <div className="col-7">
            <h1>{countrySelected.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{countrySelected.capital}</td>
                    </tr>
                    <tr>
                        <td style={{width: '30%'}}>Area</td>
                        <td>{countrySelected.area} Km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td style={{width: '30%'}}>Borders</td>
                        <td>
                            <ul>
                            {countrySelected.borders.map( (pais)=>{
                                return (
                                    <li key={pais}>
                                        <Link to={`/countries/${pais}`}> {getCountry(pais).name.common} </Link>
                                    </li>
                                )
                            })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default CountryDetails