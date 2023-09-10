
# Sample lib

A sample library project in vite.

## Features

### Types!

Yes, types. `test-pkg.d.ts` is exported containing all the types.

### Formats

Exports formats ESM, CJS, UMD.

Want to add a script tag? use `test-pkg.umd.cjs`  

A project with a bundler will use ESM: `test-pkg.js`  

A NodeJS project will use `test-pkg.cjs`

## Usage

### Build

Build generated in the dist folder
```
pnpm build
```

### Dev

Runs the vite dev server with index.html -> example.ts as the entry point
```
pnpm dev
```
