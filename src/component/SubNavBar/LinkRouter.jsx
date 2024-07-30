import { Link } from "react-router-dom";

export default function LinkRouter({ to, children, ...props }) {
  return (
    <li {...props}>
      <Link to={to} style={{ textDecoration: "none", color: "black" }}>
        {children}
      </Link>
    </li>
  );
}
