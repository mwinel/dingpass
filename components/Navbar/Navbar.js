import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { BellIcon } from '@heroicons/react/outline';

import Brand from './Brand';
import Search from './Search';
import MobileMenuButton from './MobileMenuButton';
import Nav from './Nav';
import Button from '../Button/Button';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
    { name: 'Host an Experience', href: '#' },
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];

export default function Example() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Disclosure as="header" className="bg-white border-b border-gray-50">
            {({ open }) => (
                <>
                    <div className="px-2 mx-auto max-w-7xl sm:px-4">
                        <div className="relative flex justify-between h-20">
                            <Brand />
                            <Search />
                            <MobileMenuButton open={open} />
                            <Nav loggedIn={loggedIn} />
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <Disclosure.Panel
                        as="nav"
                        className="lg:hidden"
                        aria-label="Global"
                    >
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            {!loggedIn ? (
                                <div className="flex flex-col items-center px-4 space-y-3">
                                    <Button tertiary className="w-full">
                                        Host an Experience
                                    </Button>
                                    <Button primary className="w-full">
                                        Sign In
                                    </Button>
                                </div>
                            ) : (
                                <div className="flex items-center px-4">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={user.imageUrl}
                                            alt={user.name}
                                            width={50}
                                            height={50}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-gray-800">
                                            {user.name}
                                        </div>
                                        <div className="text-sm font-medium text-gray-500">
                                            {user.email}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <BellIcon
                                            className="w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            )}
                            {loggedIn && (
                                <div className="px-2 mt-3 space-y-1">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block px-3 py-2 font-medium rounded-md hover:bg-gray-50 hover:text-gray-700"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
