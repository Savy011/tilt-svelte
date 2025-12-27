import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  svelte: true,
  stylistic: {
    semi: true,
    quotes: "double",
    indent: 2,
  },
});
