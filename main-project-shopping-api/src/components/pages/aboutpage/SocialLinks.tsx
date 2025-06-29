import {IconType} from "react-icons";
import Link from "next/link";

export interface SocialItem {
    href: string;
    Icon: IconType;
    label: string;
}
interface Props {
    links: SocialItem[];
    size?: number;
    className?: string;
}

export default function SocialLinks({links, size = 24, className = "",}: Props) {
    return (
        <div className={`flex justify-center items-center gap-4 ${className}`}>
            {links.map(({ href, Icon, label }) => (
                <Link key={href} href={href} target="_blank" prefetch={false} className="hover:opacity-80 transition-opacity text-green-200">
                    <Icon size={size} />
                </Link>
            ))}
        </div>
    );
}