"use client"
import { Tab } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { WalletIcon } from '@heroicons/react/24/outline'

const Account = () => {
    
  return (
    <>
        <section className='mx-auto max-w-7xl lg:px-8 py-8'>
            <h2 className='text-2xl font-semibold py-4 text-center'>My Account</h2>
            <div className="grid grid-cols-4 gap-2">
                <Tab.Group vertical>
                    {/* <div className="leftsec bg-gray-200 p-4 rounded-sm"> */}
                        <Tab.List className='flex flex-col bg-slate-100 p-2'>
                            <Tab className='py-4 flex justify-between px-2 border-b-2 border-gray-200  ui-selected:bg-gray-800 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black'>
                                <span className='flex justify-start items-center'>

                                <WalletIcon className='w-4 h-4 mr-1' />
                                Orders 
                                </span>
                                <ArrowRightIcon className='w-4 h-4 mr-1' />
                            </Tab>
                            <Tab className='py-4 flex justify-between px-2 border-b-2 border-gray-200  ui-selected:bg-gray-800 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black'> 
                                <span className='flex justify-start items-center'>
                                    <WalletIcon className='w-4 h-4 mr-1' />
                                    Track Orders
                                </span>
                                <ArrowRightIcon className='w-4 h-4 mr-1' />
                            </Tab>
                            <Tab className='py-4 flex justify-between px-2 border-b-2 border-gray-200  ui-selected:bg-gray-800 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black'>
                                <span className='flex justify-start items-center'>
                                    <WalletIcon className='w-4 h-4 mr-1' />
                                    Address
                                </span>
                                <ArrowRightIcon className='w-4 h-4 mr-1' />
                            </Tab>
                        </Tab.List>
                    {/* </div>
                    <div className="col-span-3 bg-gray-200  p-4"> */}
                        <Tab.Panels className='p-4 bg-slate-100 col-span-3 '>
                            <Tab.Panel>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem tenetur quidem eius unde dolor adipisci inventore, nisi, autem, eveniet recusandae tempore. Praesentium ab blanditiis nulla iusto ipsum, deleniti maiores architecto.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem tenetur quidem eius unde dolor adipisci inventore, nisi, autem, eveniet recusandae tempore. Praesentium ab blanditiis nulla iusto ipsum, deleniti maiores architecto.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem tenetur quidem eius unde dolor adipisci inventore, nisi, autem, eveniet recusandae tempore. Praesentium ab blanditiis nulla iusto ipsum, deleniti maiores architecto.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem tenetur quidem eius unde dolor adipisci inventore, nisi, autem, eveniet recusandae tempore. Praesentium ab blanditiis nulla iusto ipsum, deleniti maiores architecto.
                            </Tab.Panel>
                            <Tab.Panel>Content 2</Tab.Panel>
                            <Tab.Panel>Content 3</Tab.Panel>
                        </Tab.Panels>
                    {/* </div> */}
                
                </Tab.Group> 
            </div>
        </section>
    </>
  )
}

export default Account