/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add an unconnected component",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "Select the type of component",
      default: "React.Component",
      choices: () => [
        "React.Component",
        "React.PureComponent",
        "Stateless Function"
      ]
    },
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      }
    },
    {
      type: "confirm",
      name: "wantLoadable",
      default: false,
      message: "Do you want to load the component asynchronously?"
    }
  ],
  actions: data => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case "Stateless Function": {
        componentTemplate = "./component/stateless.js.hbs";
        break;
      }
      default: {
        componentTemplate = "./component/class.js.hbs";
      }
    }

    const actions = [
      {
        type: "add",
        path: "../src/components/{{properCase name}}/index.js",
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: "add",
        path: "../src/components/{{properCase name}}/{{properCase name}}.css",
        templateFile: "./component/style.js.hbs",
        abortOnFail: true
      }
    ];

    // If want Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: "add",
        path: "../src/components/{{properCase name}}/Loadable.js",
        templateFile: "./component/loadable.js.hbs",
        abortOnFail: true
      });
    }

    return actions;
  }
};
