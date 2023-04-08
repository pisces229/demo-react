import styled, { css } from 'styled-components';

const CssInput = css`
  color: red;
  font-size: small;
`;
const StyledInput = styled.input`
  color: blue;
  font-size: medium;
`;
const StyledInputText = styled.input.attrs({
  type: 'text',
})`
  ${CssInput}
  font-weight: bold;
`;

const Index = (props: { message: string }) => {
  return (
    <>
      <input
        className={StyledInput.toString()}
        type="text"
        defaultValue={props.message}
      />
      <StyledInputText defaultValue={props.message} />
    </>
  );
};
export default Index;
