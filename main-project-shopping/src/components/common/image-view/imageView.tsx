import Image from "next/image";

interface Props {
    src: string,
    alt: string,
    height: number,
    width: number,
    className?: string,
}

export function ImageView({src, alt, width, height, className = ''}: Props) {

    return (
        <Image className={className} src={src} alt={alt} width={width} height={height}/>
    );
}

