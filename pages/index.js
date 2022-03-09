import { Layout } from '../layouts';
import {
    Hero,
    PopularExperiences,
    ExploreMore,
    HowItWorks,
    Guarantees,
} from '../components';
import experiences from '../data';
import { shuffleArray } from '../utils/shuffle-array';

import SmallCard from '../components/SmallCard/SmallCard';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle/SectionSubtitle';
import MediumCard from '../components/MediumCard';
import { useRef } from 'react';
import Image from 'next/image';

import { classNames } from '../utils/classnames';

const heroVideoBackgrounds = [
    {
        id: 1,
        videoUrl: 'videos/city-tour.mp4',
        caption: 'Discover the city you are in',
    },
    {
        id: 2,
        videoUrl: 'videos/dancing-session.mp4',
        caption: 'Learn how to tell a story with a few dance moves',
    },
    {
        id: 3,
        videoUrl: 'videos/music-show.mp4',
        caption: 'Discover the best music shows in town',
    },
    {
        id: 4,
        videoUrl: 'videos/online-session.mp4',
        caption: 'Keep your physical fitness in check',
    },
];

const images = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80',
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80',
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80',
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80',
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80',
    },
];

export default function Home({
    backgroundVideo,
    popularExperiences,
    exploreData,
    leaveAnywhereData,
    sampleImages,
}) {
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    console.log(sampleImages);

    return (
        <Layout>
            <Hero video={backgroundVideo} />

            <section className="mt-16">
                <SectionTitle>Explore nearby places</SectionTitle>
                <SectionSubtitle>
                    Find your next adventure by a location near you
                </SectionSubtitle>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {exploreData?.map((experience) => {
                        return (
                            <SmallCard
                                key={experience.location}
                                img={experience.img}
                                location={experience.location}
                                distance={experience.distance}
                            />
                        );
                    })}
                </div>
            </section>

            <section>
                <div className="relative overflow-hidden not-prose bg-slat-50 rounded-xl">
                    <div className="relative overflow-auto rounded-xl">
                        {/* <!-- Snap Point --> */}
                        <div className="flex items-end justify-start pt-10 mb-6">
                            {/* <div className="rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:ring-0 dark:text-white dark:highlight-white/10">
                                snap point
                            </div> */}
                            <div className="absolute top-0 bottom-0 left-0 border-l border-indigo-500"></div>
                        </div>
                        {/* Snap End Point */}
                        <div className="flex items-end justify-end pt-10 mb-6">
                            {/* <div className="mr-2 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:ring-0 dark:text-white dark:highlight-white/10">
                                snap point
                            </div> */}
                            <div className="absolute top-0 bottom-0 right-0 border-l border-indigo-500"></div>
                        </div>
                        {/* <!-- Contents --> */}
                        <div className="relative flex w-full gap-6 overflow-x-auto snap-x snap-mandatory pb-14 overscroll-contain scroll-smooth">
                            {sampleImages.map((image, index) => {
                                return (
                                    <div
                                        className={classNames(
                                            'scroll-mx-6 shrink-0 w-full lg:w-3/12 h-72 bg-red-100 flex items-center justify-center rounded-lg transition duration-300',
                                            index === 0
                                                ? 'snap-start'
                                                : 'snap-center',
                                            index === sampleImages.length - 1 &&
                                                'snap-end'
                                        )}
                                        key={index}
                                    >
                                        <h1>{index}</h1>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="absolute inset-0 border pointer-events-none border-black/5 rounded-xl dark:border-white/5"></div>
                </div>
            </section>

            <section>
                <div className="relative overflow-hidden not-prose bg-slat-50 rounded-xl">
                    <div className="relative overflow-auto rounded-xl">
                        {/* <!-- Snap Point --> */}
                        <div className="flex items-end justify-start pt-10 mb-6">
                            {/* <div className="rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:ring-0 dark:text-white dark:highlight-white/10">
                                snap point
                            </div> */}
                            <div className="absolute top-0 bottom-0 left-0 border-l border-indigo-500"></div>
                        </div>
                        {/* Snap End Point */}
                        <div className="flex items-end justify-end pt-10 mb-6">
                            {/* <div className="mr-2 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:ring-0 dark:text-white dark:highlight-white/10">
                                snap point
                            </div> */}
                            <div className="absolute top-0 bottom-0 right-0 border-l border-indigo-500"></div>
                        </div>
                        {/* <!-- Contents --> */}
                        <div className="relative flex w-full gap-6 overflow-x-auto snap-x snap-mandatory pb-14 overscroll-contain">
                            {sampleImages.map((image, index) => {
                                return (
                                    <div
                                        className={classNames(
                                            'scroll-mx-6 shrink-0',
                                            index === 0
                                                ? 'snap-start'
                                                : 'snap-center',
                                            index === sampleImages.length - 1 &&
                                                'snap-end'
                                        )}
                                        key={index}
                                    >
                                        <Image
                                            width={369}
                                            height={180}
                                            className="object-cover bg-white rounded-lg shadow-xl shrink-0"
                                            alt={image.url}
                                            src={image.url}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="absolute inset-0 border pointer-events-none border-black/5 rounded-xl dark:border-white/5"></div>
                </div>
            </section>

            {/* <PopularExperiences data={popularExperiences} /> */}

            {/* <ExploreMore />
            <HowItWorks />
            <Guarantees /> */}
        </Layout>
    );
}

export async function getStaticProps() {
    const fetchExploreData = await fetch('https://links.papareact.com/pyp');
    const exploreData = await fetchExploreData.json();

    const fetchLeaveAnywhereData = await fetch(
        'https://links.papareact.com/zp1'
    );
    const leaveAnywhereData = await fetchLeaveAnywhereData.json();

    return {
        props: {
            backgroundVideo: shuffleArray(heroVideoBackgrounds)[0],
            popularExperiences: shuffleArray(experiences),
            exploreData: shuffleArray(exploreData),
            leaveAnywhereData: shuffleArray(leaveAnywhereData),
            sampleImages: images,
        },
    };
}
