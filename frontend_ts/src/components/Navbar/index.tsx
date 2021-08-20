import { Button, Toolbar } from '@material-ui/core'
import { MenuBar } from './styles.module'
import { signout } from '../../services/auth'
import { Menu } from './drawer'

export function Navbar() {

  return (
    <MenuBar>
      <Toolbar className="Toolbar">
        <Menu anchor="left"/>
        <Button
          color="secondary"
          onClick={() => signout()}
          variant="contained"
        >
          Logout
        </Button>
      </Toolbar>
    </MenuBar>
  );
}

export default Navbar;