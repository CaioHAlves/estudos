import styled from 'styled-components'
import { AppBar } from '@material-ui/core'

export const MenuBar = styled(AppBar)`
  position: static;
  
  .Toolbar{
    justify-content: space-between;
  }
`

export const ListStyle = styled.div`
  background-color: #3f51b5;
  color: white;
  width: 150px;
  height: 100vh;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  
`

export const MenuList = styled.aside`
  display: flex;
  flex-basis: 200px;

  background: #3f51b5; 
  height: 100vh;

  nav {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;  
    padding: 0;
  }

  li {
    display: flex;
    margin-top: 7px;
  }

  li a {
    flex: 1;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;

    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  li a:hover {
    color: black;
    background: #1e36b7;
  }
`

export const List = styled.div`
  display: flex;
`