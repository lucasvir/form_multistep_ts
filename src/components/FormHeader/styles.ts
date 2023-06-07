import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  margin-bottom: 2.4rem;

  padding-bottom: 3.2rem;

  img {
    width: 2rem;
  }
`;
