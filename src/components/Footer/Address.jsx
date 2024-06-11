import {  EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'


const Address = () => {
  return (
    <>
    <div className="max-w-xl lg:max-w-lg">
            <div className='relative ' style={{width: '80px' , height: '80px'}}>
                <Image src="/icons/logo.png" alt="ardasinterior" fill />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Address</h2>
            <p className="mt-4 text-sm leading-8 text-gray-300 flex ">
            <MapPinIcon className='w-8 h-8 mr-2'/>  2nd Floor, Police Station, B-115 , Block B, Mansarover Garden, Kirti Nagar, New Delhi, oppsit, Delhi 110015
              dolore.
            </p>
            <p className="mt-4 text-sm leading-8 text-gray-300 flex ">
            <EnvelopeIcon className='w-6 h-6 mr-2'/>  info@ardasinterior.com
            </p>
            <p className="mt-4 text-sm leading-8 text-gray-300 flex ">
            <PhoneIcon className='w-6 h-5 mr-2'/>  +91-8888888888
            </p>
            <div className='flex gap-3 py-4'>
                <Link href='#'> <img src="/icons/fb.svg" alt="facebook" width={30} /> </Link>
                <Link href='#'> <img src="/icons/insta.svg" alt="facebook" width={30} /> </Link>
                <Link href='#'> <img src="/icons/twitterx.svg" alt="facebook" width={30} /> </Link>
                <Link href='#'> <img src="/icons/youtube.svg" alt="facebook" width={30} /> </Link>
            </div>
            
        </div>
    </>
  )
}

export default Address