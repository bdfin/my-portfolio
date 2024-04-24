import { NavLink as ReactNavLink } from "react-router-dom";

interface Props {
  children: string;
  to: string;
  className?: string | null;
}

export default function NavLink({ children, to, className }: Props) {
  const defaultStyles = "text-sm font-semibold leading-6";
  const styles = className ? className : defaultStyles;

  return (
    <ReactNavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles} underline underline-offset-2` : styles
      }
    >
      {children}
    </ReactNavLink>
  );
}
