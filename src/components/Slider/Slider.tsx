import img1 from '../../assets/sliderImages/blog-img-1.jpeg'
import img2 from '../../assets/sliderImages/blog-img-2.jpeg'
import img3 from '../../assets/sliderImages/grocery-banner-2.jpeg'
import img4 from '../../assets/sliderImages/slider-image-1.jpeg'
import img5 from '../../assets/sliderImages/slider-image-2.jpeg'
import img6 from '../../assets/sliderImages/slider-image-3.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

export default function Slider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <div className="slider-container m-4 ">
      <SlickSlider {...settings} autoplay>
        <div >
          <img src={img1} className='w-screen h-50  block' alt="" />
        </div>
        <div >
          <img src={img2} className='w-screen h-50  block' alt="" />
        </div>
        <div >
          <img src={img3} className='w-screen h-50  block' alt="" />
        </div>
        <div>
          <img src={img4} className='w-screen h-50  block' alt="" />
        </div>
        <div>
          <img src={img5} className='w-screen h-50  block' alt="" />
        </div>
        <div>
          <img src={img6} className='w-screen h-50  block' alt="" />
        </div>
      </SlickSlider>
    </div>

  );
}
