import React, { Component } from "react";
import Slider from "react-slick";
import Media from 'react-media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from '../../assets/carousel1/car1.jpg';
import car2 from '../../assets/carousel1/car2.jpg';
import car3 from '../../assets/carousel1/car3.jpg';
import './Carousel.css';

class Carousel extends Component {

  state={
    arr: [
      {
        imgSrc: car1,
        alt: 'Image1',
        id:1
      },
      {
        imgSrc: car2,
        alt: 'Image2',
        id:2
      },
      {
        imgSrc: car3,
        alt: 'Image3',
        id:3
      }
    ]
  }

  render() {
    const settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:1.7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
      };
    
    let mob_view,desk_view;
    mob_view = this.state.arr.map(i=>(
                    <div className="carImg" key={i.id}>
                        <img src={i.imgSrc} alt={i.alt} />
                    </div>
    ));
    desk_view = this.state.arr.map(i=>(
      <div className="carImg" key={i.id}>
          <img src={i.imgSrc} alt={i.alt} />
      </div>
    ));   
    return (
      <div>
        <Media query="(max-width: 850px)">
            {matches =>
            matches ? (
                <Slider {...settings2}>
                    {mob_view}
                </Slider>
            ):(
                <Slider {...settings1}>
                    {desk_view}
            </Slider>

            )
            }
        </Media>
        
      </div>
    );
  }
}

export default Carousel;