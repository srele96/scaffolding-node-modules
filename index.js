// WebStorm complains about this require because it is not in package.json
// as dependency.
// This is correct.
// However, because this project only tries to create node_modules directory
// manually, npm install will not be run.
// I know this package is present and it will be present for purpose of
// trying out how require works.
// More on require algorithm can be found here:
// https://nodejs.org/api/modules.html#all-together

// This works because foo contains index.js
const foo = require('foo');
// This works because bar contains package.json property "main"
const bar = require('bar');
console.log({ foo: foo(), bar: bar() });
