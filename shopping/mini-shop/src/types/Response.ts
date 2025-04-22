import {Meta} from "@/types/Meta";

export interface Response<T> {
    data:Array<Data<T>>
    meta:Meta
}
interface Data<T> {
    id:number,
    attributes:T
}