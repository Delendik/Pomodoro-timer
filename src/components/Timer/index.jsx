import { useState } from 'react';
import styled from 'styled-components'

function Timer({leftTime}){
  const minutes = Math.floor(leftTime/60);

  const seconds = (leftTime - minutes*60).toString().padStart(2, '0');
  
  return(
    <Wrapper>
      <Text>{minutes}</Text>
      <Text>:</Text>
      <Text>{seconds}</Text>
    </Wrapper>
  )
};

export default Timer;

const Wrapper = styled.div`
  display:flex;
  margin-bottom:60px;
`;

const Text = styled.span`
  font-size: 150px;
`;