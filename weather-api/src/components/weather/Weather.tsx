import SearchForm from "@/components/weather/SearchForm";
import ForecastList from "@/components/weather/ForecastList";
import WeatherInfo from "@/components/weather/WeatherInfo";
import {useState} from "react";
interface Props {
    city: string;
}

function Weather({city}:Props) {
    const [weatherState, setWeatherState] = useState<Weather>({
        city: city,
        wind:"",
        humidity:"",
        description:"",
        icon:"",
        daily:[]

    })
    console.log(weatherState)
    return (
        <div>
            <SearchForm />
            <WeatherInfo/>
            <ForecastList/>
        </div>
    );
}

export default Weather;