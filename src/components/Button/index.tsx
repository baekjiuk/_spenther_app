import React from 'react';
import styled from '@emotion/native';

interface ButtonProps {
  disabled?: boolean;
  label: string;
  type?: 'primary' | 'ghost';
}

const StyledButton = styled.TouchableOpacity<Omit<ButtonProps, 'label'>>`
  background-color: ${({disabled, type, theme: {color}}) =>
    type === 'primary' ? color.primary[disabled ? 20 : 100] : color.primary[0]};
  border-radius: 6px;
  border-width: 1px;
  border-type: solid;
  border-color: ${({disabled, theme: {color}}) => color.primary[disabled ? 20 : 100]};
  align-items: center;
  padding: ${({theme: {spacing}}) => [spacing[16], 0].join(' ')};
`;
const Text = styled.Text<Omit<ButtonProps, 'label'>>`
  color: ${({type, theme: {color}}) => color.primary[type === 'primary' ? 0 : 100]};
  font-size: ${({theme: {font}}) => font.size[16]};
`;

const Button = ({disabled = false, label, type = 'primary'}: ButtonProps) => {
  return (
    <StyledButton activeOpacity={0.7} disabled={disabled} type={type}>
      <Text disabled={disabled} type={type}>
        {label}
      </Text>
    </StyledButton>
  );
};

export default Button;
