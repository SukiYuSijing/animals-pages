import headerIcon from '@/assets/images/headerIcon.png';
import { headerItems } from '@/fake-data/header';
import { slidesData } from '@/fake-data/slides';
import * as antdIcons from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import React, { useState } from 'react';
import style from './PCHeader.module.scss';
import Slide from './Slide';
const getIcon = (props: { name: string }) => {
  const { name } = props;
  const antIcon: { [key: string]: unknown } = antdIcons;
  return React.createElement(antIcon[name], { style: { fontSize: '20px' } });
};
const HeaderMenu: React.FC = () => {
  const [current, setCurrent] = useState('brands');
  const _headerItems = headerItems.map((item) => {
    return {
      ...item,
      icon: getIcon({ name: item.icon }),
    };
  });

  const onClick = (e: { key: string } & EventTarget) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <header className={style['header-container']}>
        <Row style={{ height: '100%', width: '100%' }}>
          <Col md={5} lg={4} xl={3} style={{ height: '100%' }}>
            <div style={{ padding: '0 10%', height: '100%' }}>
              <img src={headerIcon} alt='官网图标' width='100%' height='100%' />
            </div>
          </Col>
          <Col md={15} lg={16} xl={17}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode='horizontal'
              items={_headerItems}
              style={{
                lineHeight: '90px',
                background: 'transparent',
                color: 'white',
                fontSize: '20px',
              }}
            />
          </Col>
          <Col md={2} style={{ textAlign: 'center' }}>
            <span style={{ lineHeight: '90px', fontSize: '20px' }}>中/英</span>
          </Col>
          <Col md={2} style={{ textAlign: 'center' }}>
            <span style={{ lineHeight: '90px', fontSize: '20px' }}>
              app下载
            </span>
          </Col>
        </Row>
      </header>
      <Slide slidesData={slidesData} />
    </>
  );
};

export default HeaderMenu;
