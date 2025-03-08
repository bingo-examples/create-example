import { titleCase } from "title-case";
import { createTemplate } from "bingo";
import { z } from "zod";

export const template = createTemplate({
	options: {
		description: z
			.string()
			.default("Example repository created from create-example. 💕")
			.describe("'Sentence case.' description of the repository"),
		owner: z
			.string()
			.describe("GitHub organization or user the repository is underneath"),
		repository: z
			.string()
			.describe("'kebab-case' or 'PascalCase' title of the repository"),
		title: z.string().describe("'Title Case' title for the repository"),
	},
	prepare({ options }) {
		return {
			title: options.repository
				? titleCase(options.repository).replaceAll("-", " ")
				: undefined,
		};
	},
	produce({ options }) {
		return {
			files: {
				".gitignore": "/node_modules\n/lib\n",
				"README.md": `# ${options.title}

${options.description}

## Usage

\`\`\`ts
import { greet } from "${options.repository}";

// Hello, world!
console.log(greet("world"));
\`\`\`

## Contributing

\`\`\`shell
npm i
npm run tsc
\`\`\`

> 💝 This package was templated with [\`create-example\`](https://github.com/bingo-examples/create-example) using the [Bingo engine](https://create.bingo).
`,
				"package.json": JSON.stringify(
					{
						name: options.repository,
						version: "0.0.0",
						description: options.description,
						repository: {
							type: "git",
							url: `git+https://github.com/${options.owner}/${options.repository}.git`,
						},
						type: "module",
						main: "lib/index.js",
						files: ["lib/", "package.json"],
						scripts: {
							tsc: "tsc",
						},
						devDependencies: {
							"@types/node": "22.13.9",
							typescript: "5.8.2",
						},
					},
					null,
					"\t",
				),
				src: {
					"index.ts": `export function greet(name: string) {
    return \`Hello, \${name}!\`;
}
`,
				},
				"tsconfig.json": JSON.stringify(
					{
						compilerOptions: {
							declaration: true,
							esModuleInterop: true,
							module: "NodeNext",
							moduleResolution: "NodeNext",
							outDir: "lib",
							skipLibCheck: true,
							strict: true,
							target: "ES2022",
						},
						include: ["src"],
					},
					null,
					"\t",
				),
			},
			requests: [
				{
					id: "repository-settings",
					async send({ octokit }) {
						await octokit.rest.repos.update({
							description: options.description,
							owner: options.owner,
							repo: options.repository,
						});
					},
				},
			],
		};
	},
});

export default template;

export const { createConfig } = template;
