import Image from 'next/image';

export default function MediumCard({ img, title }) {
    return (
        <div className="mb-5">
            <div className="relative w-80 h-80">
                <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <h4 className="mt-2">{title}</h4>
        </div>
    );
}
