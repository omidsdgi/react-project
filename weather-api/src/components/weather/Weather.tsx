import SearchForm from "@/components/weather/SearchForm";
import ForecastList from "@/components/weather/ForecastList";
import WeatherInfo from "@/components/weather/WeatherInfo";

function Weather() {
    return (
        <div>
            <SearchForm/>
            <WeatherInfo/>
            <ForecastList/>
        </div>
    );
}

export default Weather;