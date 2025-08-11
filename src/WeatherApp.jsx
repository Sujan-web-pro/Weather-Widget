import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo]=useState({
        city:"Mumbai",
        feels_like:37.03,
        temp:33.36,
        tempMax:33.36,
        tempMin:33.36,
        humidity:46,
        weather:"overcast clouds"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
return(
    <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
)
}