import * as React from "react";
import { ReactElement, ReactHTMLElement, ReactChildren } from "react";
import { Breadcrumb as Crumb, RestProps } from "./types.d";

const BreadcrumbNav = ({
  children,
  ...restProps
}: {
  children?: ReactChildren;
  restProps?: RestProps;
}) => (
  <nav
    className="react-aria-breadcrumbs"
    aria-label="breadcrumbs"
    role="navigation"
    {...restProps}
  >
    <ol>{children}</ol>
  </nav>
);

const Breadcrumb = ({
  children,
  path,
  title,
  text,
  current,
  ...restProps
}: Crumb) => (
  <li {...restProps}>
    <a
      href={current ? "#current" : path}
      title={current ? `current page` : title}
      aria-current={current ? "page" : null}
    >
      {children ? children : text}
    </a>
  </li>
);

export { Breadcrumb, BreadcrumbNav };
