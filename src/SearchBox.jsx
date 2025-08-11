import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="0e928bcdbacbae3d3907d3282101a687";
    
    let getWeatherInfo = async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                feels_like:jsonResponse.main.feels_like,
                humidity:jsonResponse.main.humidity,
                weather:jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }
    let inputHandler = (event)=>{
        setCity(event.target.value);
    }
    let submitHandler=async (eve)=>{
        try{
            console.log(city);
        eve.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err)
        {
            setError(true);
        }
    }
    return(
        <div>
            <h2>Search for Weather</h2>
           <form onSubmit={submitHandler} style={{marginBottom:"20px"}}>
           <TextField id="city" label="City" variant="outlined" required onChange={inputHandler}/>
           <br /><br />
           <Button variant="contained" type='submit' >Search</Button>
           {error &&  <Alert severity="error">Such place does not exist</Alert> }
           </form >
        </div>
    )
}