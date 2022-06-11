import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Image/banner/banner1.jpg';
import banner2 from '../../../Image/banner/banner2.jpg';
import banner3 from '../../../Image/banner/banner3.jpg';
 

const Banner = () => {
    const [index, setIndex] = useState(0);
          
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img 
                    className="d-block w-100 h-25"
                    src={banner1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Welcome</h3>
                    <p>To our BEGiNNING</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                  />
          
                  <Carousel.Caption>
                    <h3>WelCome to The Wedding of</h3>
                    <p>Nahid $ Sorna</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Welcome to the Wedning of</h3>
                    <p>
                      MOnir And Meem
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            );
          }
          

export default Banner;