import styled from 'styled-components'
import Timer from '../Timer'
import Buttons from '../Buttons'
import { useState, useRef } from 'react';

function App() {
  const [leftTime, setLeftTime] = useState(25*60);
  const [title, setTitle] = useState("Let's go!");
  const [isRurning, setIsRunning] = useState(false);
  const stopTimeRef = useRef(null)
  

  const startTimer = () =>{
    if(stopTimeRef.current !== null) return;
    stopTimeRef.current = setInterval(()=>{
      setLeftTime(leftTime => {
        if (leftTime>=1) return (leftTime-1);
        resetTimer();
        return 0;
      });
    }, 1000);
    setTitle("Stop if you want :(");
    setIsRunning(true);
  };

  const stopTimer = () =>{
    if(stopTimeRef.current === null) return;
    clearInterval(stopTimeRef.current);
    stopTimeRef.current = null;
    setTitle("You can go on!");
    setIsRunning(false);
  };

  const resetTimer = () =>{
    clearInterval(stopTimeRef.current);
    setLeftTime(25*60);
    setTitle("Let's go!");
    setIsRunning(false);
  };
  
  return (
    <Wrapper>
      <Header>Pomodoro!</Header>
      <Title>{title}</Title>
      <Timer leftTime={leftTime} />
      <Buttons startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} isRurning={isRurning} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height:100vh;
  background-color: #ed7d7b;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Title = styled.h3`
  font-family: Hachi;
  font-size: 40px;
`;

const Header = styled.h2`
  font-size:80px;
  font-family: Hachi;
  margin-bottom: 20px;
`;