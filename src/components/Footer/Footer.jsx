import React from 'react';
import Logo from '../../assets/Logo.png';
import FooterImage from '../../assets/footer.jpg';
import {
    FaFacebook,
    FaGithub,
    FaLinkedinIn,
    FaLocationArrow,
    FaMobileAlt
} from 'react-icons/fa';

const Footerimg = {
    backgroundImage: `url(${FooterImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
};

const footerLinks = [
    {
        title: 'Home',
        link: '/#',
    },
    {
        title: 'About',
        link: '/#about',
    },
    {
        title: 'Contact',
        link: '/#contact',
    },
    {
        title: 'Blog',
        link: '/#blog',
    }
];

const Footer = () => {
  return (
    <div style={Footerimg} className='text-white'>
      <div className="container">
        <div 
        data-aos="zoom-in"
        className='grid md:grid-cols-3 pb-44 pt-5'>
          {/* Company Details */}
          <div className='py-8 px-4'>
            <h1 
            className="sm:text-3xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3"
            >
              <img src={Logo} alt="Logo" 
              className="max-w-[50px] " 
              />
              ShopFy
            </h1>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptas ipsum harum eos culpa laboriosam consectetur esse 
              deserunt molestiae vitae quidem.
            </p>
          </div>
          {/* Footer Links */}
          <div className='grid grid-cols-2 sm:grid-cols-3
          col-span-2 md:pl-10'>
            <div>
                <div className='py-8 px-4'>
                    <h1
                    className='sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3'
                    >Important Links</h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            footerLinks.map((link) => (
                                <li
                                className='cursor-pointer hover:text-primary
                                hover:translate-x-1 duration-300 text-gray-200'
                                key={link.title}
                                >
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div>
                <div className='py-8 px-4'>
                    <h1
                    className='sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3'
                    >Links</h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            footerLinks.map((link) => (
                                <li
                                className='cursor-pointer hover:text-primary
                                hover:translate-x-1 duration-300 text-gray-200'
                                key={link.title}
                                >
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Social Links */}
            <div>
                <div className="flex items-center gap-5 mt-6">
                    <a href="https://github.com/hans254" target='_blank'>
                        <FaGithub className='text-3xl hover:text-primary
                        hover:translate-x-1 duration-300 hover:font-bold' />
                    </a>
                    <a href="https://www.facebook.com/share/1ASNjxW4Ko/" target='_blank'>
                        <FaFacebook className='text-3xl hover:text-primary
                        hover:translate-x-1 duration-300 hover:font-bold' />
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/hansel-ndemange-360434230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <FaLinkedinIn className='text-3xl hover:text-primary
                        hover:translate-x-1 duration-300 hover:font-bold' />
                    </a>
                </div>
                <div className='mt-6 cursor-pointer'>
                    <div className='flex items-center gap-3 font-bold hover:text-primary
                    hover:translate-x-1 duration-300'>
                        <FaLocationArrow />
                        <p>Nairobi, Kenya</p>
                    </div>
                    <div className='flex items-center gap-3 font-bold hover:text-primary
                    hover:translate-x-1 duration-300'>
                        <FaMobileAlt />
                        <p>+254705 454 027</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
