import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: white;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 520px) {
    font-size: 1rem;
    padding: 7px 14px;
  }
`;

export const ButtonRed = styled.button`
  ${buttonStyles}
  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    color: white;
    opacity: 0.85;
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyles}

  &:hover {
    background: white;
    color: #ff0000;
  }
`;
