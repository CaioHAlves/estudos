import styled from 'styled-components'

export const PageTitleStyle = styled.div`
  border-left: 10px solid #000;
  padding: 15px;
  background: #c0c0c0;
  margin-bottom: 40px;
  
  h1 {
    margin: 0;
    font-weight: 400;
    font-size: 35px;
  }

  h2 {
    margin-top: 5px;
    margin-bottom: 0px;
    font-weight: 300;
    font-size: 30px;
  }

  .error{
    border-left: 12px solid #cb2d3e;
    background: #cb2d3e25;
  }

  @media (max-height: 600px) {
    h1 {
      font-size: 22px
    }
    h2 {
      font-size: 6px;
    }
  }
`