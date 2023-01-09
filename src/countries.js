import {useState, useEffect} from  'react';
import { Link } from 'react-router-dom';

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const regions = [ {name:"Africa"}, {name:"America"}, {name:"Asia"}, {name:"Europe"}, {name:"Oceania"},]
  const [searchText, setSearchText] = useState("");

  // Display all countries
    useEffect(() => {
      fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => {
          setCountries(data);
          console.log(data);
        })
        .catch(err => console.log(err));
    }, []);


  // Search for country
   async function searchCountry() {

    if (searchText.length === 0  ) {
      fetch(`https://restcountries.com/v2/all`)
        .then(res => res.json())
        .then(data => {
          setCountries(data);
          console.log(data);
        })
        .catch(err => console.log(err));
    } else {
      fetch(`https://restcountries.com/v2/name/${searchText}`)
        .then(res => res.json())
        .then(data => {
          setCountries(data);
          console.log(data);
        })
        .catch(err => console.log(err));
    }  
   }

  function handleSearchCountry(e) {
    e.preventDefault()
    searchCountry()
  }

   // Filter country by region
   async function filterByRegion(region) {

      fetch(`https://restcountries.com/v2/region/${region}`)
        .then(res => res.json())
        .then(data => {
          setCountries(data);
          console.log(data);
        })
        .catch(err => console.log(err)); 
   }

  function handleFilterByRegion(e) {
    e.preventDefault()
    filterByRegion()
  }
 
    return ( 
      <div> 
        <div className="px-8 pt-10 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="drop-shadow-sm">
              <form onSubmit={handleSearchCountry} autoComplete="off">
                <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
                </svg>
                </span>
                <input className="text-xs placeholder:text-slate-400 block bg-white w-full border border-indigo-50 rounded-md py-4 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for a country..." type="text" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                </label>
              </form>
            </div>
            <div className="drop-shadow-sm">
              <form onSubmit={handleFilterByRegion} className=" flex justify-end">
              <select className='text-sm bg-white w-full md:w-1/3 lg:w-1/3 border border-indigo-50 rounded-md py-4 px-5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' value={regions.name} onChange={e => filterByRegion(e.target.value)}>
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>{region.name}</option>
                ))}
              </select>
              </form>
            </div>
       
        </div>
        <div className='px-8 pt-8'>
         <p className='text-sm text-slate-400'>Showing {countries.length} results.</p>
        </div>
        <div className="px-8 mt-2 ">
        <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {countries.map((country) => {
        return (
        <Link to={`/${country.name}`}>
          <article key={country.flag}>
          <div className="rounded-md bg-white px-1 pt-1 border border-grey-200">
            <img src={country.flag} alt="" className="w-full h-48 object-cover rounded-md drop-shadow" />
            <div className="py-4 px-2">
                <p className="mb-3 font-bold text-lg">{country.name}</p>
                <p className="mb-1 text-sm">Population: {country.population.toLocaleString()} </p>
                <p className="mb-1 text-sm">Region: {country.region}</p>
                <p className="mb-1 text-sm">Capital: {country.capital}</p>
            </div>
          </div>
        </article>
        </Link>
        )})}
        </div>
        </div>
      </div>
     );
}
 
export default Countries;