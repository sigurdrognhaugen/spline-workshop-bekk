import Spline from "@splinetool/react-spline";
import { Center, Text } from "@chakra-ui/react";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/9WbkNC19UHvdk7ta/scene.splinecode"
        />
        <div className="overlay container">
          <Center>
            <Text fontSize="150px" color="white">
              Spline 🤠
            </Text>
          </Center>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  height: 100vh;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }

  .container {
    position: relative;
  }

  .overlay {
    z-index: 1;
  }
`;

export default App;
