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

export default function Home({
    backgroundVideo,
    popularExperiences,
    exploreData,
}) {
    return (
        <Layout>
            <Hero video={backgroundVideo} />
            {/* <PopularExperiences data={popularExperiences} /> */}

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
            backgroundVideo: shuffleArray(heroVideoBackgrounds)[0],
            popularExperiences: shuffleArray(experiences),
            exploreData: shuffleArray(exploreData),
        },
        revalidate: 1
    };
}
