import ApiStatus from "@/types/api/ApiStatus";
import {ReactNode} from "react";

interface Props {
    status:ApiStatus
    children:ReactNode;
}
function ApiLoader({status,children}:Props) {
    return (
        <>{
            status === "isLoading" ? <p>is loading please wait</p> :
            status ===    "hasError"? <p>there is an error with api</p>:
            children
        }
        </>
    );
}

export default ApiLoader;