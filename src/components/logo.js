/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...otherProps }) {
  return (
    <Link
      path={"/"}
      sx={{
        width: "150px",
        variant: "link.logo",
        dispaly: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...otherProps}
    >
      <Image src={src} alt="logo du site internet african" />
    </Link>
  );
}
