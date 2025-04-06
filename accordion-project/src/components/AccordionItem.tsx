// import { ChevronDown, ChevronUp } from "lucide-react";
//
// interface AccordionItemProps {
//     title: string;
//     content: string;
//     isOpen: boolean;
//     onClick: () => void;
// }
//
// function AccordionItem({ title, content, isOpen, onClick }:AccordionItemProps) {
//     return (
//         <div className="border border-r-gray-500 rounded-lg shadow-md">
//             <button
//                 className="w-full flex justify-between text-black items-center p-3 bg-gray-100 hover:bg-gray-200"
//                 onClick={onClick}
//             >
//                 <span className="font-medium">{title}</span>
//                 {isOpen ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
//             </button>
//             {isOpen && <div className="p-3 border-t text-gray-700">{content}</div>}
//         </div>
//     );
// }
//
// export default AccordionItem;

import {useState} from "react";

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}
function AccordionItem({title, content,isOpen,onClick}: AccordionItemProps){
    // const [isOpen, setIsOpen] = useState(false)

      return (
        <div>
            <button   className="w-full text-right p-3 font-bold bg-gray-200" onClick={onClick}>
                {title}
            </button>
            {isOpen&& <div className={"p-3 bg-white text-right"}>{content}</div>}
        </div>
    );
}

export default AccordionItem;