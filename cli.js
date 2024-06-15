#!/usr/bin/env node

import { execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const appName = process.argv[2] || "paket-app";
const appPath = join(process.cwd(), appName);

if (existsSync(appPath)) {
	console.error(`Directory ${appName} already exists!`);
	process.exit(1);
}

mkdirSync(appPath);

execSync(`cp -r ${__dirname}/* ${appPath}`);
execSync(`cd ${appPath} && npm install`);

console.log(`Project ${appName} created successfully!`);
