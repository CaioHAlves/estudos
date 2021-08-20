import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 45%;
  
  .scan {
    border: 3px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;

    input {
      margin: 10px 0px 0px 0px
    }
  }
`
export const ExternalDiv = styled.div`
  display: flex; 
`