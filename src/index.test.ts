import { describe, expect, it, test } from "vitest";
import { testOptions, testTemplate } from "bingo-testers";

import { template } from "./index.js";

describe("template", () => {
	describe("options", () => {
		it("bases title on repository when title is not provided", async () => {
			const repository = "abc-def";

			const actual = await testOptions(template, {
				options: { repository },
			});

			expect(actual).toEqual({
				repository,
				title: "Abc Def",
			});
		});
	});

	test("production", async () => {
		const creation = await testTemplate(template, {
			options: {
				description: "Example repository created from create-example. 💕",
				owner: "bingo-examples",
				repository: "example-repository",
				title: "Example Repository (Testing)",
			},
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "files": {
			    ".gitignore": "/node_modules
			/lib
			",
			    "README.md": "# Example Repository (Testing)

			Example repository created from create-example. 💕

			## Usage

			\`\`\`ts
			import { greet } from "example-repository";

			// Hello, world!
			console.log(greet("world"));
			\`\`\`

			## Contributing

			\`\`\`shell
			npm i
			npm run tsc
			\`\`\`

			> 💝 This package was templated with [\`create-example\`](https://github.com/bingo-examples/create-example) using the [Bingo engine](https://create.bingo).
			",
			    "package.json": "{
				"name": "example-repository",
				"version": "0.0.0",
				"description": "Example repository created from create-example. 💕",
				"repository": {
					"type": "git",
					"url": "git+https://github.com/bingo-examples/example-repository.git"
				},
				"type": "module",
				"main": "lib/index.js",
				"files": [
					"lib/",
					"package.json"
				],
				"scripts": {
					"tsc": "tsc"
				},
				"devDependencies": {
					"@types/node": "22.13.9",
					"typescript": "5.8.2"
				}
			}",
			    "src": {
			      "index.ts": "export function greet(name: string) {
			    return \`Hello, \${name}!\`;
			}
			",
			    },
			    "tsconfig.json": "{
				"compilerOptions": {
					"declaration": true,
					"esModuleInterop": true,
					"module": "NodeNext",
					"moduleResolution": "NodeNext",
					"outDir": "lib",
					"skipLibCheck": true,
					"strict": true,
					"target": "ES2022"
				},
				"include": [
					"src"
				]
			}",
			  },
			  "requests": [
			    {
			      "id": "repository-settings",
			      "send": [Function],
			    },
			  ],
			}
		`);
	});
});
