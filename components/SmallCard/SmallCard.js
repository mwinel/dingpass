import Image from 'next/image';

export default function SmallCard({ img, location, distance }) {
    return (
        <div className="flex items-center space-x-4 mt-5 cursor-pointer hover:bg-gray-100 hover:rounded-lg transition transform duration-200 ease-out">
            <div className="relative w-16 h-16">
                <Image
                    src={img}
                    alt={location}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div>
                <h4>{location}</h4>
                <p className='text-sm text-gray-600'>{distance}</p>
            </div>
        </div>
    );
}
