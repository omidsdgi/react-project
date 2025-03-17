import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionItem({ title, content, isOpen, onClick }) {
    return (
        <div className="border border-r-gray-500 rounded-lg shadow-md">
            <button
                className="w-full flex justify-between items-center p-3 bg-gray-100 hover:bg-gray-200"
                onClick={onClick}
            >
                <span className="font-medium">{title}</span>
                {isOpen ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
            </button>
            {isOpen && <div className="p-3 border-t text-gray-700">{content}</div>}
        </div>
    );
}

export default AccordionItem;