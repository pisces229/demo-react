import { useState } from 'react';
import styled from 'styled-components';
import RocDatepicker from '../../components/roc-datepicker';

const LeftContainer = styled.div`
  text-align: left;
`;
const RightContainer = styled.div`
  text-align: right;
`;

const Index = () => {
  const [value, setValue] = useState('');
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <>
      <div>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</div>
      <RocDatepicker value={value} disabled={true} hidden={false} onChange={onChange}></RocDatepicker>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LeftContainer>
        <RocDatepicker value={value} disabled={false} hidden={false} onChange={onChange}></RocDatepicker>
      </LeftContainer>
      <RightContainer>
        <RocDatepicker value={value} disabled={false} hidden={false} onChange={onChange}></RocDatepicker>
      </RightContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <RocDatepicker value={value} disabled={false} hidden={false} onChange={onChange}></RocDatepicker>
      <div>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</div>
    </>
  );
};
export default Index;
