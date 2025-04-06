import {ChangeEvent, FormEvent, JSX, useState} from "react";
interface Props {
    city: string;
    getWeatherData:Function;
}

function SearchForm({city,getWeatherData}: Props) {

    const [nameState, setNameState] = useState<string>(city)
const cityNameChangHandler=(e:ChangeEvent<HTMLInputElement>)=>{

    setNameState(e.target.value)
}

const submitHandler=(e:FormEvent<HTMLFormElement> )=>{
        e.preventDefault();
    getWeatherData(nameState);
}
    return (
        <form onSubmit={submitHandler} className={"m-auto flex justify-center border-gray-400 border-b-2 pb-6 mb-6"}>
            <input type="text" name={"cityName"} onChange={cityNameChangHandler} value={nameState}
                   className={"border rounded p-3 border-gray-400"}/>
            <input type="submit" value={"Search"} className={"bg-primary px-6 py-3 ml-3 text-white rounded"}/>

        </form>
    );
}

export default SearchForm;