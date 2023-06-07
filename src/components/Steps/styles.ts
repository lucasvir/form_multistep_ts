import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    border-radius: 50%;

    font: 700 1.4rem/2.1rem "IBM Plex Sans";
    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: ${({ theme }) => theme.COLORS.PURPLE_MID};

    padding: 0.8rem 1.6rem;
  }

  p {
    font: 700 1.6rem/2.4rem "IBM Plex Sans";
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }


`;
