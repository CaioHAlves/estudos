import { useState } from 'react';
import { Link } from 'react-router-dom'
import { IconButton, Drawer, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ListStyle, List, MenuList } from './styles.module'

interface DrawerProps {
  anchor: 'top' | 'left' | 'bottom' | 'right'
}

export function Menu({anchor}: DrawerProps) {
  const [open, setOpen] = useState({ drawerOpened: false })

  const toggleDrawer = (booleanValue: boolean) => () => {
    setOpen({
      drawerOpened: booleanValue
    });
  };

  return (
    <div>
      <IconButton
        edge="start"
        className="Menu-Button"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={anchor}
        open={open.drawerOpened}
        onClose={toggleDrawer(false)}
      >
        <ListStyle className="List">
          <List>
            <MenuList>
              <nav>
                <ul>
                  <Divider />
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <Divider />
                </ul>
              </nav>
            </MenuList>
          </List>
        </ListStyle>
      </Drawer>
    </div>
  );
}

export default Menu