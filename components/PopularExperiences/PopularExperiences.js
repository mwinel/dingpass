import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import PopularExperieceCard from './PopularExperienceCard';

export default function PopularExperiences({ data }) {
    const cards = data.map((item) => {
        return <PopularExperieceCard key={item.id} item={item} />;
    });

    return (
        <section className="md:mt-16">
            <div className="flex items-center justify-between">
                <div>
                    <SectionTitle>Most popular Experiences</SectionTitle>
                    <SectionSubtitle>
                        Fill your day with some of the most exciting activities
                        in your location.
                    </SectionSubtitle>
                </div>
                {/* <div>
                    <Button tertiary>Learn More</Button>
                </div> */}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6">{cards}</div>
        </section>
    );
}
