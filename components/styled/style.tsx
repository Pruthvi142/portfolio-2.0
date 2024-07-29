"use Client";
import Box from "@mui/material/Box/Box";
import styled, { css } from "styled-components";

export const NavBox = styled(Box)`
  :hover {
    border-radius: 5px;
    box-shadow: 0px 5px 15px #00215e;
    color: #ffff;
    background-color: #00215e;
  }
`;
export const Nav = styled.div`
  :hover {
    border-radius: 5px;
    box-shadow: 0px 5px 15px #00215e;
    color: #ffff;
    background-color: #00215e;
  }
`;

export const FlexBox = styled(Box)`
  display: flex;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const List = styled.li`
  padding-bottom: 4px;
  font-size: small;
  color: rgb(85, 85, 85);
`;

export const ImageBox = styled(FlexColumn)`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  margin-left: 1rem;

  div {
    width: 100px;
    height: 100px;
    border-radius: 50%;

    background: var(--white-color);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }

  div:nth-child(1) {
    width: 100px;
    height: 100px;
  }

  div:nth-child(2) {
    margin: 1.75rem;
    width: 150px;
    height: 150px;
  }

  div:nth-child(3) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 2000px) {
    div:nth-child(2) {
      width: 400px;
      height: 400px;
    }

    div:nth-child(3) {
      width: 170px;
      height: 170px;
    }

    div:nth-child(1) {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0;

    div {
      margin: 1rem;
    }
  }
`;
export type Typography = "h1" | "h2" | "p1" | "p2" | "subtitle" | "h3";

export const StyledText = styled.p<{ tag: Typography }>`
  ${({ tag }) => {
    switch (tag) {
      case "h1":
        return css`
          font-size: 2rem;
          text-align: center;
          font-weight: 600;
          color: black;
          margin: 0px;
        `;
      case "h2":
        return css`
          font-size: 1.75rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: rgb(85, 85, 85);
          text-align: center;
          margin: 0px;
        `;
      case "h3":
        return css`
          font-size: medium;
          font-weight: 600;
          color: rgb(85, 85, 85);
          margin: 0px;
        `;
      case "p1":
        return css`
          font-weight: 600;
          color: rgb(85, 85, 85);
          text-align: center;
          margin: 0px;
        `;
      case "p2":
        return css`
          color: rgb(85, 85, 85);
          margin: 0px;
        `;
      case "subtitle":
        return css`
          font-size: larger;
          font-weight: 600;
          color: black;
          margin: 0px;
        `;
    }
  }}
`;
