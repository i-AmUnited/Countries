import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCountry = () => {

    const [country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${name}`)
        .then(res => res.json())
        .then(data => {
          setCountry(data);
          console.log(data);
        })
        .catch(err => console.log(err));
    }, [name]);

    useEffect(() => {
        document.title = `Countries | ${name}`
    }, [name])

    return ( 
       <div className="grid place-items-center h-screen">
        {country.map((item) => (
          <div key={item.flag} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-10 p-8 items-end">
            <div>
            <Link to="/" className="border bg-white px-4 py-2 rounded-md">&larr;</Link>
              <img src={item.flags.svg} alt="" className="mt-8 w-full h-[350px] object-cover rounded-md drop-shadow" />
            </div>
            <div>
              <p className="font-medium text-xl mb-2">{item.name}</p>
              <p className="text-sm text-gray-500 mb-2">Capital: {item.capital} </p>
              <p className="text-sm text-gray-500 mb-2">Population: {item.population.toLocaleString()} </p>
              <p className="text-sm text-gray-500 mb-2">Region: {item.region} </p>
              <p className="text-sm text-gray-500 mb-2">Sub-region: {item.subregion} </p>
              <div className="pt-4">
                {item.borders && (
                  <div>
                    <p className="mb-2 font-medium">Borders:</p>
                    <div className="flex flex-wrap gap-4">
                    {item.borders.map((border, index) =>
                      <p key={index} className=" border border-solid px-3 py-1 rounded-md text-xs">{border}</p>
                    )}
                  </div>
                  </div>
                )}
                
              </div>
            </div>
          </div>
        ))}
       </div>
     );
}
 
export default SingleCountry;