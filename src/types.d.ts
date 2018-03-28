import { ReactChildren } from "react";

type RestProps = object;

type Breadcrumb = {
  children?: ReactChildren;
  path: string;
  title: string;
  text?: string;
  current?: boolean;
  restProps?: RestProps;
};

export { Breadcrumb, RestProps };
