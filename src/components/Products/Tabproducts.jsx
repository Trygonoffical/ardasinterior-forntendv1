"use client"
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const products = [
  {
    id: 1,
    name: 'Werner Study Chair In Black Colour',
    href: '#',
    imageSrc: 'https://www.ulcdn.net/images/products/809661/product/Werner_Study_Chair_Nylon_Base_LP.png?1683924519',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '7865',
    MRP: '13799',
  },
  {
      id: 2,
      name: 'Stella Engineered Wood Study Table In Finish',
      href: '#',
      imageSrc: 'https://www.ulcdn.net/images/products/569686/product/FVTBST33BK21213_LP.jpg?1654353612',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '7865',
      MRP: '13799',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://www.ulcdn.net/images/products/809345/product/Mika_Chair_White_LP.png?1683923731',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '7865',
      MRP: '13799',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://www.ulcdn.net/images/products/809115/product/Hawley_Study_Chair_TK_LP.png?1683922969',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '7865',
      MRP: '13799',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://www.ulcdn.net/images/products/809666/product/Twain_Study_Table_LP.png?1683924528',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '7865',
      MRP: '13799',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://www.ulcdn.net/images/products/809666/product/Twain_Study_Table_LP.png?1683924528',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '7865',
      MRP: '13799',
    },
  // More products...
]
export default function Tabproducts() {
  let [categories] = useState({
    Sofa: [
      {
        id: 1,
        name: 'Farina Half Leather Sectional Sofa (Camel Italian Leather)',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/313542/product/FNSF52FACA3L_-_category.png?1611552736',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1,34005',
        MRP: '2,35098',
      },
      {
        id: 2,
        name: 'Apollo Sofa',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/94259/original/Apollo_Infinite_FNSF51APDU30000SAAAA_slide_00.jpg?1467963845',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '36,821 ',
        MRP: '72,199',
      },
      {
        id: 3,
        name: 'Raymond Wooden Sofa - American Walnut Finish (Midnight Indigo Blue)',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/339735/sofa_listing/FNSF51RAMB3_-_main_1.png?1623133172',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '44,764 ',
        MRP: '88,794',
      },
      {
        id: 4,
        name: 'Apollo Sofa',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/94259/original/Apollo_Infinite_FNSF51APDU30000SAAAA_slide_00.jpg?1467963845',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '36,821',
        MRP: '72,199',
      },
    ],
    Popular: [
      {
        id: 1,
        name: 'Werner Study Chair In Black Colour',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/809661/product/Werner_Study_Chair_Nylon_Base_LP.png?1683924519',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '7865',
        MRP: '13799',
      },
      {
        id: 2,
        name: 'Stella Engineered Wood Study Table In Finish',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/569686/product/FVTBST33BK21213_LP.jpg?1654353612',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '7865',
        MRP: '13799',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/809345/product/Mika_Chair_White_LP.png?1683923731',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '7865',
        MRP: '13799',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/809115/product/Hawley_Study_Chair_TK_LP.png?1683922969',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '7865',
        MRP: '13799',
      },
    ],
    'Office Table': [
      {
        id: 1,
        name: 'Twain Engineered Wood Study Table In Cherry Melamine Finish',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/223894/slide/666x363/Twain_Study_Table_1.jpg?1544673340',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '8,426',
        MRP: '15,899',
      },
      {
        id: 2,
        name: 'Eddings Engineered Wood Study Table In Natural Oak Finish',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/223894/slide/666x363/Twain_Study_Table_1.jpg?1544673340',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '7865',
        MRP: '13799',
      },
      {
        id: 3,
        name: 'Wallace Engineered Wood Study Table In Wenge Finish',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/223894/slide/666x363/Twain_Study_Table_1.jpg?1544673340',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '7865',
        MRP: '13799',
      },
      {
        id: 4,
        name: 'Wallace Engineered Wood Study Table In Wenge Finish',
        href: '#',
        imageSrc: 'https://www.ulcdn.net/images/products/223894/slide/666x363/Twain_Study_Table_1.jpg?1544673340',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '7865',
        MRP: '13799',
      },
    ],
  });
  
  


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
      autoPlay:false,
      showDots:false
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 ,// optional, default to 1.
      autoPlay:true
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      autoPlay:true
    }
  };

  return (
    <>
    <div className='mt-6' >
        <div className="py-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-700 text-center my-3">Shop What the Your Heart Desire</h2>
            <hr className="w-20 mx-auto border-orange-400" />
        </div>
        <div className="w-full  px-2 pb-6 sm:px-0 text-center">
        <Tab.Group>
            <div className=' mx-auto max-w-md py-4'>
            <Tab.List className="flex max-w-md mx-atuo space-x-1 rounded-xl bg-blue-500/20 p-1">
            {Object.keys(categories).map((category) => (
                <Tab
                key={category}
                className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                        ? 'bg-white text-blue-700 shadow'
                        : 'text-gray-700 hover:bg-blue/[0.12] hover:bg-white'
                    )
                }
                >
                {category}
                </Tab>
            ))}
            </Tab.List>
            </div>
            
            <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                key={idx}
                className={classNames(
                    'rounded-xl bg-white p-3',
                    ' ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
                >
                {/* <ul>
                    {posts.map((post) => (
                    <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                        <h3 className="text-sm font-medium leading-5">
                        {post.title}
                        </h3>

                        <ul className="mt-1 flex justify-center space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                        </ul>

                        <a
                        href="#"
                        className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                        />
                    </li>
                    ))}
                </ul> */}
                
                <div  >
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType} lg:h-80 flex justify-between
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                    {posts.map((post) => (
                          <div key={post.id} className="mx-2">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-700 lg:aspect-none group-hover:opacity-75 ">
                              <img
                                src={post.imageSrc}
                                alt={post.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </div>
                            <div className="mt-4 text-center">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <a href={post.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {post.name}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-700"><span className="line-through text-xs">₹{post.MRP}</span> ₹{post.price}</p>
                              </div>
                              {/* <p className="text-sm font-medium text-gray-700">{product.price}</p> */}
                            </div>
                          </div>
                        ))}
                  </Carousel>
                </div>
                </Tab.Panel>
            ))}
            </Tab.Panels>
        </Tab.Group>
        </div>
    </div>
    
    </>
  )
}
