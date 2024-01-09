import * as React from 'react';
import '@/assets/style/index.less';
import '@/assets/style/index.scss';
import 'reset-css';
import * as ReactDOM from 'react-dom/client';
import Header from '@/components/commom/Header';
import AboutUs from '@/components/commom/AboutUs';
import { useEffect, useState } from 'react';
import SwiperSection from '@/components/commom/SwiperSection';
import { slidesData } from '@/fake-data/slides';
const Home: React.FC = () => {
  const [screenWidthType, setscreenWidthType] = useState('PC');
  function handleResize() {
    const screenWidthType = window.innerWidth;
    if (screenWidthType < 828) {
      setscreenWidthType('mobile');
    } else {
      setscreenWidthType('PC');
    }
  }
  useEffect(() => {
    handleResize();

    // Attach the event listener to the window object
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Header endtype={screenWidthType} />
      <AboutUs />
      <SwiperSection endtype={screenWidthType} slidesData={slidesData} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app')!);
// v18 的新方法
root.render(<Home />);
