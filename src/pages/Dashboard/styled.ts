import styled from "styled-components";

export const DashboardStyled = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin: 10px auto;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow: auto;
    margin-left: 10px;
  }
`;

export const DivStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 30px auto;
`;
