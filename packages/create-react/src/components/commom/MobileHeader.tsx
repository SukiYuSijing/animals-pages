import React, { useState } from 'react';
import { SideBar, Popup } from 'antd-mobile';
import * as antdMobileIcons from 'antd-mobile-icons';
import { UnorderedListOutline } from 'antd-mobile-icons';
import { headerItems } from '@/fake-data/header';
import headerIcon from '@/assets/images/headerIcon.png';
import styles from './MobileHeader.module.scss';
import classNames from 'classnames';
import Slide from './Slide';

const getDisplay = (
  props: { iconName: string; titleName: string },
  antdIcons = antdMobileIcons,
) => {
  const { iconName, titleName } = props;
  const antIcon: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } =
    antdIcons;
  // return titleName
  return React.createElement(
    'span',
    {
      props: {
        key: titleName,
      },
      style: { fontSize: '20px' },
    },
    [
      React.createElement(antIcon[iconName], {
        style: {
          marginRight: '5px',
        },
      }),
      <span key={titleName}>{titleName}</span>,
    ],
  );
};
const MobileHeader = () => {
  const slides = headerItems.map((item) => {
    return {
      ...item,
      title: getDisplay({ iconName: item.iconMobile, titleName: item.label }),
    };
  });
  const [visible, setVisible] = useState(false);
  console.log(slides);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['item']}>
          <img alt='icon' src={headerIcon} height='100%'></img>
        </div>
        <div className={classNames(styles['item'], styles['item2'])}>
          中/英文
        </div>
        <div className={classNames(styles['item'], styles['item3'])}>
          <UnorderedListOutline
            fontSize={24}
            onClick={() => setVisible(!visible)}
          />
          <>
            <Popup
              visible={visible}
              onMaskClick={() => {
                setVisible(false);
              }}
              position='right'
              bodyStyle={{ width: '60vw' }}
            >
              {
                <SideBar style={{ '--width': '100%' }}>
                  {slides.map((item) => (
                    <SideBar.Item key={item.key} title={item.title} />
                  ))}
                </SideBar>
              }
            </Popup>
          </>
        </div>
      </div>
      <Slide></Slide>
    </>
  );
};

export default MobileHeader;
