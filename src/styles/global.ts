import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
        font-size: 62.5%;
    }

    * {
        font-size: 1.6rem;

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    } 
    

    /* --- CLASS --- */
    
    .disable {
    span {
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .active {
    span {
      background-color: ${({ theme }) => theme.COLORS.SUCESS};
    }
  }

  .ghost {
    color: ${({ theme }) => theme.COLORS.PURPLE_MID};
    font: ${({ theme }) => theme.FONTS.TEXT_B};
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_MID};
  }
`;
