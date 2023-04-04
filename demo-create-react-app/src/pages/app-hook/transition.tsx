import React, { useEffect, useState, useTransition } from 'react';

const Index = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [transition, startTransition] = useTransition();
  useEffect(() => {
    console.log(`[second]:[${second}]`);
  }, [second]);
  useEffect(() => {
    console.log(`[first]:[${first}]`);
  }, [first]);
  useEffect(() => {
    console.log(`[second]:[${second}]`);
  }, [second]);
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`1`);
    startTransition(() => {
      console.log(`2`);
      setSecond(() => event.target.value);
      console.log(`3`);
    });
    console.log(`4`);
    setFirst(() => event.target.value);
    console.log(`5`);
  };
  return (
    <>
      <h3>Transition</h3>
      <p>[first]:[{first}]</p>
      <p>[second]:[{second}]</p>
      <input type="text" onChange={onChange} />
      <br />
      {Array(5000)
        .fill(0, 0, 5000)
        .map((item, index) => (
          <p key={index}>{first}</p>
        ))}
      {/* {Array(5000).fill(0, 0, 5000).map((item, index) => (<p key={index}>{second}</p>))} */}
    </>
  );
};
export default Index;
