import styled, { css } from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 3px;

  position: fixed;
  top: 0;
  right: 0;
  transform: translate(-24px, 150%);
  z-index: 1000;
  cursor: pointer;

  ${({ Open }) =>
    Open &&
    css`
      &:hover div {
        transform: rotate(225deg);
      }
    `};
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  width: 70%;
  height: 3px;
  background-color: #fff;
  border-radius: 3px;
  visibility: visible;
  transition: all 0.5s;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background-color: inherit;
    border-radius: inherit;
    transition: transform 0.5s;
  }

  &::before {
    transform: translateY(-5px);
  }

  &::after {
    transform: translateY(5px);
  }

  ${({ Open }) =>
    Open &&
    css`
      transform: rotate(135deg);
      &::before,
      &::after {
        top: 0;
        transform: rotate(90deg);
      }
    `}
`;
