import { useDebounce } from '@/hooks/debounce';
import React, { useEffect, useState } from 'react';

const Index = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue) {
      console.log(debouncedValue);
    }
  }, [debouncedValue]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ChangeEvent');
    setValue(event.target.value);
  };
  return (
    <>
      <p>Debounce</p>
      <input value={value} onChange={onChange} />
    </>
  );
};
export default Index;
