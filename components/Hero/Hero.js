import Button from '../Button/Button';

export default function Hero({ video }) {
    return (
        <div className="relative">
            <div className="w-full h-[400px] object-norepeat object-cover object-center relative lg:h-[540px]">
                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover object-center w-full h-full"
                >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute h-[400px] w-full bottom-0 top-0 bg-gradient-to-r from-black/75 to-white/0 lg:h-[540px]">
                <div className="relative flex flex-col justify-center h-full px-4 mx-auto max-w-7xl">
                <div className="absolute left-0 right-0 w-full px-4 bottom-14 md:bottom-20 lg:bottom-32">
                    <h1 className="w-full pr-2 mb-4 text-white md:w-6/12">
                        Discover your next adventure
                    </h1>
                    <div className="flex flex-col gap-3 md:flex-row">
                        <Button
                            primary
                            className="w-full py-3 md:w-40 drop-shadow-xl"
                        >
                            Discover Now
                        </Button>
                        <Button
                            secondary
                            className="w-full py-3 md:w-48 drop-shadow-xl"
                        >
                            Host an Experience
                        </Button>
                    </div>
                    </div>
                    <div className="absolute left-0 right-0 flex w-full px-4 sm:justify-end bottom-4">
                        <small className="text-white underline cursor-pointer font-extralight">
                            {video.caption}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
