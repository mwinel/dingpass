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
                <div className="relative flex flex-col justify-center h-full mx-auto max-w-7xl px-4">
                <div className="absolute left-0 right-0 w-full px-4 bottom-14 lg:bottom-32">
                    <h1 className="w-full md:w-6/12 text-white pr-2">
                        Discover unforgettable experiences hosted by locals
                    </h1>
                    <div className="flex">
                        <Button
                            primary
                            className="w-40 py-3 mt-5 mr-4 drop-shadow-xl"
                        >
                            Discover Now
                        </Button>
                        <Button
                            secondary
                            className="w-48 py-3 mt-5 drop-shadow-xl"
                        >
                            Host an Experience
                        </Button>
                    </div>
                    </div>
                    <div className="absolute left-0 right-0 flex lg:justify-end w-full px-4 bottom-4">
                        <small className="text-white underline cursor-pointer font-extralight">
                            {video.caption}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
