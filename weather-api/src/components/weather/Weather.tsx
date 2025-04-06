import SearchForm from "@/components/weather/SearchForm";
import ForecastList from "@/components/weather/ForecastList";
import WeatherInfo from "@/components/weather/WeatherInfo";
import {useState} from "react";
import {callForecastApi, callWeatherApi} from "@/api/Api";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import {ForecastResponse} from "@/types/api/ForecastResponse";
import Image from "next/image";
import ForecastItem from "@/components/weather/ForecastItem";
interface Props {
    city: string;
}

function Weather({city}:Props) {
    const [weatherState, setWeatherState] = useState<Weather>({
        city: "",
        wind:0,
        humidity:0,
        description:"",
        icon:"",
        daily:[]

    })
    const [forecastState, setForecastState] = useState<ForecastResponse| null>(null)
    const getWeatherData=async (city:string)=>{
         const response:WeatherResponse= await callWeatherApi({city})

        const weather:Weather={
             city:response.name,
            wind:response.wind.speed,
            humidity:response.main.humidity,
            description:response.weather[0].description,
            icon:response.weather[0].icon,
            daily:[]

        }
        setWeatherState(weather);
    const forecastResponse= await callForecastApi({lat:response.coord.lat,lon:response.coord.lon});
    setForecastState(forecastResponse);
    }
    if(weatherState.city.length === 0){
        getWeatherData(city)
    }

    return (
        <div className={"flex  flex-col items-center "}>
            <Image src={"logoNavax.svg"} alt={"Navax collage"} width={86} height={46}/>
            <div className={"bg-white shadow mt-4 rounded-2xl p-8 py-16 w-[750px] h-auto"}>
            <SearchForm city={city} getWeatherData={getWeatherData} />
            <WeatherInfo weather={weatherState}/>
                {
                    forecastState && <ForecastList forecast={forecastState}/>

                }
        </div>
        </div>
    );
}

export default Weather;