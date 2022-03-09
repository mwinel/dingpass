import Image from 'next/image';

import { Star } from '../../icons';
import { shuffleArray } from '../../utils/shuffle-array';

export default function PopularExperieceCard({ item }) {
    let badgeText;
    if (item.availableSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (item.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="relative transition duration-300 rounded-lg shrink-0 snap-start w-[18.35rem]">
            {badgeText && (
                <div className="absolute z-10 px-2 bg-white rounded py-0.5 top-2 left-2">
                    <p className="mt-0.5 text-[13px] font-semibold">{badgeText}</p>
                </div>
            )}
            <div className="relative rounded-lg w-[18.35rem] h-[18.35rem]">
                <Image
                    src={shuffleArray(item.images)[0].url}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 object-cover w-full h-full rounded-lg"
                />
                <div className="absolute inset-0 object-cover w-full h-full transition duration-150 ease-in rounded-lg bg-black/20 hover:bg-transparent" />
            </div>
            <div className="flex items-center mt-2 space-x-1">
                <Star className="w-5 h-5 -ml-0.5 -mt-0.5 text-orange-500" />
                <p className="text-sm text-gray-600">4.9 (13)</p>
                <span className="mx-1">•</span>{' '}
                <p className="text-sm text-gray-600">{item.location}</p>
            </div>
            <p className="font-bold truncate">{item.title}</p>
            <p>
                <span className="font-bold">
                    UGX {item.pricing.price.toLocaleString()}
                </span>{' '}
                <span className="text-sm text-gray-600">
                    {item.pricing.option}
                </span>
            </p>
        </div>
    );
}
