import React from 'react';
import { Carousel } from 'react-bootstrap';

function LaptopCarousel() {
  const images = [
    {
      src: '/images/dell-xps13.jpg',
      caption: 'Dell XPS 13'
    },
    {
      src: '/images/macbook-pro.jpg',
      caption: 'MacBook Pro'
    },
    {
      src: '/images/hp-spectre.jpg',
      caption: 'HP Spectre x360'
    },
    {
      src: '/images/lenovo-thinkpad.jpg',
      caption: 'Lenovo ThinkPad X1'
    }
  ];

  return (
    <Carousel className="mb-4">
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img.src}
            alt={img.caption}
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>{img.caption}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default LaptopCarousel;
