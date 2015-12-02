
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

# BIN directory
BIN := $(THIS_DIR)/node_modules/.bin

# Files
JS_FILES := $(wildcard index.js lib/*.js test/*.js)

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
	@$(BABEL) \
		index.js \
			--optional runtime \
			--out-file dist/index.js
	@$(BABEL) \
		lib \
			--optional runtime \
			--out-dir dist/lib
	@$(BABEL) \
		test \
			--optional runtime \
			--out-dir dist/test

node_modules: package.json
	@NODE_ENV= $(NPM) install
	@touch node_modules

lint: node_modules/eslint node_modules/babel-eslint
	@$(BIN)/eslint $(JS_FILES)

eslint: lint

docs/%:
	$(eval SOURCE := $(addprefix lib/, $(notdir $@)))
	$(eval OUTPUT := $(addsuffix .md, $(basename $@)))
	@printf '\e[1;35m %-10s\e[m %s > %s\n' "dox " " $(SOURCE) " "$(OUTPUT)"
	$(DOX) --api < "$(SOURCE)" >> "$(OUTPUT).tmp"
	cat $(OUTPUT).tmp | sed -e "s/##/###/" > "$(OUTPUT)"

doc: $(addprefix docs/, $(notdir $(JS_FILES)))

commit-doc:
	clear
	rm -rf docs/*
	make doc
	rm -rf docs/*.tmp
	git add docs/ -v
	git commit -m "docs: re-built"

commit-dist: clean standalone babelify
	git add dist/ -v
	git commit -m "re-build dist/"

# testing client app
test-app:
	cp test/fixture.json dist/test/
	cp test/config.json dist/test/
	cp ./node_modules/mocha/mocha.* ./app
	cat \
		dist/test/test.wpcom.me.js \
		> dist/test/testing-source.js
	@$(WEBPACK) -p --config app/webpack.config.js

.PHONY: standalone install clean distclean doc commit-dist test-app
