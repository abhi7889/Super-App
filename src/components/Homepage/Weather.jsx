import { useEffect, useState } from "react";
import images from "../../assets/images";

export default function Weather() {
  const [weather, setWeather] = useState(false);
  // console.log(weather);
  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        "http://api.weatherapi.com/v1/current.json?key=47be000407254c0eb9d124732232310&q=jammu&aqi=no"
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, []);

  return (
    <div className="weather-data">
      <div>
        <img
          style={{ width: "70px", height: "60px" }}
          src={weather.current?.condition?.icon}
          alt="weather-icon"
        />
        <p style={{ textAlign: "center" }}>
          {weather.current?.condition?.text}
        </p>
      </div>
      <div class="vl"></div>
      <div style={{ display: "flex", alignContent: "center" }}>
        <div>
          <img
            style={{ width: "20px", height: "20px", paddingTop: "70px" }}
            src={images.pressure}
            alt="pressure_icon"
          />
        </div>
        <div>
          <p style={{ fontSize: "44.462px" }}>{weather.current?.temp_c}°C</p>
          <p style={{ textAlign: "center" }}>
            {weather.current?.pressure_mb} mbar
          </p>
          <p style={{ textAlign: "center" }}>pressure</p>
        </div>
      </div>

      <div class="vl"></div>

      <div>
        <div style={{ display: "flex", alignContent: "center" }}>
          <div style={{ marginTop: "15px" }}>
            <img
              style={{ width: "20px", height: "20px", paddingRight: "10px" }}
              src={images.wind}
              alt="wind_icon"
            />
          </div>
          <div>
            <p>{weather.current?.wind_kph} km/h</p>
            <p>Wind</p>
          </div>
        </div>
        <div style={{ display: "flex", alignContent: "center" }}>
          <div style={{ marginTop: "25px" }}>
            <img
              style={{ width: "20px", height: "20px", paddingRight: "10px" }}
              src={images.humidity}
              alt="humidity_icon"
            />
          </div>
          <div>
            <p style={{ marginTop: "15px" }}>{weather.current?.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
