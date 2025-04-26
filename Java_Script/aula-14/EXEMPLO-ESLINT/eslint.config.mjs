import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  
  pluginJs.configs.recommended,

  {
    files: ["index.js", "arquivo.js"], 
    languageOptions: {
      sourceType: "commonjs", 
      globals: globals.node, 
    },
    rules: {
      "semi": ["error", "always"], 
      "no-unused-vars": "off"
    },
  },
];
