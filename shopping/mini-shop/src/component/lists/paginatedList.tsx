import {Dispatch, ReactNode, SetStateAction} from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"; // آیکون‌ها

interface Props {
    currentPage: number;
    total:number;
    children:ReactNode;
    title?:string;
    setPage:Dispatch<SetStateAction<number>>
}
// function PaginatedList({currentPage,total,children,title,setPage}: Props) {
//     let list=[]
//     for (let i =1; i<=total; i++){
//         list.push(<li onClick={()=>{setPage(i)}}  key={i}
//                       className={`
//                         flex items-center justify-center w-10 h-10
//                         rounded-full cursor-pointer border
//                         hover:bg-blue-600  border-blue-600 transition-colors duration-200
//                         ${currentPage === i ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-100"}`}
//         >
//             {i}
//         </li>)
//     }
//
//     return (
//         <div className={"border-2 border-gray-400 rounded p-8 mb-4 w-80"}>
//             <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
//             <div className={"mb-4"}>{children}</div>
//             <ul className={"flex items-center justify-center gap-1 p-2 bg-gray-100 rounded-lg"}>
//                 {list}
//             </ul>
//         </div>
//     );
// }



function PaginatedList({ currentPage, total, children, title, setPage }: Props) {
    const renderPaginationItems = () => {
        const items = [];
        const maxVisiblePages = 5;

        if (total <= maxVisiblePages) {
            for (let i = 1; i <= total; i++) {
                items.push(renderPageButton(i));
            }
        } else {
            items.push(renderPageButton(1));

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(total - 1, currentPage + 1);

            if (currentPage <= 2) {
                endPage = 3;
            } else if (currentPage >= total - 1) {
                startPage = total - 2;
            }

            if (startPage > 2) {
                items.push(
                    <li key="ellipsis-start" className="flex items-center px-2 text-gray-400">
                        <MoreHorizontal size={20} />
                    </li>
                );
            }

            for (let i = startPage; i <= endPage; i++) {
                items.push(renderPageButton(i));
            }

            if (endPage < total - 1) {
                items.push(
                    <li key="ellipsis-end" className="flex items-center px-2 text-gray-400">
                        <MoreHorizontal size={20} />
                    </li>
                );
            }

            items.push(renderPageButton(total));
        }

        return items;
    };

    const renderPageButton = (pageNum: number) => (
        <li
            onClick={() => setPage(pageNum)}
            key={pageNum}
            className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer border 
        border-blue-300 transition-all duration-200
        hover:bg-blue-500 hover:text-white
        ${currentPage === pageNum ? "bg-blue-600 text-white" : "bg-white text-gray-700"}
      `}
        >
            {pageNum}
        </li>
    );

    return (
        <div className="border-2 border-gray-200 rounded-lg  min-w-52 p-8 bg-white shadow-md">
            {title && <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>}
            <div className="mb-6">{children}</div>

            {total > 1 && (
                <div className="flex justify-center">
                    <ul className="flex flex-wrap gap-2 p-2 bg-gray-100 rounded-xl shadow-inner justify-center">
                        {currentPage > 1 && (
                            <li
                                onClick={() => setPage(prev => Math.max(1, prev - 1))}
                                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer border
                           border-gray-300 hover:bg-gray-200 bg-white text-gray-700"
                            >
                                <ChevronLeft size={20} />
                            </li>
                        )}

                        {renderPaginationItems()}

                        {currentPage < total && (
                            <li
                                onClick={() => setPage(prev => Math.min(total, prev + 1))}
                                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer border
                           border-gray-300 hover:bg-gray-200 bg-white text-gray-700"
                            >
                                <ChevronRight size={20} />
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PaginatedList;
