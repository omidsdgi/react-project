import {useState} from "react";
import AccordionItem from "@/components/AccordionItem";

interface AccordionProps {
    items: {
        title: string;
        content: string;
    }[];
}

function Accordion({items}: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number|null>(null);

    const toggleAccordion = (index:number) => {
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

