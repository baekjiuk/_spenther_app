import React from 'react';
import styled from '@emotion/native';
import {TextInputProps} from 'react-native';
import {useState} from 'react';
import {useTheme} from '@emotion/react';
import Icon, {IconType} from '../Icon';

const Container = styled.View<{focused: boolean}>`
  background-color: ${({theme: {color}, focused}) => color.primary[focused ? '5' : '10']};
  border-radius: 6px;
  padding: ${({theme: {spacing}}) => [spacing[16], spacing[12]].join(' ')};
  align-items: center;
  flex-direction: row;
`;

const IconContainer = styled.Pressable`
  width: 24px;
  height: 24px;
`;

const TextInput = styled.TextInput<{focused: boolean}>`
  color: ${({theme: {color}}) => color.primary[100]};
  flex: 1;
  margin-right: ${({theme: {spacing}}) => spacing[12]};
  font-size: ${({theme: {font}}) => font.size[15]};
`;

interface InputProps extends TextInputProps {
  icon?: IconType;
  type?: 'text' | 'password';
}

const Input = ({icon, type = 'text', ...props}: InputProps) => {
  const theme = useTheme();
  const [secure, setSecure] = useState(type === 'password');
  const [focused, setFocus] = useState(false);
  const handleClickIcon = () => (type === 'password' ? setSecure(prev => !prev) : null);
  const focus = () => setFocus(true);
  const blur = () => setFocus(false);

  return (
    <Container focused={focused}>
      <TextInput
        {...props}
        focused={focused}
        onBlur={blur}
        onFocus={focus}
        placeholderTextColor={theme.color.primary[60]}
        secureTextEntry={secure}
      />
      <IconContainer onPress={handleClickIcon}>
        {type === 'password' && <Icon size="m" type={secure ? 'SecureShow' : 'SecureHide'} />}
        {icon && <Icon size="m" type={icon} />}
      </IconContainer>
    </Container>
  );
};

export default Input;
