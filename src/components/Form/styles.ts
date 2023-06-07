import { styled } from "styled-components";

export const Container = styled.form`
  width: 59.2rem;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 0.6rem;

  padding: 3.2rem;
  margin: 0 auto;
  margin-top: 4.2rem;

  #button-wrapper {
    display: flex;
    justify-content: end;

    button {
      margin-top: 3.2rem;
      justify-self: end;
      align-self: flex-end;
    }
  }
`;
