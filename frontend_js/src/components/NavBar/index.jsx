import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavDrawer } from "./drawer";
import { MenuBar } from './syles'
import { signout } from '../../services/auth'

export function Navbar() {
  
  const [open, setOpen] = useState({drawerOpened: false})
  
  const toggleDrawer = booleanValue => () => {
    setOpen({
      drawerOpened: booleanValue
    });
  };

  const logout = () => {
    signout();
    window.location.href = '/'
  }

  return (
    <div>
      <MenuBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={logout} className="btn">Sair</Button>
        </Toolbar>
      </MenuBar>
      <NavDrawer
        drawerOpened={open.drawerOpened}
        toggleDrawer={toggleDrawer}
      />

    </div>
  ); 
}