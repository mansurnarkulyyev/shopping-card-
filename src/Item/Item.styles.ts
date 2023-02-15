import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  border-radius: 20px;
  height: 100%;


  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;

  }
  &:hover {
  transition: all .3s;
  box-shadow: 5px 5px 70px 17px #00000040;
  }
`;
