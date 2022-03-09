import { Disclosure } from '@headlessui/react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';

export default function MobileMenuButton({ open }) {
    return (
        <div className="relative z-10 flex items-center lg:hidden mr-2">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-100 rounded-md focus:outline-none focus:ring-0">
                <span className="sr-only">Open menu</span>
                {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                ) : (
                    <MenuAlt1Icon
                        className="block w-6 h-6"
                        aria-hidden="true"
                    />
                )}
            </Disclosure.Button>
        </div>
    );
}
