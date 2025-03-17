import {useState} from "react";
import AccordionItem from "@/components/AccordionItem";


function Accordion({items}) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <div className="max-w-md mx-auto mt-10 space-y-2">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
    }

    export default Accordion;