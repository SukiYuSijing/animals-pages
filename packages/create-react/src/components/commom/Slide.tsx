import React, { useState } from 'react';
import { Carousel } from 'antd';
import { slidesData } from '@/fake-data/header';
import style from './Slide.module.scss';
import classNames from 'classnames';

const App: React.FC = () => {
  const [animateStyleName, setAnimateStyleName] = useState('');
  const [currentActive, setCurrentActive] = useState(0);
  const Slides = slidesData.map((picData, index) => (
    <div key={index} className={style['slide-container']}>
      <figure
        className={classNames(
          animateStyleName,
          currentActive === index
            ? style['slide-text']
            : style['slide-text-deactive'],
        )}
      >
        {picData.text}
      </figure>
      <img src={picData.pic} alt='slide1' height='100%' width='100%' />
    </div>
  ));
  const handleBeforeChange = () => {
    setAnimateStyleName(style['slide-container-move']);
  };
  const handleAfterChange = (v: number) => {
    setCurrentActive(v);
    setAnimateStyleName(style['slide-container-static']);
  };
  return (
    <Carousel
      autoplay
      waitForAnimate
      speed={1000}
      autoplaySpeed={3000}
      infinite
      easing='jump-end'
      beforeChange={handleBeforeChange}
      afterChange={handleAfterChange}
    >
      {Slides}
    </Carousel>
  );
};

export default App;
