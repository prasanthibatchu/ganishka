import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"
export const Caro= () => (
  
  <Carousel className="carousel" autoPlay >
    <div>
      <img  alt="" src="https://arton12.com/wp-content/uploads/2019/02/texas-country-road-1200x600-pixels.jpg" />
      
    </div>
    <div>
      <img alt="" src="https://beautifulpixels.com/wp-content/uploads/2018/09/xs-wallpaper-featured.jpg" />

    </div> 
    <div>
      <img alt="" src="https://cdn.vox-cdn.com/thumbor/rscWMyaLUIQ3G15cZY6hfjrOgCk=/0x183:2040x1203/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/23450367/PixelBudsProColors.jpg" />

    </div> 
  </Carousel>
);
