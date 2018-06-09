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
        <div>
          <img src="/images/anotherproblem.jpg" alt="the band" className="bandPic"/>
          </div>
        <div>
          <img src="/images/oxandjen.jpg" alt="ox and jen" className="bandPic"/>
        </div>
        <div>
          <img src="/images/oxinaction1.jpg" alt="the band" className="bandPic"/>
        </div>
        <div>
          <img src="/images/oxinaction2.jpg" alt="the band" className="bandPic"/>
        </div>
        <div>
          <img src="/images/anotherproblem.jpg" alt="the band" className="bandPic"/>
        </div>
        <div>
          <img src="/images/anotherproblem.jpg" alt="the band" className="bandPic"/>
        </div>
      </Slider>
    );
  }
}

export default Slideshow;


// <div className="slideshow">
// <img src="/images/anotherproblem.jpg" alt="the band" className="bandPic"/>
// </div>