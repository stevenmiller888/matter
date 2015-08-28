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
	@mkdir build
	@cp preview.html build/index.html
	@$(DUO) $(DUO_OPTS) preview.css > build/index.css
	@$(DUO) $(DUO_OPTS) preview.js > build/index.js
	
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

.PHONY: preview deploy test-style
