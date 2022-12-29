import React from 'react';
import styled from '@emotion/native';
import Icon, {IconType} from '../Icon';
import {useState} from 'react';

interface CheckboxProps {
  label: string;
  onChange: (checked: boolean) => void;
  type?: 'solid' | 'transparent';
}

const Container = styled.Pressable<{type: 'solid' | 'transparent'; checked: boolean}>`
  background-color: ${({type, theme: {color}}) => (type === 'solid' ? color.primary[0] : 'none')};
  border: ${({checked, type, theme: {color}}) =>
    type === 'solid' ? `1px solid ${color.primary[checked ? 60 : 20]}` : 'none'};
  border-radius: 7px;
  padding: ${({type, theme: {spacing}}) =>
    (type === 'solid'
      ? [spacing[12], spacing[12], spacing[12], spacing[8]]
      : [spacing[2], spacing[8]]
    ).join(' ')};
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${({theme: {font}}) => font.size[14]};
  margin-left: ${({theme: {spacing}}) => spacing[8]};
`;

const Checkbox = ({label, onChange, type = 'solid'}: CheckboxProps) => {
  const [checked, setCheck] = useState(false);
  const iconPrefix = type === 'solid' ? 'CheckSolid' : 'CheckOutline';
  const iconType: IconType = `${iconPrefix}${checked ? 'On' : 'Off'}`;
  const handleClick = () => {
    const nextState = !checked;
    onChange(nextState);
    setCheck(nextState);
  };

  return (
    <Container checked={checked} type={type} onPress={handleClick}>
      <Icon size="m" type={iconType} />
      <Text>{label}</Text>
    </Container>
  );
};

export default Checkbox;
