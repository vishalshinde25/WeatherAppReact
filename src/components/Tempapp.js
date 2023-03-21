import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => { 
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);
    const [search, setSearch] = useState(null);

    useEffect( () => {
        const fetchApi = async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b4c5c299ddedd7a78faae8a062b68991
`;            
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
            setWeather(resJson.weather);

        }
        fetchApi();
    }, [search])
    return(
        <>
            <div className="box">
                <div className="input">
                    <input type="search" className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {
                    !city ? (
                        <h3><p className="errorMsg">NO DATA FOUND</p></h3>
                    ) : (
                    <div>    
                    <div className="info">
                    <h2 className="location">
                    {/* <i class="fa-solid fa-cloud"></i> */}
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <p>{search}</p>
                    </h2>
                    <h1 className="temp">
                        {city.temp} °C
                    </h1>
                    <h4 className="feelslike">Feels like: {city.feels_like} °C</h4>
                    <h4 className="tempmax">Max: {city.temp_max} °C</h4>
                    <h4 className="tempmin">Min: {city.temp_min} °C</h4>
                    <h4 className="weatherdesc">Description: {weather[0].description}</h4>
                    </div>
                    </div>
                    )
                } 
                
               <div class="liquid"></div>
            </div> 
        </>
    )
}

export default Tempapp;