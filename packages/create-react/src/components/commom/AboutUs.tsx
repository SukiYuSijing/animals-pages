import React from 'react';
import detail from '@/fake-data/aboutUs';
import { Row, Col, Button } from 'antd';
import style from './AboutUs.module.scss';
const AboutUs: React.FC = () => {
  return (
    <section className={style.container}>
      <Row gutter={48}>
        <Col xs={24}>
          <h1 className={style.title}>{detail.title}</h1>
          <h3 className={style.subTitle}>{detail.subTitle}</h3>
        </Col>
        <Col xs={24} md={12}>
          <article className={style.description}>{detail.description}</article>
          <Row>
            <Col xs={24} md={6} style={{ padding: '10px 0' }}>
              <Button block rootClassName={style.more}>
                More
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <img width='100%' height='100%' src={detail.pic} alt='little-cat' />
        </Col>
      </Row>
    </section>
  );
};

export default AboutUs;
