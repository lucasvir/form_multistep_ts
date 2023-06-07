import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  label {
    font: ${({ theme }) => theme.FONTS.TEXT_B};
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  input {
    height: 5.6rem;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: .2rem;

    padding: 1.6rem;

    &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_MID};

    }

    &::placeholder {
      font: ${({ theme }) => theme.FONTS.TEXT_R};
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
