import styled from 'styled-components'
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";

export const MenuBar = styled(AppBar)`
  position: static;
  background: linear-gradient(to right, #ddd, #000);
  color: black;
  .MuiToolbar-root {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    color: #fff;
    background-color: red;
  }
`

export const MenuDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 190px;
  }
`

export const MenuList = styled.aside`
  
  display: flex;
  flex-basis: 200px;

  background: linear-gradient(to top, #ddd, #000); 
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
    background: #ddd;
  }
`

export const List = styled.div`
  display: flex;
`