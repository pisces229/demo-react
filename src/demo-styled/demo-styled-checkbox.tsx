import styled, { css } from 'styled-components';

const StyledLabelContainer = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;
const StyledInput = styled.input.attrs({
  type: 'checkbox',
})``;
const StyledLabel = styled.span`
  ${(props: { mode?: string }) => {
    switch (props.mode) {
      case 'dark':
        return css`
          background-color: black;
          color: white;
          ${StyledInput}:checked + && {
            color: blue;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${StyledInput}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;

export function DemoStyledCheckbox() {
  return (
    <>
      <StyledLabelContainer>
        <StyledInput defaultChecked />
        <StyledLabel>Foo</StyledLabel>
      </StyledLabelContainer>
      <StyledLabelContainer>
        <StyledInput defaultChecked />
        <StyledLabel mode="dark">Foo</StyledLabel>
      </StyledLabelContainer>
      <StyledLabelContainer>
        <StyledInput defaultChecked />
        <StyledLabel>Foo</StyledLabel>
      </StyledLabelContainer>
      <StyledLabelContainer>
        <StyledInput defaultChecked />
        <StyledLabel mode="dark">Foo</StyledLabel>
      </StyledLabelContainer>
    </>
  );
}
