import { Fragment } from 'react';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';

import Button from '../Button/Button';
import { classNames } from '../../utils/classnames';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];

export default function Nav({ loggedIn }) {
    return (
        <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <Button tertiary>Host an Experience</Button>
            {loggedIn === true ? (
                <>
                    {/* Notifications button */}
                    <button
                        type="button"
                        className="flex-shrink-0 p-1 ml-6 text-gray-400 bg-white rounded-lg hover:text-gray-500 focus:outline-none focus:ring-0"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative flex-shrink-0">
                        <div>
                            <Menu.Button className="flex bg-white rounded-lg focus:outline-none focus:ring-0">
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    src={user.imageUrl}
                                    alt={user.name}
                                    width={40}
                                    height={40}
                                    className="rounded-lg"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block py-2 px-4 text-sm text-gray-700'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </>
            ) : (
                <Button primary className="ml-4">
                    Sign In
                </Button>
            )}
        </div>
    );
}
