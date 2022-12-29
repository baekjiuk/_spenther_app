import React, {PropsWithChildren} from 'react';
import styled from '@emotion/native';

interface Props {
  bgColor: string;
  label: string;
  labelColor: string;
  size: 'l' | 's';
}

const Container = styled.View<Pick<Props, 'bgColor' | 'size'>>`
  align-items: center;
  background-color: ${({bgColor}) => bgColor};
  padding: ${({size, theme: {spacing}}) => [spacing[size === 'l' ? 4 : 2], spacing[8]].join(' ')};
  border-radius: 1000px;
  flex-direction: row;
`;
const Text = styled.Text<Pick<Props, 'size' | 'labelColor'>>`
  color: ${({labelColor}) => labelColor};
  font-size: ${({size, theme: {font}}) => font.size[size === 'l' ? 14 : 12]};
`;

const Tag = ({children, bgColor, label, labelColor, size}: PropsWithChildren<Props>) => {
  return (
    <Container bgColor={bgColor} size={size}>
      <Text labelColor={labelColor} size={size}>
        {label}
      </Text>
      {children}
    </Container>
  );
};

export default Tag;
