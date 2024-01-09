import Slide1 from '@/assets/images/cats/slide1.jpg';
import Slide2 from '@/assets/images/cats/slide2.jpg';
import Slide3 from '@/assets/images/cats/slide3.jpg';
import Slide4 from '@/assets/images/cats/slide4.jpg';
export const headerDatas = [
  '我的猫',
  '你的猫',
  '大家的猫',
  '猫猫猫',
  '很多猫',
  '全是猫',
];
const headerItems = [
  {
    label: '我的猫',
    key: 'myCats',
    icon: 'MailOutlined',
    iconMobile: 'EyeOutline',
  },
  {
    label: '你的猫',
    key: 'yourCats',
    icon: 'AppstoreOutlined',
    iconMobile: 'EyeOutline',
  },
  {
    label: '大家的猫',
    key: 'ourCats',
    icon: 'SettingOutlined',
    iconMobile: 'EyeOutline',
  },
  {
    label: '猫猫猫',
    key: 'cats',
    icon: 'SettingOutlined',
    iconMobile: 'EyeOutline',
  },
  {
    label: '很多猫',
    key: 'manyCats',
    icon: 'SettingOutlined',
    iconMobile: 'EyeOutline',
  },
  {
    label: '全是猫',
    key: 'allAreCats ',
    icon: 'SettingOutlined',
    iconMobile: 'EyeOutline',
  },
];

const slidesData = [
  {
    pic: Slide1,
    text: '现在的社会里，人与人之间冷漠的态度还比不上与狗之间相处的那份真诚',
  },
  {
    pic: Slide2,
    text: '一只狗带给人的最大快乐就是，当你对它装疯的时候，它不会取笑你，反而会跟你一起疯',
  },
  {
    pic: Slide3,
    text: '睡眠恰似一只猫，只有当你不把它放在心上时，他才会主动来到你的身边',
  },
  {
    pic: Slide4,
    text: '刚满月的猫离不开奶，走路也不稳。可是已经学会淘气，就像我们这些淘气包',
  },
];

export { headerItems, slidesData };
