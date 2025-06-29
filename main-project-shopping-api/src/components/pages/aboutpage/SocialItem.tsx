import  {SocialItem} from "@/components";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import SocialLinks from "@/components/pages/aboutpage/SocialLinks";

const socials: SocialItem[] = [
    { href: "https://facebook.com", Icon: FaFacebook, label: "Instagram" },
    { href: "https://twitter.com", Icon: FaTwitter, label: "Twitter" },
    { href: "https://www.youtube.com", Icon: FaYoutube, label: "YouTube" },
    { href: "https://instagram.com", Icon: FaInstagram, label: "Instagram" },
];

export default function Socials() {
    return (
            <SocialLinks links={socials} className="mt-4" />
          );
}