import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
a:link {
  text-decoration: none;
}
html {
  font-size: 62.5%;
  @media (max-width: 800px) {
    font-size: 53%;
  }
}
html,
body,
#root {
}
body {
  background-color: #FCFCFC;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
body,
input,
button,
text{
  font-family: "Open Sans", sans-serif;
}
:root {

}
`;
