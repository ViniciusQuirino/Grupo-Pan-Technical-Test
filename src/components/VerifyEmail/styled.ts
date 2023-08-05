import styled from "styled-components";

export const StyledVerify = styled.div`
  width: 100%;
  height: 30px;
  background-color: var(--grey-1);

  p {
    text-align: center;
    color: var(--grey-0);
    padding-top: 5px;
  }

  @media (max-width: 425px) {
    height: 45px;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
`;
