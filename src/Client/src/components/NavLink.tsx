import { NavLink as ReactNavLink } from "react-router-dom";

interface Props {
  children: string;
  to: string;
  className?: string | null;
  onClick?: () => void;
}

export default function NavLink({ children, to, className, onClick }: Props) {
  const defaultStyles = "text-base font-semibold leading-6 hover:text-gray-300";
  const styles = className ? className : defaultStyles;

  return (
    <ReactNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? `${styles} underline underline-offset-4` : styles
      }
    >
      {children}
    </ReactNavLink>
  );
}
