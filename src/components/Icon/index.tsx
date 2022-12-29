import React from 'react';
import Add from './assets/add.svg';
import AddFriend from './assets/addFriend.svg';
import ArrowDown from './assets/arrow-down.svg';
import ArrowLeft from './assets/arrow-left.svg';
import ArrowRight from './assets/arrow-right.svg';
import ArrowUp from './assets/arrow-up.svg';
import Back from './assets/back.svg';
import Calender from './assets/calender.svg';
import Category from './assets/category.svg';
import CheckOutlineOff from './assets/check-outline-off.svg';
import CheckOutlineOn from './assets/check-outline-on.svg';
import CheckSolidOff from './assets/check-solid-off.svg';
import CheckSolidOn from './assets/check-solid-on.svg';
import Close from './assets/close.svg';
import Delete from './assets/delete.svg';
import DeleteCategory from './assets/delete-category.svg';
import DropDown from './assets/dropDown.svg';
import Glyphs from './assets/glyphs.svg';
import Home from './assets/home.svg';
import MyPage from './assets/myPage.svg';
import Review from './assets/review.svg';
import SecureHide from './assets/secure-hide.svg';
import SecureShow from './assets/secure-show.svg';
import Setting from './assets/setting.svg';
import Won from './assets/won.svg';

const Sources = {
  Add,
  AddFriend,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Back,
  Calender,
  Category,
  CheckOutlineOff,
  CheckOutlineOn,
  CheckSolidOff,
  CheckSolidOn,
  Close,
  Delete,
  DeleteCategory,
  DropDown,
  Glyphs,
  Home,
  MyPage,
  Review,
  SecureHide,
  SecureShow,
  Setting,
  Won,
};

export type IconType = keyof typeof Sources;

interface IconProps {
  type: IconType;
  size: 'm' | 's';
  color?: string;
}

const Icon = ({color, type, size}: IconProps) => {
  const Comp = Sources[type];
  const style = size === 'm' ? {height: 20, width: 20} : {height: 24, width: 24};
  return <Comp color={color} {...style} />;
};

export default Icon;
