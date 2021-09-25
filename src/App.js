import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from './component/button';
import Display from './component/display';
function App() {
  const [value, setValue] = useState('');

  const handleClick = (val) => {
    evaluate(val);
  };
  const evaluate = (val) => {
    if (val === '=') {
      let displayValue = eval(value);
      setValue(displayValue);
    } else {
      let displayValue = value + val;
      setValue(displayValue);
    }
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Project 1</h1>
      <h3>Calculator</h3>
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alingnItems: 'center',
        }}
      >
        <div style={{ width: 207, backgroundColor: 'blue', padding: 20 }}>
          <Display
            containerStyle={{
              padding: 20,
              margin: 10,
              backgroundColor: 'black',
              color: 'white',
            }}
            value={value}
          />
          <div>
            <Button
              label={'9'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'8'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'7'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'+'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
          </div>
          <div>
            <Button
              label={'6'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'5'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'4'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'-'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
          </div>
          <div>
            <Button
              label={'3'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'2'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'1'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'/'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
          </div>
          <div>
            <Button
              label={'.'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'0'}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={'='}
              onClick={handleClick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button label={'*'} onClick={handleClick} style={styles.button} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  button: { padding: 10, margin: 10 },
};

export default App;
