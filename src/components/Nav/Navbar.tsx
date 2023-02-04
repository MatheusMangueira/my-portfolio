import { FC, Fragment } from "react";

import { X, List } from 'phosphor-react';
import { Popover, Transition } from '@headlessui/react';
import { NavMobileItem } from './NavMobileItem';

import AnchorLink from "react-anchor-link-smooth-scroll";


const navigation = [
  // { name: 'Home', href: '#Home', offSet:'' },
  { name: 'About', href: '#About', offSet:'200' },
  { name: 'Works', href: '#Works', offSet:'150' },
  { name: 'Contact', href: '#Contact', offSet:'100' },

];

export const Navbar: FC = () => {
  return (
    <div>
      <Popover>
        <div className="py-5 flex lg:justify-center justify-end w-full items-center bg-secondary">

          <div className="mr-2 lg:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-primary focus:outline-none focus:ring-inset ">
              <span className="sr-only">
                Open menu
              </span>
              <List className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden lg:flex space-x-10 relative items-center"
          >
            {navigation.map((item) => (
              <AnchorLink
                className="text-white
                duration-500
                  uppercase hover:text-accent text-2xl"
                key={item.name}
                offset={item.offSet}
                href={item.href}
              >
                {item.name}
              </AnchorLink>
            ))}
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterTo="opacity-100 scale-100"
          enterFrom="opacity-0 scale-95"
          leave="duration-100 ease-in"
          leaveTo="opacity-0 scale-95"
          leaveFrom="opacity-100 scale-100"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-secondary divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-end">

                  <div className="mr-2">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-primary hover:bg-secondary focus:outline-none  ">
                      <span className="sr-only">
                        Close menu
                      </span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {navigation.map((item) => (
                      <NavMobileItem
                        key={item.name}
                        href={item.href}
                      >
                        {item.name}
                      </NavMobileItem>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
