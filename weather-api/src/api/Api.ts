import {WeatherResponse} from "@/types/api/WeatherResponse";
import {ForecastResponse} from "@/types/api/ForecastResponse";

const baseUrl=`https://api.openweathermap.org/data/2.5/`
const apiKey="3dce9b1c66837262a25b3f448d354a76"

interface WeatherProps {
    city: string;
}
interface ForecastProps {
    lat:number,
    lon:number,
}

export async function callWeatherApi({city}:WeatherProps):Promise<WeatherResponse| false> {
    await sleep(2000)
    const response = await fetch(baseUrl + `weather?q=${city}&appid=${apiKey}&units=metric`)
    if (response.ok) {
        return await response.json()
    } else {
        return false
    }
}

export async function callForecastApi({lat,lon}:ForecastProps):Promise<ForecastResponse |false> {
    await sleep(5000)
    const response=await fetch(baseUrl +`forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    if(response.ok){
        return await response.json()
    }else{
        return false
}
}
const sleep=(ms:number) => new Promise(resolve => setTimeout(resolve, ms));