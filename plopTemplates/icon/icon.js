// eslint-disable-next-line no-undef
module.exports = function (plop) {
  3
  plop.setGenerator('icon', {
    description: 'Generate a new Icon',
    prompts: [
      {
        type: 'input',
        name: 'IconName',
        message: 'Enter the name of the icon:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/Images/icons/{{pascalCase IconName}}/preview.svg',
        templateFile: './preview.hbs',
      },
      {
        type: 'add',
        path: '../../src/Images/icons/{{pascalCase IconName}}/index.tsx',
        templateFile: './icon.hbs',
      },
    ],
  })
}
