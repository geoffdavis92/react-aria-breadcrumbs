import { ReactChildren } from "../node_modules/@types/react/index";

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
