import styled from 'styled-components'

export const Container = styled.div`
  .input {
    background-color: rgba(255, 255, 255, 0.336);
    position: relative;
    margin-top: -40px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 1;
    border: none;
  }
  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    height: 40px;
  }

  .placeholder {
    height: 40;
  }
`