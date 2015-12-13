BIN := ./node_modules/.bin
BROWSERIFY := $(BIN)/browserify
ESLINT := $(BIN)/eslint
DUO := $(BIN)/duo

#
# Default.
#

default: build test-style node_modules

#
# Build.
#

build: node_modules
	@mkdir -p build
	@cp preview.html build/index.html
	@$(DUO) $(DUO_OPTS) preview.css > build/preview.css
	@$(DUO) $(DUO_OPTS) preview.js > build/preview.js

#
# Preview.
#

preview: node_modules
	@node --harmony support/preview

#
#	Dist.
#

dist: node_modules
	@$(BROWSERIFY) index.js -t [ babelify --presets [ es2015 react ] ] > dist/matter.js
	@$(DUO) $(DUO_OPTS) index.css > dist/matter.css

#
# Deploy.
#

deploy: node_modules
	@node support/deploy.js

#
# Test style.
#

test-style:
	@$(ESLINT) ./lib

#
# Dependencies.
#

node_modules: package.json
	@npm install

#
# Clean.
#

clean:
	@rm -rf build *.log

#
# Clean dependencies.
#

clean-deps:
	@rm -rf node_modules components

#
# Phonies.
#

.PHONY: preview deploy dist test-style
