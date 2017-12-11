all: install test

install:
	npm install

test: override-from-package override-from-env

override-from-package:
	npm run override-from-package

override-from-env:
	npm_package_config_test=test npm_package_config_port=3001 NODE_ENV=test npm run override-from-env
