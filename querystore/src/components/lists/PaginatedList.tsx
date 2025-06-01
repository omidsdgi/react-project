import React, {Dispatch, SetStateAction} from "react";
import { Box, Typography, Pagination } from '@mui/material';

interface Props {
    currentPage: number;
    totalPage: number;
    children:React.ReactNode;
    title?: string;
    setPage:Dispatch<SetStateAction<number>>;
}

// function PaginatedList({currentPage,totalPage,children,title,setPage}:Props,) {
//     let list=[]
//         for(let i=1; i<=totalPage; i++){
//             list.push(<li onClick={()=>{setPage(i)}} className={`cursor-pointer ${currentPage===i && "text-blue-700"}`} key={i}>{i}</li>)
//         }
//     return (
//         <div>
//             <div>{title}</div>
//             {children}
//             <ul className={'flex flex-row gap-4'}>
//                 {list}
//             </ul>
//         </div>
//     );
// }


export default function PaginatedList({ currentPage, totalPage, children, title, setPage }: Props) {
    const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };

    return (
        <Box>
            {title && (
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
            )}

            <Box mb={2}>{children}</Box>

            <Pagination
                count={totalPage}
                page={currentPage}
                onChange={handleChange}
                color="primary"
                shape="rounded"
                siblingCount={1}
                boundaryCount={1}
            />
        </Box>
    );
}


