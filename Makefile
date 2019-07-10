#
.PHONY: default

#
default: help

help:
	@echo 'Use "make <docs, run>" to build documentation.'

docs:
	@echo 'building docs files ...'
	vuepress build docs

run:
	vuepress dev docs
	@echo 'running vuepress to "http://localhost:8080/terraform-manage-guide/"'
  

