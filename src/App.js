import React, {useEffect, useState} from 'react';
import './App.css';


import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/core/SwitchUnstyled';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #b3c3d3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 14px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #007fff;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

function App() {
  const [isType, setIsType] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div className="App">
      <h1>BP 계산기</h1>
      <FormControlLabel control={<SwitchUnstyled component={Root} sx={{ m: 1 }} checked={isType} onChange={(e) => {setIsType(e.target.checked)}} defaultChecked />} label="1.25 또는 1.2" />
      

      <p>(199+{<TextField label="x" type={"number"} value={x} onChange={(e) => {setX(e.target.value)}}/>})×{isType ? '1.2' : '1.25'}×{<TextField label="y" type={"number"}  value={y} onChange={(e) => {setY(e.target.value)}}/>}÷60000</p>
      <p>{((199 + x) * (isType ? 1.2 : 1.25) * y / 60000).toFixed(3)}</p>
    </div>
  );
}

export default App;
