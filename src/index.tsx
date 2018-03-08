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

const Basecrumb = ({
	children,
	path,
	title,
	text,
	current,
	...restProps
}: Crumb) => {
	return (
		<li aria-current={current ? "page" : null} {...restProps}>
			<a
				href={current ? null : path}
				title={title}
				aria-current={current ? "page" : null}
			>
				{children ? children : text}
			</a>
		</li>
	);
};

const Breadcrumb = ({
	children,
	path,
	title,
	text,
	current,
	...restProps
}: Crumb) => {
	return (
		<li {...restProps}>
			<a
				href={current ? null : path}
				title={title}
				aria-current={current ? "page" : null}
			>
				{children ? children : text}
			</a>
		</li>
	);
};

export { Basecrumb, Breadcrumb, BreadcrumbNav };
