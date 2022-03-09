import { SearchIcon } from '@heroicons/react/solid';

export default function Search() {
    return (
        <div className="relative z-0 flex items-center justify-center flex-1 px-2 sm:absolute sm:inset-0">
            <div className="w-full sm:max-w-md">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        id="search"
                        name="search"
                        placeholder="Search"
                        type="search"
                    />
                </div>
            </div>
        </div>
    );
}
