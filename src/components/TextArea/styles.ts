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

  textarea {
    height: 10rem;

    font: ${({ theme }) => theme.FONTS.TEXT_R};

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 0.2rem;

    padding: 1.6rem;
    resize: none;

    &:hover {
      border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_MID};
    }

    &::placeholder {
      font: ${({ theme }) => theme.FONTS.TEXT_R};
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
