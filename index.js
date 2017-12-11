const assert = require('assert');

assert.deepEqual(
  process.env.npm_package_config_test,
  'test',
  'Any package config should be defined if not previously defined in the package.json.'
);
assert.deepEqual(
  process.env.npm_package_config_port,
  3001,
  'Existing package config should be overridden.')
;
assert.deepEqual(
  process.env.NODE_ENV,
  'test',
  'Any other should be overridden.'
);
