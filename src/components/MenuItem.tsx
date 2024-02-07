// для того чтобы страница не перерендеривалась при изменении состояния ссылки + класс active
import { NavLink } from "react-router-dom";

// типизация пропсов
import { IMenuItemProps } from "../type/IMenuitemprops";

/**
 * Renders a MenuItem component with the provided label and link.
 *
 * @param {IMenuItemProps} label - The label for the menu item
 * @param {IMenuItemProps} link - The link for the menu item
 * @return {JSX.Element} The rendered MenuItem component
 */
const MenuItem = ({ label, link }: IMenuItemProps) => {
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "menu__item-active" : "menu__item";
  return (
    <li>
      <NavLink className={active} to={link}>
        {label}
      </NavLink>
    </li>
  );
};

export default MenuItem;
