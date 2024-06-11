"use client"
import { Fragment, useState } from 'react'
import {  Dialog, Disclosure, Menu ,Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Menubar = ({navigation}) => {

  
  return (
    <>
     <Disclosure as="nav" className="hidden sticky top-0 bg-gray-100  sm:block text-center z-[9999]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-10 items-center justify-center">
        
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block text-center">
                  {/* <div className="flex justify-center space-x-3">
                    {navigation.map((products , index) => (
                      <Popover.Group className="hidden lg:flex lg:gap-x-12" key={index}>
                        {products.submenu &&  products.submenu ? (
                          <Popover className="relative">
                          <Popover.Button className="text-gray-900  hover:text-gray-700 rounded-md px-1 py-2 font-medium hover:bottom-0">
                          {products.name}
                            
                          </Popover.Button>
              
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute -left-8 top-full z-10  w-screen max-w-md overflow-hidden rounded-3xl bg-gray-100 shadow-lg ring-1 ring-gray-900/5">
                              <div className="p-4">
                                {products.submenu.map((item , index) => (
                                  <div
                                    key={index}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                  >
                                    <div className="flex-auto">
                                      <a href={item.href} className="block font-semibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                      </a>
                                      <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                            </Popover.Panel>
                          </Transition>
                            
                        </Popover>
                        ) : (
                        <Link
                          href={products.href}
                          className='text-gray-900  hover:text-gray-700 rounded-md px-1 py-2 font-medium'
                          aria-current={products.current ? 'page' : undefined}
                          style={{fontSize:14}}
                        >
                          {products.name}
                        </Link>
                        )}

                      
                      </Popover.Group>
                      
                    ))}
                  </div> */}

              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className='text-gray-900 border-none  hover:text-gray-700  px-1 py-2 font-medium hover:bottom-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/0'
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white z-[9999]">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-50" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900 text-left">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {/* {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </Popover.Group>
                </div>
              </div>
              
            </div>
          </div>

        </>
      )}
    </Disclosure>
    </>
  )
}

export default Menubar