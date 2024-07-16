import Button from './components/Button';
import Input from './components/Input';
import {Container, Content, Row} from './styles';

import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber]= useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleOnClear = (number) =>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev =>`${prev === '0' ? '' : prev}${num}`);
  }

  const handleDeleteLastNumber = () => {
    setCurrentNumber(prev => prev.length > 1 ? prev.substring(0, prev.length - 1) : '0');
  }


  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  const handleSubtractionNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const subtract = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtract));
    }
  }

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x')
    }else{
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
    }
  }

  const handleDivisionNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else{
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
    }
  }

  const handlePercentage = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%')
    }else{
      const percentage = Number((currentNumber) / 100) * Number(firstNumber);
      setCurrentNumber(String(percentage));
    }
  }


  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+' :
          handleSumNumbers();
          break;
        case '-':
          handleSubtractionNumbers();
            break;
        case 'x':
              handleMultiplyNumbers();
                break;
        case '/':
              handleDivisionNumbers();
                break;
        case '%':
              handlePercentage();
                break;        
            default: 
              break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>

          <Button label="%" onClick={() => handlePercentage()}/>
          <Button label="C" onClick={() => handleOnClear()}/>
          <Button label="←" onClick={() => handleDeleteLastNumber()}/>

        </Row>
        <Row>

          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={() => handleMultiplyNumbers()}/>

        </Row>
        <Row>

          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => handleSubtractionNumbers()}/>

        </Row>
        <Row>

          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={() => handleSumNumbers()}/>

        </Row>
        <Row>

          <Button label="÷" onClick={() => handleDivisionNumbers('')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={() => handleEquals()}/>

        </Row>
      </Content>
    </Container>
  );
}

export default App;
