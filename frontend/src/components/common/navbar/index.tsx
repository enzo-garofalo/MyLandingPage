import Button from '../Button';
import MenuItem from './MenuItem';
import MenuList from './MenuList';

type MenuLink = {
  label: string;
  href: string;
};

type NavBarProps = {
  items: MenuLink[];
  showContact : boolean;
  ctaLabel?: string; // texto do botão (ex: "Contato")
  onCtaClick?: () => void; // ação do botão
};

const NavBar = ({ items, showContact, ctaLabel, onCtaClick }: NavBarProps) => {
  return (
    <nav>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index}>
            <a href={item.href}>{item.label}</a>
          </MenuItem>
        ))}
      </MenuList>

      {showContact && ctaLabel && (
        <Button onClick={onCtaClick}>{ctaLabel}</Button>
      )}
    </nav>
  );
};

export default NavBar;