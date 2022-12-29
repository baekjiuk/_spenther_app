import React from 'react';
import {useQuery} from '@apollo/client';
import {USER} from '../../queries/expenditure';

import styled from '@emotion/native';
import {View} from 'react-native';
import Input from '../Input/base';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Dropdown from '../Dropdown';
import Tag from '../Tag';
import {useTheme} from '@emotion/react';

const TagView = styled.View`
  align-items: flex-start;
`;

const Text = styled.Text`
  color: ${({theme}) => theme.color.secondary[100]};
  font-size: ${({theme}) => theme.font.size[26]};
`;

const List = ({title}: {title: string}) => {
  const {color} = useTheme();
  const res = useQuery(USER);
  console.log(res.error, res.data);
  return (
    <View>
      <Text>{title}</Text>
      <Input type="password" />
      <Input placeholder="1234" />
      <Button label="hi" />
      <Button label="hi" type="ghost" />
      <Checkbox onChange={console.log} label="1234" />
      <Checkbox onChange={console.log} label="1234" type="transparent" />
      <Dropdown value="" placeholder="placeholder" />
      <Dropdown value="1234" placeholder="placeholder" />
      <TagView>
        <Tag bgColor={color.blue[100]} label="tag" labelColor={color.primary[0]} size="s" />
      </TagView>
    </View>
  );
};

export default List;
