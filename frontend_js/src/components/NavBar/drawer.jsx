import React from "react";
import { Link } from 'react-router-dom'
import { MenuList, List, MenuDrawer } from './syles'

export function NavDrawer(props) {
  return (
    <MenuDrawer
      anchor="left"
      open={props.drawerOpened}
      onClose={props.toggleDrawer(false)}
    >
      <List
        onClick={props.toggleDrawer(false)}
        onKeyDown={props.toggleDrawer(false)}
      >
        <MenuList>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/tasks">Todo List</Link>
              </li>
              <li>
                <Link to="/finances">Finances</Link>
              </li>
              <li>
                <Link to="/scanner">Scanner</Link>
              </li>
            </ul>
          </nav>
        </MenuList>
      </List>
    </MenuDrawer>
  );
}