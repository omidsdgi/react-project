import {Dispatch, ReactNode, SetStateAction} from "react";

interface Props {
    currentPage: number;
    total:number;
    children:ReactNode;
    title?:string;
    setPage:Dispatch<SetStateAction<number>>
}
function PaginatedList({currentPage,total,children,title,setPage}: Props) {
    let list=[]
    for (let i =1; i<=total; i++){
        list.push(<li onClick={()=>{setPage(i)}}  key={i}
                      className={`
                        flex items-center justify-center w-12 h-12 
                        rounded-full cursor-pointer border 
                        hover:bg-blue-600  border-blue-600 transition-colors duration-200
                        ${currentPage === i ? "bg-blue-600 text-white" : "text-gray-700"}`}
        >
            {i}
        </li>)
    }

    return (
        <div className={"border-2 border-gray-400 rounded p-8 mb-4"}>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
            <div>{children}</div>
            <ul className="flex flex-row gap-16 ">
                {list}

            </ul>
        </div>
    );
}

export default PaginatedList;