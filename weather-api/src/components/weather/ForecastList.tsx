import ForecastItem from "@/components/weather/ForecastItem";
import { ForecastResponse, List } from "@/types/api/ForecastResponse";

interface Props {
    forecast: ForecastResponse;
}

function ForecastList({ forecast }: Props) {

    const dailyForecast = forecast.list.filter((item) => {
        const date = new Date(item.dt * 1000);
        const hour = date.getHours();

        return hour === 15;
    });

    if (dailyForecast.length === 0) {
        return <p className="text-center text-gray-500">هیچ داده‌ای برای ساعت 15 یافت نشد.</p>;
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-5  gap-10">

            {dailyForecast.map((item: List) => (
                <ForecastItem key={item.dt} item={item} />
            ))}
        </div>
    );
}

export default ForecastList;
