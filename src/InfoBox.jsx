import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){

    let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=1024x1024&w=is&k=20&c=A_D48BLCy76ux8guBDeYxk5c8i8WqWvQOcNVlFKOGk4=";
    let RAIN_URL="https://images.unsplash.com/photo-1434118489318-42a0e62c6235?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="infoBox">
      <Card style={{width:"500px"}} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>20?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
       <p>temp: {info.temp}&deg;C</p>
       <p>tempMax: {info.tempMax}&deg;C</p>
       <p>tempMin: {info.tempMin}&deg;C</p>
       <p>humidity:{info.humidity}</p>
       <p> weather can be described as <b>{info.weather}</b> and it feels_like {info.feels_like}</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}