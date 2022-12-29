import React from 'react';
import styled from '@emotion/native';
import Icon from '../Icon';
import {useTheme} from '@emotion/react';

interface DropdownProps {
  placeholder: string;
  value: string;
}

const Container = styled.Pressable<{isActive: boolean}>`
  align-items: center;
  background-color: ${({theme: {color}}) => color.primary[5]};
  border: ${({theme: {color}}) => `1px solid ${color.primary[10]}`};
  border-radius: 7px;
  flex-direction: row;
  padding: ${({theme: {spacing}}) => spacing[12]};
`;
const Text = styled.Text<{isActive: boolean}>`
  color: ${({isActive, theme: {color}}) => color.primary[isActive ? 100 : 40]};
  flex: 1;
  margin-right: ${({theme: {spacing}}) => spacing[12]};
  size: ${({theme: {font}}) => font.size[14]};
`;

const Dropdown = ({placeholder, value}: DropdownProps) => {
  const {color} = useTheme();
  const isActive = !!value;
  return (
    <Container isActive={isActive}>
      <Text isActive={isActive}>{value || placeholder}</Text>
      <Icon color={color.primary[isActive ? 100 : 20]} type="DropDown" size="m" />
    </Container>
  );
};

export default Dropdown;
