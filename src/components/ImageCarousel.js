import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';

  import '../css/ImageCarousel.css';

const ImageCarousel = ( { items}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem className="carouselitem"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.id}
          >
            <img src={item.src} alt={item.altText} />
          </CarouselItem>
        );
      });

    return(
        <Container fluid>
            <Row>
                <Col>
                    <Carousel className="carousel" activeIndex={activeIndex} next={next} previous={previous}>
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default ImageCarousel;