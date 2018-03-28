import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Breadcrumb, BreadcrumbNav } from "./react-aria-breadcrumbs.esm";

const StyleWrapper = styled(`main`)`
	.react-aria-breadcrumbs {
		color: #333;
		font-family: 'Roboto Slab','Roboto','Arial',sans-serif;
		ol {
			background-color: #efefef;
			display: flex;
			list-style-type: none;
			padding: 1em;
		li {
			&:after {
				content:" / ";
				margin: 0 .5em 0 .25em;
			}
			&:last-of-type:after {
				content: "";
			}
			a { 
				color: #0a46fa;
			}
			&[aria-current]{
				&:after {
					content: none
				}
				a{color:#333;}
			}
		}
	}
`;

const _paths = [
	{ path: "/", text: "Home" },
	{ path: "/foo", text: "Page 1" },
	{ path: "/bar", text: "Page 2" }
];

const displayPath = ({ match }) => {
	const matchedPath = match.params.path;
	const [pathString] = Object.values(match.params);
	const splitPath = pathString.split("/");
	const paths = pathString.length
		? splitPath.map((p, i, allPaths) => ({
				path: `/${pathString.substr(0, pathString.lastIndexOf(p))}${p}`,
				text: p
		  }))
		: false;
	const message = pathString ? pathString : "Home";

	return (
		<React.Fragment>
			{paths && (
				<BreadcrumbNav>
					{paths.map(({ path, text }, i, allPaths) => (
						<Breadcrumb
							path={path}
							current={i === allPaths.length - 1}
							key={path}
						>
							{text}
						</Breadcrumb>
					))}
				</BreadcrumbNav>
			)}
			<h1>{message}</h1>
		</React.Fragment>
	);
};

ReactDOM.render(
	<StyleWrapper>
		<Router>
			<Switch>
				<Route path="/*" render={displayPath} />
				<Route exact path="/" render={displayPath} />
			</Switch>
		</Router>
	</StyleWrapper>,
	document.getElementById("app")
);
