import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const TestimonialsData = [
  {
    id: 1,
    name: 'Hansel Ndemange',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Provident pariatur aspernatur id placeat inventore amet, nemo magnam est animi, 
aut eum nihil dolores itaque blanditiis iusto vero fugit eos. Ipsa facilis quo 
similique ab quaerat doloremque debitis, mollitia voluptatum eligendi! Aperiam 
eos dignissimos quis dolorum dolor nihil magni commodi. Soluta!`,
  },
  {
    id: 2,
    name: 'Tony Toroitich',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Provident pariatur aspernatur id placeat inventore amet, nemo magnam est animi, 
aut eum nihil dolores itaque blanditiis iusto vero fugit eos. Ipsa facilis quo 
similique ab quaerat doloremque debitis, mollitia voluptatum eligendi! Aperiam 
eos dignissimos quis dolorum dolor nihil magni commodi. Soluta!`,
  },
  {
    id: 3,
    name: 'Limo Brian',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Provident pariatur aspernatur id placeat inventore amet, nemo magnam est animi, 
aut eum nihil dolores itaque blanditiis iusto vero fugit eos. Ipsa facilis quo 
similique ab quaerat doloremque debitis, mollitia voluptatum eligendi! Aperiam 
eos dignissimos quis dolorum dolor nihil magni commodi. Soluta!`,
  },
  {
    id: 4,
    name: 'Cynthia Awino',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Provident pariatur aspernatur id placeat inventore amet, nemo magnam est animi, 
aut eum nihil dolores itaque blanditiis iusto vero fugit eos. Ipsa facilis quo 
similique ab quaerat doloremque debitis, mollitia voluptatum eligendi! Aperiam 
eos dignissimos quis dolorum dolor nihil magni commodi. Soluta!`,
  },
  {
    id: 5,
    name: 'Kevin Matelong',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Provident pariatur aspernatur id placeat inventore amet, nemo magnam est animi, 
aut eum nihil dolores itaque blanditiis iusto vero fugit eos. Ipsa facilis quo 
similique ab quaerat doloremque debitis, mollitia voluptatum eligendi! Aperiam 
eos dignissimos quis dolorum dolor nihil magni commodi. Soluta!`,
  },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        //slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
  return (
    <div className='py-10 mb-10'>
      <div className="container">
        {/* Header Section */}
        <div className='
        text-center mb-10 max-w-[600px] 
        mx-auto'>
            <p className='text-sm text-primary'>What our customers are saying</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus?</p>
        </div>
        {/* Testimonials Section */}
        <div data-aos="zoom-in">
            <Slider {...settings}>
                {TestimonialsData.map((data) => (
                <div className="my-6">
                    <div
                    key={data.id}
                    className='flex flex-col gap-4 shadow-lg py-8 w-100
                    px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                    >
                        <div className='mb-4'>
                            <img src={data.image} alt="" 
                            className='rounded-full w-40 h-40'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>
                                <p className='text-xs text-gray-400'>{data.text}</p>
                                <h1 className='text-xl font-bold text-black/80 
                                dark:text-light'>{data.name} 
                                </h1>
                            </div>
                        </div>
                        <p className='text-black/20 text-9xl font-serif
                        absolute top-0 right-0'>
                            ,,
                        </p>
                    </div>
                </div>     
                ))}
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
