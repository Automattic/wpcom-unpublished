
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

# BIN directory
BIN := $(THIS_DIR)/node_modules/.bin

# Files
JS_FILES := $(wildcard lib/*.js)

# applications
NODE ?= node
NPM ?= $(NODE) $(shell which npm)
MOCHA ?= $(NODE) $(BIN)/mocha
BABEL ?= $(NODE) $(BIN)/babel
WEBPACK ?= $(NODE) $(BIN)/webpack

DOX ?= $(NODE) $(BIN)/dox

standalone: dist/wpcom.js

install: node_modules

clean:
	@rm -rf dist/

distclean:
	@rm -rf node_modules/

dist:
	@mkdir -p $@

dist/lib:
	@mkdir -p $@

dist/wpcom.js: *.js dist lib/*.js
	@$(WEBPACK) -p --config webpack.config.js

babelify: dist dist/lib
	@$(BABEL) index.js --out-file dist/index.js
	@$(BABEL) lib --out-dir dist/lib

node_modules: package.json
	@NODE_ENV= $(NPM) install
	@touch node_modules

docs/%:
	$(eval SOURCE := $(addprefix lib/, $(notdir $@)))
	$(eval OUTPUT := $(addsuffix .md, $(basename $@)))
	@printf '\e[1;35m %-10s\e[m %s > %s\n' "dox " " $(SOURCE) " "$(OUTPUT)"
	$(DOX) --api < "$(SOURCE)" >> "$(OUTPUT).tmp"
	cat $(OUTPUT).tmp | sed -e "s/##/###/" > "$(OUTPUT)"

doc: $(addprefix docs/, $(notdir $(JS_FILES)))

build-doc:
	clear
	rm -rf docs/*
	make doc
	rm -rf docs/*.tmp
	git add docs/ -v
	git commit -m "docs: re-built"

.PHONY: standalone install clean distclean doc
