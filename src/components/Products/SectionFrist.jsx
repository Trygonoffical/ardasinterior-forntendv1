"use client"
import Link from "next/link";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
      const products = [
        {
          id: 1,
          name: 'Werner Study Chair In Black Colour',
          href: '/product/',
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

export default function SectionFirst({title}) {


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
          < >
        <div className="mt-6 ">
          <div className="py-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700 text-center my-3"> {title} </h2>
          <hr className="w-20 mx-auto border-orange-400" />
          </div>
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
            {products.map((product) => (
                  <div key={product.id} className="mx-2">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-700 lg:aspect-none group-hover:opacity-75 ">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={`/product/${slugify(product.name)}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-700"><span className="line-through text-xs">₹{product.MRP}</span> ₹{product.price}</p>
                      </div>
                      {/* <p className="text-sm font-medium text-gray-700">{product.price}</p> */}
                    </div>
                  </div>
                ))}
          </Carousel>
        </div>
          </>
        )
}
      

const slugify = (text) => {
  return text
    .replace(/\s+/g, "-") // Replace spaces with dashes
// Trim dashes from the beginning and end
};