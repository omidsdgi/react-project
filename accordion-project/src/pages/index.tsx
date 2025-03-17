import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Accordion from "@/components/Accordion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const itemsGroup1  = [
    { title: "عنوان اول", content: "این متن مربوط به بخش اول آکاردئون گروه اول است." },
    { title: "عنوان دوم", content: "این متن مربوط به بخش دوم آکاردئون گروه اول است." },
    { title: "عنوان سوم", content: "این متن مربوط به بخش سوم آکاردئون گروه اول است." },
];

const itemsGroup2  = [
    { title: "عنوان اول", content: "این متن مربوط به بخش اول آکاردئون گروه دوم است." },
    { title: "عنوان دوم", content: "این متن مربوط به بخش دوم آکاردئون گروه دوم است." },
    { title: "عنوان سوم", content: "این متن مربوط به بخش سوم آکاردئون گروه دوم است." },
];

export default function Home() {
  return (

      <main>
          <div className="p-5 space-y-10">
              <h2 className="text-xl font-bold text-right">گروه ۱</h2>
              <Accordion items={itemsGroup1}/>

              <h2 className="text-xl font-bold mt-5 text-right">گروه ۲</h2>
              <Accordion items={itemsGroup2}/>
          </div>
          <div className="p-5 space-y-10">
              {[
                  {title: "گروه ۳", items: itemsGroup1},
                  {title: "گروه ۴", items: itemsGroup2},
              ].map((group, index) => (
                  <section key={index}>
                      <h2 className="text-xl font-bold text-center">{group.title}</h2>
                      <Accordion items={group.items}/>
                  </section>
              ))}
          </div>
      </main>
  );
}
