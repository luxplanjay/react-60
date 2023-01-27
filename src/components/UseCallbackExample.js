import { useCallback } from 'react';
import { memo, useState } from 'react';

const ChildComponent = ({ doStuff }) => {
  console.log(`ChildComponent re-render ${Date.now()}`);
  return <>ChildComponent</>;
};

export const CallbackExample = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(100);

  console.log(`ParentComponent  re-render ${Date.now()}`);

  const doStuff = () => {
    console.log('Doing stuff');
  };

  return (
    <>
      <button onClick={() => setValue(value + 1)}>{value}</button>
      <button onClick={() => setSecondValue(secondValue + 1)}>
        {secondValue}
      </button>
      <ChildComponent onDoStuff={doStuff} />
    </>
  );
};
