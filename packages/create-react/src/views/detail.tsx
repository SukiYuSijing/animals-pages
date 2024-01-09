import * as React from 'react';
import '@/assets/style/index.less';
import '@/assets/style/index.scss';
import Image1 from '@/assets/images/1.png';
import * as ReactDOM from 'react-dom/client';
import Show from '@/components/show';

const Home: React.FC = () => {
  return (
    <>
      <Show />
      <div>
        <img src={Image1} alt='xxxxxxxxxx' height={200} width={200} />
      </div>
      <div>
        <h1 className='wrapper'>Detail</h1>
        <p className='wrapper1'>We are excited to have you here.</p>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app')!);
// v18 的新方法
root.render(<Home />);
