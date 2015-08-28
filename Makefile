BIN := ./node_modules/.bin
ESLINT := $(BIN)/eslint
DUO := $(BIN)/duo

DUO_OPTS := --development --use ./support/duo

#
# Default.
#

default: example node_modules test-style

#
# Example.
#

example: node_modules
	@$(DUO) $(DUO_OPTS) index.html index.js index.css

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

.PHONY: example test-style
