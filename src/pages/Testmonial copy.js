import { React, useState } from 'react'
// Carousel.js
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function Testmonial() {
 const [sliderRef, setSliderRef] = useState(null)
 const sliderSettings = {
  // removes default buttons
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 2,
    }
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 1,
    }
   }
  ]
 }

 const hotelCards = [
  {
   imageSrc:
    'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
   title: 'Studio Room',
   description: 'Lorem ipsum dolor sit amet, consectur dolori',
   pricingText: 'USD 50/Day',
   features: ['Free Wifi', 'Free breakfast'],
  },
  {
   imageSrc:
    'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
   title: 'Deluxe Room',
   description: 'Lorem ipsum dolor sit amet, consectur dolori',
   pricingText: 'Guest 1',
   // features: ['Free Wifi', 'Free breakfast'],
  },
  {
   imageSrc:
    'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
   title: 'King Deluxe Room',
   description: 'Lorem ipsum dolor sit amet, consectur dolori',
   pricingText: 'Guest 2',
   // features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
  },
  {
   imageSrc:
    'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
   title: 'Royal Suite',
   description: 'Lorem ipsum dolor sit amet, consectur dolori',
   pricingText: 'Guest 3',
   // pricingText: 'USD 299/Day',
   // features: [
   //  'Free Wifi',
   //  'Free breakfast',
   //  'Discounted Meals',
   //  "MacBook for work use (hotel's property)",
   // ],
  },
 ]
 // const settings = {
 //  fade: true,
 //  speed: 500, // ms
 //  autoplay: false,
 //  initialSlide: 2,
 //  lazyLoad: true,
 //  autoplaySpeed: 3000,
 // }
 return (
  <div>
   <p className="text-center-align">TESTIMONIAL</p>
   <h2 className='testmonial-title text-center-align'>Happy Guests</h2>
   <div className='controls'>
    <button onClick={sliderRef?.slickPrev} className="btnSliderPrev">
     <FaChevronLeft />
    </button>
    <button onClick={sliderRef?.slickNext} className="btnSliderNext">
     <FaChevronRight />
    </button>
   </div>
   <div className='content'>
    <Slider ref={setSliderRef} {...sliderSettings}>
     {hotelCards.map((card, index) => (
      <div key={index} className='card'>
       <img src={card.imageSrc} alt={card.title} className='card-image' />
       <div className='text-info'>
        <div className='card-header'>
         <h2>{card.title}</h2>
         <span>{card.pricingText}</span>
        </div>
        <p>{card.description}</p>
        {/* <ul>
         {card.features.map((feature, index) => (
          <li key={index}>{feature}</li>
         ))}
        </ul> */}
       </div>
       {/* <button>Buy Now</button> */}
      </div>
     ))}
    </Slider>
   </div>
  </div>
 )
}
