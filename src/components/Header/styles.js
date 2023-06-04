import styled from 'styled-components';

export const Container = styled.div`
  min-width: 90px;
  z-index: 99;
  position: fixed;
  top: 0;
  padding: 5px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.6s ease-out;
  img {
    width: calc(200px + 20%);
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: space-between;
  gap: 40px;
`;

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 1.85rem;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 4px;
    width: ${(props) => (props['is-active'] === 'true' ? '100%' : '0%')};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    transition: width 0.5s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;
