import React, {Dispatch, SetStateAction} from "react";

interface Props {
    currentPage: number;
    totalPage: number;
    children:React.ReactNode;
    title?: string;
    setPage:Dispatch<SetStateAction<number>>;
}

function PaginatedList({currentPage,totalPage,children,title,setPage}:Props,) {
    let list=[]
        for(let i=1; i<=totalPage; i++){
            list.push(<li onClick={()=>{setPage(i)}} className={`cursor-pointer ${currentPage===i && "text-blue-700"}`} key={i}>{i}</li>)
        }
    return (
        <div>
            <div>{title}</div>
            {children}
            <ul className={'flex flex-row gap-4'}>
                {list}
            </ul>
        </div>
    );
}

export default PaginatedList;