default:
	@echo "please select a command from makefile"

.PHONY: component

component:
	@npx plop --plopfile ./plopTemplates/component/component.js --componentName=$$COMPONENT_NAME

.PHONY: icon

icon:
	@npx plop --plopfile ./plopTemplates/icon/icon.js --IconName=$$ICON_NAME --SvgCode=$$SVG

page:
	@mkdir ./src/pages/$(name)
	@cat ./src/components/AComponentSnippet/InformationSecurity.tsx | sed 's?SnippetComponent?'$(name)'?' | sed 's?some-classname?'$(name)'?' | sed 's?SnippetComponentProp?'$(name)Prop'?' > ./src/pages/$(name)/InformationSecurity.tsx
	@cat ./src/components/AComponentSnippet/index.scss | sed 's?some-classname?'$(name)'?'  > ./src/pages/$(name)/index.scss
	@git add ./src/pages/$(name)/index.scss ./src/pages/$(name)/InformationSecurity.tsx

#icon:
#	@mkdir ./src/images/icons/Icon$(name)
#	@cat ./src/images/icons/aNewIconSnippet/InformationSecurity.tsx | sed 's?AIconName?'Icon$(name)'?' > ./src/images/icons/Icon$(name)/InformationSecurity.tsx
#	@#touch ./src/Images/icons/Icon$(name)/ManOnHome.svg
#	@#echo $(preview) > ./src/Images/icons/Icon$(name)/ManOnHome.svg
#	@#git add ./src/Images/icons/Icon$(name)/ManOnHome.svg
#	@git add ./src/images/icons/Icon$(name)/InformationSecurity.tsx

