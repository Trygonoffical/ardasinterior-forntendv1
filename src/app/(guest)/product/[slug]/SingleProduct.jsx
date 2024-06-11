"use client"
import { useState } from 'react'
import {StarIcon, MinusIcon, PlusIcon, } from '@heroicons/react/20/solid'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ProductCarousel from '@/components/Products/Carousel/ProductCarousel';
import ProductCarousel from '@/components/Products/Carousel/ProductCarousel';
import { Disclosure , RadioGroup} from '@headlessui/react'
import SectionFirst from '@/components/Products/SectionFrist';
import Notice from '@/components/DarkNotice/Notice';
import Image from 'next/image';
const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' ,  src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',},
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400',  src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.', },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' , src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',},
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }
  const reviews = { href: '#', average: 4, totalCount: 117 }
  const filters = [
    {
      id: 'Product Details',
      name: 'Product Details',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'Specifications',
      name: 'Specifications',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'Care & Maintenance',
      name: 'Care & Maintenance',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
    {
      id: 'Warranty',
      name: 'Warranty',
      details : '<p>Warranty Terms: <br>1 year warranty on the Fabric, 2 years warranty on the foam, 3 years warranty on the framing structure.</p>'
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const SingleProduct = ({slugValue}) => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  return (
    <>
       
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl justify-center items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {slugify(product.name)}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
       
          <div className="relative isolate overflow-hidden px-6 py-8 sm:py-8 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8  lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start ">
              <div className=" md:p-12 lg:sticky lg:top-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden text-gray-600">
                  <ProductCarousel />
              </div>
              <div className="lg:col-span-1 lg:pt-10 lg:col-start-2  lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-indigo-600">Category</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 ">
                   { slugify(slugValue)}
                    </h1>
                    <hr className='my-5' />

                    {/* <div className='flex justify-between px-5'> */}
                     <p className='text-sm text-gray-600 mb-4'>
                      MRP 
                      <span className="line-through text-xs pl-7">
                        ₹52,999
                      </span>
                    </p>  
                    <p className='text-sm text-gray-600'>
                      Offer price 
                      <span className="text-gray-900 text-lg font-semibold pl-7" >
                        ₹25,999
                      </span>
                    </p>  
                    <hr className='my-5' />
                    {/* </div> */}
                    {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                      Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                      eget aliquam. Quisque id at vitae feugiat egestas.
                    </p> */}

                    <div >

                      <div className='grid grid-cols-3 gap-1 mb-3 '>
                        <h2>Today's Deal</h2>
                        <div className='col-span-2'>
                        ₹31,464 (55 % off)
                          [
                          ₹31,464
                          Retail Discount
                          ]
                          Earn 5,068 Extra Pepperfry Credits (Worth 
                          ₹5,068
                          )
                        </div>
                      </div>
                      <img src="https://ii1.pepperfry.com/assets/1077b1f3-3e8e-4474-8a95-0c808853659c.jpg" alt="ads"  />
                      <div className='grid grid-cols-3 gap-1 mt-3 '>
                        <h2>Your Savings</h2>
                        <div className='col-span-2'>
                        ₹31,464 (55 % off)
                          [
                          ₹31,464
                          Retail Discount
                          ]
                          Earn 5,068 Extra Pepperfry Credits (Worth 
                          ₹5,068
                          )
                        </div>
                      </div>
                    </div>
                    <hr className='my-5' />
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1 lg:col-start-2  lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <section aria-labelledby="information-heading" >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>
                          {/* Reviews */}
                          <div >
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className={classNames(
                                      product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                      'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">{product.rating} out of 5 stars</p>
                              <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                {product.reviewCount} reviews
                              </a>
                            </div>
                          </div>
                    </section>

                    <section aria-labelledby="options-heading" className="my-5">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        {/* Colors */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Color</h4>

                          <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                            <span className="flex items-center space-x-3">
                              {product.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      active && checked ? 'ring ring-offset-1' : '',
                                      !active && checked ? 'ring-2' : '',
                                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-md p-0.5 focus:outline-none'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="span" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  {/* <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-12 w-12 rounded-md border border-black border-opacity-10'
                                    )}
                                  /> */}
                                  <span aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-12 w-12 rounded-md relative border border-black border-opacity-10'
                                    )}>
                                  <Image src={color.src} alt={color.alt} fill sizes='100%' className='object-cover' />
                                  </span>
                                </RadioGroup.Option>
                              ))}
                            </span>
                          </RadioGroup>
                        </div>

                        {/* Sizes */}
                        <div className="mt-5">
                          {/* <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">Size</h4>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              Size guide
                            </a>
                          </div>

                          <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4">
                              {product.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      active ? 'ring-2 ring-indigo-500' : '',
                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                      {size.inStock ? (
                                        <span
                                          className={classNames(
                                            active ? 'border' : 'border-2',
                                            checked ? 'border-indigo-500' : 'border-transparent',
                                            'pointer-events-none absolute -inset-px rounded-md'
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <span
                                          aria-hidden="true"
                                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                        >
                                          <svg
                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup> */}

                          <div className='mt-6 flex items-center'>
                            <p>Qnt</p>
                          <label htmlFor="Quantity" className="sr-only">
                            Quantity
                          </label>
                          <select
                            id="Quantity"
                            name="Quantity"
                            className="h-full rounded-md py-2 bg-transparent border border-gray-600 ml-2 pl-2 pr-7 text-gray-500  focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          </div>
                        </div>
                        <div className='flex justify-around gap-2'>
                        <button
                          type="submit"
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-indigo-700 bg-white px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add to Cart
                        </button>
                        <button
                          type="submit"
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Buy Now
                        </button>
                        </div>
                        
                      </form>
                    </section>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="text-lg font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {section.options && section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                                {section.details && (
                                  <div className='text-sm' dangerouslySetInnerHTML={{ __html: section.details }}>

                                  </div>
                                )}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Notice title="Need Expert Advice?" talk='true' secondcontent="Share your Feedback with Us ->" />
          <div className='px-12 mb-6' >
            <SectionFirst title='See What Other Customers Viewed'   />
          </div>
          <Notice title="Didn't Find What You Were Looking For? " talk='false' secondcontent="Share your Feedback with Us ->"  />
          <div className='px-12 mb-6' >
            <SectionFirst title='Check Out Similer Products'   />
          </div>
      </div>
    
    </>
  )
}

export default SingleProduct


const slugify = (text) => {
  return text.replace( /-/g,' ');
};