import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: 0px;
  background-color: #1e1c1c9e;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  z-index: 900;
  padding: 1rem;

  & > div {
    margin: 0 auto;
    background-color: var(--fixed-white);
    border-radius: 5px;
   
    width: 100%;
    max-width: 800px;
    gap: 2rem;
  }
`;
