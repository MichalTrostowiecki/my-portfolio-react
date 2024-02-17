
import React, { useEffect, useState, useRef } from 'react';
import { Carousel } from 'flowbite-react'


const ProjectCarousel = () => {
    return (
        <div className='h-[50vh] w-4/5 mx-auto'>
            
        <Carousel>
            <img className="object-cover h-full w-full" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img className="object-cover h-full w-full" src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img className="object-cover h-full w-full" src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img className="object-cover h-full w-full" src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img className="object-cover h-full w-full" src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
        </div>
    )
}

       
   

export default ProjectCarousel;