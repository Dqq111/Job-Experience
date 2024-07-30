import { Link } from "react-scroll";

export default function NavLinkScroll({ to, offset, children, ...props }) {
  return (
    <li {...props}>
      <Link to={to} offset={offset} smooth duration={500}>
        {children}
      </Link>
    </li>
  );
}
