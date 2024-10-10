import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import Characters from '../Components/Characters/Characters';
import Carousel from '../Components/Carousel/Carousel';
import ReadMore from '../Components/ReadMore/ReadMore';
import Footer from './Footer';

function Home() {
    return (
        <div id='/'>
            <div className='mt-[7.3rem]'>
                <HeroSection />
            </div>
            <div className='text-white'>
                <Characters />
            </div>
            <div className='m-auto mt-16 md:mt-20 lg:mt-52 text-center p-2'>
                <div className='text-lg md:text-5xl lg:text-7xl mb-16 md:mb-20 lg:mb-36 md:border-none border-2 border-white'>
                    <b className='md:border-2 md:border-white p-2 md:p-4 lg:p-5'>The 10 Best Supernatural Manhwa You Should Read Now</b>
                </div>
                <Carousel />
            </div>
            <div>
                <ReadMore />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
