import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from "styled-components";
import { DemoStyledTextbox } from "./demo-styled-textbox";
import { DemoStyledCheckbox } from "./demo-styled-checkbox";
// styled
// const defaultCss = css`
//   font-size: medium;
// `;
// const defaultStyled = css`
//   font-size: medium;
// `;
// console.log(defaultCss);
// console.log(defaultStyled);
const firstColor = "red";
const firstFontSize = "small";
const FirstHead1 = styled.h1`
  color: ${firstColor};
  font-size: ${firstFontSize};
`;
const FirstHead2 = styled.h1`
  color: ${firstColor};
  font-size: ${firstFontSize};
`;
const FirstHead3 = styled.h1`
  color: ${(props: { firstColor: string }) => props.firstColor};
  font-size: ${firstFontSize};
`;
// const FirstDiv = styled.div({
//   background: 'palevioletred',
//   height: '50px',
//   width: '50px'
// });
const sharedFont = css`
  font-size: medium;
  font-weight: bold;
`;
const SecondHead1 = styled(FirstHead1)`
  ${sharedFont}
`;
const SecondHead2 = styled(FirstHead2)`
  ${sharedFont}
`;
const SecondHead3 = styled(FirstHead3)`
  ${sharedFont}
`;
const CreateInput = styled.input.attrs((props: { size?: string }) => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
// ThemeProvider
const Box = styled.div`
  color: ${(props) => props.theme.color};
`;
Box.defaultProps = {
  theme: {
    color: "red",
  },
};
// GlobalStyle
const GlobalStyle = createGlobalStyle`
  h4 {
    color: ${(props: { whiteColor: boolean }) =>
      props.whiteColor ? "white" : "black"};
    background-color: ${(props: { whiteColor: boolean }) =>
      !props.whiteColor ? "white" : "black"};
  }
`;

export function DemoStyleApp() {
  return (
    <>
      {/* styled */}
      <FirstHead1>FirstHead1</FirstHead1>
      <FirstHead2 as="h2">FirstHead2</FirstHead2>
      <FirstHead3 as={FirstHead2} firstColor="green">
        FirstHead3
      </FirstHead3>
      <SecondHead1>SecondHead1</SecondHead1>
      <SecondHead2>SecondHead2</SecondHead2>
      <SecondHead3 firstColor="green">SecondHead3</SecondHead3>
      <CreateInput size="5em" defaultValue="hello"></CreateInput>
      <br />
      <DemoStyledTextbox message="hello"></DemoStyledTextbox>
      <br />
      <DemoStyledCheckbox></DemoStyledCheckbox>
      <br />
      <h2>ThemeProvider</h2>
      <Box>I am mediumseagreen!</Box>
      <ThemeProvider theme={{ color: "mediumseagreen" }}>
        <Box>I am mediumseagreen!</Box>
      </ThemeProvider>
      <h2>GlobalStyle</h2>
      <GlobalStyle whiteColor={true} />
      <h4>@@@@@</h4>
    </>
  );
}
