import Button from '../Button'
import MenuItem from './MenuItem'
import MenuList from './MenuList'


const NavBar = () => {
  return (
    <nav>
        <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Stories</MenuItem>
            <MenuItem>Sobre</MenuItem>
        </MenuList>
        <Button>Contato</Button>
    </nav>
  )
}

export default NavBar