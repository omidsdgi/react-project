import {ImageView, Section} from "@/components";
import {provideCards, ProvideCardType} from "@/mock/provideCardMock";
import StateSummary from "@/components/pages/aboutpage/StateSummary";
import {informMock} from "@/mock/informMock";
import {NestMartSlider} from "@/components/pages/aboutpage/NestMartSlider";
import Link from "next/link";
import Socials from "@/components/pages/aboutpage/SocialItem";


const AboutUs = () => (
        <Section>
            <section className="mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12 max-w-[1316px]
    px-4 sm:px-6 lg:px-0">

                <div className="w-full lg:w-1/2">
                    <ImageView src="/assets/images/about/chef.png" alt="chef" width={646} height={736}
                               className={"w-full h-auto object-cover rounded-xl shadow (min-width:1024px) 50vw, 100vw"}/>
                </div>
                <div
                    className="w-full lg:w-1/2 max-w-lg lg:max-w-none mt-8 lg:mt-0 flex flex-col justify-center p-4 sm:p-6 lg:p-5">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#253D4E]">
                        Welcome to NestMart
                    </h2>
                    <p className="mt-6 sm:mt-8 lg:mt-12 text-base sm:text-lg leading-relaxed text-black font-lato">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eaque error est quaerat
                        quibusdam quod? Adipisci alias architecto consectetur esse excepturi iste libero, modi, nihil
                        obcaecati, officiis provident quaerat quia tempore temporibus voluptatum. Eaque, modi quam?
                    </p>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-black font-lato">
                        Aperiam assumenda atque corporis culpa debitis deleniti deserunt, dolorum ducimus ea earum
                        eius eligendi enim eveniet excepturi exercitationem iure labore, molestias nulla perferendis
                        placeat possimus provident ratione recusandae rem sint soluta suscipit tempore vero?
                    </p>

                    <div className="mt-8 sm:mt-10">
                        <NestMartSlider/>
                    </div>
                </div>
            </section>

            <section className="max-w-[1316px] mx-auto px-4 sm:px-6 mt-5">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#253D4E] text-center mt-12 sm:mt-16 lg:mt-20 mb-6 sm:mb-8 lg:mb-12">
                    What We Provide?
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center w-full">
                    {provideCards.map((card: ProvideCardType) => (
                        <article
                            key={card.title}
                            className="w-full max-w-[423px] aspect-square p-6 sm:p-8 flex flex-col items-center justify-center text-center rounded-xl shadow bg-white"
                        >
                            <ImageView src={card.image} alt={card.title} width={100} height={100}
                                       className="object-contain"/>
                            <h2 className="mt-4 mb-2 text-lg sm:text-xl font-medium text-[#253D4E]">
                                {card.title}
                            </h2>
                            <p className="font-lato text-sm sm:text-base leading-relaxed text-gray-700">
                                {card.text}
                            </p>
                        </article>
                    ))}
                </div>
                <div className={'flex flex-col lg:flex-row justify-center items-center mt-10 gap-8 w-full'}>
                    <ImageView src={'/assets/images/about/Rectangle 30.png'} alt={'performance'} height={438} width={325}
                               className={'flex-col lg:flex-row'}/>
                    <ImageView src={'/assets/images/about/Rectangle 31.png'} alt={'performance'} height={575} width={426}
                               className={'flex-col lg:flex-row'}/>
                    <div>
                        <p className={'text-heading6 lg:text-heading4 text-[#7E7E7E]'}>Our performance</p>
                        <h2 className={'text-heading5 lg:text-heading4 xl:text-heading2 mt-5'}>Your Partner for e-commerce
                            grocery solution</h2>
                        <p className={'text-heading6  mt-16 text-[#7E7E7E]'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem consequatur laboriosam
                            nesciunt officia quaerat sapiente tempora! Alias, maxime, quas.
                        </p>
                        <p className={'text-heading6 text-gray-500 mt-5'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, necessitatibus.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16 justify-items-start">
                    {informMock.map((item) => (
                        <section key={item.title} className="max-w-[423px]">
                            <h2 className="mb-4 text-heading3 text-[#253D4E]">{item.title}</h2>
                            <p className="font-lato text-base leading-relaxed text-gray-500">{item.text}</p>

                        </section>
                    ))}
                </div>
            </section>
            <StateSummary/>
                <h2 className={'text-heading1 text-center mt-8 mb-16 text-blue-300'}>Our Team</h2>
            <section
                className={'flex flex-col lg:flex-row justify-between items-center mt-10 gap-2 mx-auto max-w-[1453px] '}>
                <div className={'w-[394px]'}>
                    <p className={'text-heading6 lg:text-heading4 text-green-200'}>Our team</p>
                    <h2 className={'text-heading5 lg:text-heading4 xl:text-heading2 mt-5'}>Meet Our Expert Team</h2>
                    <p className={'text-heading6  mt-16 text-gray-500'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem consequatur laboriosam
                        nesciunt officia quaerat sapiente tempora! Alias, maxime, quas.
                    </p>
                    <p className={'text-heading6 text-gray-500 mt-5'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, necessitatibus.
                    </p>
                    <button className={'bg-green-200 text-white text-large font-semibold rounded mt-12 px-6 py-2'}>View
                        All
                        Member
                    </button>
                </div>
                <div className={'relative mb-16 '}>
                    <ImageView src={'/assets/images/about/Rectangle 35.png'} alt={'performance'} height={503}
                               width={480}
                               className={'flex-col lg:flex-row'}/>
                    <div
                        className={'absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-4 w-2/3 max-w-sm rounded-2xl border-2 bg-white mb-10 py-4 px-8'}>
                        <h3 className={'text-heading4 text-blue-300'}>H.Merinda</h3>
                        <p className={'font-lato text-large text-green-500'}>CEO & Co-Founder</p>
                        <Socials/>

                    </div>
                </div>
                <div className={'relative mb-16 '}>
                    <ImageView src={'/assets/images/about/Rectangle 36.png'} alt={'performance'} height={503}
                               width={480}
                               className={'flex-col lg:flex-row'}/>
                    <div
                        className={'absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-4 w-2/3 max-w-sm rounded-2xl border-2 bg-white mb-10 py-4 px-8'}>
                        <h3 className={'text-heading4 text-blue-300'}>Dilan Specter</h3>
                        <p className={'font-lato text-large text-green-500'}>Head Engineer</p>
                        <Socials/>

                    </div>
                </div>
            </section>

        </Section>
    )
;

export default AboutUs;

