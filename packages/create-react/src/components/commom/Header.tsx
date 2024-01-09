import React from 'react';
import PCHeader from './PCHeader';
import MobileHeader from './MobileHeader';
type Props = {
  endtype: string;
};
const HeaderMenu = <PROPS extends Props>({ endtype }: PROPS): JSX.Element => {
  return <>{endtype !== 'PC' ? <MobileHeader /> : <PCHeader />}</>;
};

export default HeaderMenu;
