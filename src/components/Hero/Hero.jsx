import React from 'react';
import Image1 from '../../assets/friends.jpg';
import Image2 from '../../assets/welldressed.jpg';
import Image3 from '../../assets/flashsale.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% Off on all Men's Wear",
    description: `Lorem ipsum dolor sit amet 
consectetur adipisicing elit. Dolores magni cumque, 
ducimus a commodi blanditiis dolor alias est sint maxime 
officia sequi error fugiat dignissimos ipsum nesciunt perferendis 
accusantium corporis.`,
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% Off on all Women's Wear",
    description: `Lorem ipsum dolor sit amet 
consectetur adipisicing elit. Dolores magni cumque, 
ducimus a commodi blanditiis dolor alias est sint maxime 
officia sequi error fugiat dignissimos ipsum nesciunt perferendis 
accusantium corporis.`,
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Product Sale",
    description: `Lorem ipsum dolor sit amet 
consectetur adipisicing elit. Dolores magni cumque, 
ducimus a commodi blanditiis dolor alias est sint maxime 
officia sequi error fugiat dignissimos ipsum nesciunt perferendis 
accusantium corporis.`,
  },
];

const Hero = ({handleOrderPopup}) => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: false,
    };
  return (
    <div className='relative overflow-hidden min-h-[550px]
    sm: min-h-[650px] flex justify-center items-center
    dark-bg-gray-950 dark:text-white duration-200'>
      {/* Backgraound Pattern */}
      <div className='h-[700px] 
      w-[700px] bg-primary/40 absolute 
      -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      {/* Hero Section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
            {ImageList.map((data) => (
                <div>
                <div className='grid gird-cols-1 sm:grid-cols-2'>
                    {/* Text Content Section */}
                    <div className='flex flex-col justify-center text-center
                    sm:text-left gap-4 pt-12 sm:pt-0 order-2 sm:order-1 relative z-10'>
                        <h1
                        data-aos="zoom-out"
                        data-aos-once="true"
                        data-aos-duration="500"
                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                        >{data.title}</h1>
                            <p 
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="500"
                            className='text-sm'>{data.description}</p>
                        <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        >
                            <button onClick={handleOrderPopup}
                            className='bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                Order Now
                            </button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className='order-1 sm:order-2'>
                        <div 
                        data-aos="zoom-in"
                        data-aos-once="true"
                        data-aos-duration="500"
                        className='relative z-10'>
                            <img src={data.img} alt="" 
                            className='w-[300px] h-[300px] object-contain rounded-full
                            sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 mx-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
