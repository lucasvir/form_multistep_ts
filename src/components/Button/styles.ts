import { styled } from "styled-components";

export const Container = styled.button`
  width: 15.8rem;
  height: 5.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font: ${({ theme }) => theme.FONTS.TEXT_B};

  border: none;
  border-radius: 0.6rem;

  padding: 1.6rem 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_MID};

  transition: ease-in-out 0.2s;

  text-transform: uppercase;

  &:hover {
    filter: none;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  }

  .ghost {
    color: ${({ theme }) => theme.COLORS.PURPLE_MID};
    font: ${({ theme }) => theme.FONTS.TEXT_B};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
