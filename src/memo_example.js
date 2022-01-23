import React, { useState, memo } from 'react';

const MemoDisplay = memo((props) => {
  console.log(props);
  console.log('Memo Display rendered');
  return (
    <>
      <div>Memo Display {props.greetMsg}</div>
    </>
  );
}, (prevProps, nextProps) => {
  console.log('Prepprops...',prevProps);
  console.log('Nextpropss...',nextProps);
  if(prevProps.count !== nextProps.count) {
    return false
  }
  return true
});

export function MemoExample() {
  const greeting = 'Hi';
  let [count, setCount] = useState(0);
  let [year,setYear] = useState(2022)
  return (
    <div>
      <h2>Memo Example</h2>
      <div>The count value is {count}</div>
      <div>The year value is {year}</div>
      <button onClick={() => setCount(++count)}>Increment Count</button>
      <button onClick={() => setYear(++year)}>Increment Year</button>
      <MemoDisplay greetMsg={greeting} count={count} year={year} />
    </div>
  );
}
