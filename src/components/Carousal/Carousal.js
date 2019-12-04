import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Slide from './Slide';

const SlideContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const TIMER = 3000;

/**
 * Carousal component with multiple slides
 */

export default function Carousal() {
  const slides = [
    {
      media:
        'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Golden Gate Bridge',
      content:
        'Golden Gate Bridge Description. Some Random Description about the Golden Gate Bridge',
    },
    {
      media:
        'https://images.pexels.com/photos/2480956/pexels-photo-2480956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Gate Way of India, Mumbai',
      content:
        'Gate Way of India in Mumbai is an Iconin venue in Mumbai. Some other description about the GateWay.',
    },
    {
      media:
        'https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94',
      title: 'London Eye',
      content:
        'London Eye is an Iconic monument in London built by Indian born billioniare Laxmi Mittal.',
    },
  ];

  const initialState = {
    currentIndex: 0,
    isPlaying: false,
  };

  function reducer(state = initialState, action) {
    const {type} = action;

    switch (type) {
      case 'NEXT': {
        return {
          ...state,
          currentIndex: (state.currentIndex + 1) % slides.length,
        };
      }

      default:
        return state;
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    // Works similar to componentDidMount
    let timerID = setInterval(
      () => setCurrentIndex((currentIndex + 1) % slides.length),
      TIMER,
    );

    // Works similar to componentWillUnmount, do clean up in return function of
    // useEffect
    return () => clearInterval(timerID);

    // there is no second argument to useEffect, so it acts as componentDidUpdate
  });

  return (
    <section style={{display: 'flex', overflowX: 'hidden'}}>
      {slides.map((slide, index) => (
        <SlideContainer
          style={{position: 'relative'}}
          key={index}
          aria-label={`slide ${index + 1} of ${slides.length}`}>
          <Slide {...slide} id={index} isCurrent={index === currentIndex} />
        </SlideContainer>
      ))}
    </section>
  );
}
