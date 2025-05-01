import {IconBox} from "@/components";

interface Props {
    rate: number;
}

export function Rating({rate}: Props) {
    let fullStar=[];
    let emptyStar=[];
    for (let i=0; i < rate; i++) {
        fullStar.push(<li className="flex"><IconBox icon={'icon-star-full'} size={12}/></li>)
    }

    for (let i=rate; i < 5; i++) {
        emptyStar.push(<li key={i} className="flex"><IconBox icon={'icon-star-empty'} size={12}/></li>)
    }
    return (
        <>
        <ul className="flex gap-1">
            {fullStar}{emptyStar}

        </ul>
    <div className="text-xsmall text-gray-500 font-lato">({rate})</div>
        </>
    );
}