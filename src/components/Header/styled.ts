import styled from "styled-components";

export const HeaderStyled = styled.section`
  width: 100%;
  height: 100px;
  background-color: #7259c1;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 90%;
    margin: 0 auto;
    height: 100px;
    justify-content: space-evenly;
    align-items: center;
  }

  a {
    color: var(--grey-0);
    background-color: var(--grey-2);
    border: none;
    font-size: 20px;
    border-radius: 5px;
    padding: 0.56rem 1rem;
    text-decoration: none;
  }

  button {
    color: var(--grey-0);
    background-color: var(--grey-2);
    border: none;
    height: 2.5rem;
    font-size: 1.25rem;
    border-radius: 5px;
    padding: 0px 15px;
  }

  a:hover,
  button:hover {
    background-color: var(--grey-4);
  }

  @media (max-width: 428px) {
    height: 130px;

    ul {
      height: 120px;
    }
  }
`;
