import { Carousel } from 'antd';
import React from 'react';
import Swiper from 'swiper-react-effect-coverflow';
import styles from './SwiperSection.module.scss';
import { Card } from 'antd';
const Meta = Card.Meta;
const MobileSwiper = ({ slidesData }) => {
  const Slides = slidesData?.map((picData, index) => (
    <div key={index}>
      <Card
        cover={
          <img alt={picData.picAlt} src={picData.picUrl} height={'100%'} />
        }
        className={styles.card}
      >
        <Meta title={picData.title} description={picData.description} />
      </Card>
    </div>
  ));
  return (
    <Carousel
      autoplay
      waitForAnimate
      speed={1000}
      autoplaySpeed={3000}
      infinite
    >
      {Slides}
    </Carousel>
  );
};
const SwiperSection = <PROPS extends Props>({
  endtype,
  slidesData,
}: PROPS): JSX.Element => {
  console.log(slidesData);

  return (
    <div className={styles.container}>
      <h1>关于猫猫猫</h1>
      <h2>坐着的猫是宁静的理想体现, 伸懒腰能招财的猫会很有钱</h2>
      {endtype !== 'PC' ? (
        <MobileSwiper slidesData={slidesData} />
      ) : (
        <Swiper slidesData={slidesData} />
      )}
    </div>
  );
};

export default SwiperSection;
