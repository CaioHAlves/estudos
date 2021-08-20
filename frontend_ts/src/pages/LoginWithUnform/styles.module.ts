import styled from 'styled-components'

export const ExternalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
`

export const FormContent = styled.div`
  width: 100%; // Fix IE 11 issue.
  margin-top: 8px;
  display: flex;
  justify-content: center;
`

export const Box = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
   
  .btn {
    width: 90%;
    margin-bottom: 15px
  }
`