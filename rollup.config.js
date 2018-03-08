import babel from "rollup-plugin-babel";
import ts from "rollup-plugin-typescript2";

const { NODE_ENV } = process.env;

export default [
	{
		input: "src/index.tsx",
		plugins: [ts(), babel()],
		external: ["react"],
		output: [
			{
				file: "dist/react-aria-breadcrumbs.js",
				format: "iife",
				name: "ReactAriaBreadcrumbs",
				globals: { react: "React" },
				exports: "named"
			},
			{
				file: "dist/react-aria-breadcrumbs.cjs.js",
				format: "cjs",
				exports: "named"
			},
			{
				file: "dist/react-aria-breadcrumbs.esm.js",
				format: "es",
				exports: "named"
			},
			{
				file: "demo/react-aria-breadcrumbs.esm.js",
				format: "es",
				exports: "named"
			}
		]
	}
];
