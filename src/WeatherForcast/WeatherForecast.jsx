import './WeatherForcats.css';
const WeatherForecasts = (props) => {
    return (
        <div className="weather">
            <h2>{props.day}</h2>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <p><span>Conditions: </span>{props.conditions}</p>
            <p><span>Time: </span>{props.timeOfDay}</p>
        </div>
    );
};

export default WeatherForecasts;