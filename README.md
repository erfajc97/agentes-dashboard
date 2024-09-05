# INSURTECH SALES WEB

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Quick summary

This repository is for a web application built with React, Vite, TypeScript, Tailwind CSS, Axios, Zustand, and React Router DOM.

### Version

1.0.0

### Configuration

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Dependencies

- React
- Vite
- TypeScript
- Tailwind CSS
- Axios
- Zustand
- React Router DOM

### Deployment instructions

1. Build the project:
   ```bash
   npm run build
   ```

### Code review

- All changes must be reviewed via pull requests.
- Ensure your code follows the project's coding standards.
