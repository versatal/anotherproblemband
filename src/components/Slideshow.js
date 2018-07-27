import React, { Component } from 'react';
import Slider from "react-slick";

class Slideshow extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 15000
    };
    return (
      <Slider className="slideshow" {...settings}>
        <div className="imgContainer">
          <img src="/images/anotherproblem.jpg" alt="the band" className="bandPic3"/>
        </div>
        <div className="imgContainer">
          <img src="/images/oxandjen.jpg" alt="ox and jen" className="bandPic2"/>
        </div>
        <div className="imgContainer">
          <img src="/images/oxInAction3.jpg" alt="Ox in action" className="bandPic4"/>
        </div>
        <div className="imgContainer">
          <img src="/images/threeGuitars.jpg" alt="Three guitarists" className="bandPic4"/>
        </div>
        <div className="imgContainer">
          <img src="/images/amy.jpg" alt="amy" className="bandPic4"/>
        </div>
        <div className="imgContainer">
          <img src="/images/trent.jpg" alt="trent" className="bandPic"/>
        </div>
        <div className="imgContainer">
          <img src="/images/john.jpg" alt="john" className="bandPic"/>
        </div>
      </Slider>
    );
  }
}

export default Slideshow;


// <div className="slideshow">
// <img src="/images/anotherproblem.jpg" alt="the band" className="bandPic"/>
// </div>