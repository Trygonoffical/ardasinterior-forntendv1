"use client"
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

const UserArea = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOtpOpen, setIsOtpOpen] = useState(false)
    const [number, setNumber] = useState('')
    const [numberErrorMsg, setNumberErrorMsg] = useState('')
    const [isOtp, setIsOtp] = useState('')

    function closeModal() {
        setIsOpen(false)
      }
    
    function openModal() {
        setIsOpen(true)
      }
    const handlestatenumber = (e) =>{
        setNumber(e.target.value)
    }
    const handlestateotp = (e) =>{
        setIsOtp(e.target.value)
    }
    useEffect( ()=>{
        setNumberErrorMsg('')

    },[number])
    const fetchno = ()=>{
        if(number){
            console.log("number - " , number);
            setIsOpen(false);
            setIsOtpOpen(true);
        }else{
            setNumberErrorMsg('Please Enter 10 digit Valid Mobile Number')
        }
        
    }
    const verifyOtp = ()=>{
        console.log("number - " , number);
        console.log("Otp - " , isOtp);
        // setIsOpen(false);
        // setIsOtpOpen(true);
    }
  return (
    <>
        <button onClick={openModal} className="p-2 text-gray-300 hover:text-gray-400">
            <span className="sr-only">User Icon</span>
            <UserCircleIcon className="h-7 w-7" aria-hidden="true" />
        </button>

        {/* Number Panel  */}
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={()=> setIsOpen(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">

                    <Dialog.Title
                        as="h2"
                        className="text-lg font-medium leading-6 text-center text-gray-900"
                    >
                       Sign Up Or Log In
                    </Dialog.Title>
                    <div className="mt-2">
                        {/* <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                        </p> */}
                        <input type="number" placeholder='Enter Mobile Number' className='w-full p-2 border rounded-lg my-3' onChange={handlestatenumber} />
                        <span className='text-red-400 text-sm py-2'>{numberErrorMsg}</span>
                    </div>

                    <div className="mt-4 text-center flex justify-center gap-2">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={fetchno}
                        >
                        Send OTP
                        </button>
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        onClick={()=> setIsOpen(false)}
                        >
                       Cancel
                        </button>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>

        {/* Otp Verification Panel  */}
        <Transition appear show={isOtpOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={()=> setIsOtpOpen(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h2"
                        className="text-lg font-medium leading-6 text-center text-gray-900"
                    >
                       OTP Verification
                    </Dialog.Title>
                    <div className="mt-2">
                        {/* <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                        </p> */}
                        <input type="number" placeholder='Enter OTP here' className='w-full p-2 border rounded-lg my-3' onChange={handlestateotp} />
                    </div>

                    <div className="mt-4 flex justify-center gap-2">
                        <button
                        type="button"
                        className="inline-flex  justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={verifyOtp}
                        >
                        Verify OTP
                        </button>

                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        onClick={()=> setIsOtpOpen(false)}
                        >
                       Cancel
                        </button>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default UserArea