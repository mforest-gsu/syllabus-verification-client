import type { LinkTypeMap } from "@mui/material";
import type { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { useSearchParams, NavLink as RouterLink } from "react-router-dom";
import { default as MuiLink } from "@mui/material/Link";

export declare type LinkProps<
  D extends React.ElementType = LinkTypeMap["defaultComponent"],
  P = {
    innerRef?: React.ForwardedRef<HTMLAnchorElement>;
    to?: string;
    href?: string;
    useParams?: boolean;
  }
> = OverrideProps<LinkTypeMap<P, D>, D>;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <InnerLink {...props} innerRef={ref} />
));
Link.displayName = "Link";

export default Link;

function InnerLink({
  innerRef,
  to,
  href,
  useParams,
  style,
  children,
  ...props
}: LinkProps): JSX.Element {
  const [urlParams] = useSearchParams();

  let url = to ?? href ?? "";
  const params = urlParams.toString();
  if (useParams === true && params !== "") {
    url += (url.includes("?") ? "&" : "?") + params;
  }

  const myProps = {
    ...props,
    ref: innerRef,
    style: { color: "#126fcb", ...(style ?? {}) },
    to: to ? url : undefined,
    component: to ? RouterLink : undefined,
    href: href ? url : undefined,
  };

  return <MuiLink {...myProps}>{children}</MuiLink>;
}
