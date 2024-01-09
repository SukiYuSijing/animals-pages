import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import styles from './Slide.module.scss';
import { Card } from 'antd';

const { Meta } = Card;

export const DisplayCard: React.FC = ({hoverable,picUrl,picAlt,title,description}) => (
  <Card
    hoverable={hoverable}
    cover={<img alt={picAlt} src={picUrl}  height={'100%'}/>}
    className={styles.card}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default function Slides({slidesData}) {
  const Cards = slidesData.map((items, index) => {
    return (
      <SwiperSlide
         key={index} className={styles.container}>
        <DisplayCard hoverable={true} {...items}/>
     </SwiperSlide>
    )
  })
  return (
    <>
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={3}
        navigation
        slideToClickedSlide={true}
        modules={[Navigation]}
        loop={true}
        className={styles.swiper}
      >
        {Cards}
      </Swiper>
    </>
  );
}
