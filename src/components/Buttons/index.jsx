import styled, { keyframes } from 'styled-components'

function Buttons({startTimer, stopTimer, resetTimer, isRurning}){
  return(
    <Wrapper>
      {!isRurning && <Button onClick={startTimer}>Start</Button>}
      {isRurning && <Button onClick={stopTimer}>Stop</Button>}
      <Button onClick={resetTimer}>Reset</Button>
    </Wrapper>
  )
};

export default Buttons;

const Wrapper = styled.div`
  display:flex;
`;

const hoverButton = keyframes`
  to{
    transform: translate(0, -5px)
  }
`;

const Button = styled.button`
  width:100px;
  height:50px;
  background-color: #32a6a8;
  margin-right:10px;
  border:none;
  outline:none;
  border-radius:10px;
  font-family: Indie;
  font-weight: 900;
  font-size: 20px;
  :hover{
    cursor: pointer;
    animation: ${hoverButton} forwards 1s linear;
  }
`;