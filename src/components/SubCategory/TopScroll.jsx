'use client'
import Link from "next/link";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
      const products = [
        
        {
            id: 1,
            name: 'Modern 3 Seater Sofas',
            href: '#',
            imageSrc: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Modern_3_Seater_Sofas.jpg',
            imageAlt: "Modern 3 Seater Sofas",
        },
        {
            id: 2,
            name: 'Mid-Century Modern 3 Seater Sofas',
            href: '#',
            imageSrc: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Mid_Century_Modern_3_Seater_Sofas.jpg',
            imageAlt: "Mid-Century Modern 3 Seater Sofas",
        },
        {
            id: 3,
            name: 'Modern 3 Seater Sofas',
            href: '#',
            imageSrc: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Contemporary_3_Seater_Sofas.jpg',
            imageAlt: "Modern 3 Seater Sofas",
        },
          
          
          
          
        // More products...
      ]
const TopScroll = () => {


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
        <div className="my-6 mx-auto">
          <div className="text-center">
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
            containerClass="carousel-container justify-center"
            removeArrowOnDeviceType={[ "desktop","tablet", "mobile"]}
            // deviceType={this.props.deviceType} lg:h-80 flex justify-between
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {products.map((product) => (
                  <div key={product.id} className="mx-2">
                    <Link href='#'>
                    
                    <div className="aspect-h-1 aspect-w-1 w-24 mx-auto overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 ">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </h3>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
          </Carousel>
          </div>
        </div>
    </>
  )
}

export default TopScroll