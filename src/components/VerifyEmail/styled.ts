import styled from "styled-components";

export const StyledVerify = styled.div`
  width: 100%;
  height: 30px;
  background-color: var(--grey-1);
  text-align: center;

  p {
    text-align: center;
    color: var(--grey-0);
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 425px) {
    height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`;
