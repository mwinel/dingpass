import Image from 'next/image';

import Button from '../Button/Button';

export default function ExploreMoreCard({ item }) {
    return (
        <div className="relative w-full rounded-lg h-96">
            <div className="absolute z-10 top-10 left-10">
                <h3 className="w-8/12 text-white">{item.title}</h3>
                {item.btnType === 'secondary' ? (
                    <Button secondary className="mt-4">
                        {item.btnText}
                    </Button>
                ) : (
                    <Button primary className="mt-4">
                        {item.btnText}
                    </Button>
                )}
            </div>
            <div className="relative w-full rounded-lg h-96">
                <Image
                    src={item.bgImgUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="absolute inset-0 object-cover w-full h-full rounded-lg bg-gradient-to-br from-black/20 to-transparent" />
        </div>
    );
}
