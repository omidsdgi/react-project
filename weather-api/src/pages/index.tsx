import Weather from "@/components/weather/Weather";


export default function Home() {
    return (

            <main className={"flex items-center  border-2 border-gray-400 justify-center h-[100vh]"}>
                <Weather city={"tehran"}/>
            </main>

    );
}
