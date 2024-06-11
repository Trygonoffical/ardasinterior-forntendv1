"use client"
import Link from "next/link";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';




const Slider = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
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
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            <Link href='#'>
                <img src="https://ii1.pepperfry.com/assets/0da5b091-6e53-4a2f-8f0b-66972ee39e06.jpg" alt="slider1"  style={{width: "100%" , height: "auto"}} />
            </Link>
            <Link href='#'>
                <img src="https://www.ulcdn.net/media/Slideshow/New_arraival__slideshow.jpg?1714046117"  alt="slider2"  style={{width: "100%" , height: "auto"}} />
            </Link>
            <Link href='#'>
            <img src="https://www.ulcdn.net/media/Slideshow/UI_slideshow_April.png?1712725104"  alt="slider2"  style={{width: "100%" , height: "auto"}} />

            </Link>
            <Link href='#'>
            <img src="https://www.ulcdn.net/media/Slideshow/VMI_Slideshow_April.png?1712839517"  alt="slider2"  style={{width: "100%" , height: "auto"}} />

            </Link>
        </Carousel>
  )
}

export default Slider