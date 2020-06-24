import React, { Component } from "react";
import Slider from "react-slick";
import Media from 'react-media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Youtube.css';

class Youtube extends Component {

    state={
        address: [
            {
                title: "Pub. Ad. Strategy",
                subtitle: "BPSC 65 Mains",
                message: "Atul Lohiya sir's lecture on Pub. Ad. Strategy for BPSC 65 Mains",
                src: "https://www.youtube.com/embed/xKwRrPbReMw",
                id: 1
            },
            {
                title: "Mugal Kaleen Administration",
                subtitle: "UPSC 2020",
                message: "Atul Lohiya sir's lecture on Mugal Kaleen Administration for UPSC 2020",
                src: "https://www.youtube.com/embed/TOlnpKopaDo",
                id: 2
            },
            {
                title: "Mitigation - Disaster Management",
                subtitle: "UPSC 2020",
                message: "Akashi Lohiya madam's lecture on Mitigation - Disaster Management for UPSC 2020",
                src: "https://www.youtube.com/embed/2WhIONVlSgs",
                id: 3
            }
        ]
    }

  render() {
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      };
    let view_mobile,view_desktop;
    view_mobile = this.state.address.map(i=>(
                    <div className="grid-container" key={i.id}>
                        <div className="grid-item-a">
                            <div className="title">{i.title}</div>
                            <div className="subtitle">{i.subtitle}</div>
                            <div className="message">{i.message}</div>
                            <div className="action-buttons">
                            <a href="#join-section" className="Button">JOIN CLASSES</a>
                            </div>
                        </div>
                        <div className="grid-item-b">
                            <iframe width="311" height="175" src={i.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> 
                    </div>
    ));
    view_desktop = this.state.address.map(i=>(
        <div className="grid-container" key={i.id}>
            <div className="grid-item-a">
                <div className="title">{i.title}</div>
                <div className="subtitle">{i.subtitle}</div>
                <div className="message">{i.message}</div>
                <div className="action-buttons">
                <a href="#join-section" className="Button">JOIN CLASSES</a>
                </div>
            </div>
            <div className="grid-item-bd">
                <iframe width="311" height="175" src={i.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> 
        </div>
));
    
    return (
      <div style={{marginTop:'20px'}}>
        <Media query="(max-width: 599px)">
            {matches =>
            matches ? (
                <Slider {...settings1}>
                   {view_mobile}
                </Slider>
            ):(
                <Slider {...settings1}>
                    {view_desktop}
                </Slider>

            )
            }
        </Media>
        
      </div>
    );
  }
}

export default Youtube;