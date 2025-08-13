import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "0e928bcdbacbae3d3907d3282101a687";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();

        // Check for API error
        if (jsonResponse.cod !== 200) {
            throw new Error(jsonResponse.message);
        }

        return {
            city: city,
            temp: jsonResponse.main.temp,
            pressure: jsonResponse.main.pressure,
            wind: jsonResponse.wind.speed,
            feels_like: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description
        };
    };

    let inputHandler = (event) => {
        setCity(event.target.value);
    };

    let submitHandler = async (eve) => {
        eve.preventDefault();
        setError(false); // reset error before new search
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // clear input after successful fetch
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div>
            <h2>Search for Weather</h2>
            <form onSubmit={submitHandler} style={{ marginBottom: "20px" }}>
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    required
                    value={city} // controlled input
                    onChange={inputHandler}
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p>Such place does not exist</p>}
            </form>
        </div>
    );
}
