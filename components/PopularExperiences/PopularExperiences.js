import { useRef } from 'react';

import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import PopularExperieceCard from './PopularExperienceCard';

export default function PopularExperiences({ data }) {
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const cards = data.map((item) => {
        return <PopularExperieceCard key={item.id} item={item} />;
    });

    return (
        <section className="md:mt-16">
            <div className="flex items-center justify-between">
                <div>
                    <SectionTitle>
                        Most popular Experiences in Kampala
                    </SectionTitle>
                    <SectionSubtitle>
                        Fill your day with some of the most exciting activities
                        in your location.
                    </SectionSubtitle>
                </div>
                {/* <div>
                    <Button tertiary>Learn More</Button>
                </div> */}
            </div>
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
                {cards}
            </div>
        </section>
    );
}
