import {Link} from 'react-router-dom'

function CountriesList({allCountries}){

    return (
        <div className='col-5'>
        {
            allCountries.map( (country) =>{
                return (
                    <div class="list-group" key={country.alpha3Code}>
                        
                        <Link to={`/countries/${country.alpha3Code}`} class="list-group-item list-group-item-action"><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width={20}/><span>  {country.name.common}</span></Link>
                    </div>
                )
            })
        }
        </div>
    )
}

export default CountriesList