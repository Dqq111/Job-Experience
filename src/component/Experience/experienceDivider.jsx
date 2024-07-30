import { Link } from "react-scroll";

export default function ExperienceDivider({
  imgSrc,
  imgDesc,
  description,
  to,
  offset,
}) {
  return (
    <div className="exDivider">
      <Link to={to} offset={offset} smooth duration={500}>
        <img src={imgSrc} alt={imgDesc} />
      </Link>
      <div className="caption">
        <p>{description}</p>
      </div>
    </div>
  );
}
