import Image from 'next/image';

import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import { CheckCircle } from '../../icons';

const guarantees = [
    { id: 1, title: 'Verified experience hosts' },
    { id: 2, title: 'Last minute cancellations' },
    { id: 3, title: 'Money back guarantees' },
    { id: 4, title: 'Insurance cover' },
];

export default function Guarantees() {
    const guaranteesComp = guarantees.map((guarantee) => {
        return (
            <div className="flex items-center space-x-4" key={guarantee.id}>
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-gray-700">{guarantee.title}</p>
            </div>
        );
    });

    return (
        <section className="py-10">
            <div className="grid grid-cols-2 gap-12 mt-6">
                <div className="relative w-full bg-gray-100 rounded-lg h-96">
                    <div className="absolute z-10 top-10 left-10">
                        <h3 className="w-8/12 text-white">
                            Got an idea! Ready to get started?
                        </h3>
                        <Button secondary className="mt-4">
                            Host an Experience
                        </Button>
                    </div>
                    <Image
                        src="https://images.pexels.com/photos/5935232/pexels-photo-5935232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="plotaar guarantees"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 rounded-lg"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="mb-6">
                        <SectionTitle>The Plotaar Guarantee</SectionTitle>
                    </div>
                    {guaranteesComp}
                </div>
            </div>
        </section>
    );
}
