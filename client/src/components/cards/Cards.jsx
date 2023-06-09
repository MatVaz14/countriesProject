import "./Cards.css";
import Card from "../card/Card.jsx"

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Paginated from "../paginated/Paginated.jsx";

const Cards = () => {

  let countries = useSelector((state) => state.countriesOrigin);

    //Datos necesarios para armar el paginado
    const [currentPage, setCurrentPage] = useState(1);

    const [countriesPerPage, setCountriesPerPage] = useState(10);

    const indexLastCountry = currentPage * countriesPerPage;
    const indexFirstCountry = indexLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexFirstCountry, indexLastCountry);
    console.log(countries)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
      if(!currentPage){
        setCurrentPage(1)
      }
    },[currentPage, countriesPerPage])

  return (
		<div className="container__cards">
      <div className="container__paginated"><Paginated countriesPerPage={countriesPerPage} countries={countries} paginado={paginado}/></div>
        {currentCountries?.map((countrie) => (
          <Card
            tag={countrie.tag}
            name={countrie.name}
            flag={countrie.flag}
            continent={countrie.continent}
            population={countrie.population}
            capital={countrie.capital}
            region={countrie.region}
            subregion={countrie.subregion}
            timezones={countrie.timezones}
            map={countrie.maps}
            area={countrie.area}
            Activities={countrie.Activities}
          />
        ))}
		</div>
	)
}

export default Cards;