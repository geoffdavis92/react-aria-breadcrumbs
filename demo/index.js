import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import {
	Basecrumb,
	Breadcrumb,
	BreadcrumbNav
} from "./react-aria-breadcrumbs.esm";

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

const paths = [
	{ path: "/", text: "Home" },
	{ path: "/foo", text: "Page 1" },
	{ path: "/bar", text: "Page 2" }
];

const displayPath = ({ match }) => {
	const matchedPath = match.params.path;
	console.log(matchedPath);
	const message = matchedPath ? matchedPath : "Home";
	const syncedPaths = [];

	for (let i = 0; i < paths.length; i++) {
		syncedPaths.push(paths[i]);
		if (paths[i].path === `/${matchedPath ? matchedPath : ""}`) {
			break;
		}
	}

	return (
		<React.Fragment>
			<BreadcrumbNav>
				{syncedPaths.map(({ path, text }, i, allPaths) => {
					if (i === 0)
						return (
							<Basecrumb
								path={path}
								current={i === allPaths.length - 1}
								key={path}
							>
								{text}
							</Basecrumb>
						);
					return (
						<Breadcrumb
							path={path}
							current={i === allPaths.length - 1}
							key={path}
						>
							{text}
						</Breadcrumb>
					);
				})}
			</BreadcrumbNav>
			<h1>{message}</h1>
		</React.Fragment>
	);
};

ReactDOM.render(
	<StyleWrapper>
		<Router>
			<Switch>
				<Route exact path="/" render={displayPath} />
				<Route path="/:path" render={displayPath} />
			</Switch>
		</Router>
	</StyleWrapper>,
	document.getElementById("app")
);
