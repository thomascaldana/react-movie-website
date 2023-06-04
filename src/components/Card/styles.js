import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 30px;
    width: 300px;
    height: 100%;
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;
    font-size: 1.4rem;
    text-align: center;
  }
`;
