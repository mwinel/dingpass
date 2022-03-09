import { useState, useRef } from 'react';
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

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Home({
    backgroundVideos,
    popularExperiences,
    exploreData,
}) {
    const ref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <Layout>
            <Hero video={shuffleArray(backgroundVideos)[0]} />
            {/* <PopularExperiences data={popularExperiences} /> */}

            <section className="mt-16">
                <div className="flex gap-2 mb-4">
                    <button
                        className="bg-gray-100"
                        onClick={() => {
                            scroll(-200);
                        }}
                    >
                        Prev
                    </button>
                    <button
                        className="bg-gray-100"
                        onClick={() => {
                            scroll(200);
                        }}
                    >
                        Next
                    </button>
                </div>
                <div
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory overscroll-contain scroll-smooth scrollbar-hide"
                    ref={ref}
                >
                    {arr.map((item, index) => {
                        return (
                            <div
                                className="w-[18.35rem] bg-red-300 rounded-lg h-[18.35rem] shrink-0 snap-start"
                                key={index}
                            >
                                {item}
                            </div>
                        );
                    })}
                    {/* <div className="w-[18.35rem] bg-red-300 rounded-lg h-[18.35rem] shrink-0 snap-start">
                        1
                    </div>
                    <div className="w-[18.35rem] bg-red-300 rounded-lg h-[18.35rem] shrink-0 snap-start">
                        2
                    </div>
                    <div className="w-[18.35rem] bg-red-300 rounded-lg h-[18.35rem] shrink-0 snap-start">
                        3
                    </div>
                    <div className="w-[18.35rem] bg-red-300 rounded-lg h-[18.35rem] shrink-0 snap-start">
                        4
                    </div>

                    <div className="w-[18.35rem] bg-red-300 rounded-lg h-[18.35rem] shrink-0 snap-start">
                        5
                    </div>
                    <div className="w-[18.35rem] bg-red-300 rounded-lg h-[18.35rem] shrink-0 snap-start">
                        6
                    </div>
                    <div className="w-[18.35rem] bg-red-300 rounded-lg h-[18.35rem] shrink-0 snap-start">
                        7
                    </div> */}
                </div>
            </section>

            {/* <section className="mt-16">
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
            </section> */}

            {/* <ExploreMore />
            <HowItWorks />
            <Guarantees /> */}
        </Layout>
    );
}

export async function getStaticProps() {
    const fetchExploreData = await fetch('https://links.papareact.com/pyp');
    const exploreData = await fetchExploreData.json();

    return {
        props: {
            backgroundVideos: heroVideoBackgrounds,
            popularExperiences: shuffleArray(experiences),
            exploreData: shuffleArray(exploreData),
        },
        revalidate: 1,
    };
}
