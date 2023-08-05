import styled from "styled-components";

export const HeaderStyled = styled.section`
  width: 100%;
  height: 100px;
  background-color: #7259c1;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }

  h2 {
    font: var(--font-title-1);
    color: var(--grey-0);
    /* width:300px; */
    text-align: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    width: 90%;
    margin: 0 auto;
    height: 100px;
    justify-content: right;
    align-items: center;
    max-width: 1200px;
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

  @media (max-width: 768px) {

    h2 {
      font-size:20px;
    }
     ul{
      gap:10px;
     }
  }

  @media (max-width: 475px) {
    height: 150px;
    display:flex;
    align-items:center;

    h2 {
      font-size:22px;
      margin: 0 6px;
    }

    ul {
      height: 120px;
    }

    button{
      height: 2.7rem;
      font-size:16px;
    }
  }
`;
