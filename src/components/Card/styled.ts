import React from "react";
import styled from "styled-components";

export const StyleCard = styled.section`
  width: 230px;
  margin: 0 auto;
  border: 3px solid var(--grey-2);
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  background-color: var(--grey-3);
  margin-bottom: 15px;

  &:hover {
    border: 3px solid var(--color-primary);
  }

  img {
    width: 100%;
    border-radius: 10px;
    min-height: 200px;
    max-height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    color: var(--grey-0);
  }

  p {
    color: var(--grey-0);
    font-size: 15px;
  }

  .description {
    max-width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }

  .description::after {
    content: "...";
  }

  .center-card {
    display: flex;
    justify-content: left;
    gap: 10px;
  }
  .bottom-card {
    display: flex;
    justify-content: space-between;
  }

  .bottom-card div {
    display: flex;
    gap: 12px;
  }

  svg {
    color: var(--grey-0);
    scale: 1.2;
    cursor: pointer;
  }
`;
