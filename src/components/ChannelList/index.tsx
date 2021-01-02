import React from 'react';
import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Collumn,
  UserName,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';


const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Collumn>
          <UserName>rocketseat_oficial</UserName>
          <Info> 36 news videos</Info>
        </Collumn>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
