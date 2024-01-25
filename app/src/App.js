import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const StyledApp = styled.div(`
  width: 100%;
`);

function App() {
  return (
    <StyledApp>
      <Header />
      <Content />
      <Footer />
    </StyledApp>
  );
}

export default App;
