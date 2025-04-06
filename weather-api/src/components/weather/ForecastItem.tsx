import WeatherIcon from "@/components/weather/WeatherIcon";
import {List} from "@/types/api/ForecastResponse"

interface Props {
    item:List
}

function ForecastItem({item}: Props) {
        let day=new Date(item.dt*1000).toLocaleDateString("en-US",{weekday:"long"});
        console.log(day)
    return (
        <div className={"flex justify-center items-center flex-col"}>
            <div>{day}</div>
            <WeatherIcon size={36} icon={item.weather[0].icon}/>
            <div className={"mt-3"}>
                <span className={"text-primary"}>{Math.round(item.main.temp_min)}</span>
                -
                <span className={"text-primary"}>{Math.round(item.main.temp_max)}</span>
            </div>
        </div>
    );
}

export default ForecastItem;