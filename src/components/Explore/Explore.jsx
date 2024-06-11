'use client'
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
      const products = [
        {
          id: 1,
          name: 'Deal Zone',
          href: '#',
          imageSrc: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 16L16 8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM17 15C17 16.1046 16.1046 17 15 17C13.8954 17 13 16.1046 13 15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15ZM11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
          imageAlt: "Front of men's Basic Tee in black.",
        },
        {
            id: 2,
            name: 'Sofa',
            href: '#',
            imageSrc: '<svg fill="#000000" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.9375 12C8.488281 12 4.03125 16.425781 4.03125 21.875L4.03125 24.15625C1.742188 24.734375 0.03125 26.824219 0.03125 29.28125C0.03125 31.496094 1.460938 33.320313 3.40625 34.09375L5.84375 40.4375L5.875 40.53125L5.90625 40.53125C6.148438 41.28125 6.566406 41.875 7.0625 42.34375L5.3125 45.875C4.613281 47.269531 5.167969 48.988281 6.5625 49.6875C6.964844 49.890625 7.414063 50 7.84375 50C8.886719 50 9.910156 49.425781 10.40625 48.4375L12.59375 44L37.40625 44L39.59375 48.4375C40.089844 49.425781 41.113281 50 42.15625 50C42.585938 50 43.035156 49.890625 43.4375 49.6875C44.832031 48.988281 45.386719 47.269531 44.6875 45.875L42.9375 42.34375C43.433594 41.875 43.851563 41.28125 44.09375 40.53125L44.125 40.53125L44.15625 40.4375L46.59375 34.09375C48.539063 33.320313 49.96875 31.496094 49.96875 29.28125C49.96875 26.824219 48.257813 24.734375 45.96875 24.15625L45.96875 21.875C45.96875 16.425781 41.511719 12 36.0625 12 Z M 13.9375 14L36.0625 14C40.429688 14 43.96875 17.507813 43.96875 21.875L43.96875 24.0625C42.0625 24.332031 40.492188 25.628906 39.8125 27.375L39.78125 27.375L38.15625 31.09375C38.023438 31.050781 37.945313 31.019531 37.78125 30.96875C37.027344 30.742188 35.960938 30.445313 34.6875 30.15625C32.136719 29.578125 28.722656 29 25.125 29C21.527344 29 18.046875 29.574219 15.4375 30.15625C14.132813 30.445313 13.027344 30.738281 12.25 30.96875C12.074219 31.019531 11.984375 31.050781 11.84375 31.09375L10.3125 27.65625L10.28125 27.65625C9.671875 25.769531 8.035156 24.347656 6.03125 24.0625L6.03125 21.875C6.03125 17.507813 9.570313 14 13.9375 14 Z M 5.3125 26C6.800781 26 8.039063 26.984375 8.4375 28.34375L8.4375 28.40625L8.46875 28.46875L10.40625 32.75L10.875 33.78125L11.71875 33.25L11.8125 33.1875C11.828125 33.175781 11.8125 33.207031 11.84375 33.1875C11.882813 33.171875 11.914063 33.175781 11.96875 33.15625C12.167969 33.089844 12.445313 32.984375 12.8125 32.875C13.550781 32.660156 14.617188 32.375 15.875 32.09375C18.386719 31.535156 21.742188 31 25.125 31C28.507813 31 31.800781 31.539063 34.25 32.09375C35.472656 32.371094 36.476563 32.660156 37.1875 32.875C37.542969 32.984375 37.839844 33.058594 38.03125 33.125C38.125 33.15625 38.175781 33.203125 38.21875 33.21875L38.25 33.21875L39.125 33.75L39.59375 32.71875L41.625 28.1875L41.625 28.15625L41.65625 28.125C42.121094 26.882813 43.277344 26 44.6875 26C46.503906 26 47.96875 27.464844 47.96875 29.28125C47.96875 30.789063 46.945313 32.023438 45.5625 32.40625L45.0625 32.53125L44.90625 33L42.25 39.8125L42.25 39.84375L42.21875 39.875C41.925781 40.894531 41.0625 41.421875 40.09375 41.71875C39.261719 41.976563 38.601563 42 38.40625 42C38.148438 41.886719 37.851563 41.886719 37.59375 42L12.375 42C12.132813 41.902344 11.867188 41.902344 11.625 42C11.460938 42 10.765625 41.984375 9.90625 41.71875C8.9375 41.421875 8.074219 40.894531 7.78125 39.875L7.75 39.84375L7.75 39.78125L5.09375 33L4.9375 32.53125L4.4375 32.40625C3.050781 32.023438 2.03125 30.789063 2.03125 29.28125C2.03125 27.464844 3.496094 26 5.3125 26 Z M 8.78125 43.40625C8.957031 43.476563 9.144531 43.574219 9.3125 43.625C9.714844 43.75 10.089844 43.820313 10.4375 43.875L8.59375 47.53125C8.441406 47.835938 8.15625 48 7.84375 48C7.71875 48 7.59375 47.96875 7.46875 47.90625C7.039063 47.691406 6.878906 47.210938 7.09375 46.78125 Z M 41.21875 43.40625L42.90625 46.78125C43.121094 47.210938 42.960938 47.691406 42.53125 47.90625C42.40625 47.96875 42.28125 48 42.15625 48C41.84375 48 41.558594 47.839844 41.40625 47.53125L39.5625 43.875C39.910156 43.820313 40.285156 43.75 40.6875 43.625C40.855469 43.574219 41.042969 43.476563 41.21875 43.40625Z"></path></g></svg>',
            imageAlt: "Front of men's Basic Tee in black.",
          },
          {
            id: 3,
            name: 'Beds',
            href: '#',
            imageSrc: '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon"><title>UL_CATEGORY_ICONS</title><path d="M28 24h-.5v-2a2 2 0 0 0-2-2h-20v-5a2 2 0 0 0-4 0v12.5a.47.47 0 0 0 .5.5h1.5v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h17v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28H28a.47.47 0 0 0 .5-.5v-3a.47.47 0 0 0-.5-.5zM5.5 21h20a1 1 0 0 1 1 1v2h-21v-3zm-3-6a1.08 1.08 0 0 1 1-1 1 1 0 0 1 1 1v9h-2v-9zm3 14h-1v-1h1v1zm20 0h-1v-1h1v1zm2-2h-25v-2h25v2z"></path></svg>',
            
          },
          {
            id: 4,
            name: 'Dinning',
            href: '#',
            imageSrc: '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon"><title>UL_CATEGORY_ICONS</title><path d="M30 10.5v19a.5.5 0 0 1-1 0V21h-3v-1h3v-9.5a.5.5 0 0 1 1 0zM4 20v1H1v8.5a.47.47 0 0 1-.5.5.47.47 0 0 1-.5-.5v-19a.47.47 0 0 1 .5-.5.47.47 0 0 1 .5.5V20h3z"></path><path d="M26.5 15h-23a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5H5v11.5a.47.47 0 0 0 .5.5.47.47 0 0 0 .5-.5V21h1v8.5a.5.5 0 0 0 1 0V20H6v-2h18v2h-2v9.5a.5.5 0 0 0 1 0V21h1v8.5a.5.5 0 0 0 1 0V18h1.5a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5zm-.5 2H4v-1h22v1z"></path></svg>',
            imageAlt: "Front of men's Basic Tee in black.",
            
          },
          {
            id: 5,
            name: 'Recliners',
            href: '#',
            imageSrc: '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon"><title>UL_CATEGORY_ICONS</title><path d="M24.73 23.1h-2.2v-1.6a1.5 1.5 0 0 0-1.6-1.5h-8.3l-4-5.9a3.8 3.8 0 0 0-5.2-1 .76.76 0 0 0-.2.4.37.37 0 0 0 .1.3l6.9 10.1V27a1.52 1.52 0 0 0 1.4 1.5v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h4.2v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h.1a1.51 1.51 0 0 0 1.5-1.3h3.7a.65.65 0 0 0 .6-.6v-1.5a1.91 1.91 0 0 0-2-2zM11 20.2a1.43 1.43 0 0 0-.7 1v1.11l-6-8.71a3.09 3.09 0 0 1 3.6 1l3.7 5.4a2 2 0 0 0-.6.2zm2.2 8.8h-.6v-.5h.64v.5zm6.7 0h-.59v-.5h.62v.5zm1.6-1.8a.55.55 0 0 1-.5.3h-9.2a.65.65 0 0 1-.6-.6v-4h10.3V27m.1-5H11.34v-.5a.51.51 0 0 1 .6-.5h9.2a.56.56 0 0 1 .6.5v.5h-.1zm4.3 4.2h-3.41V24h2.35a1.11 1.11 0 0 1 1.1 1.1v1.1z"></path></svg>',
            imageAlt: "Front of men's Basic Tee in black.",
            
          },
          {
            id: 6,
            name: 'Seating',
            href: '#',
            imageSrc: '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon"><title>UL_CATEGORY_ICONS</title><path d="M20.3 22.5a.52.52 0 0 0 .2-.4v-.3a2.75 2.75 0 0 0-1.2-2.2v-7.1a1.32 1.32 0 0 0-1.3-1.3h-6.2a1.26 1.26 0 0 0-1.3 1.3v7.1a2.51 2.51 0 0 0-1.2 2.2v.3a.52.52 0 0 0 .2.4l-.8 7.1a.35.35 0 0 0 .4.4h.8a.66.66 0 0 0 .5-.4l1.7-7.1h5.8l1.7 7.1a.54.54 0 0 0 .5.4h.8a.35.35 0 0 0 .4-.4zm-.12 6.7l-1.49-6.7h.9l.94 6.7h-.35zm-9-16.7a.47.47 0 0 1 .5-.5h6.2a.47.47 0 0 1 .5.5v6.8a1.31 1.31 0 0 0-.5-.1H11.7a.9.9 0 0 0-.5.1v-6.8zM9.75 29.2H9.5l.89-6.7h.9zm.15-7.5a1.77 1.77 0 0 1 1.8-1.7h6.2a1.84 1.84 0 0 1 1.8 1.7H9.9z"></path></svg>',
            imageAlt: "Front of men's Basic Tee in black.",
          },

          {
            id: 7,
            name: 'Dinning',
            href: '#',
            imageSrc: '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon"><title>UL_CATEGORY_ICONS</title><path d="M30 10.5v19a.5.5 0 0 1-1 0V21h-3v-1h3v-9.5a.5.5 0 0 1 1 0zM4 20v1H1v8.5a.47.47 0 0 1-.5.5.47.47 0 0 1-.5-.5v-19a.47.47 0 0 1 .5-.5.47.47 0 0 1 .5.5V20h3z"></path><path d="M26.5 15h-23a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5H5v11.5a.47.47 0 0 0 .5.5.47.47 0 0 0 .5-.5V21h1v8.5a.5.5 0 0 0 1 0V20H6v-2h18v2h-2v9.5a.5.5 0 0 0 1 0V21h1v8.5a.5.5 0 0 0 1 0V18h1.5a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5zm-.5 2H4v-1h22v1z"></path></svg>',
            imageAlt: "Front of men's Basic Tee in black.",
            
          },
          {
            id: 8,
            name: 'Recliners',
            href: '#',
            imageSrc: '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon"><title>UL_CATEGORY_ICONS</title><path d="M24.73 23.1h-2.2v-1.6a1.5 1.5 0 0 0-1.6-1.5h-8.3l-4-5.9a3.8 3.8 0 0 0-5.2-1 .76.76 0 0 0-.2.4.37.37 0 0 0 .1.3l6.9 10.1V27a1.52 1.52 0 0 0 1.4 1.5v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h4.2v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h.1a1.51 1.51 0 0 0 1.5-1.3h3.7a.65.65 0 0 0 .6-.6v-1.5a1.91 1.91 0 0 0-2-2zM11 20.2a1.43 1.43 0 0 0-.7 1v1.11l-6-8.71a3.09 3.09 0 0 1 3.6 1l3.7 5.4a2 2 0 0 0-.6.2zm2.2 8.8h-.6v-.5h.64v.5zm6.7 0h-.59v-.5h.62v.5zm1.6-1.8a.55.55 0 0 1-.5.3h-9.2a.65.65 0 0 1-.6-.6v-4h10.3V27m.1-5H11.34v-.5a.51.51 0 0 1 .6-.5h9.2a.56.56 0 0 1 .6.5v.5h-.1zm4.3 4.2h-3.41V24h2.35a1.11 1.11 0 0 1 1.1 1.1v1.1z"></path></svg>',
            imageAlt: "Front of men's Basic Tee in black.",
            
          },
          {
            id: 9,
            name: 'Seating',
            href: '#',
            imageSrc: '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon"><title>UL_CATEGORY_ICONS</title><path d="M20.3 22.5a.52.52 0 0 0 .2-.4v-.3a2.75 2.75 0 0 0-1.2-2.2v-7.1a1.32 1.32 0 0 0-1.3-1.3h-6.2a1.26 1.26 0 0 0-1.3 1.3v7.1a2.51 2.51 0 0 0-1.2 2.2v.3a.52.52 0 0 0 .2.4l-.8 7.1a.35.35 0 0 0 .4.4h.8a.66.66 0 0 0 .5-.4l1.7-7.1h5.8l1.7 7.1a.54.54 0 0 0 .5.4h.8a.35.35 0 0 0 .4-.4zm-.12 6.7l-1.49-6.7h.9l.94 6.7h-.35zm-9-16.7a.47.47 0 0 1 .5-.5h6.2a.47.47 0 0 1 .5.5v6.8a1.31 1.31 0 0 0-.5-.1H11.7a.9.9 0 0 0-.5.1v-6.8zM9.75 29.2H9.5l.89-6.7h.9zm.15-7.5a1.77 1.77 0 0 1 1.8-1.7h6.2a1.84 1.84 0 0 1 1.8 1.7H9.9z"></path></svg>',
            imageAlt: "Front of men's Basic Tee in black.",
          },
        // More products...
      ]
const Explore = () => {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
      autoPlay:false,
      showDots:false
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4 ,// optional, default to 1.
      autoPlay:true
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      autoPlay:true,
      showDots:false
    }
  };
  return (
    <>
        <div className="my-6 bg-orange-50">
          <div className="py-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700 text-center my-3">Explore Our Furniture Range</h2>
          <hr className="w-20 mx-auto border-orange-400" />
          </div>
          <div className="pb-24">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[ "desktop","tablet", "mobile"]}
            // deviceType={this.props.deviceType} lg:h-80 flex justify-between
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {products.map((product) => (
                  <div key={product.id} className="mx-2">
                    <div className="aspect-h-1 aspect-w-1 w-24 mx-auto overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 ">
                      {/* <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      /> */}
                      {/* {product.imageSrc} */}
                      <div  dangerouslySetInnerHTML={{ __html: product.imageSrc }} />
                    </div>
                    
                   
                    <div className="mt-4 text-center">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                      </div>
                      {/* <p className="text-sm font-medium text-gray-700">{product.price}</p> */}
                    </div>
                  </div>
                ))}
          </Carousel>
          </div>
        </div>
    </>
  )
}

export default Explore