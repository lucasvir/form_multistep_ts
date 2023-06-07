import { styled } from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;

  #button-wrapper {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      margin-top: 3.2rem;
    }
  }
`;
