BIN := ./node_modules/.bin
ESLINT := $(BIN)/eslint
DUO := $(BIN)/duo

DUO_OPTS := --development --use ./support/duo --quiet --stdout

#
# Default.
#

default: preview test-style node_modules

#
# Preview.
#

preview: node_modules
	@mkdir -p build
	@cp preview.html build/index.html
	@$(DUO) $(DUO_OPTS) preview.css > build/index.css
	@$(DUO) $(DUO_OPTS) preview.js > build/index.js

#
#	Dist.
#

dist: node_modules
	@$(DUO) $(DUO_OPTS) --standalone matter index.js > dist/matter.js
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
	@rm -rf build dist *.log

#
# Clean dependencies.
#

clean-deps:
	@rm -rf node_modules components

#
# Phonies.
#

.PHONY: preview deploy dist test-style
