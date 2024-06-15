#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appName = process.argv[2] || 'my-app';
const appPath = path.join(process.cwd(), appName);

if (fs.existsSync(appPath)) {
  console.error(`Directory ${appName} already exists!`);
  process.exit(1);
}

fs.mkdirSync(appPath, { recursive: true });

// Function to copy files and directories recursively
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Path to the template directory
const templatePath = path.join(__dirname, 'template');

// Copy all files from template directory to the new project directory
copyRecursiveSync(templatePath, appPath);

// Install dependencies in the new project
execSync(`cd ${appPath} && npm install`, { stdio: 'inherit' });

console.log(`Project ${appName} created successfully!`);
