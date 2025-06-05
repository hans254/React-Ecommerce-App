import React from 'react';
import Banner from '../../assets/Orange.jpg';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '120%',
    width: '100%',
}

const Subscribe = () => {
  return (
    <div 
    data-aos="zoom-in"
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'
    style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 
            className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'
            >Get Notified About New Products
            </h1>
            <input type="text" 
            data-aos="fade-up"
            className='w-full p-3'
            placeholder='Enter Your Email'
            />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
