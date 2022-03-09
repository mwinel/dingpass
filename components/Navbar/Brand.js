import Image from 'next/image';

export default function Brand() {
    return (
        <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex items-center flex-shrink-0">
                <Image
                    src="/images/logo.svg"
                    alt="dingpass"
                    width={45}
                    height={45}
                />
            </div>
        </div>
    );
}
