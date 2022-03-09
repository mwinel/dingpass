import SectionTitle from '../SectionTitle/SectionTitle';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ExploreMoreCard from './ExploreMoreCard';

const data = [
    {
        id: 1,
        title: 'Discover our online experiences',
        btnLink: '#',
        btnType: 'secondary',
        btnText: 'Explore More',
        bgImgUrl:
            'https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 2,
        title: 'Discover activities by interest',
        btnLink: '#',
        btnType: 'primary',
        btnText: 'See More',
        bgImgUrl:
            'https://images.pexels.com/photos/6271635/pexels-photo-6271635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
];

export default function ExploreMore() {
    const cards = data.map((item) => {
        return <ExploreMoreCard key={item.id} item={item} />;
    });

    return (
        <section>
            <SectionTitle>Explore our Experiences</SectionTitle>
            <SectionSubtitle>
                Select a type of experience to find something you are interested
                in
            </SectionSubtitle>
            <div className="grid grid-cols-2 gap-6 mt-6">{cards}</div>
        </section>
    );
}
