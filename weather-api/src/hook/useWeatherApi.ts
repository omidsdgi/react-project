import {callWeatherApi} from "@/api/Api";
import {useEffect, useState} from "react";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import ApiStatus from "@/types/api/ApiStatus";

interface Props {
    city: string;
}
interface WeatherResult {
    status:"pending"| "isLoading"|"hasError"|"isSuccesses"
    response: WeatherResponse | false;
}

export default function  useWeatherApi({city}:Props):WeatherResult {

    const [response, setResponse] = useState<WeatherResponse | false>(false)

    const [status, setStatus] = useState<ApiStatus>("pending");

    const apiCall = async () => {
        setStatus("isLoading");

        const result= await callWeatherApi({city})


        if(result === false){
            setStatus("hasError")
            return;
        }

        setStatus("isSuccesses");
        setResponse(result)
    }

    useEffect(() => {

        apiCall()
    }, [city]);
    return{status,response}
}