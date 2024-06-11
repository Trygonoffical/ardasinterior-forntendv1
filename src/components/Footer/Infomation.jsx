import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Information = () => {

    const policieslinks = [
        { 
          id: 1 , 
          name: 'About Us' , 
          link : '/about',
        } , 
        {id: 2 , name: 'Shop Now', link : '/shop',} ,
        {id: 3 , name:  'Contact Us' , link : '/contact',}, 
       
      ];
  return (
        <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Informations</dt>
              {/* <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd> */}
              <ul>
                {policieslinks.map((item  ) => (
                    <li key={item.id}>
                        <Link href={item.link} className='text-gray-300 text-sm'>{item.name}</Link>
                    </li>
                ))}
                
              </ul>
        </div>
  )
}

export default Information