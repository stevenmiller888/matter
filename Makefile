BIN := ./node_modules/.bin
BROWSERIFY := $(BIN)/browserify
POSTCSS := $(BIN)/postcss
ESLINT := $(BIN)/eslint

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
	@$(BROWSERIFY) index.js -t [babelify] > build/preview.js
	@$(POSTCSS) -u postcss-import -u postcss-url --postcss-url.url "copy" -u postcss-cssnext -u autoprefixer -o build/preview.css ./preview.css

#
# Preview.
#

preview: node_modules
	@node --harmony support/preview

#
#	Dist.
#

dist: node_modules
	@mkdir -p dist
	@$(BROWSERIFY) index.js -t [ babelify --presets [ es2015 react ] ] > dist/matter.js
	@$(POSTCSS) -u postcss-import -u postcss-url --postcss-url.url "copy" -u postcss-cssnext -u autoprefixer -o dist/matter.css ./index.css

#
# Deploy.
#

deploy: node_modules build
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
