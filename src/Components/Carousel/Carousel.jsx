import React from 'react';
import AliceCarousel from 'react-alice-carousel';

function Carousel() {
  const items = [
    <img src="/top/1.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 1" />,
    <img src="/top/2.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 2" />,
    <img src="/top/3.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 3" />,
    <img src="/top/4.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 4" />,
    <img src="/top/5.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 5" />,
    <img src="/top/6.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 6" />,
    <img src="/top/7.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 7" />,
    <img src="/top/8.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 8" />,
    <img src="/top/9.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 9" />,
    <img src="/top/10.jpg" className='md:h-[50vh] md:w-2/3 m-auto object-cover' alt="Slide 10" />,
  ];

  return (
    <div className='relative md:mb-36 w-[80%] m-auto'>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        autoPlay
        items={items}
        renderPrevButton={() => (
          <button className="absolute left-4 text-9xl top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition hidden md:block">
            ‹
          </button>
        )}
        renderNextButton={() => (
          <button className="absolute right-4 text-9xl top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition hidden md:block">
            ›
          </button>
        )}
      />
    </div>
  );
}

export default Carousel;


